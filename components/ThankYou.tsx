"use client";

import { useEffect, useState } from "react";
import { BRAND, BROCHURE, CONTACT_EMAIL, PLAN, PROJECT, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/data";

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}

export default function ThankYou() {
  const [name, setName] = useState("");

  useEffect(() => {
    // Fire the conversion event once per real form submission (the flag is set by the lead form).
    try {
      const raw = sessionStorage.getItem("rc_lead");
      if (raw) {
        const lead = JSON.parse(raw) as { firstName?: string; home?: string; at?: number };
        setName(lead.firstName ?? "");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "generate_lead",
          lead_source: "damac_islands_2_form",
          project: PROJECT,
          preferred_home: lead.home ?? "",
        });
        // Google Ads conversion: "Damac form submit conversion page"
        const gtag = window.gtag ?? function (...args: unknown[]) { (window.dataLayer = window.dataLayer || []).push(args); };
        gtag("event", "conversion", {
          send_to: "AW-18541661867/3LTECNKFj7MdEKudrYlF",
          value: 1.0,
          currency: "AED",
        });
        sessionStorage.removeItem("rc_lead");
      }
    } catch {
      /* sessionStorage unavailable: the page view alone still tracks the visit */
    }
  }, []);

  const wa = whatsappHref();
  const steps: [string, string, string][] = [
    ["1", "Your brochure is downloading", "Didn’t start? Use the button below to download it again."],
    ["2", "A specialist will call you", "We’ll contact you within the hour with live availability, prices and floor plans."],
    ["3", "Secure your home", `Choose your ${PROJECT} home with up to a ${PLAN.split} plan, ${PLAN.down} down and ${PLAN.interest} interest.`],
  ];

  return (
    <main className="rc-ty min-h-screen text-primary-foreground">
      <header className="border-b border-gold/30 bg-ink">
        <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt={BRAND} className="h-12 w-auto" />
          </a>
          <a href="/" className="text-xs text-gold-soft underline">Back to {PROJECT}</a>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-20 text-center">
        <div className="rc-check" aria-hidden="true">
          <svg viewBox="0 0 52 52" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="26" cy="26" r="23" className="ring" />
            <path d="M15 27l8 8 15-17" className="tick" />
          </svg>
        </div>
        <p className="mt-6 text-[11px] tracking-[0.3em] uppercase text-gold-soft">Registration received</p>
        <h1 className="font-display text-4xl md:text-6xl mt-3">
          Thank you{name ? <>, <span className="rc-goldtext">{name}</span></> : null}!
        </h1>
        <p className="mt-4 text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto">
          You’re on the list for {PROJECT}. Your brochure is on its way and a {BRAND} specialist will be in touch shortly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={BROCHURE} download="DAMAC-Islands-2-Brochure.pdf" className="btn-primary px-7 py-4 text-sm">Download brochure again</a>
          <a href={wa} {...(wa.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="btn-ghost px-7 py-4 text-sm">Chat on WhatsApp {WHATSAPP_DISPLAY}</a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10">
        <ol className="grid md:grid-cols-3 gap-4">
          {steps.map(([n, t, d]) => (
            <li key={n} className="rc-darkcard rounded-2xl p-5 text-left">
              <span className="inline-grid place-items-center h-9 w-9 rounded-full bg-gold text-ink font-black">{n}</span>
              <b className="font-display text-lg block mt-3">{t}</b>
              <p className="text-sm text-primary-foreground/70 mt-1">{d}</p>
            </li>
          ))}
        </ol>

        <div className="rc-banner mt-8 justify-center">
          <span>★ FREE Golden Visa</span><span>✦ DLD fee waiver</span><span>✔ {PLAN.split} plan · {PLAN.interest} interest</span>
        </div>
      </section>

      <footer className="rc-footer py-8 text-center text-[11px] px-4">
        <p className="text-sm mb-2"><a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        <p>{BRAND}, Dubai. Prices, availability and payment plans are set by DAMAC Properties and change with each release.</p>
      </footer>
    </main>
  );
}
