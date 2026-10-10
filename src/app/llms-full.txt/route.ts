import {
  COMPANY_INFO,
  INDIA_SERVICES,
  EUROPE_SERVICES,
  USA_SERVICES,
  GLOBAL_SERVICES,
  HOMEPAGE_FAQS,
  INDIA_FAQS,
  EUROPE_FAQS,
  USA_FAQS,
  GLOBAL_FAQS,
  type ServiceItem,
  type FaqItem,
} from '@/data/medregData';
import { absoluteUrl } from '@/lib/seo';
import { usaServicePath } from '@/data/usaServices';

export const dynamic = 'force-static';

function services(heading: string, path: string, items: ServiceItem[]) {
  const lines = items.map((s) => {
    const points = s.keyPoints?.length ? `\n  Key points: ${s.keyPoints.join('; ')}.` : '';
    return `### ${s.title}\nURL: ${absoluteUrl(path === '/usa/' ? usaServicePath(s.id) : `${path}#${s.id}`)}\n${s.fullDesc}${points}`;
  });
  return `## ${heading}\nPage: ${absoluteUrl(path)}\n\n${lines.join('\n\n')}`;
}

function faqs(heading: string, items: FaqItem[]) {
  return `## ${heading}\n\n${items.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}`;
}

/** Long-form plain-text knowledge file for AI answer engines (companion to /llms.txt). */
export function GET() {
  const body = [
    `# ${COMPANY_INFO.name} — full service catalogue`,
    `> Medical device and IVD regulatory consultancy in ${COMPANY_INFO.address.city}, India. 2k+ completed projects, 950+ clients, 20+ countries served.`,
    `Contact: ${COMPANY_INFO.phones.map((p) => p.display).join(', ')} · ${COMPANY_INFO.emails.map((e) => e.display).join(', ')}\nAddress: ${COMPANY_INFO.address.full}\nWebsite: ${absoluteUrl('/')}`,
    services('Europe — CE marking (EU MDR 2017/745, IVDR 2017/746)', '/europe/', EUROPE_SERVICES),
    services('United States — US FDA', '/usa/', USA_SERVICES),
    services('Other global markets — MDSAP, ISO 13485 and country registrations', '/other-services/', GLOBAL_SERVICES),
    services('India — CDSCO (Medical Devices Rules, 2017)', '/india/', INDIA_SERVICES),
    faqs('General FAQs', HOMEPAGE_FAQS),
    faqs('India FAQs', INDIA_FAQS),
    faqs('Europe FAQs', EUROPE_FAQS),
    faqs('USA FAQs', USA_FAQS),
    faqs('Global FAQs', GLOBAL_FAQS),
  ].join('\n\n');

  return new Response(body + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
