import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_INFO } from '@/data/medregData';

export const metadata: Metadata = {
  metadataBase: new URL('https://medreg.in'),
  title: {
    default: 'Medreg Consultancy LLP | Medical Device Regulatory Services',
    template: '%s | MedReg Consultancy LLP'
  },
  description: 'Professional consultancy for medical device certifications and licenses in India (CDSCO), Europe (CE MDR/IVDR), USA (FDA 510k), MDSAP, and globally.',
  keywords: [
    'Medical Device Regulatory Services',
    'CDSCO Medical Device License',
    'CE Mark MDR 2017/745',
    'US FDA 510k Consultant',
    'ISO 13485 Certification',
    'MDSAP Audit Consulting',
    'Medical Device Consultant India',
    'MedReg Consultancy LLP Ahmedabad'
  ],
  authors: [{ name: 'MedReg Consultancy LLP' }],
  creator: 'MedReg Consultancy LLP',
  publisher: 'MedReg Consultancy LLP',
  icons: {
    icon: '/assets/cropped-favicon.png',
    shortcut: '/assets/cropped-favicon.png',
    apple: '/assets/cropped-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medreg.in',
    siteName: 'MedReg Consultancy LLP',
    title: 'Medreg Consultancy LLP | Medical Device Regulatory Services',
    description: 'Expert medical device regulatory approvals across CDSCO India, CE MDR Europe, US FDA, and global markets. 2,000+ completed projects since 2011.',
    images: [
      {
        url: '/assets/logo.png',
        width: 384,
        height: 120,
        alt: 'MedReg - Let\'s Decode The Regulations'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medreg Consultancy LLP | Medical Device Regulatory Services',
    description: 'Professional medical device and IVD regulatory consulting across India, Europe, USA, and global markets.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://medreg.in/#organization',
        name: 'Medreg Consultancy LLP',
        url: 'https://medreg.in',
        logo: 'https://medreg.in/assets/logo.png',
        image: 'https://medreg.in/assets/home_about.png',
        description: 'Global medical device and IVD regulatory consulting firm providing end-to-end licensure, technical file compilation, CE marking, FDA 510(k), and quality management system compliance.',
        telephone: '+91 88664 61989',
        email: 'info@medreg.in',
        foundingDate: '2011',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '11th Floor Block C – 1105, 1106 Titanium Business Park, Behind Divya Bhaskar Press, Near Makarba Railway Crossing',
          addressLocality: 'Makarba, Ahmedabad',
          addressRegion: 'Gujarat',
          postalCode: '380051',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '23.0039',
          longitude: '72.4975'
        },
        sameAs: [
          'https://www.linkedin.com/company/medreg-consultancy-llp/',
          'https://twitter.com/medreg_in',
          'https://www.facebook.com/medregconsultancy'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://medreg.in/#website',
        url: 'https://medreg.in',
        name: 'Medreg Consultancy LLP',
        publisher: {
          '@id': 'https://medreg.in/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
