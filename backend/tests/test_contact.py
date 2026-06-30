"""Backend tests for the Frenny Sheth portfolio: health + contact endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://frenny-ux-magazine.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok_and_email_configured(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("ok") is True
        assert data.get("email_configured") is True, f"email_configured expected True, got {data}"


# ---------- Contact happy path ----------
class TestContactSend:
    def test_contact_success_delivered(self, api_client):
        payload = {
            "name": "QA Bot",
            "email": "qa@example.com",
            "subject": "E2E test",
            "message": "Verifying email delivery works.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200, f"Got {r.status_code}: {r.text}"
        data = r.json()
        assert data.get("status") == "success", f"status mismatch: {data}"
        assert data.get("delivered") is True, f"delivered should be True: {data}"
        assert data.get("saved") is True, f"saved should be True: {data}"
        msg = (data.get("message") or "").lower()
        assert "pending" not in msg
        assert "not configured" not in msg
        assert "safely stored" not in msg
        assert "sent" in msg or "thank you" in msg, f"Expected success copy, got: {data.get('message')}"


# ---------- Validation ----------
class TestContactValidation:
    def test_empty_body_returns_422(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={}, timeout=15)
        assert r.status_code == 422, f"Expected 422, got {r.status_code}: {r.text}"

    def test_malformed_email_returns_422(self, api_client):
        payload = {
            "name": "QA Bot",
            "email": "notanemail",
            "subject": "x",
            "message": "hi",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 422, f"Expected 422, got {r.status_code}: {r.text}"
