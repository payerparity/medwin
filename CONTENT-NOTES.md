# Content notes — what changed from acepain.com and what the client must confirm

All copy lives in `src/content/`. These are the editorial decisions made when migrating from the old Weebly site.

## Removed (copied from other clinics' websites)
- "At Body in Balance, we pride ourselves…" (Pain Management page) — Body in Balance is a different practice.
- "That's why treatment at Interventional Pain Associates is so vitally important" (Physical Therapy page) — different practice.
- The Fibromyalgia and Failed Back Surgery Syndrome essays on the PT page were generic and partly borrowed; the conditions are kept as list items instead.

## Removed (dated)
- "In five years, Dr. Raguthu hopes to expand his practice to three or more locations." (written ~2014)
- "was named to the ranks of the Best Physicians in the USA in 2007" — unverifiable award; credentials list carries the weight instead.
- Patient Portal page content about **Dr. Manjula Raguthu's primary-care clinic** — a separate practice. The eClinicalWorks portal link is kept on the new Patient Resources page. **Confirm with client** whether a link to the other practice should be added back.

## Fixed
- Typos: Lyssis → Lysis, Thorastic → Thoracic, Spondyloisthesis → Spondylolisthesis, Cervcal → Cervical, "Medical Branch Block" → "Medial Branch Block", "Un-diagnosed" → undiagnosed.
- Brochure PDFs renamed to clean slugs; Spanish versions were mixed into the English list on the old site and are now separated (`public/brochures/en`, `public/brochures/es`).
- Three brochure links on the old site were **broken** (the server returned PHP source instead of a PDF) and are not included: Discography CTL (EN), Thoracic ESI Interlaminar (ES), Lumbar RFA (ES). Ask the client for the originals if they exist.

## Placeholders the client must supply
| Item | Where | Status |
|---|---|---|
| Sugar Land location | `practice.ts` → `locations` | Listed on old header, not in old footer. Google Maps shows this address as **"Medwin Family Medicine and Rehab"** — may be the current practice name there. **Confirm still open, and under which name.** |
| Office hours | `practice.ts` → `hours` | Not on old site. Placeholder Mon–Fri 8–5. |
| Contact form endpoint | `practice.ts` → `contactFormEndpoint` | `REPLACE_ME`. Use Formspree/Netlify Forms/etc. Form copy warns patients not to include medical details (HIPAA). |
| Doctor portrait | `public/images/dr-raguthu.jpg` | 477×331 from old site — too small. Need a new photo. |
| Logo | `public/images/old-logo.png` | Old raster logo; new site uses a text wordmark. Client may want a real logo. |
| Insurance accepted | — | Not on old site; common patient question. Add if client provides. |
| Hero / facility photos | vibes use stock-style placeholder gradients/shapes | Real clinic photos would materially improve every vibe. |
