// Patient-education brochures (PDF). Files live in public/brochures/{en,es}/<slug>.pdf.
// `es: false` means no Spanish version exists on the old site.

export interface Brochure {
  slug: string;
  title: string;
  titleEs: string;
  region: 'Cervical' | 'Thoracic' | 'Lumbar' | 'Other';
  es: boolean;
}

export const brochures: Brochure[] = [
  // Cervical
  { slug: 'atlanto-occipital-joint-injection', title: 'Atlanto-Occipital (C0–1) Joint Injection', titleEs: 'Inyección en la articulación atlanto-occipital', region: 'Cervical', es: true },
  { slug: 'atlanto-axial-joint-injection', title: 'Atlanto-Axial (C1–2) Joint Injection', titleEs: 'Inyección en la articulación atlanto-axial', region: 'Cervical', es: true },
  { slug: 'cervical-interlaminar-esi', title: 'Cervical Interlaminar Epidural Steroid Injection', titleEs: 'Inyección epidural interlaminar cervical', region: 'Cervical', es: true },
  { slug: 'cervical-selective-nerve-root-block', title: 'Cervical Selective Nerve Root Block', titleEs: 'Bloqueo selectivo de raíces nerviosas cervicales', region: 'Cervical', es: true },
  { slug: 'cervical-transforaminal-esi', title: 'Cervical Transforaminal Epidural Steroid Injection', titleEs: 'Inyección epidural transforaminal cervical', region: 'Cervical', es: true },
  { slug: 'cervical-facet-injection', title: 'Cervical Facet Injection', titleEs: 'Inyección de facetas cervicales', region: 'Cervical', es: true },
  { slug: 'cervical-medial-branch-block', title: 'Cervical Medial Branch Block', titleEs: 'Bloqueo de la rama medial cervical', region: 'Cervical', es: true },
  { slug: 'cervical-rfa', title: 'Cervical Radiofrequency Ablation (RFA)', titleEs: 'Ablación por radiofrecuencia cervical', region: 'Cervical', es: true },
  { slug: 'occipital-nerve-block', title: 'Occipital Nerve Block', titleEs: 'Bloqueo del nervio occipital', region: 'Cervical', es: false },
  // Thoracic
  { slug: 'thoracic-interlaminar-esi', title: 'Thoracic Interlaminar Epidural Steroid Injection', titleEs: 'Inyección epidural interlaminar torácica', region: 'Thoracic', es: false },
  { slug: 'thoracic-selective-nerve-root-block', title: 'Thoracic Selective Nerve Root Block', titleEs: 'Bloqueo selectivo de raíces nerviosas torácicas', region: 'Thoracic', es: true },
  { slug: 'thoracic-transforaminal-esi', title: 'Thoracic Transforaminal Epidural Steroid Injection', titleEs: 'Inyección epidural transforaminal torácica', region: 'Thoracic', es: true },
  { slug: 'thoracic-facet-injection', title: 'Thoracic Facet Injection', titleEs: 'Inyección de facetas torácicas', region: 'Thoracic', es: false },
  { slug: 'thoracic-medial-branch-block', title: 'Thoracic Medial Branch Block', titleEs: 'Bloqueo de la rama medial torácica', region: 'Thoracic', es: true },
  { slug: 'thoracic-rfa', title: 'Thoracic Radiofrequency Ablation (RFA)', titleEs: 'Ablación por radiofrecuencia torácica', region: 'Thoracic', es: true },
  // Lumbar
  { slug: 'lumbar-interlaminar-esi', title: 'Lumbar Interlaminar Epidural Steroid Injection', titleEs: 'Inyección epidural interlaminar lumbar', region: 'Lumbar', es: true },
  { slug: 'lumbar-selective-nerve-root-block', title: 'Lumbar Selective Nerve Root Block', titleEs: 'Bloqueo selectivo de raíces nerviosas lumbares', region: 'Lumbar', es: true },
  { slug: 'lumbar-transforaminal-esi', title: 'Lumbar Transforaminal Epidural Steroid Injection', titleEs: 'Inyección epidural transforaminal lumbar', region: 'Lumbar', es: true },
  { slug: 'lumbar-epidural-lysis-of-adhesions', title: 'Lumbar Epidural Lysis of Adhesions', titleEs: 'Lisis epidural lumbar de adherencias', region: 'Lumbar', es: false },
  { slug: 'lumbar-facet-injection', title: 'Lumbar Facet Injection', titleEs: 'Inyección de facetas lumbares', region: 'Lumbar', es: false },
  { slug: 'lumbar-medial-branch-block', title: 'Lumbar Medial Branch Block', titleEs: 'Bloqueo de la rama medial lumbar', region: 'Lumbar', es: true },
  { slug: 'lumbar-rfa', title: 'Lumbar Radiofrequency Ablation (RFA)', titleEs: 'Ablación por radiofrecuencia lumbar', region: 'Lumbar', es: false },
  { slug: 'lumbar-discography', title: 'Lumbar Discography', titleEs: 'Discografía lumbar', region: 'Lumbar', es: true },
  // Other
  { slug: 'sacroiliac-joint-injection', title: 'Sacroiliac Joint Injection', titleEs: 'Inyección en la articulación sacroilíaca', region: 'Other', es: true },
];

export const brochureHref = (b: Brochure, lang: 'en' | 'es') => `/brochures/${lang}/${b.slug}.pdf`;

export const brochureRegions = ['Cervical', 'Thoracic', 'Lumbar', 'Other'] as const;
