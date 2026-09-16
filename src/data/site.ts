// Navigation, vibes, and home-page copy shared by every vibe.

export interface NavItem { label: string; path: string }

export const nav: NavItem[] = [
  { label: 'Home', path: '' },
  { label: 'Pain Management', path: 'pain-management/' },
  { label: 'Physical Therapy', path: 'physical-therapy/' },
  { label: 'Workers’ Comp', path: 'workers-comp/' },
  { label: 'Meet the Doctor', path: 'doctor/' },
  { label: 'Patient Resources', path: 'resources/' },
  { label: 'Contact', path: 'contact/' },
];

export interface Vibe {
  id: 'clinical' | 'warm' | 'bold' | 'editorial';
  name: string;
  mood: string;
  description: string;
}

export const vibes: Vibe[] = [
  {
    id: 'clinical',
    name: 'Clinical Trust',
    mood: 'Clean, credible, modern-hospital',
    description:
      'White space, medical blue, structured cards. Reads like a well-run health system. Safest choice for insurance-driven and referral patients.',
  },
  {
    id: 'warm',
    name: 'Warm & Human',
    mood: 'Caring, neighborly, approachable',
    description:
      'Cream and terracotta, soft serif headlines, rounded shapes. Feels like a practice that knows your name. Good for a community-focused message.',
  },
  {
    id: 'bold',
    name: 'Bold & Athletic',
    mood: 'Energetic, confident, get-back-to-it',
    description:
      'Dark charcoal with an electric accent and big condensed type. Leans into sports medicine and getting workers back on the job.',
  },
  {
    id: 'editorial',
    name: 'Editorial',
    mood: 'Calm, premium, considered',
    description:
      'Off-white, deep navy, elegant serif and thin rules. Magazine-like restraint that signals expertise without shouting.',
  },
];

export const home = {
  eyebrow: 'Brownsville & Sugar Land, Texas',
  headline: 'You don’t have to live with back or neck pain.',
  subhead:
    'Board-certified interventional pain management, one-on-one physical therapy, and complete workers’ compensation care — most of it done in our office, without a hospital stay.',
  primaryCta: 'Request an appointment',
  secondaryCta: 'Call',
  trustPoints: [
    { label: 'Board-certified', detail: 'Physiatrist & interventional pain physician' },
    { label: 'Outpatient', detail: 'Same-day procedures, no hospital admission' },
    { label: 'One-on-one PT', detail: 'Same therapist for your whole course of care' },
    { label: 'Bilingual', detail: 'English & Spanish, including patient brochures' },
  ],
  mission:
    'Our mission is to be the pain-management provider of choice through dedication to service excellence, a partnership with our staff, and the highest-quality care delivered in the most cost-effective and ethical manner.',
  closing: 'You don’t have to live a life in pain any longer.',
};
