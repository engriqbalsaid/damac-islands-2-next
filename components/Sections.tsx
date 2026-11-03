import {
  BRAND, CONTACT_EMAIL, PLAN, PROJECT, WHATSAPP_DISPLAY, amenities, faqs, homes, islands, navItems, pillars, stats, summaryItems, whatsappHref,
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
      <a href="#offers" className="rc-topbar"><b>★ FREE Golden Visa</b><span>|</span><b>✦ DLD Fee Waiver</b><span>|</span><b>0% Interest · Up to 50/50 Plan</b><u className="hidden md:inline"> See offers →</u></a>
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-3">
        <a className="flex items-center gap-3 min-w-0" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt={BRAND} className="h-12 w-auto" />
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-gold-soft border-l border-gold/40 pl-3">{PROJECT}</span>
        </a>
        <div className="flex items-center gap-2">
          <WaLink className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-gold/50 px-3 py-2 text-xs font-medium text-gold-soft"> WhatsApp</WaLink>
          <CtaButton className="btn-primary rc-shine px-3.5 py-2 text-xs">Register Interest</CtaButton>
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
          <p className="rc-pricetag"><small>Townhouses from</small> <b>AED 1,164,000</b> <i>Up to {PLAN.split} plan · {PLAN.down} down · {PLAN.interest} interest</i></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton className="btn-primary rc-shine rc-glow px-6 py-4 text-sm">Register My Interest →</CtaButton>
            <CtaButton title={`Download the ${PROJECT} brochure`} className="btn-ghost px-6 py-4 text-sm">Download Brochure</CtaButton>
          </div>
          <div className="rc-heroofers">
            <a href="#offers" className="rc-heroofer"><span className="num">FREE</span><span><b>10-Year Golden Visa</b><em>Included with your purchase</em></span></a>
            <a href="#offers" className="rc-heroofer"><span className="num">4%</span><span><b>DLD Fee Waiver</b><em>Save AED 120K on AED 3M</em></span></a>
            <a href="#payment-plan" className="rc-heroofer"><span className="num">{PLAN.split}</span><span><b>Payment plan, {PLAN.interest} interest</b><em>{PLAN.down} down · {PLAN.monthly} monthly</em></span></a>
          </div>
        </div>
        <div id="lead" className="rounded-xl bg-card text-card-foreground shadow-2xl border border-border p-5 md:p-7 scroll-mt-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">Priority access</p>
          <h2 className="font-display text-2xl md:text-3xl mt-1 text-primary">Get {PROJECT} prices &amp; floor plans.</h2>
          <p className="text-sm text-muted-foreground mt-1.5">A specialist calls you back within the hour with live availability.</p>
          <div className="rc-banner"><span>★ FREE Golden Visa</span><span>✦ DLD fee waiver</span><span>✔ 0% interest plan</span></div>
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

function OfferIcon({ kind }: { kind: "visa" | "dld" }) {
  return kind === "visa" ? (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="url(#g1)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f1dfae" /><stop offset="1" stopColor="#c9a25f" /></linearGradient></defs>
      <rect x="12" y="6" width="40" height="52" rx="5" />
      <circle cx="32" cy="26" r="9" />
      <path d="M23 26h18M32 17c-4 3-4 15 0 18M32 17c4 3 4 15 0 18" />
      <path d="M20 46h24M24 51h16" />
    </svg>
  ) : (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="url(#g2)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f1dfae" /><stop offset="1" stopColor="#c9a25f" /></linearGradient></defs>
      <path d="M8 56V26l24-16 24 16v30" />
      <path d="M4 56h56" />
      <path d="M22 44l20-16" />
      <circle cx="24" cy="31" r="3.2" />
      <circle cx="40" cy="43" r="3.2" />
    </svg>
  );
}

export function Offers() {
  return (
    <section id="offers" className="rc-offers scroll-mt-28 py-14 md:py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="text-center">
          <span className="rc-chip">✦ Exclusive buyer benefits</span>
          <h2 className="rc-bar font-display text-3xl md:text-5xl mt-4">Live the island life. <span className="rc-goldtext">Keep more of your money.</span></h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/75 max-w-2xl mx-auto">Why buyers choose {PROJECT} with {BRAND}: a free Golden Visa, a waived DLD fee and an interest-free payment plan.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
          <article className="rc-offer rc-r">
            <div className="rc-offer-in">
              <span className="rc-ribbon">FREE</span>
              <OfferIcon kind="visa" />
              <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-gold-soft">10-Year UAE Golden Visa</p>
              <div className="rc-big">FREE</div>
              <p className="font-display text-xl md:text-2xl mt-1">Residency for you and your family</p>
              <ul className="rc-ticks mt-5">
                <li><b>FREE</b> Golden Visa included with your purchase*</li>
                <li>Includes your spouse and children</li>
                <li>Renewable long-term residency with no local sponsor</li>
              </ul>
              <CtaButton title="Claim my FREE Golden Visa" className="btn-primary rc-shine mt-6 px-6 py-3.5 text-sm">Claim my FREE visa →</CtaButton>
            </div>
          </article>
          <article className="rc-offer rc-r">
            <div className="rc-offer-in">
              <span className="rc-ribbon">Save on purchase</span>
              <OfferIcon kind="dld" />
              <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-gold-soft">DLD Fee Waiver</p>
              <div className="rc-big"><span data-count="4">4</span>% off</div>
              <p className="font-display text-xl md:text-2xl mt-1">Dubai Land Department fee, waived</p>
              <ul className="rc-ticks mt-5">
                <li>The standard DLD registration fee is <b>4% of the price</b></li>
                <li>On a AED 3M home, that is <b>AED 120,000 saved</b></li>
                <li>Available on selected units: ask us what applies</li>
              </ul>
              <CtaButton title="Claim the DLD fee waiver" className="btn-primary rc-shine mt-6 px-6 py-3.5 text-sm">Claim this offer →</CtaButton>
            </div>
          </article>
        </div>
        <p className="mt-6 text-center text-[11px] text-primary-foreground/50 max-w-3xl mx-auto">*Offers are subject to developer terms, unit availability and change without notice. Golden Visa eligibility and approval are determined by the UAE authorities.</p>
      </div>
    </section>
  );
}

export function PaymentPlan() {
  const items: [string, string, string][] = [
    [`Up to ${PLAN.split}`, "Payment plan", "Spread your purchase your way"],
    [PLAN.down, "Down payment", "Secure your home with a low entry"],
    [PLAN.monthly, "Monthly instalments", "Simple, predictable payments"],
    [PLAN.interest, "Interest", "Zero interest on the plan"],
  ];
  return (
    <section id="payment-plan" className="scroll-mt-28 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="rc-chip rc-chip-dark">✔ Interest-free payment plan</span>
          <h2 className="rc-bar font-display text-3xl md:text-5xl mt-4 text-primary">Own your island home with <span className="rc-bronze">{PLAN.interest} interest</span></h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">Pay up to a {PLAN.split} plan with just {PLAN.down} down and {PLAN.monthly} monthly instalments. Combined with a FREE Golden Visa and a DLD fee waiver.</p>
        </div>
        <div className="rc-plan-grid mt-10">
          {items.map(([big, label, sub]) => (
            <div key={label} className="rc-plan-card rc-r">
              <div className="rc-plan-big">{big}</div>
              <b className="font-display text-lg block mt-1">{label}</b>
              <p className="text-xs text-primary-foreground/70 mt-1">{sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CtaButton title="Get my payment plan" className="btn-primary rc-shine rc-glow px-8 py-4 text-sm">Get my payment plan →</CtaButton>
          <p className="mt-4 text-[11px] text-muted-foreground max-w-2xl mx-auto">*Payment plan available on selected units and subject to developer approval, availability and change. Ask a specialist for the exact schedule.</p>
        </div>
      </div>
    </section>
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
              <b className="font-display text-xl text-primary">Townhouses from AED 1,164,000</b>
              <p className="text-sm text-muted-foreground mt-1">Up to {PLAN.split} payment plan, {PLAN.down} down payment, {PLAN.interest} interest. Villa and twin villa prices on request.</p>
              <CtaButton className="btn-primary mt-4 px-6 py-3.5 text-sm">Request Prices →</CtaButton>
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
          <CtaButton className="btn-primary px-4 py-2.5 text-xs">Request all prices</CtaButton>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {homes.map((h) => (
            <div key={h.code} className="rc-r rc-hover rc-darkcard rounded-xl p-5">
              <b className="font-display text-xl">{h.name}</b>
              <p className="text-xs text-gold-soft mt-1 tracking-wide">{h.code}</p>
              <p className="text-xs text-primary-foreground/70 mt-2">{h.sqft} · {h.sqm}</p>
              {h.price ? (
                <div className="mt-4"><div className="font-display text-2xl text-gold-soft">AED {h.price.toLocaleString("en-US")}</div><div className="text-[11px] text-primary-foreground/70 mt-1">Up to {PLAN.split} plan · {PLAN.down} down · {PLAN.interest} interest</div></div>
              ) : (
                <div className="mt-4 text-gold-soft font-semibold">Price on request</div>
              )}
              <CtaButton title={`Get the ${h.name} floor plan`} home={h.option} className="btn-ghost mt-4 px-5 py-2.5 text-xs">Get Floor Plan</CtaButton>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-primary-foreground/60">Prices in AED, subject to change and availability. Saleable areas as stated in the developer’s brochure.</p>
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
        <CtaButton className="btn-primary mt-6 px-7 py-4 text-sm">Register My Interest →</CtaButton>
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
        <CtaButton className="btn-primary rc-shine rc-glow px-7 py-4 text-sm">Register My Interest →</CtaButton>
        <WaLink className="rounded-md border border-primary-foreground/40 px-6 py-4 text-sm inline-flex items-center justify-center gap-2"> WhatsApp us</WaLink>
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost px-6 py-4 text-sm">✉ {CONTACT_EMAIL}</a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="rc-footer border-t border-primary-foreground/10 py-8 text-center text-[11px] px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo.png" alt={BRAND} className="h-14 w-auto mx-auto mb-4" />
      <p className="mb-3 text-sm"><a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> <span className="mx-2">·</span> <a className="underline" href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a></p>
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
          <CtaButton className="btn-primary flex-1 py-3.5 text-sm">Register Interest →</CtaButton>
          <WaLink size={20} label="WhatsApp" className="h-12 w-12 shrink-0 grid place-items-center rounded-md bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg" />
        </div>
      </div>
    </>
  );
}
