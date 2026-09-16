// Practice-wide facts. Every vibe reads from here — edit once, changes everywhere.

export interface Location {
  id: string;
  name: string;
  street: string;
  suite?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string;
  email: string;
  /** Google Maps embed query */
  mapQuery: string;
}

export const practice = {
  name: 'Ace Pain Management',
  shortName: 'Ace Pain',
  tagline: 'Acute & Chronic Pain · Physical Therapy · Rehabilitation',
  taglineEs: 'Tratamiento del Dolor',
  description:
    'Board-certified interventional pain management, physical therapy and workers’ compensation care in Brownsville and Sugar Land, Texas.',
  /** Primary contact shown in headers and CTAs */
  primaryPhone: '956-546-7530',
  primaryEmail: 'help@acepain.com',
  /** eClinicalWorks patient portal (from the old site) */
  portalUrl: 'https://mycw16.eclinicalweb.com/portal2523/jsp/100mp/login.jsp',
  /** TODO before launch: replace with a real form endpoint (Formspree, Netlify Forms, etc.) */
  contactFormEndpoint: 'https://formspree.io/f/REPLACE_ME',
  /** TODO: confirm with client — hours were not on the old site */
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  languages: ['English', 'Español'],
};

export const locations: Location[] = [
  {
    id: 'brownsville',
    name: 'Brownsville',
    street: '315 Jose Marti Blvd',
    city: 'Brownsville',
    state: 'TX',
    zip: '78526',
    phone: '956-546-7530',
    fax: '956-546-7531',
    email: 'help@acepain.com',
    mapQuery: '315 Jose Marti Blvd, Brownsville, TX 78526',
  },
  {
    // TODO: confirm with client that this location is still active.
    id: 'sugar-land',
    name: 'Sugar Land',
    street: '123 Lake Pointe Parkway',
    suite: 'Suite 103',
    city: 'Sugar Land',
    state: 'TX',
    zip: '77478',
    phone: '832-532-0050',
    fax: '832-500-4415',
    email: 'help@acepain.com',
    mapQuery: '123 Lake Pointe Parkway Suite 103, Sugar Land, TX 77478',
  },
];

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

export function formatAddress(l: Location) {
  return `${l.street}${l.suite ? `, ${l.suite}` : ''}, ${l.city}, ${l.state} ${l.zip}`;
}

export function mapsHref(l: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapQuery)}`;
}

export function mapsEmbedSrc(l: Location) {
  return `https://www.google.com/maps?q=${encodeURIComponent(l.mapQuery)}&output=embed`;
}
