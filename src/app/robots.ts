import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Search and AI-answer crawlers are explicitly welcomed so MedReg can be cited in
// Google AI Overviews, ChatGPT search, Perplexity, Claude, Copilot and Apple Intelligence.
const AI_AND_SEARCH_BOTS = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Applebot',
  'Applebot-Extended',
  'DuckAssistBot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  // Keep preview/staging deployments out of the index.
  const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';
  if (!isProduction) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/', disallow: ['/api/'] },
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
