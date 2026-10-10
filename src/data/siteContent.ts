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
  /** Card photo. Placeholder stock photos are used until MedReg supplies its own. */
  image?: string;
}

/** Initial training catalogue from the redesign brief (§7). */
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  { id: 'iso-13485-qms-awareness', title: 'ISO 13485 – Quality Management System Awareness', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-qms.jpg' },
  { id: 'iso-13485-qms-mdsap', title: 'ISO 13485 – QMS and MDSAP Requirements', duration: '2 Days', status: 'on-request', image: '/assets/placeholders/training-mdsap.jpg' },
  { id: 'iso-14971-risk-management', title: 'Risk Management as per ISO 14971', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-risk.jpg' },
  { id: 'clinical-evaluation', title: 'Clinical Evaluation of Medical Devices', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-clinical.jpg' },
  { id: 'biological-evaluation', title: 'Biological Evaluation of Medical Devices', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-biological.jpg' },
  { id: 'design-development', title: 'Design and Development of Medical Devices', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-design.jpg' },
  { id: 'eu-mdr-awareness', title: 'EU MDR 2017/745 Awareness', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-eu-mdr.jpg' },
  { id: 'eu-mdr-technical-documentation', title: 'EU MDR Technical Documentation (Annexes I, II and III)', duration: '1 Day', status: 'on-request', image: '/assets/placeholders/training-techdoc.jpg' },
  { id: 'fda-510k', title: 'Premarket Notification – US FDA 510(k)', duration: '', status: 'on-request', image: '/assets/placeholders/training-fda.jpg' },
  { id: 'labelling-udi-eudamed', title: 'Labelling, UDI, GUDID, Basic UDI-DI and EUDAMED', duration: '', status: 'on-request', image: '/assets/placeholders/training-labelling.jpg' },
  { id: 'eo-sterilization-validation', title: 'Ethylene Oxide Sterilization Validation', duration: '', status: 'on-request', image: '/assets/placeholders/training-sterilization.jpg' },
  { id: 'gamma-sterilization-validation', title: 'Gamma Radiation Sterilization Validation', duration: '', status: 'on-request', image: '/assets/placeholders/training-gamma.jpg' },
  { id: 'reprocessing-validation', title: 'Reprocessing of Medical Devices and Validation', duration: '', status: 'on-request', image: '/assets/placeholders/training-reprocessing.jpg' },
  { id: 'microbiological-practices', title: 'Microbiological Practices: GLP, Sterility, Bioburden, BET Testing and Method Validation', duration: '', status: 'on-request', image: '/assets/placeholders/training-microbiology.jpg' },
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

/** Photos for the "Training moments" strip. Placeholders until MedReg supplies real training photos. */
export const TRAINING_PHOTOS: { src: string; alt: string; placeholder?: boolean }[] = [];

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
  /** Used only when no dates are set. With dates, the status is worked out automatically (see exhibitionStatus). */
  status: 'upcoming' | 'past';
}

/** An exhibition with dates moves to "past" automatically the day after it ends (brief §13). */
export function exhibitionStatus(e: Exhibition, today = new Date()): 'upcoming' | 'past' {
  const end = e.endDate || e.startDate;
  if (!end) return e.status;
  return new Date(`${end}T23:59:59+05:30`) < today ? 'past' : 'upcoming';
}

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'whx-dubai-2026',
    name: 'WHX Dubai 2026 (World Health Expo)',
    year: 2026,
    city: 'Dubai',
    country: 'United Arab Emirates',
    image: '/assets/placeholders/exhibition-meeting.jpg', // placeholder; WHX flyer is on /landing-page/
    href: '/landing-page/',
    // Exact dates, venue and booth photos to be confirmed by MedReg. Album photos below are placeholders.
    photos: [
      { src: '/assets/placeholders/album-stage.jpg', alt: 'Exhibition stage' },
      { src: '/assets/placeholders/album-discussion.jpg', alt: 'Discussion with visitors' },
      { src: '/assets/placeholders/album-meeting.jpg', alt: 'Meeting at the booth' },
    ],
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
  /** Stock photo shown until MedReg supplies its own; kept out of structured data. */
  placeholder?: boolean;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/assets/placeholders/gallery-team.jpg', alt: 'The MedReg team at work', caption: 'Our team', category: 'Team', width: 960, height: 640, placeholder: true },
  { src: '/assets/office-01.png', alt: 'MedReg office, Titanium Business Park, Ahmedabad', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-02.png', alt: 'MedReg office meeting room', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-03.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-04.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-05.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  { src: '/assets/office-06.png', alt: 'MedReg office interior', caption: 'Titanium Business Park, Ahmedabad', category: 'Office & Workplace', width: 576, height: 358 },
  // Placeholders (stock photos) until MedReg supplies event, training, exhibition and milestone photos.
  { src: '/assets/placeholders/celebration-team.jpg', alt: 'Team celebration', caption: 'Team celebrations', category: 'Celebrations & Events', width: 960, height: 640, placeholder: true },
  { src: '/assets/placeholders/celebration-balloons.jpg', alt: 'Office celebration', caption: 'Company events', category: 'Celebrations & Events', width: 960, height: 638, placeholder: true },
  { src: '/assets/placeholders/gallery-behind-scenes.jpg', alt: 'Team meeting', caption: 'Behind the scenes', category: 'Celebrations & Events', width: 960, height: 641, placeholder: true },
  { src: '/assets/placeholders/gallery-training.jpg', alt: 'Training session', caption: 'Training sessions', category: 'Training & Workshops', width: 960, height: 640, placeholder: true },
  { src: '/assets/placeholders/training-seminar.jpg', alt: 'Seminar', caption: 'Seminars', category: 'Training & Workshops', width: 960, height: 640, placeholder: true },
  { src: '/assets/placeholders/training-workshop.jpg', alt: 'Workshop', caption: 'Workshops', category: 'Training & Workshops', width: 960, height: 640, placeholder: true },
  { src: '/assets/placeholders/gallery-exhibition.jpg', alt: 'Meeting at an exhibition', caption: 'Exhibitions', category: 'Exhibitions', width: 960, height: 640, placeholder: true },
  { src: '/assets/placeholders/exhibition-conference.jpg', alt: 'Conference hall', caption: 'Industry events', category: 'Exhibitions', width: 960, height: 568, placeholder: true },
  { src: '/assets/placeholders/milestone-handshake.jpg', alt: 'Partnership handshake', caption: 'Milestones', category: 'Milestones', width: 960, height: 640, placeholder: true },
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
