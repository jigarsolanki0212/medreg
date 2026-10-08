import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

// Bump a page's date when its content meaningfully changes. Google ignores a lastmod that
// changes on every build, so these are fixed dates rather than `new Date()`.
const CONTENT_UPDATED = '2026-10-08';

const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; images?: string[] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly', images: ['/assets/home_about.png', '/assets/logo.png'] },
  { path: '/india/', priority: 0.95, changeFrequency: 'monthly', images: ['/assets/india.png'] },
  { path: '/europe/', priority: 0.95, changeFrequency: 'monthly', images: ['/assets/europe.png'] },
  { path: '/usa/', priority: 0.95, changeFrequency: 'monthly', images: ['/assets/usa.png'] },
  { path: '/other-services/', priority: 0.9, changeFrequency: 'monthly', images: ['/assets/other.png'] },
  { path: '/about-us/', priority: 0.8, changeFrequency: 'monthly', images: ['/assets/office-01.png', '/assets/office-02.png'] },
  { path: '/contact-us/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/team/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blogs/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/landing-page/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/llms-txt/', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: CONTENT_UPDATED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images ? { images: p.images.map((i) => absoluteUrl(i)) } : {}),
  }));
}
