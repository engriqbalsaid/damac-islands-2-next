# DAMAC Islands 2 – Red Carpet Real Estate landing page (Next.js)

Next.js 16 (App Router, TypeScript) landing page. All content lives in `lib/data.ts`; sections are in `components/`.

## Run locally

```bash
npm install
cp .env.example .env.local   # then edit
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `LEAD_EMAIL` | Inbox that receives new leads (default `iqbalsaid99@gmail.com`) |
| `RESEND_API_KEY` | Recommended. Sends lead emails through [Resend](https://resend.com). If empty, FormSubmit is used instead |
| `LEAD_FROM` | Sender for Resend, e.g. `Red Carpet Leads <leads@yourdomain.com>` (verify the domain in Resend) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only with country code, e.g. `971501234567`. Defaults to Red Carpet's number `971501464684` |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for metadata (e.g. `https://damac.redcarpet.ae`) |

Without `RESEND_API_KEY`, leads go through FormSubmit, which emails an activation link to `LEAD_EMAIL` the first time. Click it once or no leads arrive. Resend is more reliable for production.

## Deploy to Cloudflare (Workers + OpenNext)

The repo already contains `wrangler.jsonc` and `open-next.config.ts`. The Worker name is `damac-islands-2-next` and must match the project name in Cloudflare.

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository**, pick this repo.
2. Leave the defaults: build command `npm run build`, deploy command `npx wrangler deploy`. `npm run build` creates the OpenNext bundle (`opennextjs-cloudflare build`), which `wrangler deploy` then uploads.
3. Under **Settings → Variables and secrets** add the runtime variables (`LEAD_EMAIL`, `RESEND_API_KEY` as a secret, `LEAD_FROM`).
4. Under **Settings → Build → Variables** add `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` (these are baked in at build time).
5. Add your custom domain under **Settings → Domains & Routes**.

Local checks: `npm run build && npm run preview` (runs the Worker locally). Plain Next.js build: `npm run build:next`.

## Deploy to Vercel

Import the repo in Vercel, set the build command to `npm run build:next`, and add the same environment variables.

## Structure

```
app/
  layout.tsx          metadata, fonts, theme
  page.tsx            page composition
  globals.css         compiled Tailwind utilities + Red Carpet theme/animations
  api/lead/route.ts   lead email endpoint
components/
  Sections.tsx        header, hero, overview, homes, eco-living, amenities, FAQ, footer
  Gallery.tsx         filter, show more/less, lightbox
  Location.tsx        interactive map pins
  Lead.tsx            popup form, hero form, brochure download
  Effects.tsx         scroll reveal, count-up, parallax, particles
lib/data.ts           all copy, images, homes, places, FAQ
public/               images, logo, favicon, brochure PDF
```
