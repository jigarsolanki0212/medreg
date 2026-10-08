import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail for page banners plus matching BreadcrumbList structured data. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((item, idx) => (
            <li key={item.path}>
              <ChevronRight size={13} aria-hidden="true" />
              {idx === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
