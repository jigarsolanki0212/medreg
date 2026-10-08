/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';

// 'unsafe-eval' is only needed by React Fast Refresh in development.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://maps.googleapis.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https:",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "connect-src 'self' https://maps.googleapis.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // The previous WordPress site served every page with a trailing slash
  // (https://medreg.in/india/). Keeping that format preserves indexed URLs,
  // backlinks and canonical consistency.
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [24, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
      {
        source: '/llms:file(.*)\\.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/services', destination: '/india/', permanent: true },
      { source: '/services/india', destination: '/india/', permanent: true },
      { source: '/services/europe', destination: '/europe/', permanent: true },
      { source: '/services/usa', destination: '/usa/', permanent: true },
      { source: '/services/other-services', destination: '/other-services/', permanent: true },
      { source: '/whx-dubai-2026', destination: '/landing-page/', permanent: true },
      // Legacy WordPress endpoints that Google has crawled
      { source: '/feed', destination: '/blogs/', permanent: true },
      { source: '/comments/feed', destination: '/blogs/', permanent: true },
      { source: '/blog', destination: '/blogs/', permanent: true },
      { source: '/contact', destination: '/contact-us/', permanent: true },
      { source: '/about', destination: '/about-us/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wp-content/uploads/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
