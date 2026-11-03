"use client";

import { useCallback, useEffect, useState } from "react";
import { GALLERY_LIMIT, PROJECT, gallery, galleryCats } from "@/lib/data";
import { CtaButton } from "./Lead";

type Cat = (typeof galleryCats)[number];

export default function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [expanded, setExpanded] = useState(false);
  const [lb, setLb] = useState<number | null>(null);

  const match = gallery.filter((g) => cat === "All" || g.cat === cat);
  const visible = expanded ? match : match.slice(0, GALLERY_LIMIT);
  const counts = (c: Cat) => (c === "All" ? gallery.length : gallery.filter((g) => g.cat === c).length);

  const step = useCallback((d: number) => setLb((i) => (i === null ? i : (i + d + visible.length) % visible.length)), [visible.length]);
  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lb, step]);

  const current = lb !== null ? visible[lb] : null;

  return (
    <section id="gallery" className="scroll-mt-28 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">{PROJECT} gallery</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-6">{gallery.length} renders of the villas, townhouses, interiors and amenities. Tap to view full screen. Images are artist’s impressions.</p>
        <div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1" role="tablist" aria-label="Gallery categories">
            {galleryCats.map((c) => (
              <button key={c} role="tab" aria-selected={c === cat} onClick={() => { setCat(c); setExpanded(false); }}
                className={`rc-tab shrink-0 rounded-full px-4 py-2 text-xs font-semibold border transition ${c === cat ? "rc-tab-on" : "bg-card text-foreground border-border"}`}>
                {c} <span className="opacity-60">({counts(c)})</span>
              </button>
            ))}
          </div>
          <div id="grid" className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {visible.map((g, i) => (
              <button key={g.key} type="button" onClick={() => setLb(i)} aria-label={`Open photo: ${g.alt}`}
                className={`rc-tile group relative overflow-hidden rounded-xl bg-muted shadow-sm ${i === 0 ? "col-span-2 md:col-span-3 lg:col-span-2 lg:row-span-2 aspect-[16/9] lg:aspect-auto" : "aspect-[4/3]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/img/${g.key}.webp`} alt={g.alt} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute left-2 bottom-2 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{g.cat}</span>
              </button>
            ))}
          </div>
          {match.length > GALLERY_LIMIT && (
            <div className="rc-more">
              <button type="button" onClick={() => { const was = expanded; setExpanded(!was); if (was) document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline-light px-8 py-3 text-sm">
                {expanded ? "Show less" : `Show more (${match.length - GALLERY_LIMIT} more)`}
              </button>
            </div>
          )}
          <div className="mt-6 text-center">
            <CtaButton className="btn-primary px-7 py-4 text-sm">Get the Full Brochure →</CtaButton>
          </div>
        </div>
      </div>

      <div className={`rc-lightbox${current ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(e) => { if (e.target === e.currentTarget) setLb(null); }}>
        <button className="rc-x" aria-label="Close" onClick={() => setLb(null)}>×</button>
        <button className="rc-prev" aria-label="Previous" onClick={() => step(-1)}>‹</button>
        <figure>
          {current && (/* eslint-disable-next-line @next/next/no-img-element */ <img src={`/img/${current.key}.webp`} alt={current.alt} />)}
          <figcaption>{current?.alt}</figcaption>
        </figure>
        <button className="rc-next" aria-label="Next" onClick={() => step(1)}>›</button>
      </div>
    </section>
  );
}
