// Spanish navigation labels and home-page copy. Paths are shared with ../site.ts.
import { nav as enNav, type NavItem } from '../site';

const labels: Record<string, string> = {
  Home: 'Inicio',
  'Pain Management': 'Manejo del Dolor',
  'Physical Therapy': 'Fisioterapia',
  'Workers’ Comp': 'Compensación Laboral',
  'Meet the Doctor': 'Dr. Raguthu',
  'Patient Resources': 'Recursos',
  Contact: 'Contacto',
};
export const nav: NavItem[] = enNav.map((n) => ({ ...n, label: labels[n.label] ?? n.label }));

export const home = {
  eyebrow: 'Brownsville y Sugar Land, Texas',
  headline: 'Usted no tiene que vivir con dolor de espalda o de cuello.',
  subhead:
    'Manejo intervencionista del dolor con certificación de junta, fisioterapia individualizada y atención integral de compensación laboral — la mayor parte en nuestro consultorio, sin hospitalización.',
  primaryCta: 'Solicitar una cita',
  secondaryCta: 'Llamar',
  trustPoints: [
    { label: 'Certificación de junta', detail: 'Fisiatra y médico intervencionista del dolor' },
    { label: 'Ambulatorio', detail: 'Procedimientos el mismo día, sin ingreso hospitalario' },
    { label: 'Fisioterapia 1 a 1', detail: 'El mismo terapeuta durante todo su tratamiento' },
    { label: 'Bilingüe', detail: 'Inglés y español, incluidos los folletos para pacientes' },
  ],
  mission:
    'Nuestra misión es ser el proveedor de manejo del dolor de preferencia a través de la dedicación a la excelencia en el servicio, una alianza con nuestro personal y la atención de la más alta calidad brindada de la manera más ética y rentable.',
  closing: 'Usted no tiene que seguir viviendo con dolor.',
};
