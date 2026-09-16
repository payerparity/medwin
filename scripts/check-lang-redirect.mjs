// Verifies the browser-language redirect. Usage: node scripts/check-lang-redirect.mjs [base]
import { chromium } from 'playwright';
const base = process.argv[2] ?? 'http://localhost:4321';
const b = await chromium.launch();
const results = [];
async function visit(locale, path, setup) {
  const ctx = await b.newContext({ locale });
  const p = await ctx.newPage();
  if (setup) await setup(p);
  await p.goto(base + path, { waitUntil: 'networkidle' });
  const r = { locale, from: path, landed: new URL(p.url()).pathname, html: await p.getAttribute('html', 'lang') };
  results.push(r); await ctx.close(); return r;
}
await visit('es-MX', '/clinical/');                 // Spanish browser, fresh → /clinical/es/
await visit('es-MX', '/warm/contact/');             // deep link keeps the page
await visit('en-US', '/bold/');                     // English browser → stays
await visit('en-US', '/editorial/es/');             // English browser on a Spanish link → stays (explicit link)
await visit('es-MX', '/clinical/', async (p) => {   // Spanish browser that clicked EN once → stays on English
  await p.goto(base + '/clinical/es/'); await p.click('[data-lang-switch="en"]'); await p.waitForLoadState('networkidle');
});
for (const r of results) console.log(`${r.locale.padEnd(6)} ${r.from.padEnd(18)} → ${r.landed.padEnd(22)} lang=${r.html}`);
await b.close();
