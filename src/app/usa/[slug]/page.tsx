import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ContentBlocks from '@/components/ContentBlocks';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import { COMPANY_INFO } from '@/data/medregData';
import { USA_SERVICES_DETAIL, USA_SERVICE_BY_SLUG, usaServicePath } from '@/data/usaServices';
import { absoluteUrl, faqJsonLd, ORG_ID, pageMetadata, webPageJsonLd } from '@/lib/seo';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return USA_SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = USA_SERVICE_BY_SLUG[slug];
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: usaServicePath(slug) });
}

export default async function UsaServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = USA_SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  const path = usaServicePath(slug);
  const related = service.related.map((r) => USA_SERVICE_BY_SLUG[r]).filter(Boolean);

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
            areaServed: { '@type': 'Country', name: 'United States' },
          },
          ...(service.faqs?.length ? [faqJsonLd(service.faqs, path)] : []),
        ]}
      />

      <section className="page-banner svc-banner">
        <Image src="/assets/usa-page-banner.jpg" alt="" fill priority sizes="100vw" className="page-banner-bg" />
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs
              items={[
                { name: 'Services', path: '/services/' },
                { name: 'USA (US FDA)', path: '/usa/' },
                { name: service.title, path },
              ]}
            />
            <span className="svc-banner-kicker">
              <Image src="/assets/usa.png" alt="" width={22} height={22} />
              USA Regulatory Services
            </span>
            <h1 className="page-banner-title svc-banner-title">{service.title}</h1>
            <p className="page-banner-subtitle">{service.summary}</p>
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
          </article>

          <aside className="svc-aside" aria-label="On this page">
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

            <div className="svc-aside-card svc-aside-cta">
              <div className="svc-aside-title">Talk to a US FDA specialist</div>
              <p>Tell us about your device and we will outline the pathway and documents you need.</p>
              <Link href="#consultation" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                <span>Request a Consultation</span>
              </Link>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="svc-aside-contact">
                <Mail size={14} aria-hidden="true" /> {COMPANY_INFO.emails[0].display}
              </a>
            </div>

            <div className="svc-aside-card">
              <div className="svc-aside-title">All USA services</div>
              <ul className="svc-aside-list">
                {USA_SERVICES_DETAIL.map((s) => (
                  <li key={s.slug}>
                    {s.slug === slug ? (
                      <span aria-current="page">{s.title}</span>
                    ) : (
                      <Link href={usaServicePath(s.slug)}>
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
            <h2 className="section-title">Related USA services</h2>
            <div className="usa-svc-grid">
              {related.map((r) => (
                <Link key={r.slug} href={usaServicePath(r.slug)} className="usa-svc-card">
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
              <LeadForm title="Request a consultation" defaultService="US FDA 510(k)" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
