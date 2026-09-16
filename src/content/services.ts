// The three service lines. Copy is cleaned up from acepain.com; see CONTENT-NOTES.md for what changed.

export interface ConditionGroup {
  title: string;
  items: string[];
}

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Service {
  slug: 'pain-management' | 'physical-therapy' | 'workers-comp';
  title: string;
  shortTitle: string;
  /** One line, used on cards */
  blurb: string;
  /** Intro paragraph for the top of the service page */
  intro: string;
  /** Headline list shown on home page cards and the service page sidebar */
  highlights: string[];
  sections: Section[];
  conditionGroups?: ConditionGroup[];
}

export const services: Service[] = [
  {
    slug: 'pain-management',
    title: 'Interventional Pain Management',
    shortTitle: 'Pain Management',
    blurb:
      'Minimally invasive, outpatient procedures for neck, back, joint and nerve pain — no hospital stay, no long recovery.',
    intro:
      'More than 70 million Americans live with pain. Left untreated it wears on every part of daily life — work, sleep, relationships. Pain is the body’s signal that something is wrong, and it deserves a diagnosis and a plan, not just a prescription. Our specialists diagnose and treat acute and chronic pain using injection therapy, medication management and minimally invasive procedures designed to improve quality of life.',
    highlights: [
      'Neck & back pain',
      'Shoulder, elbow, wrist & hand',
      'Hip, knee & ankle',
      'Carpal tunnel syndrome',
      'Sacroiliac joint injections',
      'Cerebral palsy & Bell’s palsy',
    ],
    sections: [
      {
        heading: 'Back & spine pain',
        paragraphs: [
          'Chronic pain is pain that does not resolve over a short period of time. It most often affects the spine — the neck and low back — and the extremities, and it can show up as headaches, migraines or pain radiating into one or more joints. It interferes with everyday activity and, over time, with a person’s ability to work and maintain healthy relationships.',
          'We work closely with trained pain specialists to ensure optimal treatment. Our conservative, compassionate approach is designed to stop the downward spiral that chronic pain causes — and most of what we do happens in our office, as an outpatient, without sedation or a hospital admission.',
        ],
      },
      {
        heading: 'Treatments',
        paragraphs: [
          'Neck and back surgery has traditionally meant risk and a lengthy recovery. For most of our patients it is not the first answer. We treat spinal stenosis, herniated discs, pinched nerves and arthritis of the spine with procedures that are safe, require no hospital stay, and let you return home the same day.',
          'If you have spent weeks or months on conservative care — physical therapy, medication, hot/cold therapy, massage, chiropractic — without relief, talk to us before you consider surgery. When surgery is the right call, Dr. Raguthu works closely with local neurosurgeons to coordinate comprehensive care.',
        ],
        bullets: [
          'Epidural steroid injections (cervical, thoracic, lumbar)',
          'Facet joint injections & medial branch blocks',
          'Radiofrequency ablation (RFA)',
          'Selective nerve root blocks',
          'Sacroiliac joint injections',
          'Occipital nerve blocks for headache',
          'Discography',
          'Lysis of epidural adhesions',
          'Medication management',
        ],
      },
      {
        heading: 'Orthopedic & sports injuries',
        paragraphs: [
          'Whether you are a weekend warrior, a high-school athlete, a marathon runner, or simply someone who wants to get through the day without pain, our staff works to reduce your pain, restore your function, and give you the tools to keep the results for the long term.',
          'Treatment is built around an individual evaluation and combines manual therapy, progressive therapeutic exercise, sport-specific training and a home exercise program.',
        ],
      },
    ],
  },
  {
    slug: 'physical-therapy',
    title: 'Physical Therapy & Rehabilitation',
    shortTitle: 'Physical Therapy',
    blurb:
      'One-on-one care from the same licensed therapist for the duration of your treatment, under the supervision of a board-certified physiatrist.',
    intro:
      'Our facility treats chronic and acute injuries and impairments under the guidance of Dr. Surya Raguthu, a board-certified physiatrist, and an experienced staff of licensed physical therapists. Using a one-on-one approach, we treat musculoskeletal and neurological conditions, orthopedic and sports injuries, and post-operative recovery with current techniques and top-of-the-line equipment.',
    highlights: [
      'Sports medicine & injuries',
      'Stroke rehabilitation',
      'Joint replacement recovery',
      'Spine rehabilitation',
      'Balance & posture training',
      'Ultrasound & electrical stimulation',
    ],
    sections: [
      {
        heading: 'Specialized care',
        paragraphs: [
          'Our certified physical therapists have advanced training to meet the needs of a wide range of patients. You see the same therapist for the duration of your therapy, and treatment focuses on the cause of pain rather than just the symptoms. As a courtesy, we contact your insurance company to pre-authorize physical therapy and foot orthotics.',
        ],
        bullets: [
          'Treatment of spine conditions',
          'Headache management',
          'Spinal decompression and ATM-2 therapy',
          'Pre- and post-operative therapy for knee, hip, foot, shoulder and elbow',
          'Foot orthotics',
          'Sports medicine',
          'Neuromuscular re-education',
          'Massage, ultrasound therapy, electrical stimulation, joint manipulation',
        ],
      },
      {
        heading: 'Our approach',
        paragraphs: [
          'From a balance disorder to an aching back, we provide compassionate, expert care in a warm and inviting environment. We honor your appointment schedule, respect your personal needs, and encourage your progress. In short, we are dedicated to your wellness.',
        ],
      },
    ],
    conditionGroups: [
      { title: 'Hand & wrist', items: ['Carpal tunnel syndrome', 'Skier’s thumb', 'DeQuervain’s tenosynovitis'] },
      { title: 'Elbow', items: ['Lateral epicondylitis (tennis elbow)', 'Medial epicondylitis (golfer’s elbow)'] },
      {
        title: 'Shoulder',
        items: ['Rotator cuff injury', 'Shoulder impingement', 'Dislocation & instability', 'AC separation', 'Post-arthroscopic surgery'],
      },
      {
        title: 'Spine & neck',
        items: [
          'Lumbar disc herniation',
          'Lumbosacral strains & sprains',
          'Spinal stenosis',
          'Degenerative disc disease',
          'Cervical strain',
          'Spondylolisthesis',
          'Ankylosing spondylitis',
          'Radiculopathy',
          'S-I joint dysfunction',
          'Post-laminectomy, discectomy & fusion',
        ],
      },
      { title: 'Hip', items: ['Total hip replacement', 'Labral tears', 'Hip bursitis'] },
      {
        title: 'Knee',
        items: [
          'ACL & PCL tears / reconstruction',
          'MCL & LCL injury',
          'Meniscal tear',
          'Chondromalacia patella',
          'Patellar tendonitis / patellofemoral pain',
          'Patella malalignment or dislocation',
          'Total knee replacement',
          'Bursitis',
        ],
      },
      { title: 'Foot & ankle', items: ['Achilles tendon', 'Bunions', 'Ankle sprains'] },
      {
        title: 'Pediatrics',
        items: ['Torticollis', 'Spina bifida', 'Scoliosis', 'Osgood-Schlatter’s disease', 'Sever’s disease', 'Developmental milestones', 'Cerebral palsy'],
      },
      { title: 'Post-surgical', items: ['Rehabilitation after orthopedic and spine surgery'] },
    ],
  },
  {
    slug: 'workers-comp',
    title: 'Workers’ Compensation',
    shortTitle: 'Workers’ Comp',
    blurb:
      'Complete evaluation, treatment and return-to-work programs for Texas work-related injuries — from consultation through maximum medical improvement.',
    intro:
      'More than four million U.S. workers are injured on the job each year. Work-related injuries most often affect the back, neck and extremities and are tied to hazards in the workplace — poor ergonomics, equipment failure, exposure, or inadequate safety training. Injured workers in Texas are entitled to medical care and wage replacement, and our program handles both the treatment and the paperwork.',
    highlights: [
      'Disability & required medical evaluations',
      'Functional capacity evaluations',
      'Maximum medical improvement (MMI)',
      'Work conditioning & hardening',
      'DOT physicals & drug testing',
      'Back & neck school',
    ],
    sections: [
      {
        heading: 'What we provide',
        paragraphs: [
          'Our Texas workers’ compensation program offers a full range of treatment and claims-processing services for patients who have suffered a work-related injury.',
        ],
        bullets: [
          'Consultations for work-related injury patients',
          'Complete medical diagnostics and evaluation',
          'Comprehensive work-related injury treatment options',
          'Carpal tunnel treatment',
          'Spinal, joint and extremity injury treatment',
          'Work hardening and conditioning program',
          'Psychologically based chronic pain management programs',
          'Ongoing progress evaluations and therapy',
          'Body mechanics and posture training',
          'Prolotherapy',
        ],
      },
      {
        heading: 'Back pain and spine pain',
        paragraphs: [
          'Back pain is one of the most common complaints in adults. For some it is the result of a lifetime of habits; for others, an accident, a strain, or a sports injury. Treatment depends entirely on the individual, so we begin with a detailed evaluation to find the source of pain and build a plan specific to your condition, using a multidisciplinary approach.',
        ],
        bullets: [
          'Chronic ache or stiffness along the spine, from neck to hips',
          'Sharp, localized pain after lifting or overexertion',
          'Persistent aching after prolonged sitting or standing',
          'Pain radiating from the lower back into the buttocks, thighs, calves or feet',
          'Muscle spasms when attempting to stand straight',
        ],
      },
      {
        heading: 'Types of back pain',
        paragraphs: [
          'Upper and middle back pain is less common than lower back pain but can be just as debilitating; most cases come from muscle strain, poor posture or a herniated disc. Lower back pain is far more widespread and harder to diagnose — causes include herniated discs, spinal stenosis, osteoarthritis and spondylolisthesis. Spine pain can be isolated to the cervical (neck), thoracic (mid-back), lumbar (low back) or sacral (pelvic) region, or present in several at once.',
        ],
      },
    ],
  },
];

export const serviceBySlug = (slug: Service['slug']) => services.find((s) => s.slug === slug)!;

/** Conditions we see most often — used for the home page "we treat" strips */
export const commonConditions = [
  'Neck pain',
  'Low back pain',
  'Herniated disc',
  'Sciatica',
  'Spinal stenosis',
  'Arthritis of the spine',
  'Headaches & migraines',
  'Shoulder & rotator cuff',
  'Knee pain',
  'Hip pain',
  'Carpal tunnel',
  'Sports injuries',
  'Work injuries',
  'Fibromyalgia',
  'Failed back surgery',
  'Post-surgical rehab',
];
