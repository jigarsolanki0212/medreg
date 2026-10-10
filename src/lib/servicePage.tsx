import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { SERVICE_DETAILS, findService, servicePath, type MarketKey } from '@/data/marketServices';
import { pageMetadata } from '@/lib/seo';

type Params = { slug: string };

/** Builds the exports for a market's `[slug]/page.tsx` so every market shares one implementation. */
export function serviceRoute(market: MarketKey) {
  return {
    generateStaticParams(): Params[] {
      return SERVICE_DETAILS[market].map((s) => ({ slug: s.slug }));
    },
    async generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
      const { slug } = await params;
      const s = findService(market, slug);
      if (!s) return {};
      const meta = pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: servicePath(market, slug) });
      // Pages that only carry the short approved description stay out of search results until detailed content is added.
      return s.indexable ? meta : { ...meta, robots: { index: false, follow: true } };
    },
    async Page({ params }: { params: Promise<Params> }) {
      const { slug } = await params;
      const s = findService(market, slug);
      if (!s) notFound();
      return <ServiceDetailView market={market} service={s} />;
    },
  };
}
