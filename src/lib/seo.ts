import type { Metadata } from 'next';
import { COMPANY_INFO, type FaqItem, type ServiceItem } from '@/data/medregData';
import { SOCIAL } from '@/data/siteContent';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://medreg.in').replace(/\/$/, '');
export const SITE_NAME = 'MedReg Consultancy LLP';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'MedReg Consultancy LLP — Medical Device & IVD Regulatory Consulting' };

/** Absolute URL with the trailing slash the site uses everywhere (see next.config trailingSlash). */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const [pathname, hash] = path.split('#');
  let clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!clean.endsWith('/') && !/\.[a-z0-9]+$/i.test(clean)) clean += '/';
  return `${SITE_URL}${clean}${hash ? `#${hash}` : ''}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
}

/** Builds complete per-page metadata: canonical, Open Graph and Twitter tags. */
export function pageMetadata({ title, description, path, keywords, image, imageAlt, type = 'website' }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? [{ url: image, alt: imageAlt || title }] : [DEFAULT_OG_IMAGE];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      locale: 'en_IN',
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image || DEFAULT_OG_IMAGE.url],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Service catalogue for a jurisdiction page, linked back to the organization entity. */
export function serviceCatalogJsonLd({
  name,
  description,
  path,
  areaServed,
  services,
  serviceUrl,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string | string[];
  services: ServiceItem[];
  /** Path of a service's own page; defaults to an anchor on the catalogue page. */
  serviceUrl?: (id: string) => string;
}) {
  const url = absoluteUrl(path);
  const area = (Array.isArray(areaServed) ? areaServed : [areaServed]).map((a) => ({ '@type': 'Place', name: a }));
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType: 'Medical Device Regulatory Consulting',
    provider: { '@id': ORG_ID },
    areaServed: area,
    audience: { '@type': 'BusinessAudience', audienceType: 'Medical device and IVD manufacturers, importers and distributors' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
          url: serviceUrl ? absoluteUrl(serviceUrl(s.id)) : `${url}#${s.id}`,
          provider: { '@id': ORG_ID },
        },
      })),
    },
  };
}

export function webPageJsonLd({ path, name, description, type = 'WebPage' }: { path: string; name: string; description: string; type?: string }) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: COMPANY_INFO.name,
      alternateName: ['MedReg', 'MedReg Consultancy', 'Medreg Consultancy LLP', 'MEDREG CONSULTANCY LLP'],
      slogan: COMPANY_INFO.tagline,
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png`, width: 384, height: 120 },
      image: `${SITE_URL}/assets/home_about.png`,
      description:
        'MedReg Consultancy is a medical device regulatory consultancy that helps medical device and IVD manufacturers achieve smooth approvals and compliance in global markets, supporting companies across Europe, the USA, India and other markets.',
      telephone: COMPANY_INFO.phones[0].value,
      email: COMPANY_INFO.emails[0].value,
      sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube].filter(Boolean),
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.pincode,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 22.9996, longitude: 72.4976 },
      hasMap: 'https://maps.google.com/?q=Titanium+Business+Park,+Makarba,+Ahmedabad,+Gujarat+380051',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: COMPANY_INFO.phones[0].value,
          email: COMPANY_INFO.emails[0].value,
          contactType: 'customer service',
          areaServed: ['IN', 'EU', 'US', 'GB', 'AE', 'SA', 'CA', 'AU', 'BR', 'ZA'],
          availableLanguage: ['English'],
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Brazil' },
      ],
      knowsAbout: [
        'CDSCO medical device registration',
        'Medical Device Rules 2017 (India)',
        'Form MD-5, MD-9 manufacturing licence',
        'Form MD-14 / MD-15 import licence',
        'EU MDR 2017/745',
        'EU IVDR 2017/746',
        'CE marking',
        'US FDA 510(k) premarket notification',
        'FDA QMSR 21 CFR Part 820',
        'MDSAP',
        'ISO 13485:2016',
        'ISO 14971 risk management',
        'ISO 10993 biological evaluation',
        'Clinical evaluation report (CER)',
        'Post-market surveillance (PMS / PSUR)',
        'Indian Authorized Agent',
        'US Agent service',
        'European Authorized Representative',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: 'MedReg',
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
  ],
};
