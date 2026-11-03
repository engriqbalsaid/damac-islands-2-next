import {
  BRAND, BROCHURE, PROJECT, amenities, faqs, homes, islands, navItems, pillars, stats, summaryItems, whatsappHref,
} from "@/lib/data";
import { CtaButton, HeroLeadForm } from "./Lead";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488z" />
    </svg>
  );
}

function WaLink({ className, label, size, children }: { className: string; label?: string; size?: number; children?: React.ReactNode }) {
  const href = whatsappHref();
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} aria-label={label} className={className}>
      <WhatsAppIcon size={size} />{children}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-primary-foreground border-b border-gold/30">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-3">
        <a className="flex items-center gap-3 min-w-0" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt={BRAND} className="h-12 w-auto" />
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-gold-soft border-l border-gold/40 pl-3">{PROJECT}</span>
        </a>
        <div className="flex items-center gap-2">
          <WaLink className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-gold/50 px-3 py-2 text-xs font-medium text-gold-soft"> WhatsApp</WaLink>
          <CtaButton className="rc-shine rounded-md bg-gold text-ink px-3.5 py-2 text-xs font-bold shadow">Register Interest</CtaButton>
        </div>
      </div>
      <nav className="border-t border-gold/20 bg-card" aria-label={`${PROJECT} sections`}>
        <div className="mx-auto max-w-7xl px-4 flex gap-5 overflow-x-auto no-scrollbar text-xs font-semibold text-muted-foreground">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 py-2.5 hover:text-primary">{label}</a>)}
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-primary-foreground">
      <div className="rc-par" id="par">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/hero.webp" alt={`Aerial view of the ${PROJECT} lake, islands and villas`} fetchPriority="high" />
      </div>
      <canvas id="particles" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b md:bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="rc-hero">
          <ol className="flex flex-wrap gap-1.5 text-[11px] text-primary-foreground/70" aria-label="Breadcrumb">
            <li><a className="underline" href="#top">Home</a> ›</li><li>Dubai ›</li><li>DAMAC Properties ›</li><li className="text-gold-soft">{PROJECT}</li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rc-shine relative overflow-hidden rounded-full bg-gold text-ink px-3 py-1 text-[11px] font-black tracking-[0.2em]">NEW LAUNCH</span>
            <span className="rounded-full border border-gold/60 px-3 py-1 text-[11px] font-bold tracking-[0.15em] text-gold-soft">REGISTRATION OPEN</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] mt-4">
            {PROJECT} by DAMAC <span className="block text-gold-soft text-2xl sm:text-3xl md:text-4xl mt-2">Paradise has a sequel</span>
          </h1>
          <p className="answer mt-4 text-sm sm:text-base text-primary-foreground/85 max-w-xl">
            An island-inspired master community of <b>luxury villas, twin villas and townhouses</b> with <b>45+ world-class amenities</b> across eight island clusters. The follow-up to the sold-out DAMAC Islands, presented by {BRAND}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton className="rc-shine rc-glow rounded-md bg-gold text-ink px-6 py-4 text-sm font-black shadow-xl">Register My Interest →</CtaButton>
            <a href={BROCHURE} download className="rounded-md border border-primary-foreground/50 bg-primary-foreground/10 px-6 py-4 text-sm font-semibold text-center">Download Brochure</a>
          </div>
        </div>
        <div id="lead" className="rounded-xl bg-card text-card-foreground shadow-2xl border border-border p-5 md:p-7 scroll-mt-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">Priority access</p>
          <h2 className="font-display text-2xl md:text-3xl mt-1 text-primary">Get {PROJECT} prices &amp; floor plans.</h2>
          <p className="text-sm text-muted-foreground mt-1.5">A specialist calls you back within the hour with live availability.</p>
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  const loop = [...islands, ...islands];
  return (
    <>
      <div className="rc-stats text-primary-foreground">
        <div className="rc-stats-in">
          {stats.map(([n, sfx, label]) => (
            <div key={label} className="rc-stat rc-r text-center">
              <b><span data-count={n}>{n}</span>{sfx}</b>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-primary-foreground/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rc-marq" aria-hidden="true"><div>{loop.map((i, k) => <span key={k}>{i}</span>)}</div></div>
    </>
  );
}

export function Overview() {
  return (
    <section id="overview" className="scroll-mt-28 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">{PROJECT} summary</h2>
        <p className="text-sm text-muted-foreground mt-1">By <b>DAMAC Properties</b> | Dubai | Presented by {BRAND}</p>
        <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {summaryItems.map(([k, v]) => (
            <div key={k} className="rc-r rc-hover rounded-xl border border-border bg-card p-4">
              <dt className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{k}</dt>
              <dd className="font-display text-xl text-primary mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <h2 className="rc-bar font-display text-2xl md:text-3xl text-primary">Overview</h2>
            <p className="answer"><b className="text-foreground">{PROJECT}</b> by <b className="text-foreground">DAMAC Properties</b> is an elevated island-inspired lifestyle in Dubai. After the sell-out success of DAMAC Islands, the vision advances as a seamless continuation of the master community, with new spaces and experiences shaped by tropical living.</p>
            <p>The spirit of eight island escapes (Bahamas, Barbados, Bermuda, Maui, Mauritius, Tahiti, Antigua and Cuba) is woven into one paradise. Homes breathe with the trees, paths curve with the wind and every corner is shaped by nature.</p>
            <p>Choose from luxury villas with private pools and panoramic views, twin villas with their own entrance and garden, or townhouses with open-plan layouts and rooftop terraces. Cross-ventilated layouts, natural textures and eco-conscious materials keep every home light, open and alive.</p>
          </div>
          <div className="rc-r rc-hover rounded-xl overflow-hidden border border-border bg-card">
            <div className="aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/masterplan.webp" alt={`Aerial view of the ${PROJECT} master community`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <b className="font-display text-xl text-primary">Pricing &amp; payment plan on request</b>
              <p className="text-sm text-muted-foreground mt-1">Speak to a {BRAND} specialist for live availability, prices and the latest payment plan.</p>
              <CtaButton className="mt-4 rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold">Request Prices →</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Homes() {
  return (
    <section id="homes" className="scroll-mt-28 py-12 md:py-16 bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="rc-bar font-display text-3xl md:text-4xl">{PROJECT} homes &amp; floor plans</h2>
          <CtaButton className="rounded-md bg-gold text-ink px-4 py-2.5 text-xs font-bold">Request all prices</CtaButton>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {homes.map((h) => (
            <div key={h.code} className="rc-r rc-hover rounded-xl bg-primary-foreground/5 border border-primary-foreground/15 p-5">
              <b className="font-display text-xl">{h.name}</b>
              <p className="text-xs text-gold-soft mt-1 tracking-wide">{h.code}</p>
              <p className="text-xs text-primary-foreground/70 mt-2">{h.sqft} · {h.sqm}</p>
              <div className="mt-4 text-gold-soft font-semibold">Price on request</div>
              <CtaButton title={`Get the ${h.name} floor plan`} home={h.option} className="mt-4 inline-block text-center rounded-md border border-primary-foreground/30 px-5 py-2.5 text-xs font-semibold hover:bg-gold hover:text-ink hover:border-gold transition">Get Floor Plan</CtaButton>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-primary-foreground/60">Saleable areas as stated in the developer’s brochure. Floor plans open in the brochure PDF.</p>
      </div>
    </section>
  );
}

export function EcoLiving() {
  return (
    <section id="eco-living" className="scroll-mt-28 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">Five pillars of eco-living</h2>
        <p className="mt-2 text-sm text-muted-foreground">Life here isn’t just sustainable. It’s soulful. Paradise isn’t a place, it’s a way of living.</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/eco.webp" alt={`Floating gardens and waterways at ${PROJECT}`} loading="lazy" className="w-full h-48 sm:h-72 object-cover" />
        </div>
        <ol className="mt-6 space-y-3">
          {pillars.map(([n, t, d]) => (
            <li key={n} className="rc-r rc-hover flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="w-12 shrink-0 rounded-md bg-gold text-ink text-center font-black py-2 text-lg">{n}</span>
              <span className="text-sm"><b className="text-primary">{t}.</b> {d}</span>
            </li>
          ))}
        </ol>
        <CtaButton className="mt-6 rounded-md bg-primary text-primary-foreground px-7 py-4 text-sm font-bold">Register My Interest →</CtaButton>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-28 py-12 md:py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">Features &amp; amenities</h2>
        <p className="mt-2 text-sm text-muted-foreground">Your island life, curated to perfection with 45+ world-class amenities.</p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {amenities.map((a) => (
            <li key={a} className="rounded-lg border border-border bg-card px-3 py-3 text-sm font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="rc-bar font-display text-3xl md:text-4xl text-primary">{PROJECT} FAQ</h2>
        <p className="text-sm text-muted-foreground mt-1">Answers on homes, location, amenities and how to register.</p>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-4 md:p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span><h3 className="font-semibold text-primary text-[15px] leading-snug">{q}</h3></span>
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="answer mt-2.5 text-sm text-muted-foreground leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20 bg-ink text-primary-foreground text-center px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/cta.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-ink/60" />
      <h2 className="rc-bar font-display text-3xl md:text-5xl">Your island home awaits.</h2>
      <p className="mt-3 text-primary-foreground/75 text-sm md:text-base">Register with {BRAND} for first access to floor plans, prices and availability at {PROJECT}.</p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <CtaButton className="rc-shine rc-glow rounded-md bg-gold text-ink px-7 py-4 text-sm font-black shadow-xl">Register My Interest →</CtaButton>
        <WaLink className="rounded-md border border-primary-foreground/40 px-6 py-4 text-sm inline-flex items-center justify-center gap-2"> WhatsApp us</WaLink>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground/60 border-t border-primary-foreground/10 py-8 text-center text-[11px] px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo.png" alt={BRAND} className="h-14 w-auto mx-auto mb-4" />
      <p>{BRAND}, Dubai. Prices, availability and payment plans are set by DAMAC Properties and change with each release. Images are artist’s impressions; finishes, furniture and specifications are subject to change.</p>
    </footer>
  );
}

export function FloatingBar() {
  return (
    <>
      <WaLink size={20} label="Chat on WhatsApp" className="hidden md:inline-flex fixed bottom-5 right-5 z-30 items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-xl hover:scale-105 transition">
        <span className="text-sm font-medium">WhatsApp</span>
      </WaLink>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t border-border shadow-[0_-8px_24px_rgba(0,0,0,0.12)] pb-[env(safe-area-inset-bottom)]">
        <div className="px-3 py-2.5 flex items-center gap-2">
          <CtaButton className="flex-1 rounded-md bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-3.5 text-sm font-semibold shadow-lg hover:brightness-110 transition">Register Interest →</CtaButton>
          <WaLink size={20} label="WhatsApp" className="h-12 w-12 shrink-0 grid place-items-center rounded-md bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg" />
        </div>
      </div>
    </>
  );
}
