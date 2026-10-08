/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
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
