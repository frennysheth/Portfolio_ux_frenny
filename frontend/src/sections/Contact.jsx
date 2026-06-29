import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Linkedin, Loader2, Send, FileText, ExternalLink } from "lucide-react";
import { CONTACT } from "@/constants/testIds";
import { Annotation } from "@/components/Scrapbook";
import { DoodleArrow, DoodleHeart, CoffeeRing, Stamp } from "@/components/Doodles";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", text: "Please fill in your name, email and message." });
      return;
    }
    setStatus({ state: "loading", text: "" });
    try {
      const res = await axios.post(`${API}/contact`, form);
      const ok = res.data?.delivered || res.data?.status === "success" || res.data?.status === "pending";
      setStatus({
        state: "success",
        text: res.data?.message || "Thank you! Your letter has been sent.",
      });
      if (ok) setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        text:
          err.response?.data?.detail ||
          "Something went wrong sending your letter. Please try the email link below.",
      });
    }
  };

  return (
    <section
      id="contact"
      data-testid={CONTACT.root}
      className="relative bg-paper-grain py-24 md:py-32 overflow-hidden"
    >
      <CoffeeRing className="right-12 top-32 hidden md:block" />
      <DoodleHeart className="absolute left-10 bottom-40 hidden md:block -rotate-12" size={28} />
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
        {/* Letter */}
        <div className="col-span-12 lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
            Chapter Eight · Say hello
          </span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
            Write me a <span className="italic text-wine">letter</span>.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink/70 max-w-xl">
            Internships, freelance, mentorship, or just to say hi — the form below sends a
            real email. I read every one.
          </p>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lined-paper mt-10 p-8 md:p-12 polaroid-shadow"
          >
            <div className="font-hand text-2xl text-wine">Dear Frenny,</div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Your name</span>
                <input
                  data-testid={CONTACT.name}
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Aanya R."
                  className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-wine outline-none py-2 font-serif text-lg text-ink placeholder:text-ink/30"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Your email</span>
                <input
                  data-testid={CONTACT.email}
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@studio.com"
                  className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-wine outline-none py-2 font-serif text-lg text-ink placeholder:text-ink/30"
                />
              </label>
            </div>

            <label className="block mt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Subject</span>
              <input
                data-testid={CONTACT.subject}
                type="text"
                value={form.subject}
                onChange={update("subject")}
                placeholder="Coffee, collab, or kind words"
                className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-wine outline-none py-2 font-serif text-lg text-ink placeholder:text-ink/30"
              />
            </label>

            <label className="block mt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Your letter</span>
              <textarea
                data-testid={CONTACT.message}
                value={form.message}
                onChange={update("message")}
                rows={6}
                placeholder="Write me something. I love a good story…"
                className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-wine outline-none py-2 font-serif text-lg text-ink leading-[40px] placeholder:text-ink/30 resize-none"
                style={{ background: "transparent" }}
              />
            </label>

            <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
              <div className="flex items-end gap-4">
                <div className="font-hand text-2xl text-ink/70">
                  yours, <span className="text-wine">— a future friend</span>
                </div>
                <Stamp rotate="rotate-[8deg]" className="hidden sm:inline-flex">Sealed · with love</Stamp>
              </div>
              <button
                data-testid={CONTACT.submit}
                type="submit"
                disabled={status.state === "loading"}
                className="inline-flex items-center gap-2 bg-wine hover:bg-wine_deep text-paper text-sm uppercase tracking-[0.25em] px-6 py-3 rounded-full disabled:opacity-60 transition-colors"
              >
                {status.state === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send the letter
                  </>
                )}
              </button>
            </div>

            {status.state === "success" ? (
              <div
                data-testid={CONTACT.success}
                className="mt-6 font-hand text-xl text-wine"
              >
                ✓ {status.text}
              </div>
            ) : null}
            {status.state === "error" ? (
              <div
                data-testid={CONTACT.error}
                className="mt-6 font-hand text-xl text-destructive"
              >
                ✗ {status.text}
              </div>
            ) : null}
          </motion.form>
        </div>

        {/* Sidebar links */}
        <div className="col-span-12 lg:col-span-5">
          <div className="sticky top-28 space-y-5">
            <div className="text-xs uppercase tracking-[0.4em] text-ink/50">Or, the old-school way</div>

            <a
              href="mailto:ux.frenny@gmail.com"
              data-testid={CONTACT.email_link}
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-paper polaroid-shadow hover:rotate-[-1deg] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-wine" />
                <div>
                  <div className="font-serif text-xl text-ink">ux.frenny@gmail.com</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/50">Email</div>
                </div>
              </div>
              <ExternalLink size={16} className="text-ink/40 group-hover:text-wine" />
            </a>

            <a
              href="https://www.linkedin.com/in/frenny-sheth-6a972a1a9"
              target="_blank"
              rel="noopener noreferrer"
              data-testid={CONTACT.linkedin}
              className="group flex items-center justify-between p-5 bg-paper polaroid-shadow hover:rotate-[1deg] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-wine" />
                <div>
                  <div className="font-serif text-xl text-ink">/frenny-sheth</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/50">LinkedIn</div>
                </div>
              </div>
              <ExternalLink size={16} className="text-ink/40 group-hover:text-wine" />
            </a>

            <a
              href="https://www.behance.net/frennysheth"
              target="_blank"
              rel="noopener noreferrer"
              data-testid={CONTACT.behance}
              className="group flex items-center justify-between p-5 bg-paper polaroid-shadow hover:rotate-[-1deg] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-wine text-2xl leading-none">Bē</span>
                <div>
                  <div className="font-serif text-xl text-ink">/frennysheth</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/50">Behance</div>
                </div>
              </div>
              <ExternalLink size={16} className="text-ink/40 group-hover:text-wine" />
            </a>

            <a
              href="https://customer-assets.emergentagent.com/job_281b2b92-0a11-451c-867d-2bc5903625e9/artifacts/z61e013t_Frenny_Sheth_CV_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              data-testid={CONTACT.resume}
              className="group flex items-center justify-between p-5 bg-wine text-paper polaroid-shadow hover:rotate-[1deg] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} />
                <div>
                  <div className="font-serif text-xl">Download Resume</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-paper/70">PDF · updated 2026</div>
                </div>
              </div>
              <ExternalLink size={16} className="text-paper/70 group-hover:text-paper" />
            </a>

            <div className="pt-6">
              <Annotation>p.s. coffee over tea, mostly</Annotation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
