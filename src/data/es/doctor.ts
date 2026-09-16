// Spanish physician profile. Same shape as ../doctor.ts; photo path is shared.
import { doctor as en } from '../doctor';

export const doctor = {
  ...en,
  name: 'Surya Raguthu, M.D.',
  shortName: 'Dr. Raguthu',
  title: 'Fisiatra Certificado y Médico Intervencionista del Dolor',
  photoAlt: 'Dr. Surya Raguthu',
  summary:
    'Especialista en Medicina Física y Rehabilitación enfocado en medicina musculoesquelética, manejo intervencionista del dolor, compensación laboral y medicina industrial.',
  quote: 'Mi mayor satisfacción es poder tratar a mis pacientes y ayudarlos a volver a caminar.',
  bio: [
    'El Dr. Raguthu completó su residencia en Medicina Física y Rehabilitación en el Kingsbrook Jewish Medical Center en Brooklyn, Nueva York. A través de sus afiliaciones con St. Vincent’s, Beth Israel y Wyckoff Heights Medical Center se formó junto a pioneros de la profesión, ejerciendo rehabilitación cardiaca, pediátrica, de recuperación de coma, de medicina deportiva, general y musculoesquelética.',
    'Ha desarrollado programas de terapia física, ocupacional y del lenguaje en entornos de cuidados agudos, subagudos y ambulatorios. En 2005 se desempeñó como Director Médico del South Texas Rehabilitation Hospital en Brownsville, y en 2008 fundó Active Life Rehab Center, especializado en medicina musculoesquelética, manejo del dolor, compensación laboral y medicina industrial. Ha formado parte de la junta directiva de la Cámara de Comercio de Brownsville.',
    'El Dr. Raguthu se hizo médico por el deseo de ayudar a los demás, motivado por una familia de médicos reconocidos. Brinda servicios gratuitos a pacientes que no pueden costear cierta atención médica, y atribuye su éxito a la disciplina, el trabajo arduo y la satisfacción que encuentra en su propia labor.',
  ],
  credentials: [
    { short: 'AAPMR', long: 'Certificado por la Academia Americana de Medicina Física y Rehabilitación' },
    { short: 'ABIPP', long: 'Junta Americana de Médicos Intervencionistas del Dolor' },
    { short: 'ABIME', long: 'Examinador Médico Independiente Certificado' },
    { short: 'ABPM', long: 'Junta Americana de Medicina del Dolor' },
  ],
  affiliations: [
    'Kingsbrook Jewish Medical Center — residencia en MFR',
    'St. Vincent’s Medical Center',
    'Beth Israel Medical Center',
    'Wyckoff Heights Medical Center',
    'South Texas Rehabilitation Hospital — Director Médico (2005)',
    'Active Life Rehab Center — Fundador (2008)',
    'Cámara de Comercio de Brownsville — Miembro de la junta',
  ],
};
