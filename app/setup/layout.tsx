
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

/* =========================
   SITE CONFIGURATION
========================= */
const SITE_URL = 'https://freegoiptv.us';
const BRAND = 'FreeGo IPTV';
const SETUP_URL = `${SITE_URL}/setup`;
const PRICING_URL = `${SITE_URL}/pricing`;
const LOGO_URL = `${SITE_URL}/img/logo.webp`;

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title:
    'FreeGo IPTV Setup Guide — Firestick, Android, Smart TV, iOS & PC',

  description:
    'Learn how to set up FreeGo IPTV on Firestick, Android TV, Smart TV, iPhone, Windows, and Mac. Follow our step-by-step IPTV installation guide.',

  authors: [{ name: 'FreeGo IPTV Team' }],
  creator: BRAND,
  publisher: BRAND,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: SETUP_URL,
  },

  openGraph: {
    title: 'FreeGo IPTV Setup Guide — Install IPTV on Any Device',
    description:
      'Step-by-step instructions to set up FreeGo IPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac.',
    url: SETUP_URL,
    siteName: BRAND,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: 'FreeGo IPTV Setup Guide',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FreeGo IPTV Setup Guide — Install IPTV on Any Device',
    description:
      'Follow our IPTV installation guide for Firestick, Android TV, Smart TV, iOS, Windows, and Mac.',
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

  category: 'tutorial',
};

/* =========================
   JSON-LD: HOW TO SCHEMA
========================= */
const HowToSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',

    name: 'How to Set Up FreeGo IPTV on Any Device',

    description:
      'Step-by-step instructions to install and configure FreeGo IPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac.',

    url: SETUP_URL,

    tool: [
      {
        '@type': 'HowToTool',
        name: 'Firestick / Fire TV',
      },
      {
        '@type': 'HowToTool',
        name: 'Android TV / Google TV',
      },
      {
        '@type': 'HowToTool',
        name: 'Smart TV (Samsung, LG, Sony)',
      },
      {
        '@type': 'HowToTool',
        name: 'iOS / iPhone / iPad',
      },
      {
        '@type': 'HowToTool',
        name: 'Windows PC',
      },
      {
        '@type': 'HowToTool',
        name: 'Mac Computer',
      },
    ],

    step: [
      {
        '@type': 'HowToStep',
        name: 'Subscribe to FreeGo IPTV',
        position: 1,
        text:
          'Choose a FreeGo IPTV subscription plan and complete your order to receive your account details.',
        url: PRICING_URL,
      },
      {
        '@type': 'HowToStep',
        name: 'Check Your Account Details',
        position: 2,
        text:
          'After your subscription is activated, locate your IPTV login credentials, including your username, password, and server URL.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Your Device',
        position: 3,
        text:
          'Select your device: Firestick, Android TV, Smart TV, iOS, Windows, or Mac.',
      },
      {
        '@type': 'HowToStep',
        name: 'Install an IPTV Player',
        position: 4,
        text:
          'Download and install a compatible IPTV player for your device, such as IPTV Smarters Pro, TiviMate, or Smart IPTV.',
      },
      {
        '@type': 'HowToStep',
        name: 'Log In and Start Streaming',
        position: 5,
        text:
          'Open your IPTV player, enter your subscription credentials, and access the content included in your plan.',
      },
    ],

    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Stable Internet Connection',
      },
      {
        '@type': 'HowToSupply',
        name: 'FreeGo IPTV Login Credentials',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="howto-jsonld"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
};

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const BreadcrumbSchema = () => {
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
        name: 'Setup Guide',
        item: SETUP_URL,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="breadcrumb-jsonld"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
};

/* =========================
   MAIN LAYOUT
========================= */
export default function SetupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <HowToSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}
