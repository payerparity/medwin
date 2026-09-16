// Physician profile. Facts taken from acepain.com; dated projections removed (see CONTENT-NOTES.md).

export const doctor = {
  name: 'Surya Raguthu, M.D.',
  shortName: 'Dr. Raguthu',
  title: 'Board-Certified Physiatrist & Interventional Pain Physician',
  /** Low-res image from the old site. TODO: replace with a professional portrait. */
  photo: '/images/dr-raguthu.jpg',
  photoAlt: 'Dr. Surya Raguthu',
  /** Short line for cards */
  summary:
    'Physical Medicine & Rehabilitation specialist focused on musculoskeletal medicine, interventional pain management, workers’ compensation and industrial medicine.',
  quote: 'My greatest thrill is being able to treat patients and help them walk again.',
  bio: [
    'Dr. Raguthu completed his residency in Physical Medicine and Rehabilitation at Kingsbrook Jewish Medical Center in Brooklyn, New York. Through affiliations with St. Vincent’s, Beth Israel and Wyckoff Heights Medical Center he trained alongside pioneers in the profession, practicing cardiac, pediatric, coma-recovery, sports-medicine, general and musculoskeletal rehabilitation.',
    'He has developed programs for delivering physical, occupational and speech therapy in acute, sub-acute and outpatient settings. In 2005 he served as Medical Director of South Texas Rehabilitation Hospital in Brownsville, and in 2008 founded Active Life Rehab Center, specializing in musculoskeletal medicine, pain management, workers’ compensation and industrial medicine. He has served on the board of the Brownsville Chamber of Commerce.',
    'Dr. Raguthu became a physician out of a desire to help others, encouraged by a family of renowned physicians. He provides free services to patients who cannot afford certain medical care, and attributes his success to discipline, hard work, and finding fulfillment in the work itself.',
  ],
  credentials: [
    { short: 'AAPMR', long: 'Board Certified, American Academy of Physical Medicine & Rehabilitation' },
    { short: 'ABIPP', long: 'American Board of Interventional Pain Physicians' },
    { short: 'ABIME', long: 'Board Certified Independent Medical Examiner' },
    { short: 'ABPM', long: 'American Board of Pain Medicine' },
  ],
  affiliations: [
    'Kingsbrook Jewish Medical Center — PM&R residency',
    'St. Vincent’s Medical Center',
    'Beth Israel Medical Center',
    'Wyckoff Heights Medical Center',
    'South Texas Rehabilitation Hospital — Medical Director (2005)',
    'Active Life Rehab Center — Founder (2008)',
    'Brownsville Chamber of Commerce — Board Member',
  ],
};
