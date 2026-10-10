import React from 'react';
import type { Metadata } from 'next';
import { FileCode2, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/llms-txt/';
const PAGE_DESCRIPTION =
  'Machine-readable facts about MedReg Consultancy LLP and its CDSCO, EU MDR/IVDR, US FDA, MDSAP and ISO 13485 services for AI assistants and search.';

export const metadata: Metadata = pageMetadata({
  title: 'llms.txt – Machine-Readable Company Information',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function LlmsTxtPage() {
  return (
    <div style={{ padding: '60px 0 80px', backgroundColor: 'var(--slate-50)' }}>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'MedReg llms.txt', description: PAGE_DESCRIPTION, type: 'WebPage' })} />
      <div className="container container-narrow">
        <div className="breadcrumbs-light">
          <Breadcrumbs items={[{ name: 'llms.txt', path: PAGE_PATH }]} />
        </div>
        <div className="card no-tilt llms-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Bot size={26} />
            </div>
            <div>
              <h1 style={{ fontSize: '28px', color: 'var(--slate-900)' }}>llms.txt &mdash; MedReg AI Context</h1>
              <p style={{ fontSize: '14px', color: 'var(--slate-500)' }}>Standardized context for AI agents, LLMs, and search indexes</p>
            </div>
          </div>

          <div style={{ padding: '16px 20px', backgroundColor: 'var(--primary-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '14.5px', color: 'var(--slate-700)' }}>
              Raw markdown endpoint accessible at: <code style={{ backgroundColor: 'var(--white)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>/llms.txt</code>
            </div>
            <a href="/llms.txt" className="btn btn-primary btn-sm">
              <span>View Raw llms.txt</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ fontSize: '15px', color: 'var(--slate-700)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Summary</h2>
              <p>
                MedReg provides regulatory consulting for CDSCO India, FDA 510(k), and CE Marking. We specialize in Class A, B, C, and D medical devices.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Organization Details</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>Entity:</strong> {COMPANY_INFO.name}</li>
                <li><strong>Tagline:</strong> {COMPANY_INFO.tagline}</li>
                <li><strong>Headquarters:</strong> {COMPANY_INFO.address.full}</li>
                <li><strong>Phone:</strong> {COMPANY_INFO.phones[0].display}, {COMPANY_INFO.phones[1].display}</li>
                <li><strong>Email:</strong> {COMPANY_INFO.emails[0].display}</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Primary Markets Served</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>&bull; <strong>India:</strong> Manufacturing License, Import License, Clinical Trials, Free Sale Certificate, Authorized Agent, Wholesale License and more.</li>
                <li>&bull; <strong>Europe:</strong> CE Mark, Technical Master File, Gap Analysis, Clinical Evaluation, PMS Report, Risk Analysis (EN ISO 14971), PRRC, Authorized Agent through channel partners.</li>
                <li>&bull; <strong>USA:</strong> FDA classification, establishment registration and device listing, 510(k), Small Business Determination, Q-Submission, GUDID, U.S. Agent, labelling, QMSR, training, regulatory reporting, design controls, biocompatibility, DMR, DHR, import and export, Indian Authorized Agent, Indian supplier evaluation.</li>
                <li>&bull; <strong>Other markets:</strong> Technical File / Dossier per IMDRF and GHTF, QMS Documentation, Internal Audit, Supplier Development, Process Validation.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Key Metrics</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>&bull; Complete Projects: 2k+</li>
                <li>&bull; Countries Served: 20+</li>
                <li>&bull; Clients Served: 950+</li>
                <li>&bull; Service Offerings: 250+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
