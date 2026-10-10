import type { FieldDef } from '@/components/EnquiryForm';
import { TRAINING_PROGRAMS, EXHIBITIONS, JOB_OPENINGS } from '@/data/siteContent';

/** Shared by the pages (rendering) and the API routes (server-side validation). */

export const TRAINING_FORM: FieldDef[] = [
  { name: 'company', label: 'Company name', type: 'text', required: true, autoComplete: 'organization', maxLength: 150 },
  { name: 'contactName', label: 'Contact person', type: 'text', required: true, autoComplete: 'name', maxLength: 100 },
  { name: 'email', label: 'Official email address', type: 'email', required: true, autoComplete: 'email', placeholder: 'name@company.com', maxLength: 120 },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel', placeholder: '+91 98765 43210', maxLength: 25 },
  { name: 'programs', label: 'Training program(s) of interest', type: 'checkboxes', required: true, options: TRAINING_PROGRAMS.map((p) => p.title) },
  { name: 'participants', label: 'Number of participants', type: 'number', required: true, min: 1, maxLength: 5 },
  { name: 'timeframe', label: 'Preferred date or timeframe', type: 'text', placeholder: 'e.g. second week of January', maxLength: 100 },
  { name: 'format', label: 'Preferred delivery format', type: 'select', required: true, options: ['Online', 'In-person', 'Either'] },
  { name: 'comments', label: 'Additional requirements or comments', type: 'textarea', maxLength: 2000 },
];

export const EXHIBITION_FORM: FieldDef[] = [
  { name: 'fullName', label: 'Full name', type: 'text', required: true, autoComplete: 'name', maxLength: 100 },
  { name: 'company', label: 'Company name', type: 'text', required: true, autoComplete: 'organization', maxLength: 150 },
  { name: 'email', label: 'Official email address', type: 'email', required: true, autoComplete: 'email', placeholder: 'name@company.com', maxLength: 120 },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel', maxLength: 25 },
  {
    name: 'exhibition',
    label: 'Exhibition of interest',
    type: 'select',
    required: true,
    options: [...EXHIBITIONS.filter((e) => e.status === 'upcoming').map((e) => e.name), 'Next exhibition MedReg attends', 'Meeting at the MedReg office or online'],
  },
  { name: 'preferredTime', label: 'Preferred meeting date or time', type: 'text', placeholder: 'Include your time zone', maxLength: 100 },
  {
    name: 'topics',
    label: 'Regulatory topics of interest',
    type: 'checkboxes',
    options: ['Europe (EU MDR / IVDR)', 'USA (US FDA)', 'Other global markets', 'India (CDSCO)', 'ISO 13485 / MDSAP', 'Training'],
  },
  { name: 'message', label: 'Additional message', type: 'textarea', maxLength: 2000 },
];

export const CAREERS_FORM: FieldDef[] = [
  { name: 'fullName', label: 'Full name', type: 'text', required: true, autoComplete: 'name', maxLength: 100 },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email', maxLength: 120 },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel', maxLength: 25 },
  {
    name: 'position',
    label: 'Position applied for',
    type: 'select',
    required: true,
    options: [...JOB_OPENINGS.map((j) => j.designation), 'General application'],
  },
  { name: 'experience', label: 'Relevant experience', type: 'text', required: true, placeholder: 'e.g. 3 years in regulatory affairs', maxLength: 120 },
  { name: 'linkedin', label: 'LinkedIn profile or portfolio link (optional)', type: 'url', placeholder: 'https://', maxLength: 300 },
  {
    name: 'resume',
    label: 'Resume / CV',
    type: 'file',
    required: true,
    accept: '.pdf,.doc,.docx',
    maxSizeMb: 5,
    placeholder: 'Upload PDF, DOC or DOCX (max 5 MB)',
    wide: true,
  },
  { name: 'message', label: 'Additional message', type: 'textarea', maxLength: 2000 },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const URL_RE = /^https?:\/\/[^\s.]+\.[^\s]{2,}$/i;

/** Server-side validation against a form spec. Returns cleaned values or field errors. */
export function validateSpec(spec: FieldDef[], input: (name: string) => string[]) {
  const values: Record<string, string> = {};
  const fieldErrors: Record<string, string> = {};
  for (const f of spec) {
    if (f.type === 'file') continue;
    const raw = input(f.name).map((v) => v.trim()).filter(Boolean);
    if (f.type === 'checkboxes') {
      const allowed = raw.filter((v) => f.options?.includes(v));
      if (f.required && allowed.length === 0) fieldErrors[f.name] = 'Please select at least one option.';
      values[f.name] = allowed.join('; ');
      continue;
    }
    const v = (raw[0] || '').slice(0, f.maxLength || 2000);
    if (f.required && !v) {
      fieldErrors[f.name] = `${f.label.replace(/\s*\(.*\)$/, '')} is required.`;
      continue;
    }
    if (v) {
      if (f.type === 'email' && !EMAIL_RE.test(v)) fieldErrors[f.name] = 'Please provide a valid email address.';
      if (f.type === 'tel' && !/^\d{7,15}$/.test(v.replace(/[\s+\-()]/g, ''))) fieldErrors[f.name] = 'Please provide a valid phone number.';
      if (f.type === 'number' && (!/^\d+$/.test(v) || (f.min !== undefined && Number(v) < f.min))) fieldErrors[f.name] = 'Please enter a valid number.';
      if (f.type === 'url' && !URL_RE.test(v)) fieldErrors[f.name] = 'Please enter a full link starting with https://';
      if (f.type === 'select' && f.options && !f.options.includes(v)) fieldErrors[f.name] = 'Please choose an option from the list.';
    }
    values[f.name] = v;
  }
  return { values, fieldErrors };
}
