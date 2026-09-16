// Language axis. Pages pass `lang` explicitly; nothing is inferred from the URL except the switcher link.
import { services as enServices, commonConditions as enConditions } from '@/data/services';
import { doctor as enDoctor } from '@/data/doctor';
import { nav as enNav, home as enHome } from '@/data/site';
import { services as esServices, commonConditions as esConditions } from '@/data/es/services';
import { doctor as esDoctor } from '@/data/es/doctor';
import { nav as esNav, home as esHome } from '@/data/es/site';
import { ui } from '@/data/ui';

export type Lang = 'en' | 'es';
export const langs: Lang[] = ['en', 'es'];

export function getContent(lang: Lang) {
  return lang === 'es'
    ? { services: esServices, commonConditions: esConditions, doctor: esDoctor, nav: esNav, home: esHome, ui: ui.es }
    : { services: enServices, commonConditions: enConditions, doctor: enDoctor, nav: enNav, home: enHome, ui: ui.en };
}

export const serviceBySlug = (lang: Lang, slug: string) => getContent(lang).services.find((s) => s.slug === slug)!;

/** /clinical/ + en + 'contact/' → /clinical/contact/ ; es → /clinical/es/contact/ */
export function localePath(vibe: string, lang: Lang, path = '') {
  return `/${vibe}/${lang === 'es' ? 'es/' : ''}${path}`;
}

/** Same page in the other language. /warm/es/contact/ ↔ /warm/contact/ */
export function switchLangHref(pathname: string, to: Lang) {
  const m = pathname.match(/^\/([^/]+)\/(?:es\/)?(.*)$/);
  if (!m) return '/';
  return localePath(m[1], to, m[2]);
}

export function stripLang(pathname: string) {
  return pathname.replace(/^\/[^/]+\/(es\/)?/, '');
}
