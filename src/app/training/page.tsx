import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CalendarDays, Clock, MapPin, Users, ArrowRight, MonitorSmartphone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PrefilledForm from '@/components/PrefilledForm';
import PrefillLink from '@/components/PrefillLink';
import { COMPANY_INFO } from '@/data/medregData';
import { TRAINING_PROGRAMS, PAST_TRAININGS, TRAINING_AUDIENCE } from '@/data/siteContent';
import { TRAINING_FORM } from '@/data/formSpecs';
import { pageMetadata, webPageJsonLd, absoluteUrl, ORG_ID } from '@/lib/seo';

const PAGE_PATH = '/training/';
const PAGE_DESCRIPTION =
  'Corporate medical device regulatory training by MedReg: ISO 13485, MDSAP, ISO 14971, clinical and biological evaluation, EU MDR, US FDA 510(k), UDI, sterilization validation.';

// Re-render daily so dated sessions leave "Upcoming" once they have taken place.
export const revalidate = 86400;

export const metadata: Metadata = pageMetadata({
  title: 'Training & Professional Development',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function TrainingPage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = TRAINING_PROGRAMS.filter((p) => p.status === 'upcoming' && (!p.date || p.date >= today));
  const onRequest = TRAINING_PROGRAMS.filter((p) => p.status === 'on-request');
  const past = [...PAST_TRAININGS].sort((a, b) => b.date.localeCompare(a.date));
  const lookup = Object.fromEntries(TRAINING_PROGRAMS.map((p) => [p.id, p.title]));

  const card = (p: (typeof TRAINING_PROGRAMS)[number]) => (
    <article key={p.id} id={p.id} className="trn-card">
      <span className={`trn-badge trn-badge--${p.status}`}>{p.status === 'upcoming' ? 'Upcoming' : 'Available on request'}</span>
      <h3 className="trn-title">{p.title}</h3>
      {p.description && <p className="trn-desc">{p.description}</p>}
      <ul className="trn-meta">
        <li>
          <Clock size={15} aria-hidden="true" /> {p.duration || 'Duration on request'}
        </li>
        <li>
          <CalendarDays size={15} aria-hidden="true" /> {p.date ? fmtDate(p.date) : 'Date on request'}
        </li>
        {p.format && (
          <li>
            <MonitorSmartphone size={15} aria-hidden="true" /> {p.format}
          </li>
        )}
        {p.location && (
          <li>
            <MapPin size={15} aria-hidden="true" /> {p.location}
          </li>
        )}
      </ul>
      <PrefillLink value={p.id} target="book" className="trn-cta">
        {p.status === 'upcoming' ? 'Register interest' : 'Enquire for your team'} <ArrowRight size={14} aria-hidden="true" />
      </PrefillLink>
    </article>
  );

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Training & Professional Development', description: PAGE_DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'MedReg training programs',
            itemListElement: TRAINING_PROGRAMS.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Course',
                name: p.title,
                description: p.description || `${p.title} training for medical device professionals.`,
                provider: { '@id': ORG_ID },
                url: `${absoluteUrl(PAGE_PATH)}#${p.id}`,
              },
            })),
          },
        ]}
      />

      <section className="page-banner svc-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Training', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">Training &amp; Professional Development</span>
            <h1 className="page-banner-title svc-banner-title">Regulatory Training for Medical Device Teams</h1>
            <p className="page-banner-subtitle">
              Practical programs on quality management, risk management, clinical and biological evaluation, EU MDR, US FDA and sterilization validation, delivered for your team.
            </p>
            <div className="svc-banner-ctas">
              <a href="#book" className="btn btn-gold">
                <span>Book a Training Session for Your Team</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="trn-audience">
            <Users size={22} aria-hidden="true" />
            <p>
              <strong>Who it is for:</strong> {TRAINING_AUDIENCE}
            </p>
          </div>

          {upcoming.length > 0 && (
            <>
              <h2 className="section-title" style={{ marginTop: '40px' }}>Upcoming training programs</h2>
              <div className="trn-grid">{upcoming.map(card)}</div>
            </>
          )}

          <h2 className="section-title" style={{ marginTop: '40px' }}>Training catalogue</h2>
          <p className="section-subtitle" style={{ marginBottom: '28px' }}>
            These programs are available on request. Choose a program to book a session for your team; we will confirm the schedule and delivery format with you.
          </p>
          <div className="trn-grid">{onRequest.map(card)}</div>
        </div>
      </section>

      {past.length > 0 && (
        <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 className="section-title">Past training programs</h2>
            <div className="trn-past">
              {past.map((t) => (
                <article key={t.id} className="trn-past-card">
                  {t.photos?.[0] && (
                    <div className="trn-past-media">
                      <Image src={t.photos[0].src} alt={t.photos[0].alt} fill sizes="(max-width: 768px) 92vw, 380px" style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                  <div className="trn-past-body">
                    <div className="trn-past-meta">
                      {fmtDate(t.date)} · {t.location}
                    </div>
                    <h3 className="trn-title">{t.title}</h3>
                    {t.description && <p className="trn-desc">{t.description}</p>}
                    {t.highlights && (
                      <ul className="cb-card-list">
                        {t.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad eq-section" id="book">
        <div className="container eq-layout">
          <div className="eq-intro">
            <span className="section-label">Corporate Training</span>
            <h2 className="section-title">Book a Training Session for Your Team</h2>
            <p className="section-subtitle">
              Tell us which programs you are interested in, how many participants you expect and when you would like the training. Our team will get back to you to confirm the details.
            </p>
            <div className="eq-contact">
              <a href={`tel:${COMPANY_INFO.phones[0].value}`}>{COMPANY_INFO.phones[0].display}</a>
              <span>{COMPANY_INFO.timezone.label}</span>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`}>{COMPANY_INFO.emails[0].display}</a>
            </div>
          </div>
          <div className="eq-card">
            <PrefilledForm
              id="training-form"
              field="programs"
              lookup={lookup}
              endpoint="/api/training/"
              fields={TRAINING_FORM}
              submitLabel="Send Training Request"
              successTitle="Training request received"
              successText="Thank you. Our team will contact you to confirm the program, schedule and delivery format."
            />
          </div>
        </div>
      </section>
    </>
  );
}
