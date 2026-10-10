import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Briefcase, MapPin, Clock, GraduationCap, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PrefilledForm from '@/components/PrefilledForm';
import PrefillLink from '@/components/PrefillLink';
import { COMPANY_INFO } from '@/data/medregData';
import { JOB_OPENINGS } from '@/data/siteContent';
import { CAREERS_FORM } from '@/data/formSpecs';
import { pageMetadata, webPageJsonLd, ORG_ID } from '@/lib/seo';

const PAGE_PATH = '/careers/';
const PAGE_DESCRIPTION =
  'Careers at MedReg: join a medical device regulatory consultancy in Ahmedabad working on European, US FDA, global and Indian regulatory projects.';

export const metadata: Metadata = pageMetadata({
  title: 'Careers at MedReg',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function CareersPage() {
  const lookup = Object.fromEntries(JOB_OPENINGS.map((j) => [j.id, j.designation]));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Careers at MedReg', description: PAGE_DESCRIPTION }),
          ...JOB_OPENINGS.map((j) => ({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: j.designation,
            description: j.description,
            employmentType: j.employmentType,
            hiringOrganization: { '@id': ORG_ID },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: j.location, addressCountry: 'IN' } },
            qualifications: j.qualifications.join('; '),
            experienceRequirements: j.experience,
          })),
        ]}
      />

      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Careers', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">Careers</span>
            <h1 className="page-banner-title svc-banner-title">Build Your Career in Medical Device Regulatory Affairs</h1>
            <p className="page-banner-subtitle">
              Work with a team that helps medical device manufacturers bring safe, compliant products to markets in Europe, the USA, India and beyond.
            </p>
            <div className="svc-banner-ctas">
              <a href="#apply" className="btn btn-gold">
                <span>Apply Now</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-label">Working at MedReg</span>
              <h2 className="section-title">Learn, grow and work on real regulatory projects</h2>
              <p className="cb-p">
                At MedReg you work alongside regulatory and quality specialists on projects across several markets, from technical documentation and quality management systems to submissions and post-market compliance.
              </p>
              <p className="cb-p">
                Our office is in {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}. We welcome applications from people with backgrounds in regulatory affairs, quality assurance, biomedical engineering, life sciences and related fields.
              </p>
            </div>
            <div className="careers-photo">
              <Image src="/assets/home_about.png" alt="The MedReg team" width={564} height={574} sizes="(max-width: 992px) 90vw, 460px" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title">Current openings</h2>
          {JOB_OPENINGS.length === 0 ? (
            <div className="exh-empty">
              <Briefcase size={26} aria-hidden="true" />
              <div>
                <p>
                  <strong>There are no open positions listed right now.</strong> We are always glad to hear from talented people: send us your CV and we will contact you when a suitable role opens.
                </p>
                <a href="#apply" className="btn btn-primary btn-sm">
                  <span>Send a General Application</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="job-list">
              {JOB_OPENINGS.map((j) => (
                <article key={j.id} className="job-card" id={j.id}>
                  <div className="job-head">
                    <div>
                      <h3 className="trn-title">{j.designation}</h3>
                      {j.department && <div className="job-dept">{j.department}</div>}
                    </div>
                    <PrefillLink value={j.id} target="apply" className="btn btn-primary btn-sm">
                      Apply Now
                    </PrefillLink>
                  </div>
                  <ul className="trn-meta">
                    <li>
                      <MapPin size={15} aria-hidden="true" /> {j.location}
                    </li>
                    <li>
                      <Clock size={15} aria-hidden="true" /> {j.employmentType}
                    </li>
                    <li>
                      <Briefcase size={15} aria-hidden="true" /> {j.experience}
                    </li>
                  </ul>
                  <p className="trn-desc">{j.description}</p>
                  {j.responsibilities && (
                    <>
                      <h4 className="job-sub">Responsibilities</h4>
                      <ul className="cb-card-list">
                        {j.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <h4 className="job-sub">
                    <GraduationCap size={15} aria-hidden="true" /> Qualifications
                  </h4>
                  <ul className="cb-card-list">
                    {j.qualifications.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-pad eq-section" id="apply">
        <div className="container eq-layout">
          <div className="eq-intro">
            <span className="section-label">Apply</span>
            <h2 className="section-title">Apply to MedReg</h2>
            <p className="section-subtitle">
              Fill in your details and attach your CV (PDF, DOC or DOCX, up to 5 MB). Your information is used only to assess your application.
            </p>
          </div>
          <div className="eq-card">
            <PrefilledForm
              id="careers-form"
              field="position"
              lookup={lookup}
              endpoint="/api/careers/"
              fields={CAREERS_FORM}
              submitLabel="Submit Application"
              successTitle="Application received"
              successText="Thank you for your interest in MedReg. Our team will review your application and contact you if your profile matches a role."
            />
          </div>
        </div>
      </section>
    </>
  );
}
