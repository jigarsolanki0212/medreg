/**
 * Editable content for Training, Exhibitions, Careers, Gallery and Social media.
 *
 * The MedReg team adds, updates or removes entries here; pages update automatically.
 * Per the redesign brief, nothing below is invented: dates, durations, counts, job openings and
 * social links stay empty until MedReg supplies them, and pages show an honest empty state.
 */

/* ───────────────────────────── Training ───────────────────────────── */

export type TrainingStatus = 'upcoming' | 'on-request' | 'past';

export interface TrainingProgram {
  id: string;
  title: string;
  /** e.g. "1 Day". Leave empty when not confirmed; it is then shown as "Duration on request". */
  duration: string;
  description?: string;
  status: TrainingStatus;
  /** ISO date (YYYY-MM-DD) once confirmed. */
  date?: string;
  location?: string;
  format?: string;
  audience?: string;
}

/** Initial training catalogue from the redesign brief (§7). */
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  { id: 'iso-13485-qms-awareness', title: 'ISO 13485 – Quality Management System Awareness', duration: '1 Day', status: 'on-request' },
  { id: 'iso-13485-qms-mdsap', title: 'ISO 13485 – QMS and MDSAP Requirements', duration: '2 Days', status: 'on-request' },
  { id: 'iso-14971-risk-management', title: 'Risk Management as per ISO 14971', duration: '1 Day', status: 'on-request' },
  { id: 'clinical-evaluation', title: 'Clinical Evaluation of Medical Devices', duration: '1 Day', status: 'on-request' },
  { id: 'biological-evaluation', title: 'Biological Evaluation of Medical Devices', duration: '1 Day', status: 'on-request' },
  { id: 'design-development', title: 'Design and Development of Medical Devices', duration: '1 Day', status: 'on-request' },
  { id: 'eu-mdr-awareness', title: 'EU MDR 2017/745 Awareness', duration: '1 Day', status: 'on-request' },
  { id: 'eu-mdr-technical-documentation', title: 'EU MDR Technical Documentation (Annexes I, II and III)', duration: '1 Day', status: 'on-request' },
  { id: 'fda-510k', title: 'Premarket Notification – US FDA 510(k)', duration: '', status: 'on-request' },
  { id: 'labelling-udi-eudamed', title: 'Labelling, UDI, GUDID, Basic UDI-DI and EUDAMED', duration: '', status: 'on-request' },
  { id: 'eo-sterilization-validation', title: 'Ethylene Oxide Sterilization Validation', duration: '', status: 'on-request' },
  { id: 'gamma-sterilization-validation', title: 'Gamma Radiation Sterilization Validation', duration: '', status: 'on-request' },
  { id: 'reprocessing-validation', title: 'Reprocessing of Medical Devices and Validation', duration: '', status: 'on-request' },
  { id: 'microbiological-practices', title: 'Microbiological Practices: GLP, Sterility, Bioburden, BET Testing and Method Validation', duration: '', status: 'on-request' },
];

export interface PastTraining {
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  location: string;
  description?: string;
  highlights?: string[];
  photos?: { src: string; alt: string }[];
}

/** Completed sessions. Add entries as MedReg provides titles, dates, locations and photos. */
export const PAST_TRAININGS: PastTraining[] = [];

/** Audience wording from the client's USA training content. */
export const TRAINING_AUDIENCE =
  'Medical device manufacturers, regulatory affairs professionals, quality assurance teams, and other industry personnel.';

/* ──────────────────────────── Exhibitions ─────────────────────────── */

export interface Exhibition {
  id: string;
  name: string;
  /** ISO dates once confirmed. `year` is used when exact dates are not available. */
  startDate?: string;
  endDate?: string;
  year: number;
  venue?: string;
  city: string;
  country: string;
  booth?: string;
  description?: string;
  highlights?: string[];
  /** Cover image (promotional graphic or booth photo). */
  image?: string;
  photos?: { src: string; alt: string }[];
  /** Optional page with more detail. */
  href?: string;
  status: 'upcoming' | 'past';
}

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'whx-dubai-2026',
    name: 'WHX Dubai 2026 (World Health Expo)',
    year: 2026,
    city: 'Dubai',
    country: 'United Arab Emirates',
    image: '/assets/Blue-And-White-Modern-Student-Study-Visa-Services-Instagram-Post-819x1024.jpg',
    href: '/landing-page/',
    // Exact dates, venue and booth photos to be confirmed by MedReg.
    status: 'past',
  },
];

/* ───────────────────────────── Careers ────────────────────────────── */

export interface JobOpening {
  id: string;
  designation: string;
  department?: string;
  location: string;
  employmentType: string;
  experience: string;
  qualifications: string[];
  description: string;
  responsibilities?: string[];
}

/** Job designations and requirements will be provided by MedReg (brief §9). */
export const JOB_OPENINGS: JobOpening[] = [];

/* ───────────────────────────── Gallery ────────────────────────────── */

export type GalleryCategory = 'Team' | 'Office & Workplace' | 'Celebrations & Events' | 'Training & Workshops' | 'Exhibitions' | 'Milestones';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/home_about.png', alt: 'The MedReg team', caption: 'The MedReg team', category: 'Team', width: 564, height: 574 },
  { src: '/assets/office-01.png', alt: 'MedReg office, Titanium Business Park, Ahmedabad', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-02.png', alt: 'MedReg office meeting room', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-03.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-04.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-05.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-06.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
];

/* ─────────────────────────── Social media ─────────────────────────── */

/**
 * Official MedReg profiles. Leave a value empty until MedReg confirms the URL; empty profiles are not
 * shown anywhere on the site. `youtubeVideoIds` lists videos to embed (the 11-character id from the URL).
 */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/www.medreg.in/',
  instagram: 'https://www.instagram.com/medreg_/',
  youtube: 'https://www.youtube.com/@medregnotes',
  /** Channel id used to read the public RSS feed of latest videos (refreshed every 6 hours). */
  youtubeChannelId: 'UCGDhiNZdNf415uGRJM9IFFA',
  youtubeVideoIds: [] as string[],
};
