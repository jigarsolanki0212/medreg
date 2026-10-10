/**
 * Dedicated service pages for every market (redesign brief §4 and §15).
 *
 * USA pages use the full client content in usaServices.ts. Europe, Other Global and India pages use the
 * existing approved service descriptions only, until the client supplies detailed content for those
 * markets. To add that content, fill `sections` / `faqs` for a service in DETAIL_CONTENT below using the
 * same block format as usaServices.ts; pages without sections are kept out of search indexes and the
 * sitemap (`indexable: false`) so thin pages are never published to Google.
 */
import { EUROPE_SERVICES, GLOBAL_SERVICES, INDIA_SERVICES, type FaqItem, type ServiceItem } from '@/data/medregData';
import { USA_SERVICES_DETAIL, type UsaSection } from '@/data/usaServices';

export type MarketKey = 'europe' | 'usa' | 'global' | 'india';

export interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: UsaSection[];
  faqs?: FaqItem[];
  related: string[];
  /** False while the page only has its short approved description. */
  indexable: boolean;
}

export interface MarketInfo {
  key: MarketKey;
  path: string;
  crumb: string;
  kicker: string;
  flag: string;
  banner?: string;
  specialist: string;
  /** Value pre-selected in the consultation form. */
  leadService: string;
}

export const MARKET_INFO: Record<MarketKey, MarketInfo> = {
  europe: {
    key: 'europe',
    path: '/europe/',
    crumb: 'Europe (EU MDR / IVDR)',
    kicker: 'Europe Regulatory Services',
    flag: '/assets/europe.png',
    banner: '/assets/Europe-page-banner.jpg',
    specialist: 'Talk to an EU MDR specialist',
    leadService: 'Europe CE MDR / IVDR',
  },
  usa: {
    key: 'usa',
    path: '/usa/',
    crumb: 'USA (US FDA)',
    kicker: 'USA Regulatory Services',
    flag: '/assets/usa.png',
    banner: '/assets/usa-page-banner.jpg',
    specialist: 'Talk to a US FDA specialist',
    leadService: 'US FDA 510(k)',
  },
  global: {
    key: 'global',
    path: '/other-services/',
    crumb: 'Other Global Markets',
    kicker: 'Other Global Regulatory Services',
    flag: '/assets/other.png',
    banner: '/assets/placeholders/market-global.jpg', // placeholder
    specialist: 'Talk to our regulatory team',
    leadService: 'MDSAP & ISO 13485',
  },
  india: {
    key: 'india',
    path: '/india/',
    crumb: 'India (CDSCO)',
    kicker: 'India Regulatory Services',
    flag: '/assets/india.png',
    banner: '/assets/placeholders/market-india.jpg', // placeholder
    specialist: 'Talk to a CDSCO specialist',
    leadService: 'CDSCO India Compliance',
  },
};

const ICONS: Record<string, string> = {
  // Europe
  'ce-mark': '/assets/CE-mark.png',
  'technical-master-file-preparation': '/assets/Technical-master-File-Preparation.png',
  'gap-analysis': '/assets/Gap-Analysis.png',
  'clinical-evaluation': '/assets/Clinical-Evaluation.png',
  'general-safety-and-performance-requirement': '/assets/General-Safety.png',
  'post-market-surveillance-report': '/assets/Post-Market-Surveillance-Report.png',
  'risk-analysis-as-per-en-iso-14971': '/assets/Risk-Analysis.png',
  'person-responsible-for-regulatory-compliance': '/assets/Regulatory-Compliance.png',
  'medical-device-classification': '/assets/Medical-Device-Classification.png',
  'sterilization-validation': '/assets/Sterilization-Validation.png',
  'cleaning-disinfection-validation': '/assets/Disinfection-Validation.png',
  'amc-annual-maintenance-contract-services-for-doc': '/assets/amc.png',
  'authorized-agent-service-through-active-channel-': '/assets/Authorized-Agent-Service.png',
  // Other global
  'technical-file-dossier-preparation-as-per-imdrf-': '/assets/Technical-File.png',
  'qms-iso13485': '/assets/QMS-Documentation.png',
  'supplier-development-inspection-evaluation': '/assets/Supplier-Development.png',
  'process-validation': '/assets/Process-Validation.png',
  // India
  'manufacturing-license': '/assets/manufacturing.png',
  'import-license': '/assets/import-licnece.png',
  'clinical-trials': '/assets/clinic-trails.png',
  'free-sale-certificate': '/assets/free-sale-certification.png',
  'product-endorsement': '/assets/Product-Endorsement.png',
  'retention-of-license': '/assets/Retention-of-License.png',
  'market-standing-certificate': '/assets/Market-Standing-Certificate.png',
  'non-conviction-certificate': '/assets/Non-conviction-Certificate.png',
  'labeling-review': '/assets/Labeling-Review.png',
  'product-development': '/assets/Product-Development.png',
  'authorized-agent': '/assets/Authorized-Agent.png',
  'wholesale-license': '/assets/Wholesale-License.png',
  'qms-documentation': '/assets/QMS-Documentation.png',
  'amc-services': '/assets/amc.png',
  'device-master-file': '/assets/device-master.png',
  'voluntary-registration': '/assets/Voluntary-Registration.png',
  'neutral-code': '/assets/Neutral-Code.png',
  'internal-audit': '/assets/Internal-Audit.png',
  'india:sterilization-validation': '/assets/Sterilization-Process-Validation.png',
};

const MARKET_SUFFIX: Record<Exclude<MarketKey, 'usa'>, string> = {
  europe: 'Europe',
  global: 'Global Markets',
  india: 'India',
};

/**
 * Detailed content for non-USA services, added as the client supplies it.
 * Key: `${market}:${service id}`. Same block format as usaServices.ts.
 */
const DETAIL_CONTENT: Record<string, { sections: UsaSection[]; faqs?: FaqItem[] }> = {};

// URL slugs. Some legacy ids were truncated by the old WordPress site; tidy those for the new URLs.
const SLUG_FIX: Record<string, string> = {
  'authorized-agent-service-through-active-channel-': 'authorized-agent-service',
  'amc-annual-maintenance-contract-services-for-doc': 'amc-documentation-services',
  'technical-file-dossier-preparation-as-per-imdrf-': 'technical-file-dossier-preparation',
};
const slugOf = (id: string) => SLUG_FIX[id] || id;

/** Splits the approved description into "why it matters" and "how MedReg supports" without changing the words. */
function splitDesc(text: string): string[] {
  const idx = text.search(/\bAt MedReg Consultancy\b/);
  if (idx > 0) return [text.slice(0, idx).trim(), text.slice(idx).trim()];
  return [text];
}

function build(market: Exclude<MarketKey, 'usa'>, items: ServiceItem[]): ServiceDetail[] {
  return items.map((s, i) => {
    const extra = DETAIL_CONTENT[`${market}:${s.id}`];
    const neighbours = [items[(i + 1) % items.length], items[(i + 2) % items.length], items[(i + 3) % items.length]]
      .filter((n) => n && n.id !== s.id)
      .map((n) => slugOf(n.id));
    return {
      slug: slugOf(s.id),
      title: s.title,
      summary: s.shortDesc,
      icon: ICONS[`${market}:${s.id}`] || ICONS[s.id] || '/assets/Regulatory-Compliance.png',
      metaTitle: `${s.title} – ${MARKET_SUFFIX[market]}`,
      metaDescription: s.shortDesc.length > 160 ? `${s.shortDesc.slice(0, 157).replace(/\s+\S*$/, '')}…` : s.shortDesc,
      intro: splitDesc(s.fullDesc),
      sections: extra?.sections || [],
      faqs: extra?.faqs,
      related: Array.from(new Set(neighbours)),
      indexable: Boolean(extra?.sections?.length),
    };
  });
}

export const SERVICE_DETAILS: Record<MarketKey, ServiceDetail[]> = {
  europe: build('europe', EUROPE_SERVICES),
  usa: USA_SERVICES_DETAIL.map((s) => ({ ...s, indexable: true })),
  global: build('global', GLOBAL_SERVICES),
  india: build('india', INDIA_SERVICES),
};

export const servicePath = (market: MarketKey, slug: string) => `${MARKET_INFO[market].path}${slug}/`;

export const findService = (market: MarketKey, slug: string) => SERVICE_DETAILS[market].find((s) => s.slug === slug);
