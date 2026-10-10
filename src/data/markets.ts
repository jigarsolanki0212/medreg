import { EUROPE_SERVICES, USA_SERVICES, GLOBAL_SERVICES, INDIA_SERVICES, type ServiceItem } from '@/data/medregData';

/**
 * Service markets in the order required by the redesign brief (§15):
 * Europe, USA, Other Global, India. Header, footer, homepage and the Services page all read this list.
 */
export interface Market {
  key: 'europe' | 'usa' | 'global' | 'india';
  href: string;
  name: string;
  navTitle: string;
  navSub: string;
  flag: string;
  photo?: string;
  heading: string;
  description: string;
  identifiers: string[];
  services: ServiceItem[];
}

export const MARKETS: Market[] = [
  {
    key: 'europe',
    href: '/europe/',
    name: 'Europe',
    navTitle: 'Europe Regulatory Services',
    navSub: 'CE marking under EU MDR / IVDR',
    flag: '/assets/europe.png',
    photo: '/assets/placeholders/card-europe.jpg', // placeholder; landing banner keeps Europe-page-banner.jpg
    heading: 'Medical Device Regulatory Consultancy Services for Europe',
    description: 'Technical documentation, clinical evaluation, risk management, post-market surveillance and PRRC support for CE marking under the EU MDR.',
    identifiers: ['EU MDR 2017/745', 'EU IVDR 2017/746', 'CE marking'],
    services: EUROPE_SERVICES,
  },
  {
    key: 'usa',
    href: '/usa/',
    name: 'USA',
    navTitle: 'USA Regulatory Services',
    navSub: '510(k), registration, QMSR & U.S. Agent',
    flag: '/assets/usa.png',
    photo: '/assets/placeholders/card-usa.jpg', // placeholder; landing banner keeps usa-page-banner.jpg
    heading: 'Medical Device Regulatory Consultancy Services for the USA',
    description: 'FDA classification, establishment registration and listing, 510(k), Q-Submissions, GUDID, labelling, QMSR and post-market reporting.',
    identifiers: ['US FDA 510(k)', '21 CFR Part 820 (QMSR)', 'UDI / GUDID'],
    services: USA_SERVICES,
  },
  {
    key: 'global',
    href: '/other-services/',
    name: 'Other Global Markets',
    navTitle: 'Other Global Regulatory Services',
    navSub: 'MDSAP, ISO 13485, IMDRF dossiers',
    flag: '/assets/other.png',
    photo: '/assets/placeholders/card-global.jpg', // placeholder
    heading: 'Regulatory Consultancy Services for Other Global Markets',
    description: 'Technical files and dossiers to IMDRF / GHTF guidelines, QMS documentation, internal audits, supplier evaluation and process validation.',
    identifiers: ['ISO 13485:2016', 'MDSAP', 'IMDRF / GHTF'],
    services: GLOBAL_SERVICES,
  },
  {
    key: 'india',
    href: '/india/',
    name: 'India',
    navTitle: 'India Regulatory Services',
    navSub: 'CDSCO manufacturing & import licences',
    flag: '/assets/india.png',
    photo: '/assets/placeholders/card-india.jpg', // placeholder
    heading: 'Medical Device Regulatory Consultancy Services for India',
    description: 'Manufacturing and import licences, registrations, certificates and QMS documentation under the Medical Devices Rules, 2017 (CDSCO).',
    identifiers: ['CDSCO', 'Medical Devices Rules, 2017'],
    services: INDIA_SERVICES,
  },
];
