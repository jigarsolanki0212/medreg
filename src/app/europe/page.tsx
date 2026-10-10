import type { Metadata } from 'next';
import MarketLanding from '@/components/MarketLanding';
import { EUROPE_FAQS } from '@/data/medregData';
import { pageMetadata } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'CE marking under EU MDR 2017/745 and IVDR: technical files (Annex II/III), clinical evaluation (CER), GSPR, PMS/PSUR, PRRC and EU representation.';

export const metadata: Metadata = pageMetadata({
  title: 'Medical Device Regulatory Consultancy Services for Europe',
  description: PAGE_DESCRIPTION,
  path: '/europe/',
  keywords: ['CE marking consultant', 'EU MDR 2017/745 consultant', 'IVDR consultant', 'technical file Annex II', 'clinical evaluation report CER', 'EU authorized representative'],
});

export default function EuropeServicesPage() {
  return (
    <MarketLanding
      market="europe"
      heading="Medical Device Regulatory Consultancy Services for Europe"
      description={PAGE_DESCRIPTION}
      areaServed="European Union"
      intro={{
        title: 'Supporting Medical Device Companies to Achieve CE Marking and Market Presence Across Europe',
        subtitle: 'Building Stronger MedTech Futures Through Compliance in Europe',
        text: 'MedReg Consultancy helps medical device manufacturers confidently navigate Europe’s regulatory landscape. From CE marking, ISO 13485:2016 certification, MDSAP, ICMED, and UK MDR to technical documentation, clinical evaluations, and post-market surveillance, we deliver complete end-to-end solutions. As your trusted partner, we simplify every stage, from device classification and gap analysis to representation, documentation, and registrations, ensuring long-term compliance and competitiveness in the European MedTech market.',
      }}
      servicesTitle="Services We Offer in Europe"
      servicesSubtitle="Select a service to see why it matters and how MedReg supports you across the European market."
      faqs={EUROPE_FAQS}
    />
  );
}
