
import type { Metadata } from "next";

const BASE_URL = "https://freegoiptv.us";
const PAGE_PATH = "";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const OG_IMAGE_URL = `${BASE_URL}/img/syntra-logo.png`;
// Replace with your FreeGo TV image when available.

export const metadata: Metadata = {
  title: "FreeGo TV – Premium 4K IPTV & FreeGo IPTV Streaming (US)",
  description:
    "Access 20,000+ live TV channels and 65,000+ VOD movies in crisp 4K Ultra HD with FreeGo TV. Automated instant activation on Firestick, Smart TVs, Android, and iOS across the United States.",

  keywords: [
    "FreeGo TV",
    "FreeGo IPTV",
    "FreeGo IPTV US",
    "4K IPTV Streaming US",
    "Buy FreeGo TV",
    "IPTV Firestick Setup US",
    "Live US Sports Streaming",
    "FreeGo TV Subscription",
    "Best IPTV Provider 2026",
  ],

  authors: [{ name: "FreeGo TV Network" }],
  creator: "FreeGo TV",
  publisher: "FreeGo TV Network",

  metadataBase: new URL(BASE_URL),

  alternates: {
    canonical: FULL_URL,
  },

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

  openGraph: {
    title: "FreeGo TV – Premium 4K IPTV & FreeGo IPTV Streaming (US)",
    description:
      "Stream over 20,000 live channels and 65,000 VOD movies in 4K with zero buffering across the United States. Compatible with Firestick, Smart TVs, and mobile devices.",
    url: FULL_URL,
    siteName: "FreeGo TV Network",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "FreeGo TV 4K Live Streaming Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FreeGo TV – Premium 4K IPTV & FreeGo IPTV Streaming (US)",
    description:
      "Stream 20,000+ live TV channels and 65,000 VOD titles with instant automated setup on Firestick and Smart TVs.",
    images: [OG_IMAGE_URL],
  },
};

export default function FreeGoTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Product Structured Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FreeGo TV IPTV Subscription",
    image: [OG_IMAGE_URL],
    description:
      "Enterprise 4K IPTV platform streaming over 20,000 live channels and 65,000+ VOD titles with anti-freeze servers across the US.",
    sku: "FREEGO-TV-2026",
    mpn: "FREEGO-4K-01",
    brand: {
      "@type": "Brand",
      name: "FreeGo TV",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "30.00",
      highPrice: "139.00",
      offerCount: "3",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: FULL_URL,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "520",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Service Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IPTV Streaming Service",
    provider: {
      "@type": "Organization",
      name: "FreeGo TV Network",
      url: BASE_URL,
      logo: OG_IMAGE_URL,
    },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "FreeGo TV Subscription Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FreeGo TV 3 Months Subscription",
          },
          price: "30.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FreeGo TV 6 Months Subscription",
          },
          price: "50.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FreeGo TV 12 Months Subscription",
          },
          price: "72.00",
          priceCurrency: "USD",
        },
      ],
    },
  };

  // Breadcrumb Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: FULL_URL,
      },
    ],
  };

  // FAQ Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is FreeGo TV and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FreeGo TV is an enterprise-grade US IPTV platform (freegoiptv.us) providing direct online streaming to over 20,000 live TV channels and 65,000 VOD movies and series directly through high-bandwidth edge servers.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a FreeGo TV subscription cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FreeGo TV subscriptions on freegoiptv.us are priced at $30 for 3 Months, $50 for 6 Months, and $72 for 12 Months.",
        },
      },
      {
        "@type": "Question",
        name: "Is FreeGo TV compatible with Firestick and Smart TVs in the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, FreeGo TV supports Amazon Fire TV Stick, Android TV, Samsung Tizen, LG WebOS, Apple iOS, Android mobile, and Windows/Mac devices using apps like IPTV Smarters Pro and TiviMate throughout the United States.",
        },
      },
    ],
  };

  // Safely serialize JSON-LD
  const toJsonLd = (data: object) =>
    JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(faqSchema),
        }}
      />

      {/* Main Website */}
      <div className="relative isolate min-h-screen bg-[#08090F] text-white antialiased">

        {/* Fixed Cinema Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          {/* Cinema Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/img/bg.jpg')",
            }}
          />

          {/* Premium Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090F]/75 via-[#08090F]/65 to-[#08090F]/90" />

        </div>

        {/* Website Content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>

      </div>
    </>
  );
}
