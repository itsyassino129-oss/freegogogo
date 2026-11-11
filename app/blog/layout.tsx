// app/blog/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'FreeGo TV Blog — IPTV Guides, Tutorials & Streaming News',
  description:
    'Official FreeGo TV Blog. Discover IPTV setup guides for Firestick, Android, Smart TV, iOS, and PC. Stay updated with IPTV news, streaming tips, and 4K viewing experiences on freegoiptv.us.',

  authors: [{ name: 'FreeGo TV Team' }],
  creator: 'FreeGo TV',
  publisher: 'FreeGo TV',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://freegoiptv.us/blog',
  },

  openGraph: {
    title: 'FreeGo TV Blog — IPTV Guides, Tutorials & Streaming Tips',
    description:
      'Official FreeGo TV Blog. Learn IPTV setup on all devices and stay updated with the latest streaming news and tips on freegoiptv.us.',
    url: 'https://freegoiptv.us/blog',
    siteName: 'FreeGo TV Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://freegoiptv.us/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'FreeGo TV Blog - IPTV Guides & Streaming Tutorials',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FreeGo TV Blog — IPTV Guides & Streaming Tips',
    description:
      'Learn IPTV setup on Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news and streaming guides on freegoiptv.us.',
    images: ['https://freegoiptv.us/img/logo.png'],
    creator: '@FreeGoTV',
    site: '@FreeGoTV',
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
   JSON-LD: BLOG IDENTITY SCHEMA
========================= */
const BlogRootSchema = () => (
  <script
    type="application/ld+json"
    id="blog-root-jsonld"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://freegoiptv.us/blog#blog',
        name: 'FreeGo TV Blog',
        description:
          'Official FreeGo TV Blog featuring IPTV setup guides, tutorials, and streaming news on freegoiptv.us.',
        url: 'https://freegoiptv.us/blog',
        inLanguage: 'en-US',
        isFamilyFriendly: true,
        publisher: {
          '@type': 'Organization',
          name: 'FreeGo TV',
          url: 'https://freegoiptv.us',
          logo: {
            '@type': 'ImageObject',
            url: 'https://freegoiptv.us/img/logo.png',
          },
        },
      }),
    }}
  />
);

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const BlogBreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="blog-breadcrumb-jsonld"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://freegoiptv.us/blog#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://freegoiptv.us',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FreeGo TV Blog',
            item: 'https://freegoiptv.us/blog',
          },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT
========================= */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogRootSchema />
      <BlogBreadcrumbSchema />
      
      {children}
    </>
  );
}