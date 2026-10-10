import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';
import { USA_SERVICES_DETAIL, usaServicePath } from '@/data/usaServices';

// Bump a page's date when its content meaningfully changes. Google ignores a lastmod that
// changes on every build, so these are fixed dates rather than `new Date()`.
const CONTENT_UPDATED = '2026-10-08';
const REDESIGN_UPDATED = '2026-10-11';

const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; images?: string[] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly', images: ['/assets/home_about.png', '/assets/logo.png'] },
  { path: '/services/', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/europe/', priority: 0.95, changeFrequency: 'monthly', images: ['/assets/europe.png'] },
  { path: '/usa/', priority: 0.95, changeFrequency: 'monthly', images: ['/assets/usa-page-banner.jpg'] },
  { path: '/other-services/', priority: 0.9, changeFrequency: 'monthly', images: ['/assets/other.png'] },
  { path: '/india/', priority: 0.9, changeFrequency: 'monthly', images: ['/assets/india.png'] },
  { path: '/training/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/exhibitions/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/careers/', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/gallery/', priority: 0.5, changeFrequency: 'monthly', images: ['/assets/office-01.png', '/assets/office-02.png'] },
  { path: '/about-us/', priority: 0.8, changeFrequency: 'monthly', images: ['/assets/office-01.png', '/assets/office-02.png'] },
  { path: '/contact-us/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/team/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blogs/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/landing-page/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/llms-txt/', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
];

const REDESIGNED = new Set(['/', '/services/', '/usa/', '/training/', '/exhibitions/', '/careers/', '/gallery/', '/about-us/', '/contact-us/']);

export default function sitemap(): MetadataRoute.Sitemap {
  const usa = USA_SERVICES_DETAIL.map((s) => ({ url: absoluteUrl(usaServicePath(s.slug)), lastModified: REDESIGN_UPDATED, changeFrequency: 'monthly' as const, priority: 0.85 }));
  return PAGES.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: REDESIGNED.has(p.path) ? REDESIGN_UPDATED : CONTENT_UPDATED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images ? { images: p.images.map((i) => absoluteUrl(i)) } : {}),
  })).concat(usa);
}
