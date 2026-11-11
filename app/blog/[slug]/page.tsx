// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogArticles } from '@/lib/data';
import { 
  Calendar, Clock, User, Tag, ArrowLeft, Share2, ChevronRight, 
  Sparkles, ShoppingCart, BookOpen, Eye, Twitter, Facebook, 
  Zap, ShieldCheck, Headphones, Mail, Send 
} from 'lucide-react';

// Generate static params for all articles
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Complete metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const articleUrl = `https://freegoiptv.us/blog/${article.slug}`;

  return {
    metadataBase: new URL('https://freegoiptv.us'),
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords.join(', '),
    authors: [{ name: article.author, url: 'https://freegoiptv.us/contact' }],
    creator: 'FreeGo TV',
    publisher: 'FreeGo TV',
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
    alternates: {
      canonical: articleUrl,
      languages: {
        'en-US': articleUrl,
      },
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: articleUrl,
      siteName: 'FreeGo TV',
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author],
      tags: [article.tag],
      locale: 'en_US',
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.title,
      description: article.seo.description,
      images: [article.coverImage],
      creator: '@FreeGoTV',
      site: '@FreeGoTV',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    category: article.tag,
    section: article.tag,
  };
}

// Generate Article Structured Data (JSON-LD)
function generateArticleStructuredData(article: any) {
  const articleUrl = `https://freegoiptv.us/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    headline: article.title,
    description: article.excerpt,
    abstract: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: article.coverImage,
      width: 1200,
      height: 630,
    },
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://freegoiptv.us/contact',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FreeGo TV',
      url: 'https://freegoiptv.us',
      logo: {
        '@type': 'ImageObject',
        url: 'https://freegoiptv.us/img/logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://t.me/FreeGoTV',
        'https://twitter.com/FreeGoTV',
      ],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: article.seo.keywords.join(', '),
    articleSection: article.tag,
    articleBody: article.content?.replace(/<[^>]*>/g, '').substring(0, 5000),
    wordCount: article.content?.split(' ').length || 500,
    timeRequired: article.readTime,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      name: 'FreeGo TV',
    },
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/CommentAction',
      userInteractionCount: 0,
    },
  };
}

// Generate Breadcrumb Structured Data
function generateBreadcrumbStructuredData(article: any) {
  const articleUrl = `https://freegoiptv.us/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl}#breadcrumb`,
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
        name: 'Blog',
        item: 'https://freegoiptv.us/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };
}

// Generate WebPage Structured Data
function generateWebPageStructuredData(article: any) {
  const articleUrl = `https://freegoiptv.us/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${articleUrl}#webpage`,
    url: articleUrl,
    name: article.title,
    description: article.excerpt,
    isPartOf: {
      '@type': 'WebSite',
      name: 'FreeGo TV',
      url: 'https://freegoiptv.us',
    },
    about: {
      '@type': 'Thing',
      name: 'IPTV Streaming',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: article.coverImage,
    },
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    breadcrumb: {
      '@id': `${articleUrl}#breadcrumb`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug)
    .slice(-2)
    .reverse();

  const readingTime = Math.ceil(article.content.split(' ').length / 200);
  const articleUrl = `https://freegoiptv.us/blog/${article.slug}`;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleStructuredData(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbStructuredData(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageStructuredData(article)),
        }}
      />

      <main className="min-h-screen bg-[#faf0ef] text-[#121212] relative">
        
        {/* HERO SECTION - RESPONSIVE */}
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-end pb-12 sm:pb-16 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
          
          {/* Background Cover Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for high-contrast hero readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            
            {/* Back Button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#EF2E55] transition-colors mb-4 sm:mb-6 group bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit text-xs sm:text-sm border border-white/10"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 bg-[#EF2E55]/20 backdrop-blur-sm border border-[#EF2E55]/40 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-5">
              <Tag size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EF2E55]">{article.tag}</span>
            </div>
            
            {/* Title - Responsive Font Sizes */}
            <h1 className="font-display font-black italic uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.1] tracking-tighter max-w-4xl drop-shadow-2xl">
              {article.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                <Calendar size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                <span className="text-[10px] sm:text-xs">{article.date}</span>
                {article.updatedDate && (
                  <span className="text-white/60 text-[8px] sm:text-[10px] ml-0.5 sm:ml-1">(Updated)</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                <Clock size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                <span className="text-[10px] sm:text-xs">{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                <User size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                <span className="text-[10px] sm:text-xs">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10">
                <BookOpen size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                <span className="text-[10px] sm:text-xs">{readingTime} min read</span>
              </div>
            </div>

            {/* Canonical URL link tag */}
            <link rel="canonical" href={articleUrl} />
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative z-10">

          {/* Article Content with matching pricing page light styling */}
          <div 
            className="article-content-modern bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-white border border-gray-200 shadow-sm rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EF2E55]/10 border border-[#EF2E55]/20 flex items-center justify-center text-[#EF2E55]">
              <User size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-black italic uppercase text-xs sm:text-sm text-[#121212]">Written by {article.author}</h4>
              <p className="text-[#121212]/70 text-[10px] sm:text-xs mt-1">FreeGo TV Expert Team - Delivering premium US IPTV content and guides on freegoiptv.us</p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <Share2 size={14} className="sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-xs sm:text-sm text-[#121212]/80 font-medium">Share:</span>
              <div className="flex gap-1.5 sm:gap-2">
                <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs bg-white border border-gray-200 shadow-sm rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all flex items-center gap-1">
                  <Twitter size={10} className="sm:w-3 sm:h-3" /> Twitter
                </button>
                <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs bg-white border border-gray-200 shadow-sm rounded-full hover:bg-[#1877F2] hover:text-white transition-all flex items-center gap-1">
                  <Facebook size={10} className="sm:w-3 sm:h-3" /> Facebook
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs text-gray-500">Was this helpful?</span>
              <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold bg-white border border-gray-200 shadow-sm rounded-full hover:bg-[#EF2E55] hover:text-white transition-colors">
                Yes
              </button>
              <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold bg-white border border-gray-200 shadow-sm rounded-full hover:bg-gray-100 transition-colors">
                No
              </button>
            </div>
          </div>

          {/* SUBSCRIPTION CTA CARD */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-[#121212] text-white border border-[#EF2E55]/40 rounded-3xl text-center relative overflow-hidden group shadow-[0_0_50px_-20px_rgba(239,46,85,0.3)]">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF2E55]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#EF2E55]/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 border border-[#EF2E55]/30">
                <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 text-[#EF2E55]" />
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#EF2E55]">LIMITED TIME OFFER</span>
              </div>
              
              <h3 className="font-display font-black italic uppercase text-xl sm:text-2xl md:text-3xl text-white mb-3">
                Ready to Experience <span className="text-[#EF2E55]">FreeGo IPTV</span>?
              </h3>
              
              <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed">
                Get access to <span className="text-[#EF2E55] font-bold">20,000+ live channels</span> and{' '}
                <span className="text-[#EF2E55] font-bold">65,000+ VODs</span> in stunning 4K/8K quality across the US on <span className="underline font-bold text-[#EF2E55]">freegoiptv.us</span>.
                Starting from just <span className="text-[#EF2E55] font-bold">$35 for 3 months</span>.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <Zap size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">Instant Activation</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <ShieldCheck size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">7-Day Refund</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                  <Headphones size={10} className="sm:w-3 sm:h-3 text-[#EF2E55]" />
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase text-gray-300">24/7 Support</span>
                </div>
              </div>
              
              {/* Gold Button */}
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-[3.25rem] px-8 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#121212] rounded-full font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:opacity-90 transition-all group/btn"
              >
                <ShoppingCart size={16} />
                <span>View Pricing Plans</span>
                <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          {relatedArticles.length > 0 && (
            <div className="mt-10 sm:mt-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <div className="w-8 sm:w-10 h-0.5 bg-[#EF2E55] rounded-full" />
                <h3 className="font-display font-black italic uppercase text-xl sm:text-2xl text-[#121212] tracking-tight">
                  You May Also <span className="text-[#EF2E55]">Like</span>
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#EF2E55]/50 to-transparent rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`} className="group">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#EF2E55]/50 transition-all hover:-translate-y-2">
                      <div className="relative h-40 sm:h-52 w-full overflow-hidden">
                        <img 
                          src={related.coverImage} 
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="text-[7px] sm:text-[8px] font-bold uppercase bg-[#EF2E55] text-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full">
                            {related.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-gray-500 mb-2">
                          <span>{related.date}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                        <h4 className="font-display font-black italic uppercase text-[#121212] group-hover:text-[#EF2E55] transition-colors mb-2 line-clamp-2 text-sm sm:text-base">
                          {related.title}
                        </h4>
                        <p className="text-[#121212]/70 text-[11px] sm:text-xs line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-[#EF2E55] text-[9px] sm:text-[10px] font-bold uppercase group-hover:gap-2 transition-all">
                          Read More <ChevronRight size={8} className="sm:w-2.5 sm:h-2.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}