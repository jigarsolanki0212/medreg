/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; frame-src 'self' https://www.google.com https://maps.google.com; connect-src 'self' https://maps.googleapis.com;"
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/india',
        permanent: true,
      },
      {
        source: '/services/india',
        destination: '/india',
        permanent: true,
      },
      {
        source: '/services/europe',
        destination: '/europe',
        permanent: true,
      },
      {
        source: '/services/usa',
        destination: '/usa',
        permanent: true,
      },
      {
        source: '/services/other-services',
        destination: '/other-services',
        permanent: true,
      },
      {
        source: '/whx-dubai-2026',
        destination: '/landing-page',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
