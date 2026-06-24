# Sell Tech IND. Productions — Website

A premium, cinematic Next.js 15 site for **Sell Tech IND. Productions** — a future-forward AI, SaaS and software studio founded by [Pratham Soni](https://github.com/PrathamSoniDev). Inspired by the visual rigor of Stripe, Linear, Vercel, OpenAI and Apple Vision Pro.

## Stack

- **Next.js 15** (App Router) · **React 19 RC** · **TypeScript** (strict)
- **Tailwind CSS** with a custom token system (`bg-*`, `ink-*`, `brand.*`, `line`)
- **shadcn/ui** primitives (`Input`, `Textarea`, `Label`, `Select`)
- **React Three Fiber** + **drei** + **three** — WebGL hero (AI sphere, particle field, neural net, orbit rings)
- **Framer Motion** — scroll reveals, page choreography, animated counters
- **Resend** — transactional contact-form delivery (`app/api/contact/route.ts`)
- **Zod** — request validation
- Custom **cursor trail**, **atmosphere grain**, **dotted globe canvas** and **conic-spin CTA**

## Project layout

```
app/
  layout.tsx              # Fonts, metadata, viewport
  page.tsx                # Composes all 12 sections + JSON-LD
  globals.css             # Tailwind layers + design utilities
  sitemap.ts · robots.ts  # SEO metadata routes
  api/contact/route.ts    # Resend-backed POST handler
components/
  layout/                 # Atmosphere · CursorTrail · Nav · Footer
  shared/Reveal.tsx       # Framer Motion reveal wrapper + Eyebrow
  three/                  # AISphere · Particles · NeuralNet · OrbitRings · HeroScene
  sections/               # Hero · Logos · About · Services · Products · Stack
                          # Process · Work · Why · Testimonials · Globe · CTA · Contact
  ui/                     # shadcn-style primitives (cva variants)
hooks/                    # usePrefersReducedMotion · useIsMobile
lib/                      # seo.ts (siteConfig) · content.ts (editorial data) · utils.ts (cn)
```

## Getting started

```bash
pnpm install        # or npm install / yarn
cp .env.example .env.local
pnpm dev            # http://localhost:3000
```

> The dev server boots without a `RESEND_API_KEY` — the API route soft-succeeds and logs the payload to the terminal so you can exercise the UI offline.

## Environment variables

| Key | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | prod | Server-side Resend API key |
| `CONTACT_TO_EMAIL` | optional | Destination inbox (defaults to `siteConfig.contact.email`) |
| `CONTACT_FROM_EMAIL` | optional | Verified Resend sender (defaults to `onboarding@resend.dev` for testing) |
| `NEXT_PUBLIC_SITE_URL` | prod | Canonical URL used by `sitemap.ts`, Open Graph and JSON-LD |

## Resend setup

1. Create a free account at [resend.com](https://resend.com).
2. **API Keys → Create** → copy into `RESEND_API_KEY`.
3. **Domains → Add** your sending domain (e.g. `send.selltechindproductions.in`), verify the DNS records, then set `CONTACT_FROM_EMAIL="SellTech Briefs <briefs@send.selltechindproductions.in>"`.
4. Set `CONTACT_TO_EMAIL` to the inbox that should receive briefs.

The API route validates with Zod, renders both HTML and plain-text bodies, and uses `replyTo` so you can reply directly to the prospect from your client.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Local dev with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | ESLint with `next/core-web-vitals` |
| `pnpm typecheck` | Strict `tsc --noEmit` |

## Performance & accessibility

- **WebGL fallback** — `HeroScene` swaps to a gradient-beam composition on mobile or when `prefers-reduced-motion` is set.
- **`dynamic(..., { ssr: false })`** isolates Three.js from the server bundle.
- **Reduced motion** is respected by every Framer Motion reveal via `usePrefersReducedMotion`.
- **Cursor trail** is disabled on touch/coarse-pointer devices.
- All decorative elements use `aria-hidden`; semantic landmarks (`header`, `main`, `footer`, `section[id]`) anchor the nav.
- Color tokens hit WCAG AA contrast against the `#050816` canvas.

## Deploying to Vercel

1. Push the repo to GitHub/GitLab.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the env vars from `.env.example` in **Project → Settings → Environment Variables**.
4. Deploy. The `app/api/contact/route.ts` runs on the Node.js runtime — no extra config needed.

```bash
vercel
vercel --prod
```

## Editing content

All editorial copy, service lists, case studies, hubs, testimonials and stats live in `lib/content.ts`. Update once, ship everywhere. Site-wide identity (name, founder, contact, socials, OG image path) lives in `lib/seo.ts`.

## Credits

Designed and engineered for **Sell Tech IND. Productions** by Pratham Soni — [github.com/PrathamSoniDev](https://github.com/PrathamSoniDev).
