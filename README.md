# Meghana Ambulance Service — Website

A production-ready Next.js website for Meghana Ambulance Service, Bangalore.
Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## What's included

- Full responsive site: homepage, services (+ per-service pages), hospital
  partnerships (B2B), coverage, gallery, about, contact, privacy policy,
  terms.
- Persistent mobile emergency bar (Call / WhatsApp / Request Ambulance) and
  a floating WhatsApp button on desktop.
- Three working forms (ambulance request, hospital/B2B enquiry, general
  contact) with client-side validation, loading/success/error states, a
  honeypot spam trap, and server-side sanitisation/validation.
- SEO: per-page metadata, Open Graph/Twitter cards, canonical URLs,
  `sitemap.xml`, `robots.txt`, and JSON-LD structured data (LocalBusiness,
  Service, FAQPage).
- Centralized business configuration — one file controls every phone
  number, service, and service area shown across the site.
- Accessible by default: semantic HTML, skip link, visible focus states,
  ARIA labelling on interactive components, alt text on all images,
  `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

`npm run lint` runs ESLint; `npx tsc --noEmit` runs a strict TypeScript
check. Both are clean as of this build.

## Editing business information

Everything specific to the business — phone numbers, WhatsApp number,
service list, service-area list, FAQs — lives in **`src/lib/business.ts`**.
Update values there and the whole site picks them up automatically; you do
not need to touch individual pages or components.

### Important placeholders to replace before launch

The client brief explicitly asked us not to invent facts that weren't
supplied. The following are left as clearly-marked placeholders in
`src/lib/business.ts` and elsewhere — replace them with real, confirmed
information before the site goes live:

- **`serviceAreas`** — the "selected 20 areas" mentioned in the brief were
  never named. Twenty placeholder entries are pre-created in
  `src/lib/business.ts`; replace `name` (and set `confirmed: true`) for each
  with the real locality names.
- **`business.email`** — no business email was supplied.
- **`business.siteUrl`** — currently a placeholder domain
  (`https://www.meghanaambulance.in`). Update it to the real production
  domain — this feeds canonical URLs, the sitemap, robots.txt and Open
  Graph tags.
- **Ambulance photography** — see below.
- **The "Podiatric expert in Bangalore" line** from the original brief was
  left out of the homepage entirely, per the brief's own instruction, because
  its meaning was unclear. Once the client clarifies what service this
  refers to, add it as its own entry in `services` in `business.ts`.

Nothing else on the site states a statistic, certification, hospital
partnership, guaranteed response time, address, or price that wasn't
supplied — by design.

## Replacing the ambulance photography

The brief referenced real client photographs (`AmbulanceFront.jpeg`,
`AmbulanceFrontFull.jpeg`, `AmbulanceBack.jpeg`, `AmbulanceSide.jpeg`,
`AmbulanceInside.jpeg`), but they were not attached to this project, so the
gallery and hero currently use clearly-labelled placeholder illustrations
generated at `public/images/gallery/*.svg` and
`public/images/hero/hero-ambulance.svg`.

To use the real photos:

1. Add the enhanced photographs to `public/images/gallery/` (for the
   gallery) and `public/images/hero/` (for the hero), as `.jpg` or `.webp`.
2. Update the `src` paths in `src/lib/gallery.ts` and in
   `src/components/Hero.tsx` to point at the new files.
3. Keep the descriptive `alt` text pattern already in place (e.g.
   `"Meghana Ambulance Service ambulance in Bangalore"`) — it matters for
   both accessibility and SEO.

`next/image` will automatically generate responsive, lazy-loaded variants
for whatever image files you provide (the hero image loads eagerly since
it's above the fold; gallery images below the first row lazy-load).

## Connecting a real backend

The three forms currently POST JSON to their own API routes:

- `POST /api/request-ambulance`
- `POST /api/b2b-enquiry`
- `POST /api/contact`

Each route (in `src/app/api/.../route.ts`) validates and sanitises the
payload, then currently just logs it server-side with `console.log` — no
email, SMS, WhatsApp message, or database write happens yet. Each file has
a `TODO(backend)` comment marking exactly where to add your integration,
for example:

```ts
// inside src/app/api/request-ambulance/route.ts, after validation:
await sendEmail({ to: process.env.NOTIFICATION_EMAIL_TO, subject: "New ambulance request", body: submission });
// or: await db.ambulanceRequests.create({ data: submission });
// or: await sendWhatsAppTemplate(business.whatsappNumberIntl, submission);
```

Common options: a transactional email provider (Resend, SendGrid,
Postmark), a WhatsApp Business API integration, or a database (Postgres,
MongoDB) paired with a simple admin view. Add any required secrets to
`.env.local` (see `.env.example`) — never commit real secrets.

## WhatsApp configuration

The WhatsApp number and default message are both set in one place —
`business.whatsappNumber` / `business.whatsappNumberIntl` and
`business.whatsappDefaultMessage` in `src/lib/business.ts`. The
`buildWhatsAppUrl()` helper builds the `wa.me` link at runtime everywhere
it's used (header, mobile bar, floating button, hero, contact page), so
there is only one place to update the number.

## Project structure

```
src/
  app/                  Pages (App Router) + API routes + sitemap/robots
  components/           Reusable UI components
  components/forms/     The three forms + shared field components
  lib/business.ts       Central business configuration (single source of truth)
  lib/gallery.ts        Gallery image list
  lib/useFormSubmit.ts  Shared form-submission state hook
  lib/api-helpers.ts    Server-side validation/sanitisation helpers
public/images/          Logo, OG image, hero and gallery images (placeholders)
scripts/gen-placeholders.py   Regenerates the placeholder SVG imagery
```

## Deployment

The site is a standard Next.js app and deploys to any Next.js-compatible
host (Vercel, Netlify, a Node server, etc.). Set `NEXT_PUBLIC_SITE_URL` (and
`business.siteUrl` in `business.ts`) to the real domain before going live,
and confirm the backend integration above is wired up so form submissions
actually reach someone.

## QA checklist status

- [x] Production build passes (`npm run build`)
- [x] Lint passes (`npm run lint`) — one informational Next.js warning about
      the Google Fonts `<link>` tag in the root layout (used instead of
      `next/font/google` because this sandbox has no outbound access to
      fonts.googleapis.com at build time; both approaches work in a normal
      deployment — `next/font/google` can be swapped back in if preferred)
- [x] TypeScript check passes (`npx tsc --noEmit`)
- [x] All internal links, phone links (`tel:`) and WhatsApp links (`wa.me`)
      verified
- [x] Mobile and desktop screenshots reviewed for homepage and contact page
- [x] No fabricated statistics, testimonials, certifications, hospital
      partnerships, prices, or street address
- [ ] Replace placeholder ambulance photography with real client photos
- [ ] Replace the 20 placeholder service areas with confirmed locality names
- [ ] Connect a real backend for form submissions before launch
