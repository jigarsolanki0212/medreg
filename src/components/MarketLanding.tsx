import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseSection from '@/components/WhyChooseSection';
import { COMPANY_INFO, type FaqItem } from '@/data/medregData';
import { MARKET_INFO, SERVICE_DETAILS, servicePath, type MarketKey } from '@/data/marketServices';
import { serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

interface Props {
  market: Exclude<MarketKey, 'usa'>;
  heading: string;
  description: string;
  areaServed: string | string[];
  intro: { title: string; subtitle: string; text: string };
  servicesTitle: string;
  servicesSubtitle: string;
  faqs: FaqItem[];
}

/** Market landing page (brief §4 / §15): overview, a card per service linking to its own page, consultation and FAQs. */
export default function MarketLanding({ market, heading, description, areaServed, intro, servicesTitle, servicesSubtitle, faqs }: Props) {
  const info = MARKET_INFO[market];
  const services = SERVICE_DETAILS[market];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: info.path, name: heading, description }),
          serviceCatalogJsonLd({
            name: heading,
            description,
            path: info.path,
            areaServed,
            services: services.map((s) => ({ id: s.slug, title: s.title, shortDesc: s.summary, fullDesc: s.summary, category: market })),
            serviceUrl: (id) => servicePath(market, id),
          }),
          faqJsonLd(faqs, info.path),
        ]}
      />

      <section className="page-banner svc-banner">
        {info.banner && <Image src={info.banner} alt="" fill priority sizes="100vw" className="page-banner-bg" />}
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Services', path: '/services/' }, { name: info.crumb, path: info.path }]} />
            <span className="svc-banner-kicker">
              <Image src={info.flag} alt="" width={22} height={22} />
              {info.kicker}
            </span>
            <h1 className="page-banner-title svc-banner-title">{heading}</h1>
            <p className="page-banner-subtitle">{intro.subtitle}</p>
            <div className="svc-banner-ctas">
              <Link href="#market-services" className="btn btn-gold">
                <span>Explore Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#consultation" className="btn btn-outline-white">
                <span>Request a Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-label">Overview</span>
              <h2 className="section-title" style={{ lineHeight: 1.3 }}>{intro.title}</h2>
            </div>
            <div>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '20px' }}>{intro.text}</p>
              <Link href="#consultation" className="btn btn-primary btn-sm">
                <span>Talk to Our Experts</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-catalog-section" id="market-services">
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '40px' }}>
            <span className="section-label">Our Services</span>
            <h2 className="section-title text-center">{servicesTitle}</h2>
            <p className="section-subtitle text-center">{servicesSubtitle}</p>
          </div>
          <div className="usa-svc-grid">
            {services.map((s) => (
              <Link key={s.slug} href={servicePath(market, s.slug)} className="usa-svc-card" id={s.slug}>
                <span className="usa-svc-icon">
                  <Image src={s.icon} alt="" width={40} height={40} />
                </span>
                <h3 className="usa-svc-title">{s.title}</h3>
                <p className="usa-svc-summary">{s.summary}</p>
                <span className="usa-svc-link">
                  Learn more <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <section className="cta-form-section" id="consultation">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Consultation
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Compliance Made Simple – Start with a Free Consultation
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', color: 'rgba(255,255,255,0.88)' }}>
                {COMPANY_INFO.phones.map((p) => (
                  <a key={p.value} href={`tel:${p.value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} aria-hidden="true" /> {p.display}
                  </a>
                ))}
                <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>Time zone: {COMPANY_INFO.timezone.label}</span>
                <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} aria-hidden="true" /> {COMPANY_INFO.emails[0].display}
                </a>
              </div>
            </div>
            <div>
              <LeadForm title="Request a consultation" defaultService={info.leadService} />
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} title="Get the Answers You Need to Move Forward" />
    </>
  );
}
