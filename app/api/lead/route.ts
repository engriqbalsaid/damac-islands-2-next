import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LEAD_EMAIL = process.env.LEAD_EMAIL || "iqbalsaid99@gmail.com";
const LEAD_FROM = process.env.LEAD_FROM || "Red Carpet Leads <onboarding@resend.dev>";

type Lead = { name: string; phone: string; email: string; preferred_home: string; timeline: string; project: string };

const clean = (v: unknown, max = 200) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const lead: Lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 120),
    preferred_home: clean(body.preferred_home),
    timeline: clean(body.timeline),
    project: clean(body.project) || "DAMAC Islands 2",
  };
  if (!lead.name || !lead.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Please fill in name, phone and a valid email." }, { status: 400 });
  }

  const subject = `New ${lead.project} lead: ${lead.name}`;
  const rows: [string, string][] = [
    ["Name", lead.name], ["Phone", lead.phone], ["Email", lead.email],
    ["Preferred home", lead.preferred_home], ["Timeline", lead.timeline], ["Project", lead.project],
  ];

  try {
    if (process.env.RESEND_API_KEY) {
      const html = `<table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">${rows
        .map(([k, v]) => `<tr><td style="border:1px solid #ddd"><b>${k}</b></td><td style="border:1px solid #ddd">${esc(v)}</td></tr>`)
        .join("")}</table>`;
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: LEAD_FROM, to: [LEAD_EMAIL], reply_to: lead.email, subject, html }),
      });
      if (!r.ok) throw new Error(`Resend ${r.status}`);
    } else {
      // Fallback: FormSubmit (needs a one-time activation click from the email it sends the first time).
      const origin = new URL(req.url).origin;
      const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(LEAD_EMAIL)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Origin: origin, Referer: origin + "/" },
        body: JSON.stringify({ ...lead, _subject: subject, _template: "table", _captcha: "false", _replyto: lead.email }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) === "false") throw new Error(`FormSubmit: ${j.message ?? r.status}`);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("lead delivery failed:", err);
    return NextResponse.json({ ok: false, error: "Could not deliver your details. Please try again." }, { status: 502 });
  }
}
