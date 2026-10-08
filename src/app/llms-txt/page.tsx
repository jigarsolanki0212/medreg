import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FileCode2, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '@/data/medregData';

export const metadata: Metadata = {
  title: 'llms.txt | Machine-Readable Regulatory Knowledge Base',
  description: 'Structured, machine-readable regulatory intelligence regarding MedReg Consultancy LLP, CDSCO, CE MDR, US FDA 510(k), and ISO 13485 consulting services.',
  alternates: {
    canonical: 'https://medreg.in/llms-txt/'
  }
};

export default function LlmsTxtPage() {
  return (
    <div style={{ padding: '80px 0', backgroundColor: 'var(--slate-50)' }}>
      <div className="container container-narrow">
        <div className="card" style={{ padding: '48px' }}>
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
            <Link href="/llms.txt" className="btn btn-primary btn-sm">
              <span>View Raw llms.txt</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ fontSize: '15px', color: 'var(--slate-700)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Summary</h2>
              <p>
                MedReg Consultancy LLP provides medical device and IVD regulatory consulting for CDSCO (India), CE Marking (EU MDR 2017/745 & IVDR 2017/746), US FDA 510(k), QMSR (21 CFR Part 820), MDSAP, and ISO 13485:2016. We specialize in Class A, B, C, and D medical devices.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Organization Details</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>Entity:</strong> {COMPANY_INFO.name}</li>
                <li><strong>Tagline:</strong> {COMPANY_INFO.tagline}</li>
                <li><strong>Founded:</strong> {COMPANY_INFO.establishedYear} ({COMPANY_INFO.yearsOfExperience} years of experience)</li>
                <li><strong>Headquarters:</strong> {COMPANY_INFO.address.full}</li>
                <li><strong>Phone:</strong> {COMPANY_INFO.phones[0].display}, {COMPANY_INFO.phones[1].display}</li>
                <li><strong>Email:</strong> {COMPANY_INFO.emails[0].display}, {COMPANY_INFO.emails[1].display}</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Primary Markets Served</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>&bull; <strong>India (CDSCO):</strong> Form MD-5, MD-9 Manufacturing Licenses; Form MD-15 Import Licenses; Clinical Trials; Free Sale Certificates; Rule 44 Labeling; Indian Authorized Agent.</li>
                <li>&bull; <strong>Europe (CE Mark):</strong> EU MDR 2017/745; EU IVDR 2017/746; Annex II & III Technical Master Files; CER; GSPR; PSUR; PRRC; European Authorized Representative (EC REP).</li>
                <li>&bull; <strong>USA (US FDA):</strong> 510(k) Premarket Notifications; QMSR 21 CFR Part 820; Q-Submissions; Small Business Qualification (-75% fee relief); GUDID; US Agent Services; FDA Form 483 responses.</li>
                <li>&bull; <strong>Global:</strong> MDSAP across 5 nations (US, CA, BR, JP, AU); ISO 13485:2016 QMS; IMDRF STED Dossiers; Country Registrations in ANVISA, TGA, Health Canada, SFDA.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--slate-900)', marginBottom: '6px' }}>Key Metrics</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>&bull; Complete Projects: 2,000+</li>
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
