import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MedReg Consultancy LLP',
    short_name: 'MedReg',
    description: 'Medical device & IVD regulatory consulting — CDSCO, EU MDR/IVDR, US FDA 510(k), MDSAP, ISO 13485.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0B1E38',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/assets/cropped-favicon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
