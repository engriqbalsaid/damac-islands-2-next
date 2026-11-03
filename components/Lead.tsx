"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { BROCHURE, PROJECT, timelineOptions, unitOptions, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/data";

type OpenOpts = { title?: string; home?: string };
const LeadContext = createContext<(o?: OpenOpts) => void>(() => {});
export const useLeadModal = () => useContext(LeadContext);

const DEFAULT_TITLE = `Get ${PROJECT} prices & floor plans.`;

function say(setToast: (t: string) => void, text: string) {
  setToast(text);
  window.setTimeout(() => setToast(""), 7000);
}

function downloadBrochure() {
  const a = document.createElement("a");
  a.href = BROCHURE;
  a.download = "DAMAC-Islands-2-Brochure.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function LeadForm({ idPrefix, home, onDone, notify }: { idPrefix: string; home?: string; onDone?: () => void; notify: (t: string) => void }) {
  const [sending, setSending] = useState(false);
  const [unit, setUnit] = useState(home ?? unitOptions[0]);
  useEffect(() => { if (home) setUnit(home); }, [home]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get("company")) return; // honeypot
    const payload = {
      name: String(d.get("name") ?? ""),
      phone: "+971 " + String(d.get("phone") ?? ""),
      email: String(d.get("email") ?? ""),
      preferred_home: String(d.get("home") ?? ""),
      timeline: String(d.get("timeline") ?? ""),
      project: PROJECT,
    };
    setSending(true);
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "failed");
      if (WHATSAPP_NUMBER) {
        const msg = `${WHATSAPP_MESSAGE}\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nHome: ${payload.preferred_home}\nTimeline: ${payload.timeline}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
      }
      onDone?.();
      downloadBrochure();
      notify(`Thank you ${payload.name}! Your brochure is downloading and a Red Carpet specialist will contact you shortly.`);
      form.reset();
      setUnit(unitOptions[0]);
    } catch {
      notify("Sorry, we couldn't send your details. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  const input = "rounded-sm border border-input bg-background px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
  const lab = "text-[10px] tracking-[0.25em] uppercase text-muted-foreground";
  return (
    <form onSubmit={onSubmit} className="mt-5 grid gap-3.5 [&>*]:min-w-0">
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input id={`${idPrefix}-company`} type="text" tabIndex={-1} autoComplete="off" name="company" defaultValue="" />
      </div>
      <label className="grid gap-1.5"><span className={lab}>Full name</span>
        <input type="text" required placeholder="Your name" maxLength={120} className={input} name="name" /></label>
      <label className="grid gap-1.5"><span className={lab}>Phone / WhatsApp</span>
        <div className="flex items-stretch rounded-sm border border-input bg-background focus-within:ring-2 focus-within:ring-ring overflow-hidden">
          <span className="flex items-center gap-1.5 px-2.5 sm:px-3 border-r border-input bg-secondary/60 text-sm shrink-0"><span className="text-lg leading-none">🇦🇪</span><span className="text-sm font-medium">+971</span></span>
          <input type="tel" inputMode="tel" autoComplete="tel-national" required placeholder="50 123 4567" className="flex-1 min-w-0 bg-transparent px-3 py-3 text-sm focus:outline-none" name="phone" />
        </div></label>
      <label className="grid gap-1.5"><span className={lab}>Email</span>
        <input type="email" required placeholder="you@email.com" maxLength={120} className={input} name="email" /></label>
      <div className="grid sm:grid-cols-2 gap-3.5">
        <label className="grid gap-1.5"><span className={lab}>Preferred home</span>
          <select name="home" value={unit} onChange={(e) => setUnit(e.target.value)} className={input}>{unitOptions.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className="grid gap-1.5"><span className={lab}>Timeline</span>
          <select name="timeline" defaultValue={timelineOptions[0]} className={input}>{timelineOptions.map((o) => <option key={o}>{o}</option>)}</select></label>
      </div>
      <button type="submit" disabled={sending} className="btn-primary mt-1 w-full px-5 py-3.5 text-sm">
        {sending ? "Sending…" : "Register My Interest →"}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">🔒 Your details are safe. UAE PDPL compliant.</p>
    </form>
  );
}

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [opts, setOpts] = useState<OpenOpts>({});
  const [toast, setToast] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const openLead = useCallback((o: OpenOpts = {}) => {
    setOpts(o);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      const t = window.setTimeout(() => cardRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus(), 350);
      return () => window.clearTimeout(t);
    }
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const notify = useCallback((t: string) => say(setToast, t), []);

  return (
    <LeadContext.Provider value={openLead}>
      {children}
      <div className={`rc-modal${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <div ref={cardRef} className="rc-modal-card rounded-xl bg-card text-card-foreground shadow-2xl border border-border p-5 md:p-7">
          <button type="button" className="rc-modal-x" aria-label="Close form" onClick={close}>×</button>
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">Priority access</p>
          <h2 id="modal-title" className="font-display text-2xl md:text-3xl mt-1 text-primary">{opts.title ?? DEFAULT_TITLE}</h2>
          <p className="text-sm text-muted-foreground mt-1.5">A specialist calls you back within the hour with live availability.</p>
          <div className="rc-banner"><span>★ Golden Visa guidance</span><span>✦ DLD fee waiver</span></div>
          {open && <LeadForm idPrefix="md" home={opts.home} onDone={close} notify={notify} />}
        </div>
      </div>
      <div className={`rc-toast${toast ? " show" : ""}`} role="status">{toast}</div>
      <ToastBridge notify={notify} />
    </LeadContext.Provider>
  );
}

// Lets the hero form (rendered outside the provider's modal) show toasts through the same channel.
function ToastBridge({ notify }: { notify: (t: string) => void }) {
  useEffect(() => { (window as unknown as { __rcNotify?: (t: string) => void }).__rcNotify = notify; }, [notify]);
  return null;
}

export function HeroLeadForm() {
  return <LeadForm idPrefix="lk" notify={(t) => (window as unknown as { __rcNotify?: (t: string) => void }).__rcNotify?.(t)} />;
}

export function CtaButton({ className, children, title, home }: { className?: string; children: ReactNode; title?: string; home?: string }) {
  const openLead = useLeadModal();
  return <button type="button" className={className} onClick={() => openLead({ title, home })}>{children}</button>;
}
