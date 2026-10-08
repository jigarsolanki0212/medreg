import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import MotionController from '@/components/MotionController';
import FloatingContact from '@/components/FloatingContact';
import { DEFAULT_OG_IMAGE, ORGANIZATION_JSONLD, SITE_NAME, SITE_URL } from '@/lib/seo';

// Self-hosted at build time: no render-blocking request to Google Fonts, no layout shift.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const DEFAULT_TITLE = 'Medical Device Regulatory Consultant in India | MedReg';
const DEFAULT_DESCRIPTION =
  'MedReg Consultancy (Ahmedabad, since 2011) secures CDSCO, CE (EU MDR/IVDR), US FDA 510(k), MDSAP & ISO 13485 approvals for medical device & IVD makers.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | MedReg',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'medical device regulatory consultant India',
    'CDSCO medical device registration',
    'CDSCO import license MD-15',
    'medical device manufacturing license MD-5 MD-9',
    'CE marking consultant EU MDR 2017/745',
    'IVDR 2017/746 consultant',
    'US FDA 510(k) consultant India',
    'ISO 13485 certification consultant',
    'MDSAP consultant',
    'medical device consultant Ahmedabad',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Medical Device Regulatory Consulting',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/assets/cropped-favicon.png', sizes: '512x512' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  // Set these in Vercel → Settings → Environment Variables after verifying ownership.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1E38',
  colorScheme: 'light',
};

// Runs before first paint: enables scroll-reveal styles only when JS + IntersectionObserver
// are available and the visitor has not asked for reduced motion. Falls back to fully
// visible content if the app fails to hydrate.
const revealBootScript = `(function(){try{var d=document.documentElement;if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('reveal-ready');setTimeout(function(){if(!window.__medregReveal)d.classList.remove('reveal-ready')},2500)}}catch(e){}})();`;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
        <JsonLd data={ORGANIZATION_JSONLD} />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        <Header />
        <main id="main-content" style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <MotionController />
      </body>
    </html>
  );
}
