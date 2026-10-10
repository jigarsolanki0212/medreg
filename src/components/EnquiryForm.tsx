'use client';

import React, { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Send, Upload } from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';

export type FieldType = 'text' | 'email' | 'tel' | 'number' | 'url' | 'select' | 'checkboxes' | 'textarea' | 'file';

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /** Spans both columns on wide screens. */
  wide?: boolean;
  autoComplete?: string;
  maxLength?: number;
  min?: number;
  /** For file inputs. */
  accept?: string;
  maxSizeMb?: number;
  help?: string;
}

interface Props {
  endpoint: string;
  fields: FieldDef[];
  submitLabel: string;
  successTitle: string;
  successText: string;
  /** Pre-filled values, e.g. a programme selected from a card. */
  initial?: Record<string, string | string[]>;
  id?: string;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const URL_RE = /^https?:\/\/[^\s.]+\.[^\s]{2,}$/i;

type Values = Record<string, string | string[]>;

export default function EnquiryForm({ endpoint, fields, submitLabel, successTitle, successText, initial, id }: Props) {
  const blank = useMemo(() => {
    const v: Values = {};
    fields.forEach((f) => {
      if (f.type !== 'file') v[f.name] = f.type === 'checkboxes' ? [] : '';
    });
    return { ...v, ...(initial || {}) };
  }, [fields, initial]);

  const [values, setValues] = useState<Values>(blank);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [general, setGeneral] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [hp, setHp] = useState('');

  const set = (name: string, v: string | string[]) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    fields.forEach((f) => {
      const v = values[f.name];
      if (f.type === 'file') {
        const file = files[f.name];
        if (f.required && !file) errs[f.name] = `Please attach your ${f.label.toLowerCase()}.`;
        if (file && f.maxSizeMb && file.size > f.maxSizeMb * 1024 * 1024) errs[f.name] = `File must be ${f.maxSizeMb} MB or smaller.`;
        if (file && f.accept && !f.accept.split(',').some((ext) => file.name.toLowerCase().endsWith(ext.trim()))) errs[f.name] = `Allowed formats: ${f.accept.replace(/\./g, '').toUpperCase()}.`;
        return;
      }
      const str = Array.isArray(v) ? '' : (v || '').trim();
      if (f.type === 'checkboxes') {
        if (f.required && (!Array.isArray(v) || v.length === 0)) errs[f.name] = 'Please select at least one option.';
        return;
      }
      if (f.required && !str) {
        errs[f.name] = `Please enter ${f.label.replace(/\s*\(.*\)$/, '').toLowerCase()}.`;
        return;
      }
      if (!str) return;
      if (f.type === 'email' && !EMAIL_RE.test(str)) errs[f.name] = 'Please provide a valid email (e.g. name@company.com).';
      if (f.type === 'tel') {
        const digits = str.replace(/[\s+\-()]/g, '');
        if (/[a-zA-Z]/.test(str) || digits.length < 7 || digits.length > 15) errs[f.name] = 'Phone number must contain 7 to 15 digits.';
      }
      if (f.type === 'number' && (!/^\d+$/.test(str) || (f.min !== undefined && Number(str) < f.min))) errs[f.name] = `Please enter a whole number${f.min !== undefined ? ` of at least ${f.min}` : ''}.`;
      if (f.type === 'url' && !URL_RE.test(str)) errs[f.name] = 'Please enter a full link starting with https://';
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneral('');
    if (hp) {
      setDone(true);
      return;
    }
    if (!validate()) return;
    setLoading(true);
    try {
      const hasFile = fields.some((f) => f.type === 'file');
      let res: Response;
      if (hasFile) {
        const fd = new FormData();
        Object.entries(values).forEach(([k, v]) => (Array.isArray(v) ? v.forEach((x) => fd.append(k, x)) : fd.append(k, v)));
        Object.entries(files).forEach(([k, f]) => f && fd.append(k, f));
        fd.append('page', window.location.pathname);
        res = await fetch(endpoint, { method: 'POST', body: fd });
      } else {
        res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, page: window.location.pathname }),
        });
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setGeneral(data.error || 'We could not send your request. Please call or email us directly.');
        return;
      }
      setDone(true);
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'generate_lead', { form_location: window.location.pathname, form: endpoint });
    } catch {
      setGeneral('Network error. Please check your connection, or call or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="eq-success" role="status">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h3>{successTitle}</h3>
        <p>{successText}</p>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setDone(false);
            setValues(blank);
            setFiles({});
          }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form className="eq-form" onSubmit={onSubmit} noValidate id={id}>
      {general && (
        <div role="alert" className="eq-alert">
          <AlertCircle size={16} aria-hidden="true" />
          <span>
            {general}{' '}
            <a href={`tel:${COMPANY_INFO.phones[0].value}`}>{COMPANY_INFO.phones[0].display}</a> ·{' '}
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`}>{COMPANY_INFO.emails[0].display}</a>
          </span>
        </div>
      )}

      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor={`${id || 'eq'}-hp`}>Leave this empty</label>
        <input id={`${id || 'eq'}-hp`} tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="eq-grid">
        {fields.map((f) => {
          const fid = `${id || 'eq'}-${f.name}`;
          const err = errors[f.name];
          const label = (
            <label className="form-label" htmlFor={f.type === 'checkboxes' ? undefined : fid} id={`${fid}-label`}>
              {f.label}
              {f.required ? ' *' : ''}
            </label>
          );
          const errEl = err ? (
            <span className="eq-err" id={`${fid}-err`}>
              <AlertCircle size={12} aria-hidden="true" /> {err}
            </span>
          ) : null;
          const common = {
            id: fid,
            name: f.name,
            'aria-invalid': !!err,
            'aria-describedby': err ? `${fid}-err` : undefined,
          };

          return (
            <div key={f.name} className={`form-group ${f.wide || f.type === 'textarea' || f.type === 'checkboxes' ? 'eq-wide' : ''}`}>
              {f.type === 'checkboxes' ? (
                <fieldset className="eq-fieldset" aria-describedby={err ? `${fid}-err` : undefined}>
                  <legend className="form-label">
                    {f.label}
                    {f.required ? ' *' : ''}
                  </legend>
                  <div className="eq-checks">
                    {f.options?.map((o) => {
                      const arr = (values[f.name] as string[]) || [];
                      const checked = arr.includes(o);
                      return (
                        <label key={o} className={`eq-check ${checked ? 'is-checked' : ''}`}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => set(f.name, checked ? arr.filter((x) => x !== o) : [...arr, o])}
                          />
                          <span>{o}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              ) : (
                label
              )}

              {f.type === 'select' && (
                <select {...common} className="form-select" value={values[f.name] as string} onChange={(e) => set(f.name, e.target.value)}>
                  <option value="">Select…</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}
              {f.type === 'textarea' && (
                <textarea
                  {...common}
                  className="form-textarea"
                  placeholder={f.placeholder}
                  maxLength={f.maxLength || 2000}
                  value={values[f.name] as string}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              )}
              {f.type === 'file' && (
                <label className={`eq-file ${err ? 'has-error' : ''}`} htmlFor={fid}>
                  <Upload size={18} aria-hidden="true" />
                  <span>{files[f.name]?.name || f.placeholder || 'Choose a file'}</span>
                  <input
                    {...common}
                    type="file"
                    accept={f.accept}
                    onChange={(e) => {
                      setFiles((s) => ({ ...s, [f.name]: e.target.files?.[0] || null }));
                      if (errors[f.name]) setErrors((x) => ({ ...x, [f.name]: '' }));
                    }}
                  />
                </label>
              )}
              {['text', 'email', 'tel', 'number', 'url'].includes(f.type) && (
                <input
                  {...common}
                  type={f.type === 'number' ? 'text' : f.type}
                  inputMode={f.type === 'number' ? 'numeric' : f.type === 'tel' ? 'tel' : f.type === 'email' ? 'email' : undefined}
                  className="form-input"
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  maxLength={f.maxLength || 200}
                  value={values[f.name] as string}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              )}
              {f.help && !err && <span className="eq-help">{f.help}</span>}
              {errEl}
            </div>
          );
        })}
      </div>

      <button type="submit" className="btn btn-primary eq-submit" disabled={loading}>
        {loading ? (
          <>
            <span className="btn-spinner" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>{submitLabel}</span>
            <Send size={15} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
