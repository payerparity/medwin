# Ace Pain Management — website redesign

A modern replacement for [acepain.com](https://acepain.com), built as one [Astro](https://astro.build) project with **four visually distinct design directions ("vibes")** sharing a single content source. A picker page at `/` lets the client compare them; once one is chosen, the other three are deleted.

| Vibe | Route | Feel |
|---|---|---|
| Clinical Trust | `/clinical/` | White, medical blue, structured cards — modern health-system |
| Warm & Human | `/warm/` | Cream, terracotta, sage, soft serif — neighborhood practice |
| Bold & Athletic | `/bold/` | Charcoal + electric lime, big condensed type — sports-medicine energy |
| Editorial | `/editorial/` | Off-white, navy, gold hairlines, elegant serif — quiet premium |

Each vibe has the same seven pages: Home, Pain Management, Physical Therapy, Workers' Comp, Meet the Doctor, Patient Resources (portal + 42 brochure PDFs in EN/ES), Contact.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321  (picker at /, vibes at /clinical/ etc.)
npm run build      # static output in dist/
npm run preview
```

Regenerate the picker thumbnails (needs the dev server running):

```bash
npm run screenshots
```

Check for horizontal overflow at common widths:

```bash
node scripts/check-overflow.mjs http://localhost:4321/clinical/
```

## Where things live

```
src/content/        ← ALL copy, phone numbers, addresses, brochure list. Edit here, every vibe updates.
  practice.ts         name, phones, locations, hours, portal URL, form endpoint
  services.ts         the three service lines + condition lists
  doctor.ts           bio + credentials
  brochures.ts        procedure PDF index (files in public/brochures/{en,es}/)
  site.ts             nav, vibe list, home-page copy
src/components/shared/   VibeSwitcher, ContactForm, BrochureList, MapEmbed, Seo — used by every vibe
src/components/<vibe>/   Nav, Footer, Locations, ServicePage — per-vibe presentation
src/layouts/<Vibe>Layout.astro
src/styles/<vibe>.css    all visual decisions for that vibe (base.css = reset + spacing tokens)
src/pages/<vibe>/        7 thin pages per vibe
src/pages/index.astro    the picker (delete after choosing)
CONTENT-NOTES.md         what changed from the old site + what the client must confirm
```

Pages are deliberately thin: they import content and hand it to that vibe's components. Presentation is duplicated four times on purpose; content is never duplicated.

## Promote the chosen vibe

Say the client picks **warm**:

1. `git mv src/pages/warm/* src/pages/` (overwrite `index.astro` — the picker).
2. In every moved page and in `src/components/warm/*`, change `const base = '/warm/'` to `'/'`.
3. Delete `src/pages/{clinical,bold,editorial}`, `src/components/{clinical,bold,editorial}`, `src/layouts/{Clinical,Bold,Editorial}Layout.astro`, `src/styles/{clinical,bold,editorial}.css`, `public/previews/`, `scripts/screenshots.mjs`.
4. Remove `<VibeSwitcher>` from `WarmLayout.astro` and delete `src/components/shared/VibeSwitcher.astro`.
5. Optionally rename `warm` → `site` throughout; trim `vibes` from `src/content/site.ts`.
6. `npm run build` and deploy `dist/` (Netlify, Vercel, Cloudflare Pages — any static host).

## Before launch (see CONTENT-NOTES.md)

- Real contact-form endpoint in `practice.ts` (`contactFormEndpoint`) — Formspree, Netlify Forms, etc.
- Confirm the Sugar Land office is still active (Google Maps lists that address as "Medwin Family Medicine and Rehab").
- Office hours, insurance accepted, a proper portrait of Dr. Raguthu, photos of the clinic.
- Set the real domain in `astro.config.mjs` → `site`.
