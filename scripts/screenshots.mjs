// Full-page screenshots of every vibe's home page → public/previews/<vibe>.png (used by the picker).
// Also handy for eyeballing any page: node scripts/screenshots.mjs --url /clinical/contact/ --width 390 --out /tmp/x.png
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const args = Object.fromEntries(process.argv.slice(2).map((a, i, arr) => a.startsWith('--') ? [a.slice(2), arr[i + 1]] : []).filter(Boolean));
const base = args.base ?? 'http://localhost:4321';
const vibes = ['clinical', 'warm', 'bold', 'editorial'];

const browser = await chromium.launch();
try {
  if (args.url) {
    const page = await browser.newPage({ viewport: { width: Number(args.width ?? 1280), height: 900 }, deviceScaleFactor: 1 });
    await page.goto(base + args.url + (args.url.includes('?') ? '&' : '?') + 'clean=1', { waitUntil: 'networkidle' });
    await page.screenshot({ path: args.out ?? 'shot.png', fullPage: args.full !== 'false' });
    console.log('wrote', args.out ?? 'shot.png');
  } else {
    await mkdir('public/previews', { recursive: true });
    for (const v of vibes) {
      const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
      await page.goto(`${base}/${v}/?clean=1`, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `public/previews/${v}.png`, fullPage: false });
      await page.close();
      console.log('wrote', `public/previews/${v}.png`);
    }
  }
} finally {
  await browser.close();
}
