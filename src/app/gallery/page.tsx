import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import GalleryGrid from '@/components/GalleryGrid';
import SocialSection from '@/components/SocialSection';
import { GALLERY_IMAGES } from '@/data/siteContent';
import { pageMetadata, webPageJsonLd, absoluteUrl } from '@/lib/seo';

const PAGE_PATH = '/gallery/';
const PAGE_DESCRIPTION = 'Photos of the MedReg team, our Ahmedabad office, training sessions, exhibitions and company milestones.';

export const metadata: Metadata = pageMetadata({
  title: 'Team Gallery & Company Memories',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Team Gallery & Company Memories', description: PAGE_DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'MedReg gallery',
            url: absoluteUrl(PAGE_PATH),
            image: GALLERY_IMAGES.filter((i) => !i.placeholder).map((i) => ({ '@type': 'ImageObject', contentUrl: absoluteUrl(i.src), caption: i.caption || i.alt })),
          },
        ]}
      />

      <section className="page-banner svc-banner svc-banner--plain">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'About Us', path: '/about-us/' }, { name: 'Gallery', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">Life at MedReg</span>
            <h1 className="page-banner-title svc-banner-title">Team Gallery &amp; Company Memories</h1>
            <p className="page-banner-subtitle">The people, workplace and moments behind MedReg.</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <GalleryGrid images={GALLERY_IMAGES} />
          <div className="gal-more">
            <p>See where we meet clients and run training sessions.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/exhibitions/" className="btn btn-secondary btn-sm">
                <span>Exhibitions &amp; Events</span>
              </Link>
              <Link href="/training/" className="btn btn-secondary btn-sm">
                <span>Training</span>
              </Link>
              <Link href="/careers/" className="btn btn-primary btn-sm">
                <span>Join Our Team</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SocialSection />
    </>
  );
}
