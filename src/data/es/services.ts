// Spanish content for the three service lines. Same shape and slugs as ../services.ts.
import type { Service } from '../services';

export const services: Service[] = [
  {
    slug: 'pain-management',
    title: 'Manejo Intervencionista del Dolor',
    shortTitle: 'Manejo del Dolor',
    blurb:
      'Procedimientos ambulatorios mínimamente invasivos para el dolor de cuello, espalda, articulaciones y nervios — sin hospitalización ni recuperación prolongada.',
    intro:
      'Más de 70 millones de estadounidenses viven con dolor. Sin tratamiento, el dolor afecta cada aspecto de la vida diaria: el trabajo, el sueño, las relaciones. El dolor es la señal del cuerpo de que algo anda mal, y merece un diagnóstico y un plan, no solo una receta. Nuestros especialistas diagnostican y tratan el dolor agudo y crónico con terapia de inyecciones, manejo de medicamentos y procedimientos mínimamente invasivos diseñados para mejorar su calidad de vida.',
    highlights: [
      'Dolor de cuello y espalda',
      'Hombro, codo, muñeca y mano',
      'Cadera, rodilla y tobillo',
      'Síndrome del túnel carpiano',
      'Inyecciones en la articulación sacroilíaca',
      'Parálisis cerebral y parálisis de Bell',
    ],
    sections: [
      {
        heading: 'Dolor de espalda y columna',
        paragraphs: [
          'El dolor crónico es aquel que no se resuelve en un periodo corto de tiempo. Afecta con mayor frecuencia la columna — el cuello y la parte baja de la espalda — y las extremidades, y puede manifestarse como dolores de cabeza, migrañas o dolor que se irradia a una o varias articulaciones. Interfiere con las actividades diarias y, con el tiempo, con la capacidad de trabajar y mantener relaciones saludables.',
          'Trabajamos de cerca con especialistas capacitados en dolor para asegurar el tratamiento óptimo. Nuestro enfoque conservador y compasivo está diseñado para detener la espiral descendente que provoca el dolor crónico — y la mayor parte de lo que hacemos ocurre en nuestro consultorio, de forma ambulatoria, sin sedación ni ingreso al hospital.',
        ],
      },
      {
        heading: 'Tratamientos',
        paragraphs: [
          'La cirugía de cuello y espalda tradicionalmente ha significado riesgo y una recuperación larga. Para la mayoría de nuestros pacientes no es la primera respuesta. Tratamos la estenosis espinal, las hernias de disco, los nervios pinzados y la artritis de la columna con procedimientos seguros, que no requieren hospitalización y le permiten regresar a casa el mismo día.',
          'Si ha pasado semanas o meses con tratamientos conservadores — fisioterapia, medicamentos, terapia de frío y calor, masajes, quiropráctica — sin alivio, hable con nosotros antes de considerar la cirugía. Cuando la cirugía es la opción correcta, el Dr. Raguthu trabaja en estrecha colaboración con neurocirujanos locales para coordinar una atención integral.',
        ],
        bullets: [
          'Inyecciones epidurales de esteroides (cervicales, torácicas, lumbares)',
          'Inyecciones en articulaciones facetarias y bloqueos de rama medial',
          'Ablación por radiofrecuencia (RFA)',
          'Bloqueos selectivos de raíces nerviosas',
          'Inyecciones en la articulación sacroilíaca',
          'Bloqueos del nervio occipital para el dolor de cabeza',
          'Discografía',
          'Lisis de adherencias epidurales',
          'Manejo de medicamentos',
        ],
      },
      {
        heading: 'Lesiones ortopédicas y deportivas',
        paragraphs: [
          'Ya sea que usted sea un deportista de fin de semana, un atleta de preparatoria, un corredor de maratón o simplemente alguien que quiere pasar el día sin dolor, nuestro equipo trabaja para reducir su dolor, restaurar su función y darle las herramientas para mantener los resultados a largo plazo.',
          'El tratamiento se basa en una evaluación individual y combina terapia manual, ejercicio terapéutico progresivo, entrenamiento específico para su deporte y un programa de ejercicios en casa.',
        ],
      },
    ],
  },
  {
    slug: 'physical-therapy',
    title: 'Fisioterapia y Rehabilitación',
    shortTitle: 'Fisioterapia',
    blurb:
      'Atención individual con el mismo fisioterapeuta certificado durante todo su tratamiento, bajo la supervisión de un fisiatra certificado.',
    intro:
      'Nuestro centro trata lesiones y padecimientos crónicos y agudos bajo la dirección del Dr. Surya Raguthu, fisiatra certificado, y un equipo experimentado de fisioterapeutas con licencia. Con un enfoque uno a uno, tratamos condiciones musculoesqueléticas y neurológicas, lesiones ortopédicas y deportivas, y la recuperación postoperatoria con técnicas actuales y equipo de primera línea.',
    highlights: [
      'Medicina y lesiones deportivas',
      'Rehabilitación tras un derrame cerebral',
      'Recuperación de reemplazo articular',
      'Rehabilitación de columna',
      'Entrenamiento de equilibrio y postura',
      'Ultrasonido y estimulación eléctrica',
    ],
    sections: [
      {
        heading: 'Atención especializada',
        paragraphs: [
          'Nuestros fisioterapeutas certificados cuentan con capacitación avanzada para atender a una amplia variedad de pacientes. Usted ve al mismo terapeuta durante todo su tratamiento, y la terapia se enfoca en la causa del dolor y no solo en los síntomas. Como cortesía, nos comunicamos con su aseguradora para preautorizar la fisioterapia y las plantillas ortopédicas.',
        ],
        bullets: [
          'Tratamiento de padecimientos de la columna',
          'Manejo del dolor de cabeza',
          'Descompresión espinal y terapia ATM-2',
          'Terapia pre y postoperatoria de rodilla, cadera, pie, hombro y codo',
          'Plantillas ortopédicas',
          'Medicina deportiva',
          'Reeducación neuromuscular',
          'Masaje, terapia de ultrasonido, estimulación eléctrica, manipulación articular',
        ],
      },
      {
        heading: 'Nuestro enfoque',
        paragraphs: [
          'Desde un trastorno del equilibrio hasta un dolor de espalda, brindamos atención experta y compasiva en un ambiente cálido y acogedor. Respetamos su horario de citas, atendemos sus necesidades personales y celebramos su progreso. En pocas palabras, estamos dedicados a su bienestar.',
        ],
      },
    ],
    conditionGroups: [
      { title: 'Mano y muñeca', items: ['Síndrome del túnel carpiano', 'Pulgar del esquiador', 'Tenosinovitis de DeQuervain'] },
      { title: 'Codo', items: ['Epicondilitis lateral (codo de tenista)', 'Epicondilitis medial (codo de golfista)'] },
      {
        title: 'Hombro',
        items: ['Lesión del manguito rotador', 'Pinzamiento del hombro', 'Luxación e inestabilidad', 'Separación acromioclavicular', 'Postoperatorio de artroscopia'],
      },
      {
        title: 'Columna y cuello',
        items: [
          'Hernia de disco lumbar',
          'Esguinces y distensiones lumbosacras',
          'Estenosis espinal',
          'Enfermedad degenerativa de disco',
          'Distensión cervical',
          'Espondilolistesis',
          'Espondilitis anquilosante',
          'Radiculopatía',
          'Disfunción de la articulación sacroilíaca',
          'Postoperatorio de laminectomía, discectomía y fusión',
        ],
      },
      { title: 'Cadera', items: ['Reemplazo total de cadera', 'Desgarros del labrum', 'Bursitis de cadera'] },
      {
        title: 'Rodilla',
        items: [
          'Desgarro / reconstrucción de LCA y LCP',
          'Lesión de LCM y LCL',
          'Desgarro de menisco',
          'Condromalacia rotuliana',
          'Tendinitis rotuliana / dolor patelofemoral',
          'Mala alineación o luxación de rótula',
          'Reemplazo total de rodilla',
          'Bursitis',
        ],
      },
      { title: 'Pie y tobillo', items: ['Tendón de Aquiles', 'Juanetes', 'Esguinces de tobillo'] },
      {
        title: 'Pediatría',
        items: ['Tortícolis', 'Espina bífida', 'Escoliosis', 'Enfermedad de Osgood-Schlatter', 'Enfermedad de Sever', 'Hitos del desarrollo', 'Parálisis cerebral'],
      },
      { title: 'Postquirúrgico', items: ['Rehabilitación después de cirugía ortopédica y de columna'] },
    ],
  },
  {
    slug: 'workers-comp',
    title: 'Compensación Laboral',
    shortTitle: 'Compensación Laboral',
    blurb:
      'Evaluación completa, tratamiento y programas de regreso al trabajo para lesiones laborales en Texas — desde la consulta hasta la mejoría médica máxima.',
    intro:
      'Más de cuatro millones de trabajadores en EE. UU. se lesionan en el trabajo cada año. Las lesiones laborales afectan con mayor frecuencia la espalda, el cuello y las extremidades, y están relacionadas con riesgos en el lugar de trabajo: mala ergonomía, fallas de equipo, exposición o capacitación de seguridad insuficiente. Los trabajadores lesionados en Texas tienen derecho a atención médica y reemplazo de salario, y nuestro programa se encarga tanto del tratamiento como del papeleo.',
    highlights: [
      'Evaluaciones de discapacidad y médicas requeridas',
      'Evaluaciones de capacidad funcional',
      'Mejoría médica máxima (MMI)',
      'Acondicionamiento y fortalecimiento laboral',
      'Exámenes físicos DOT y pruebas de drogas',
      'Escuela de espalda y cuello',
    ],
    sections: [
      {
        heading: 'Lo que ofrecemos',
        paragraphs: [
          'Nuestro programa de compensación laboral de Texas ofrece una gama completa de servicios de tratamiento y procesamiento de reclamos para pacientes que han sufrido una lesión relacionada con el trabajo.',
        ],
        bullets: [
          'Consultas para pacientes con lesiones laborales',
          'Diagnóstico y evaluación médica completos',
          'Opciones integrales de tratamiento para lesiones laborales',
          'Tratamiento del túnel carpiano',
          'Tratamiento de lesiones de columna, articulaciones y extremidades',
          'Programa de fortalecimiento y acondicionamiento laboral',
          'Programas de manejo del dolor crónico con enfoque psicológico',
          'Evaluaciones de progreso y terapia continuas',
          'Entrenamiento en mecánica corporal y postura',
          'Proloterapia',
        ],
      },
      {
        heading: 'Dolor de espalda y de columna',
        paragraphs: [
          'El dolor de espalda es una de las molestias más comunes en los adultos. Para algunos es el resultado de toda una vida de hábitos; para otros, de un accidente, una distensión o una lesión deportiva. El tratamiento depende por completo de cada persona, por lo que comenzamos con una evaluación detallada para encontrar el origen del dolor y crear un plan específico para su condición, con un enfoque multidisciplinario.',
        ],
        bullets: [
          'Dolor o rigidez crónica a lo largo de la columna, del cuello a las caderas',
          'Dolor agudo y localizado después de levantar peso o esforzarse demasiado',
          'Dolor persistente después de estar sentado o de pie por mucho tiempo',
          'Dolor que se irradia de la espalda baja a los glúteos, muslos, pantorrillas o pies',
          'Espasmos musculares al intentar enderezarse',
        ],
      },
      {
        heading: 'Tipos de dolor de espalda',
        paragraphs: [
          'El dolor de la espalda alta y media es menos común que el de la espalda baja, pero puede ser igual de incapacitante; la mayoría de los casos provienen de distensión muscular, mala postura o una hernia de disco. El dolor de la espalda baja es mucho más frecuente y más difícil de diagnosticar — sus causas incluyen hernias de disco, estenosis espinal, osteoartritis y espondilolistesis. El dolor de columna puede limitarse a la región cervical (cuello), torácica (espalda media), lumbar (espalda baja) o sacra (pelvis), o presentarse en varias a la vez.',
        ],
      },
    ],
  },
];

export const commonConditions = [
  'Dolor de cuello',
  'Dolor de espalda baja',
  'Hernia de disco',
  'Ciática',
  'Estenosis espinal',
  'Artritis de la columna',
  'Dolores de cabeza y migrañas',
  'Hombro y manguito rotador',
  'Dolor de rodilla',
  'Dolor de cadera',
  'Túnel carpiano',
  'Lesiones deportivas',
  'Lesiones laborales',
  'Fibromialgia',
  'Cirugía de espalda fallida',
  'Rehabilitación postquirúrgica',
];
