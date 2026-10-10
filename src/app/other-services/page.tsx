import type { Metadata } from 'next';
import MarketLanding from '@/components/MarketLanding';
import { GLOBAL_FAQS } from '@/data/medregData';
import { pageMetadata } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'MDSAP and ISO 13485:2016 consulting plus device registrations with ANVISA, TGA, Health Canada and SFDA, IMDRF technical files and validations.';

export const metadata: Metadata = pageMetadata({
  title: 'Regulatory Consultancy Services for Other Global Markets',
  description: PAGE_DESCRIPTION,
  path: '/other-services/',
  keywords: ['MDSAP consultant', 'ISO 13485 certification consultant', 'ANVISA registration', 'TGA registration', 'Health Canada medical device licence', 'SFDA registration'],
});

export default function OtherServicesPage() {
  return (
    <MarketLanding
      market="global"
      heading="Regulatory Consultancy Services for Other Global Markets"
      description={PAGE_DESCRIPTION}
      areaServed={['Middle East', 'Southeast Asia', 'Brazil', 'Australia', 'Canada']}
      intro={{
        title: 'Supporting Medical Innovators Worldwide With Multi-Market Regulatory Strategy And Execution',
        subtitle: 'Empowering Medical Technology Manufacturers Worldwide',
        text: 'MedReg Consultancy empowers medical device manufacturers to expand globally with confidence. From ISO 13485:2016, CE marking, UK MDR, US FDA, CDSCO, and UL requirements to registrations, submissions, and post-market support, we deliver comprehensive regulatory solutions tailored to international markets. Backed by global partnerships, our expertise ensures compliance, growth, and competitiveness across the MedTech landscape.',
      }}
      servicesTitle="Services We Provide"
      servicesSubtitle="We offer services that help you launch your medical technology in the Middle East, Southeast Asian Countries, Brazil, TGA, and Canada."
      faqs={GLOBAL_FAQS}
    />
  );
}
