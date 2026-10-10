import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CalendarDays, MapPin, ArrowRight, Store } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PrefilledForm from '@/components/PrefilledForm';
import PrefillLink from '@/components/PrefillLink';
import GalleryGrid from '@/components/GalleryGrid';
import { COMPANY_INFO } from '@/data/medregData';
import { EXHIBITIONS, type Exhibition } from '@/data/siteContent';
import { EXHIBITION_FORM } from '@/data/formSpecs';
import { pageMetadata, webPageJsonLd, ORG_ID } from '@/lib/seo';

const PAGE_PATH = '/exhibitions/';
const PAGE_DESCRIPTION =
  'Meet MedReg’s medical device regulatory experts at exhibitions and industry events. See where we have exhibited and schedule a meeting with our team.';

export const metadata: Metadata = pageMetadata({
  title: 'Exhibitions & Events',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const fmt = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const when = (e: Exhibition) => (e.startDate ? `${fmt(e.startDate)}${e.endDate && e.endDate !== e.startDate ? ` – ${fmt(e.endDate)}` : ''}` : String(e.year));

export default function ExhibitionsPage() {
  const upcoming = EXHIBITIONS.filter((e) => e.status === 'upcoming').sort((a, b) => (a.startDate || String(a.year)).localeCompare(b.startDate || String(b.year)));
  const past = EXHIBITIONS.filter((e) => e.status === 'past').sort((a, b) => (b.startDate || String(b.year)).localeCompare(a.startDate || String(a.year)));

  // Counts are derived from the events entered, never hard-coded (brief §13).
  const byYear = past.reduce<Record<number, number>>((acc, e) => ({ ...acc, [e.year]: (acc[e.year] || 0) + 1 }), {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  const lookup = Object.fromEntries(upcoming.map((e) => [e.id, e.name]));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Exhibitions & Events', description: PAGE_DESCRIPTION }),
          ...upcoming
            .filter((e) => e.startDate)
            .map((e) => ({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: e.name,
              startDate: e.startDate,
              endDate: e.endDate || e.startDate,
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: { '@type': 'Place', name: e.venue || e.city, address: { '@type': 'PostalAddress', addressLocality: e.city, addressCountry: e.country } },
              performer: { '@id': ORG_ID },
            })),
        ]}
      />

      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Exhibitions & Events', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">Industry Presence</span>
            <h1 className="page-banner-title svc-banner-title">Exhibitions &amp; Events</h1>
            <p className="page-banner-subtitle">
              We take part in medical device exhibitions, industry expos and regulatory events. Meet our regulatory experts in person to discuss your market-access plans.
            </p>
            <div className="svc-banner-ctas">
              <a href="#meet" className="btn btn-gold">
                <span>Schedule a Meeting with Our Regulatory Experts</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Upcoming exhibitions</h2>
          {upcoming.length === 0 ? (
            <div className="exh-empty">
              <CalendarDays size={26} aria-hidden="true" />
              <div>
                <p>
                  <strong>Our next exhibitions will be announced here.</strong> You can still request a meeting with our team now, at the next exhibition we attend, at our office or online.
                </p>
                <a href="#meet" className="btn btn-primary btn-sm">
                  <span>Schedule a Meeting</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="exh-grid">
              {upcoming.map((e) => (
                <article key={e.id} className="exh-card">
                  {e.image && (
                    <div className="exh-card-media">
                      <Image src={e.image} alt={e.name} fill sizes="(max-width: 768px) 92vw, 380px" style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                  <div className="exh-card-body">
                    <span className="trn-badge trn-badge--upcoming">Upcoming</span>
                    <h3 className="trn-title">{e.name}</h3>
                    <ul className="trn-meta">
                      <li>
                        <CalendarDays size={15} aria-hidden="true" /> {when(e)}
                      </li>
                      <li>
                        <MapPin size={15} aria-hidden="true" /> {[e.venue, e.city, e.country].filter(Boolean).join(', ')}
                      </li>
                      <li>
                        <Store size={15} aria-hidden="true" /> {e.booth ? `Booth ${e.booth}` : 'Booth number to be confirmed'}
                      </li>
                    </ul>
                    {e.description && <p className="trn-desc">{e.description}</p>}
                    <div className="exh-ctas">
                      <PrefillLink value={e.id} target="meet" className="btn btn-primary btn-sm">
                        Meet Us at the Exhibition
                      </PrefillLink>
                      {e.href && (
                        <Link href={e.href} className="btn btn-secondary btn-sm">
                          Visit Our Booth
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="exh-past-head">
              <h2 className="section-title">Past exhibitions</h2>
              <ul className="exh-stats">
                {years.map((y) => (
                  <li key={y}>
                    <strong>{byYear[y]}</strong>
                    <span>
                      {byYear[y] === 1 ? 'exhibition' : 'exhibitions'} in {y}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="exh-grid">
              {past.map((e) => (
                <article key={e.id} className="exh-card">
                  {e.image && (
                    <div className="exh-card-media">
                      <Image src={e.image} alt={e.name} fill sizes="(max-width: 768px) 92vw, 380px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                  )}
                  <div className="exh-card-body">
                    <h3 className="trn-title">{e.name}</h3>
                    <ul className="trn-meta">
                      <li>
                        <CalendarDays size={15} aria-hidden="true" /> {when(e)}
                      </li>
                      <li>
                        <MapPin size={15} aria-hidden="true" /> {[e.venue, e.city, e.country].filter(Boolean).join(', ')}
                      </li>
                    </ul>
                    {e.description && <p className="trn-desc">{e.description}</p>}
                    {e.highlights && (
                      <ul className="cb-card-list">
                        {e.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {e.href && (
                      <Link href={e.href} className="trn-cta">
                        View event page <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                  {e.photos && e.photos.length > 0 && (
                    <div className="exh-album">
                      <GalleryGrid
                        images={e.photos.map((p) => ({ ...p, caption: e.name, category: 'Exhibitions' as const, width: 800, height: 600 }))}
                        showFilters={false}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad eq-section" id="meet">
        <div className="container eq-layout">
          <div className="eq-intro">
            <span className="section-label">Meet Our Team</span>
            <h2 className="section-title">Schedule a Meeting with Our Regulatory Experts</h2>
            <p className="section-subtitle">
              Request a meeting at an exhibition, at our office or online. Tell us the topics you would like to discuss and we will confirm a time with you.
            </p>
            <div className="eq-contact">
              <a href={`tel:${COMPANY_INFO.phones[0].value}`}>{COMPANY_INFO.phones[0].display}</a>
              <span>{COMPANY_INFO.timezone.label}</span>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`}>{COMPANY_INFO.emails[0].display}</a>
            </div>
          </div>
          <div className="eq-card">
            <PrefilledForm
              id="exhibition-form"
              field="exhibition"
              lookup={lookup}
              endpoint="/api/exhibition-meeting/"
              fields={EXHIBITION_FORM}
              submitLabel="Request a Meeting"
              successTitle="Meeting request received"
              successText="Thank you. Our team will contact you to confirm the meeting time and place."
            />
          </div>
        </div>
      </section>
    </>
  );
}
