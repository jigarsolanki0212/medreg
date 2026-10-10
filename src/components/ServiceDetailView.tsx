import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ContentBlocks from '@/components/ContentBlocks';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import { COMPANY_INFO } from '@/data/medregData';
import { MARKET_INFO, SERVICE_DETAILS, servicePath, type MarketKey, type ServiceDetail } from '@/data/marketServices';
import { absoluteUrl, faqJsonLd, ORG_ID, webPageJsonLd } from '@/lib/seo';

const AREA: Record<MarketKey, { '@type': string; name: string }> = {
  europe: { '@type': 'Place', name: 'European Union' },
  usa: { '@type': 'Country', name: 'United States' },
  global: { '@type': 'Place', name: 'Worldwide' },
  india: { '@type': 'Country', name: 'India' },
};

const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Dedicated service page used by every market (brief §4): requirement, MedReg support, process, deliverables, FAQs, CTA. */
export default function ServiceDetailView({ market, service }: { market: MarketKey; service: ServiceDetail }) {
  const info = MARKET_INFO[market];
  const all = SERVICE_DETAILS[market];
  const path = servicePath(market, service.slug);
  const related = service.related.map((r) => all.find((s) => s.slug === r)).filter((s): s is ServiceDetail => Boolean(s));
  const [lead, ...rest] = service.intro;
  const shortOnly = service.sections.length === 0;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path, name: service.title, description: service.metaDescription }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${absoluteUrl(path)}#service`,
            name: service.title,
            description: service.metaDescription,
            url: absoluteUrl(path),
            serviceType: 'Medical Device Regulatory Consulting',
            provider: { '@id': ORG_ID },
            areaServed: AREA[market],
          },
          ...(service.faqs?.length ? [faqJsonLd(service.faqs, path)] : []),
        ]}
      />

      <section className="page-banner svc-banner">
        {info.banner && <Image src={info.banner} alt="" fill priority sizes="100vw" className="page-banner-bg" />}
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs
              items={[
                { name: 'Services', path: '/services/' },
                { name: info.crumb, path: info.path },
                { name: service.title, path },
              ]}
            />
            <span className="svc-banner-kicker">
              <Image src={info.flag} alt="" width={22} height={22} />
              {info.kicker}
            </span>
            <h1 className="page-banner-title svc-banner-title">{service.title}</h1>
            {service.summary.trim() !== lead?.trim() && <p className="page-banner-subtitle">{service.summary}</p>}
            <div className="svc-banner-ctas">
              <Link href="#consultation" className="btn btn-gold">
                <span>Request a Consultation</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-outline-white">
                <Phone size={15} aria-hidden="true" />
                <span>{COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad svc-body">
        <div className="container svc-layout">
          <article className="svc-main">
            {shortOnly ? (
              <>
                <section className="svc-section" style={{ marginTop: 0 }} id="why-it-matters">
                  <h2 className="svc-section-title">Why it matters</h2>
                  <p className="cb-p">{lead}</p>
                </section>
                {rest.length > 0 && (
                  <section className="svc-section" id="how-medreg-supports">
                    <h2 className="svc-section-title">How MedReg supports you</h2>
                    {rest.map((p) => (
                      <p key={p.slice(0, 40)} className="cb-p">
                        {p}
                      </p>
                    ))}
                  </section>
                )}
                <div className="cb-callout cb-callout--info" style={{ marginTop: '28px' }}>
                  <p>
                    For the process, documentation and deliverables that apply to your device, request a consultation and our team will outline the pathway for your product.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="svc-intro">
                  {service.intro.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {service.sections.map((sec) => (
                  <section key={sec.heading} id={sectionId(sec.heading)} className="svc-section">
                    <h2 className="svc-section-title">{sec.heading}</h2>
                    <ContentBlocks blocks={sec.blocks} />
                  </section>
                ))}
              </>
            )}
          </article>

          <aside className="svc-aside" aria-label="On this page">
            {!shortOnly && (
              <div className="svc-aside-card">
                <div className="svc-aside-title">On this page</div>
                <ul className="svc-toc">
                  {service.sections.map((sec) => (
                    <li key={sec.heading}>
                      <a href={`#${sectionId(sec.heading)}`}>{sec.heading}</a>
                    </li>
                  ))}
                  {service.faqs?.length ? (
                    <li>
                      <a href="#faq-section">FAQs</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            )}

            <div className="svc-aside-card svc-aside-cta">
              <div className="svc-aside-title">{info.specialist}</div>
              <p>Tell us about your device and we will outline the pathway and documents you need.</p>
              <Link href="#consultation" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                <span>Request a Consultation</span>
              </Link>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="svc-aside-contact">
                <Mail size={14} aria-hidden="true" /> {COMPANY_INFO.emails[0].display}
              </a>
            </div>

            <div className="svc-aside-card">
              <div className="svc-aside-title">All {info.kicker.replace(' Regulatory Services', '')} services</div>
              <ul className="svc-aside-list">
                {all.map((s) => (
                  <li key={s.slug}>
                    {s.slug === service.slug ? (
                      <span aria-current="page">{s.title}</span>
                    ) : (
                      <Link href={servicePath(market, s.slug)}>
                        {s.title}
                        <ChevronRight size={14} aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad svc-related">
          <div className="container">
            <h2 className="section-title">Related services</h2>
            <div className="usa-svc-grid">
              {related.map((r) => (
                <Link key={r.slug} href={servicePath(market, r.slug)} className="usa-svc-card">
                  <span className="usa-svc-icon">
                    <Image src={r.icon} alt="" width={40} height={40} />
                  </span>
                  <h3 className="usa-svc-title">{r.title}</h3>
                  <p className="usa-svc-summary">{r.summary}</p>
                  <span className="usa-svc-link">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs?.length ? (
        <FaqAccordion
          faqs={service.faqs}
          title={`${service.title}: common questions`}
          subtitle="Answers to questions we are often asked about this service. Need advice on your specific device? Our team is a message away."
        />
      ) : null}

      <section className="cta-form-section" id="consultation">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Consultation
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Discuss {service.title} with MedReg
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                {COMPANY_INFO.phones.map((p) => p.display).join(' · ')} ({COMPANY_INFO.timezone.short})
                <br />
                {COMPANY_INFO.emails[0].display}
              </p>
            </div>
            <div>
              <LeadForm title="Request a consultation" defaultService={info.leadService} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
