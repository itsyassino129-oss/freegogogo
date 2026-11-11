
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins, Montserrat } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// ========================================
// FREEGO TV CONFIGURATION
// ========================================

const SITE_URL = "https://freegoiptv.us";
const SITE_NAME = "FreeGo TV";
const WHATSAPP_NUMBER = "212723870095";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// ========================================
// VIEWPORT
// ========================================

export const viewport: Viewport = {
  themeColor: "#faf0ef",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ========================================
// SEO METADATA
// ========================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "FreeGo TV | Premium IPTV Subscription USA 2026",
    template: "%s | FreeGo TV",
  },

  description:
    "Explore FreeGo TV IPTV subscriptions for Smart TV, Firestick, Android and more. Compare flexible plans, device compatibility and setup options.",

  applicationName: SITE_NAME,

  keywords: [
    "FreeGo TV",
    "FreeGo IPTV",
    "IPTV USA",
    "IPTV Subscription",
    "IPTV Subscription USA",
    "IPTV for Firestick",
    "IPTV for Smart TV",
    "IPTV for Android",
    "Premium IPTV",
    "IPTV Plans",
  ],

  authors: [{ name: "FreeGo TV Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Existing favicon paths.
  // Replace the image files with FreeGo TV artwork.
  icons: {
    icon: [
      {
        url: "/img/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        url: "/img/favicons/favicon.ico",
        sizes: "any",
      },
    ],

    apple: [
      {
        url: "/img/favicons/apple-touch-icon-57x57.png",
        sizes: "57x57",
      },
      {
        url: "/img/favicons/apple-touch-icon-72x72.png",
        sizes: "72x72",
      },
      {
        url: "/img/favicons/apple-touch-icon-114x114.png",
        sizes: "114x114",
      },
      {
        url: "/img/favicons/apple-touch-icon-120x120.png",
        sizes: "120x120",
      },
      {
        url: "/img/favicons/apple-touch-icon-144x144.png",
        sizes: "144x144",
      },
      {
        url: "/img/favicons/apple-touch-icon-152x152.png",
        sizes: "152x152",
      },
      {
        url: "/img/favicons/apple-touch-icon-180x180.png",
        sizes: "180x180",
      },
    ],

    other: [
      {
        rel: "mask-icon",
        url: "/img/favicons/safari-pinned-tab.svg",
        color: "#f02e54",
      },
    ],
  },

  manifest: "/img/favicons/site.webmanifest",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Add page-specific canonical URLs
  // in the metadata of each route.

  openGraph: {
    title: "FreeGo TV | Premium IPTV Subscription USA",
    description:
      "Explore FreeGo TV subscription plans, supported devices and simple IPTV setup options.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",

    images: [
      {
        url: `${SITE_URL}public/img/og-image.png`,
        width: 1200,
        height: 630,
        alt: "FreeGo TV - Premium IPTV Subscription",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FreeGo TV | Premium IPTV Subscription",
    description:
      "Discover FreeGo TV IPTV plans and compatible streaming devices.",
    images: [`${SITE_URL}/public/img/og-image.png`],
  },

  category: "technology",
};

// ========================================
// STRUCTURED DATA
// ========================================

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.webp`,
    image: `${SITE_URL}/public/img/og-image.png`,
    description:
      "FreeGo TV provides IPTV subscription plans and setup support.",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `https://wa.me/${WHATSAPP_NUMBER}`,
      availableLanguage: ["English"],
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "FreeGo TV official website for IPTV plans, device compatibility and setup information.",
    inLanguage: "en-US",
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FreeGo TV IPTV Subscription",
    serviceType: "IPTV Subscription",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${SITE_URL}/pricing`,
    description:
      "IPTV subscription plans for compatible streaming devices.",
  },
];

// ========================================
// ROOT LAYOUT
// ========================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="thumbnail"
          content={`${SITE_URL}/public/img/og-image.png`}
        />
      </head>

      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#050B14] text-white bg-square-pattern overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen w-full flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />

        {/* Google Analytics - Existing ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B7BHW6LZJG"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B7BHW6LZJG');
            `,
          }}
        />
      </body>
    </html>
  );
}
