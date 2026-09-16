# Ace Pain Management — website redesign

A modern replacement for [acepain.com](https://acepain.com), built as one [Astro](https://astro.build) project with **four visually distinct design directions ("vibes")** sharing a single content source. A picker page at `/` lets the client compare them; once one is chosen, the other three are deleted.

| Vibe | Route | Feel |
|---|---|---|
| Clinical Trust | `/clinical/` | White, medical blue, structured cards — modern health-system |
| Warm & Human | `/warm/` | Cream, terracotta, sage, soft serif — neighborhood practice |
| Bold & Athletic | `/bold/` | Charcoal + electric lime, big condensed type — sports-medicine energy |
| Editorial | `/editorial/` | Off-white, navy, gold hairlines, elegant serif — quiet premium |

Each vibe has the same seven pages: Home, Pain Management, Physical Therapy, Workers' Comp, Meet the Doctor, Patient Resources (portal + 42 brochure PDFs in EN/ES), Contact — **in English and Spanish**. English lives at `/<vibe>/…`, Spanish at `/<vibe>/es/…`, and every header has an EN / ES toggle that jumps to the same page in the other language. 56 pages total.

**Language defaults to the browser.** An inline script in `<head>` (see `Seo.astro`) sends a first-time visitor whose browser language is Spanish from any English page to its `/es/` twin. Using the toggle stores `localStorage.lang`, after which the site stops guessing. Verify with `node scripts/check-lang-redirect.mjs` (needs the dev server).

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
src/data/               ← ALL copy, phone numbers, addresses, brochure list. Edit here, every vibe updates.
  practice.ts             name, phones, locations, portal URL, form endpoint (language-neutral)
  services.ts             the three service lines + condition lists (English)
  doctor.ts               bio + credentials (English)
  site.ts                 nav, vibe list, home-page copy (English)
  brochures.ts            procedure PDF index, EN + ES titles (files in public/brochures/{en,es}/)
  ui.ts                   every button/label/heading string, `en` and `es` — TypeScript enforces the same shape
  es/{services,doctor,site}.ts   Spanish mirrors of the English content files, same types
src/i18n.ts              getContent(lang), localePath(), switchLangHref() — the language axis
src/components/shared/   VibeSwitcher, LangSwitch, ContactForm, BrochureList, MapEmbed, Seo — used by every vibe
src/components/<vibe>/   Nav, Footer, Locations, HomePage, ServicePage, DoctorPage, ResourcesPage, ContactPage — take `lang`
src/layouts/<Vibe>Layout.astro
src/styles/<vibe>.css    all visual decisions for that vibe (base.css = reset + spacing tokens)
src/pages/<vibe>/        7 three-line wrappers (lang="en") + es/ with the same 7 (lang="es")
src/pages/index.astro    the picker (delete after choosing)
CONTENT-NOTES.md         what changed from the old site + what the client must confirm
```

Pages are deliberately thin: they pass `lang` to that vibe's page component, which pulls everything from `getContent(lang)`. Presentation is duplicated four times on purpose; content is never duplicated. Adding a third language = one more folder in `src/data/`, one more key in `ui.ts`, and one more `pages/<vibe>/<lang>/` folder.

To type-check (this is what catches a missing Spanish string):

```bash
npx astro check
```

## Promote the chosen vibe

Say the client picks **warm**:

1. `git mv src/pages/warm/* src/pages/` (overwrite `index.astro` — the picker). Spanish pages land at `/es/…`.
2. In `src/components/warm/*`, change `localePath('warm', lang, p)` to `localePath('', lang, p)` and make `localePath` in `src/i18n.ts` not double the slash (`/${lang === 'es' ? 'es/' : ''}${path}`). Update `switchLangHref` to match (no vibe segment).
3. Delete `src/pages/{clinical,bold,editorial}`, `src/components/{clinical,bold,editorial}`, `src/layouts/{Clinical,Bold,Editorial}Layout.astro`, `src/styles/{clinical,bold,editorial}.css`, `public/previews/`, `scripts/screenshots.mjs`.
4. Remove `<VibeSwitcher>` from `WarmLayout.astro` and delete `src/components/shared/VibeSwitcher.astro`.
5. Optionally rename `warm` → `site` throughout; trim `vibes` from `src/data/site.ts`.
6. `npm run build` and deploy `dist/` (Netlify, Vercel, Cloudflare Pages — any static host).

## Before launch (see CONTENT-NOTES.md)

- Real contact-form endpoint in `practice.ts` (`contactFormEndpoint`) — Formspree, Netlify Forms, etc.
- Confirm the Sugar Land office is still active (Google Maps lists that address as "Medwin Family Medicine and Rehab").
- Office hours, insurance accepted, a proper portrait of Dr. Raguthu, photos of the clinic.
- Set the real domain in `astro.config.mjs` → `site`.
