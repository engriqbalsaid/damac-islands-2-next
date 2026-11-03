"use client";

import { useState } from "react";
import { PROJECT, SITE_POINT, places } from "@/lib/data";
import { CtaButton } from "./Lead";

const MAP_W = 993;
const MAP_H = 702;

export default function Location() {
  const [sel, setSel] = useState(0);
  const p = places[sel];
  const x1 = (SITE_POINT.x / 100) * MAP_W, y1 = (SITE_POINT.y / 100) * MAP_H;
  const x2 = (p.x / 100) * MAP_W, y2 = (p.y / 100) * MAP_H;

  return (
    <section id="location" className="scroll-mt-28 py-12 bg-secondary/50 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">Location: close to everything, far from ordinary</h2>
        <p className="answer mt-3 mb-6 text-sm md:text-base text-muted-foreground max-w-3xl">
          {PROJECT} is a short drive from Sports City, Motor City and DAMAC Hills, the Expo 2020 venue, Dubai Investment Park and Al Maktoum International Airport, with Burj Al Arab, the Burj area and Dubai International Airport within 40 minutes. Tap a place to see the drive.
        </p>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 items-start">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <div className="rc-mapbox" id="mapbox">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/map.webp" alt={`Map showing ${PROJECT} and nearby landmarks`} loading="lazy" className="rc-map object-cover" />
              <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="none" aria-hidden="true">
                <line className="rc-line" x1={x1} y1={y1} x2={x2} y2={y2} />
              </svg>
              <span className="rc-home" style={{ left: `${SITE_POINT.x}%`, top: `${SITE_POINT.y}%` }}><span className="dot" /><span className="lbl">{PROJECT}</span></span>
              {places.map((pl, i) => (
                <span key={pl.name} className={`rc-pin${i === sel ? " on" : ""}`} style={{ left: `${pl.x}%`, top: `${pl.y}%` }}>
                  <span className="bub">{pl.name} · {pl.min} min</span><span className="dot" />
                </span>
              ))}
            </div>
            <div className="absolute left-2 top-2 sm:left-3 sm:top-3 max-w-[80%] rounded-lg bg-ink/85 backdrop-blur-md border border-primary-foreground/15 px-3 py-2 pointer-events-none z-10">
              <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold-soft">From {PROJECT}</div>
              <div className="font-display text-sm sm:text-lg text-primary-foreground leading-snug">{p.name} · {p.min} min</div>
            </div>
          </div>
          <div>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {places.map((pl, i) => (
                <li key={pl.name}>
                  <button type="button" onClick={() => setSel(i)}
                    className={`w-full h-full flex items-center justify-between gap-2 rounded-xl border px-3 py-3 text-left transition ${i === sel ? "border-accent bg-gold/25 shadow" : "border-border bg-card"}`}>
                    <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">{pl.name}</span>
                    <b className="font-display text-primary whitespace-nowrap text-sm sm:text-base">{pl.min} min</b>
                  </button>
                </li>
              ))}
            </ul>
            <CtaButton title={`Download the ${PROJECT} brochure`} className="btn-primary mt-4 px-6 py-4 text-sm">Download Location Map &amp; Brochure →</CtaButton>
            <p className="mt-2 text-[11px] text-muted-foreground">Approximate drive times outside peak hours, per the developer’s brochure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
