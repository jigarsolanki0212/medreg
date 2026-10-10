import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink, Info, UserRound } from 'lucide-react';
import type { Block } from '@/data/usaServices';

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Renders a cell value; "\n" separates items within a cell. */
function Cell({ value }: { value: string }) {
  const parts = value.split('\n');
  if (parts.length === 1) return <>{value}</>;
  return (
    <ul className="cb-cell-list">
      {parts.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p className="cb-p">{block.text}</p>;

    case 'h':
      return <h3 className="cb-h">{block.text}</h3>;

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className={`cb-list ${block.columns ? 'cb-list--cols' : ''}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <CheckCircle2 size={17} className="cb-list-icon" aria-hidden="true" />
              {typeof item === 'string' ? (
                <span>{item}</span>
              ) : (
                <span>
                  <strong>{item.label}:</strong> {item.text}
                </span>
              )}
            </li>
          ))}
        </Tag>
      );
    }

    case 'table':
      return (
        <figure className="cb-table-wrap">
          {block.caption && <figcaption className="cb-table-caption">{block.caption}</figcaption>}
          <div className="cb-table-scroll" tabIndex={0} role="region" aria-label={block.caption || 'Table'}>
            <table className="cb-table">
              <thead>
                <tr>
                  {block.headers.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((c, i) => (
                      <td key={i} data-label={block.headers[i]} className={/^(YES|NO)\b/.test(c) ? `cb-yn cb-yn--${c.startsWith('YES') ? 'yes' : 'no'}` : undefined}>
                        <Cell value={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(block.note || block.source) && (
            <div className="cb-table-note">
              {block.note && <span>{block.note}</span>}
              {block.source && (
                <a href={block.source.href} target="_blank" rel="noopener noreferrer">
                  {block.source.label} <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </figure>
      );

    case 'steps':
      return (
        <ol className="cb-steps">
          {block.items.map((s, i) => (
            <li key={s.title} className="cb-step">
              <span className="cb-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="cb-step-title">{s.title}</h3>
                {s.text && <p className="cb-step-text">{s.text}</p>}
              </div>
            </li>
          ))}
        </ol>
      );

    case 'timeline':
      return (
        <div className="cb-timeline-wrap">
          <ol className="cb-timeline">
            {block.items.map((t) => (
              <li key={t.when} className="cb-timeline-item">
                <span className="cb-timeline-when">{t.when}</span>
                <span className="cb-timeline-dot" aria-hidden="true" />
                <h3 className="cb-timeline-title">{t.title}</h3>
                <p className="cb-timeline-text">{t.text}</p>
              </li>
            ))}
          </ol>
          {block.note && <p className="cb-table-note">{block.note}</p>}
        </div>
      );

    case 'cards':
      return (
        <div className={`cb-cards ${block.items.length === 1 ? 'cb-cards--single' : ''}`}>
          {block.items.map((c) => (
            <div key={c.title} className="cb-card">
              <h3 className="cb-card-title">{c.title}</h3>
              {c.text && <p className="cb-card-text">{c.text}</p>}
              {c.items && (
                <ul className="cb-card-list">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );

    case 'callout':
      return (
        <div className={`cb-callout cb-callout--${block.tone || 'info'}`}>
          {block.tone === 'expert' ? <UserRound size={20} aria-hidden="true" /> : <Info size={20} aria-hidden="true" />}
          <p>
            {block.text}
            {block.more && (
              <>
                {' '}For further information:{' '}
                {block.more.href ? (
                  <a href={block.more.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--primary)' }}>
                    {block.more.label}
                  </a>
                ) : (
                  <strong>{block.more.label}</strong>
                )}
              </>
            )}
          </p>
        </div>
      );

    case 'links':
      return (
        <div className="cb-links">
          {block.title && <div className="cb-links-title">{block.title}</div>}
          <ul>
            {block.items.map((l) =>
              isExternal(l.href) ? (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </li>
              ) : (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      );
  }
}

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  );
}
