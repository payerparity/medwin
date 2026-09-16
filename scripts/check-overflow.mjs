// Reports elements wider than the viewport. Usage: node scripts/check-overflow.mjs <url> [widths…]
import { chromium } from 'playwright';
const [url, ...ws] = process.argv.slice(2);
const widths = ws.length ? ws.map(Number) : [390, 768, 1024, 1152, 1280, 1344, 1440];
const b = await chromium.launch();
for (const width of widths) {
  const p = await b.newPage({ viewport: { width, height: 800 } });
  await p.goto(url + (url.includes('?') ? '&' : '?') + 'clean=1', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      if ((r.right > innerWidth + 1 || r.left < -1) && cs.position !== 'absolute' && cs.position !== 'fixed')
        out.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} L=${Math.round(r.left)} R=${Math.round(r.right)}`);
    }
    return { sw: document.documentElement.scrollWidth, out: out.filter(o => !o.startsWith('li.') && !o.startsWith('ul.')).slice(0, 5) };
  });
  console.log(`${width}px scrollWidth=${r.sw} ${r.sw > width ? 'OVERFLOW ' + r.out.join(' | ') : 'ok'}`);
  await p.close();
}
await b.close();
