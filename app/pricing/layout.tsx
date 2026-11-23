
 // app/pricing/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = 'https://freegoiptv.us';
const BRAND = 'FreeGo IPTV';
const PRICING_URL = `${SITE_URL}/pricing`;
const LOGO_URL = `${SITE_URL}/img/logo.webp`;

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'FreeGo IPTV Pricing — IPTV Subscription Plans & Deals',

  description:
    'Explore FreeGo IPTV subscription plans. Choose from flexible 3, 6, and 12-month IPTV plans with multi-device support, instant activation, and premium streaming quality.',

  authors: [{ name: 'FreeGo IPTV Team' }],
  creator: BRAND,
  publisher: BRAND,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: PRICING_URL,
  },

  openGraph: {
    title: 'FreeGo IPTV Pricing — IPTV Subscription Plans',
    description:
      'Explore flexible IPTV subscription plans for 3, 6, and 12 months with multi-device support and instant activation.',
    url: PRICING_URL,
    siteName: BRAND,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: 'FreeGo IPTV Pricing Plans',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FreeGo IPTV Pricing — IPTV Subscription Plans',
    description:
      'Choose your IPTV plan: 3, 6, or 12 months. Instant activation and multi-device support.',
    images: [LOGO_URL],
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

  category: 'technology',
};

/* =========================
   JSON-LD: PRODUCT SCHEMA
========================= */
const PricingProductSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'FreeGo IPTV Subscription',
    description:
      'IPTV subscription service with live TV channels and on-demand content in HD and 4K quality.',
    brand: {
      '@type': 'Brand',
      name: BRAND,
    },
    url: PRICING_URL,
    image: LOGO_URL,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '30.00',
      highPrice: '139.00',
      offerCount: 3,
      url: PRICING_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-product-jsonld"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
};

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const PricingBreadcrumbSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pricing',
        item: PRICING_URL,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-breadcrumb-jsonld"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
};

/* =========================
   MAIN LAYOUT
========================= */
export default function PricingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <PricingBreadcrumbSchema />
      <PricingProductSchema />
      {children}
    </>
  );
}
