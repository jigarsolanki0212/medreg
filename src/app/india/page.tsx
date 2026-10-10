import type { Metadata } from 'next';
import MarketLanding from '@/components/MarketLanding';
import { INDIA_FAQS } from '@/data/medregData';
import { pageMetadata } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'CDSCO consultants for medical device manufacturing licences (MD-5, MD-9), import licences (MD-15), Indian Authorized Agent and MDR 2017 compliance.';

export const metadata: Metadata = pageMetadata({
  title: 'Medical Device Regulatory Consultancy Services for India',
  description: PAGE_DESCRIPTION,
  path: '/india/',
  keywords: ['CDSCO medical device registration', 'medical device manufacturing license India', 'MD-15 import license', 'Indian Authorized Agent', 'Medical Device Rules 2017 consultant', 'SUGAM portal'],
});

export default function IndiaServicesPage() {
  return (
    <MarketLanding
      market="india"
      heading="Medical Device Regulatory Consultancy Services for India"
      description={PAGE_DESCRIPTION}
      areaServed="India"
      intro={{
        title: 'Supporting Medical Device Companies in Achieving Regulatory Approval and Market Access in India',
        subtitle: 'Empowering Compliance for India’s MedTech Growth',
        text: 'MedReg Consultancy helps medical device manufacturers navigate India’s complex regulatory landscape with ease. From CE marking and ISO 13485:2016 compliance to technical documentation, clinical evaluations, and post-market surveillance, we simplify every stage to keep your products compliant, competitive, and ready for market growth.',
      }}
      servicesTitle="Services We Offer in India"
      servicesSubtitle="Select a service to see why it matters and how MedReg supports you in the Indian market."
      faqs={INDIA_FAQS}
    />
  );
}
