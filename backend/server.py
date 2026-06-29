from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional
from pathlib import Path
from datetime import datetime, timezone
import os
import logging
import asyncio
import uuid
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Mongo
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Resend
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "ux.frenny@gmail.com").strip()
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Frenny Sheth · Portfolio API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default="A letter from your portfolio", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "frenny.studio · api is alive"}


@api_router.get("/health")
async def health():
    return {
        "ok": True,
        "email_configured": bool(RESEND_API_KEY),
        "time": datetime.now(timezone.utc).isoformat(),
    }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    obj = StatusCheck(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    docs = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for d in docs:
        if isinstance(d.get("timestamp"), str):
            d["timestamp"] = datetime.fromisoformat(d["timestamp"])
    return docs


def _build_letter_html(name: str, email: str, subject: str, message: str) -> str:
    safe_message = message.replace("\n", "<br/>")
    return f"""
    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#F2E0D2;padding:32px 0;font-family:Georgia,serif;color:#2A2626\">
      <tr><td align=\"center\">
        <table width=\"560\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#FAF7F2;border-radius:6px;padding:32px;box-shadow:0 8px 24px rgba(42,38,38,0.12)\">
          <tr><td>
            <p style=\"font-family:'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#9E182B;margin:0 0 8px\">A NEW LETTER · FROM YOUR PORTFOLIO</p>
            <h1 style=\"font-family:Georgia,serif;font-size:28px;margin:0 0 16px;color:#2A2626\">{subject}</h1>
            <p style=\"margin:0 0 4px\"><strong>From:</strong> {name}</p>
            <p style=\"margin:0 0 20px\"><strong>Email:</strong> <a href=\"mailto:{email}\" style=\"color:#9E182B\">{email}</a></p>
            <div style=\"border-top:1px dashed #9E182B;margin:16px 0\"></div>
            <p style=\"font-size:16px;line-height:1.7;white-space:pre-wrap\">{safe_message}</p>
            <div style=\"border-top:1px dashed #9E182B;margin:20px 0 12px\"></div>
            <p style=\"font-size:12px;color:#7A7070;margin:0\">Sent with love from frenny.studio</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact")
async def send_contact_message(payload: ContactMessage):
    # Always persist
    record = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "subject": payload.subject or "A letter from your portfolio",
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "delivered": False,
    }

    if not RESEND_API_KEY:
        record["note"] = "Resend not configured; saved locally."
        await db.contact_messages.insert_one(record)
        logger.warning("Contact form received but RESEND_API_KEY is missing.")
        return {
            "status": "pending",
            "saved": True,
            "delivered": False,
            "message": "Your letter was received. Email delivery is not configured yet — it has been safely stored.",
        }

    params = {
        "from": SENDER_EMAIL,
        "to": [OWNER_EMAIL],
        "reply_to": payload.email,
        "subject": f"[Portfolio] {payload.subject or 'A new letter from ' + payload.name}",
        "html": _build_letter_html(
            payload.name, payload.email, payload.subject or "A letter from your portfolio", payload.message
        ),
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        record["delivered"] = True
        record["provider_id"] = email.get("id") if isinstance(email, dict) else None
        await db.contact_messages.insert_one(record)
        return {
            "status": "success",
            "saved": True,
            "delivered": True,
            "message": "Your letter has been sent. Thank you for reaching out!",
        }
    except Exception as e:
        logger.exception("Failed to send contact email")
        record["error"] = str(e)
        await db.contact_messages.insert_one(record)
        raise HTTPException(status_code=502, detail=f"Could not send your letter: {str(e)}")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
