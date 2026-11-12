'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, PlayCircle,
  Tv, Monitor, Smartphone,
  Box, Lock, Mail, Users, ShieldCheck,
  CheckCircle2, Phone, Zap, MessageCircle, ChevronDown, ShoppingCart
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import ServerMap from '@/components/ServerMap';
import BlogSection from '@/components/BlogSection';

// Dynamic image sources for media sliders
const moviesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/movie_${String(i + 1).padStart(2, '0')}.jpg`
);

const seriesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/serie_${String(i + 1).padStart(2, '0')}.webp`
);

const sportsData = Array.from({ length: 10 }, (_, i) => 
  `/img/slider/sport_${String(i + 1).padStart(2, '0')}.jpg`
);

// Pricing structure based on duration and device counts
const pricingPlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    months: 3,
    prices: {
      1: 35,    // 1 device: $35
      2: 45,    // 2 devices: $45
      3: 59,    // 3 devices: $59
    },
    features: [
      '20,000+ Live TV Channels Nationwide (US & Worldwide)',
      '65,000+ Movies & Series in 4K/8K via FreeGo IPTV',
      'All Premium US Sports Channels & Live PPV Events (NFL, NBA, MLB, NHL)',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology on freegoiptv.us',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated FreeGo TV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical FreeGo IPTV Support'
    ],
    recommended: false
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    months: 6,
    prices: {
      1: 55,    // 1 device: $55
      2: 66,    // 2 devices: $70
      3: 79,    // 3 devices: $99
    },
    features: [
      '20,000+ Live TV Channels Nationwide (US & Worldwide)',
      '65,000+ Movies & Series in 4K/8K via FreeGo IPTV',
      'All Premium US Sports Channels & Live PPV Events (NFL, NBA, MLB, NHL)',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology on freegoiptv.us',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated FreeGo TV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical FreeGo IPTV Support'
    ],
    recommended: false
  },
  {
    id: '12-months',
    name: '12 MONTHS',
    months: 12,
    prices: {
      1: 89,    // 1 device: $72
      2: 102,    // 2 devices: $99
      3: 120,   // 3 devices: $139
    },
    features: [
      '20,000+ Live TV Channels Nationwide (US & Worldwide)',
      '65,000+ Movies & Series in 4K/8K via FreeGo IPTV',
      'All Premium US Sports Channels & Live PPV Events (NFL, NBA, MLB, NHL)',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology on freegoiptv.us',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated FreeGo TV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical FreeGo IPTV Support'
    ],
    recommended: true
  }
];

const faqs = [
  {
    q: "WHAT IS FREEGO TV AND HOW DOES IT WORK?",
    a: "FreeGo TV is an industry-leading US premium IPTV streaming network (freegoiptv.us) designed to deliver over 20,000 live broadcast TV channels and more than 65,000 video-on-demand (VOD) titles directly to your screens. Utilizing high-speed servers and advanced load-balancing architecture, FreeGo TV provides non-stop access to live US sports, global news, pay-per-view events, and movie releases without requiring complex hardware or long-term cable contracts."
  },
  {
    q: "IS FREEGO TV COMPATIBLE WITH FIRESTICK AND SMART TV IN THE US?",
    a: "Yes, FreeGo TV and FreeGo IPTV work seamlessly across virtually all smart devices and operating systems throughout the United States. You can effortlessly stream on Amazon Firestick, Android TV boxes, Samsung and LG Smart TVs, Apple iOS, Android mobile devices, Windows, Mac, and dedicated IPTV receivers like MAG or Formuler. We provide step-by-step setup tutorials and automated setup links for popular applications like IPTV Smarters Pro, TiviMate, XCIPTV, and GSE Smart IPTV."
  },
  {
    q: "DOES FREEGO TV INCLUDE US SPORTS AND PREMIUM CHANNELS?",
    a: "FreeGo TV gives you front-row access to all major US sports networks and live PPV events. You can watch every match from the NFL, NBA, MLB, NHL, MLS, UFC, Formula 1, and Box Office events in native High Definition, Full HD, and pristine 4K resolution. In addition, our library features full catalogs from major streaming platforms like Netflix, HBO Max, Disney+, and Amazon Prime."
  },
  {
    q: "HOW FAST IS FREEGO TV ACTIVATION AFTER PAYMENT?",
    a: "Activation on freegoiptv.us is processed immediately following order confirmation. As soon as your transaction is completed, our automated portal sends your M3U playlist link, Xtream Codes API credentials, and easy setup instructions directly to your email inbox within 3 to 5 minutes. Our technical team is available 24/7 via WhatsApp and email if you require assistance during setup."
  },
  {
    q: "CAN I USE FREEGO TV ON MULTIPLE DEVICES SIMULTANEOUSLY?",
    a: "Yes! FreeGo TV offers flexible multi-room plans to fit every household. You can select single-device access or expand your subscription to support 2 or 3 simultaneous connections under one account. This allows different family members to stream live sports, movies, or news in separate rooms at the same time without stream collisions or buffering."
  },
  {
    q: "WHAT STREAMING QUALITY DOES FREEGO IPTV PROVIDE?",
    a: "We prioritize ultra-low latency and crystal-clear image clarity. Our channel line-up is optimized for 1080p Full HD and 4K UHD playback at high frame rates (60fps), with select VOD titles supporting 8K streaming. Powered by proprietary anti-freeze software and strategically positioned global edge servers, FreeGo TV minimizes buffer times even during heavy internet traffic during major US sports broadcasts."
  },
  {
    q: "IS FREEGO TV SAFE AND SECURE TO USE IN THE US?",
    a: "Security and confidentiality are fundamental to our architecture. All customer data and checkout transactions on freegoiptv.us are protected using end-to-end 256-bit SSL encryption. We accept secure digital payment methods, including credit cards, PayPal, and encrypted cryptocurrency payments for enhanced privacy. FreeGo TV is also fully compatible with all major VPN services if you choose to encrypt your streaming connection."
  }
];

const SliderRow = ({ reverse = false, items }: { reverse?: boolean, items: string[] }) => (
  <div className={`flex w-max ${reverse ? 'animate-marquee-slow-reverse' : 'animate-marquee-slow'} hover:pause-on-hover`}>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s1-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-gray-300 hover:border-[#EF2E55] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="FreeGo TV VOD Stream" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-[#EF2E55] drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s2-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-gray-300 hover:border-[#EF2E55] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="FreeGo TV VOD Stream" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-[#EF2E55] drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [devicePlan, setDevicePlan] = useState('1'); 
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPlanPrice = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    return plan.prices[deviceCount as keyof typeof plan.prices];
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    const currentPrice = getPlanPrice(plan);
    
    let originalPricePerDevice = 0;
    if (plan.months === 3) {
      originalPricePerDevice = 45; 
    } else if (plan.months === 6) {
      originalPricePerDevice = 72; 
    } else {
      originalPricePerDevice = 92; 
    }
    
    const originalPrice = originalPricePerDevice * deviceCount;
    const savings = originalPrice - currentPrice;
    
    return {
      amount: savings > 0 ? savings : 0,
      percentage: savings > 0 ? Math.round((savings / originalPrice) * 100) : 0,
      originalPrice: originalPrice
    };
  };

  const currentPlans = pricingPlans.map(plan => {
    const price = getPlanPrice(plan);
    const savings = getSavings(plan);
    
    return {
      ...plan,
      price: `$${price}`,
      sub: `$${(price / plan.months).toFixed(2)}/MONTH`,
      savings: savings.amount,
      savingsPercentage: savings.percentage,
      originalPrice: savings.originalPrice
    };
  });

  return (
    <main className="min-h-screen bg-[#faf0ef] text-[#121212] font-sans selection:bg-[#EF2E55] selection:text-white overflow-x-hidden pt-15 relative">
      
      {/* Background with Immediate Priority Load to avoid LCP delay */}
      <div className="fixed inset-0 z-[-1]">
        <Image 
          src="/img/bg.jpg" 
          alt="FreeGo TV IPTV Background" 
          fill 
          priority 
          quality={85} 
          className="object-cover opacity-10" 
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf0ef]/80 via-[#faf1f0]/95 to-[#faf0ef]"></div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-slow { animation: marquee 50s linear infinite; }
        .animate-marquee-slow-reverse { animation: marquee-reverse 50s linear infinite; }
        .pause-on-hover:hover { animation-play-state: paused; }
      `}} />

      {/* HERO SECTION */}
      
<section
  className="pt-15 pb-20 px-4 relative flex flex-col items-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(rgba(250,240,239,0.75), rgba(250,240,239,0.94)), url('/img/bg.jpg')",
  }}
>

        <ScrollReveal className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#EF2E55]/10 border border-[#EF2E55]/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#121212]">FreeGo TV Official Website (freegoiptv.us)</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 max-w-5xl mx-auto drop-shadow-2xl text-[#121212]">
            <span className="text-[#121212] block">FreeGo TV - THE BEST</span>
            <span className="text-[#EF2E55] block">FREEGO IPTV</span>
            <span className="text-gray-600">SUBSCRIPTION</span>
          </h1>
        </ScrollReveal>

        {/* Updated Description Paragraph with High-Contrast Text Color & Brand Red Highlights */}
        <ScrollReveal delay={0.2} className="relative z-10">
          <p className="text-base sm:text-lg md:text-xl !text-[#121212] font-semibold max-w-4xl mx-auto mb-10 leading-relaxed text-balance">
            Unlock the ultimate digital entertainment experience across the United States with <span className="!text-[#EF2E55] font-bold">FreeGo TV</span> and <span className="!text-[#EF2E55] font-bold">FreeGo IPTV</span> at <a href="https://freegoiptv.us" className="!text-[#EF2E55] font-bold underline">freegoiptv.us</a>. Stream over 20,000 live global channels and gain instant access to an expansive library of more than 65,000 high-definition movies and TV shows on demand. Powered by cutting-edge anti-freeze technology and low-latency global servers, <span className="!text-[#EF2E55] font-bold">FreeGo TV</span> delivers buffer-free 4K and Ultra HD broadcasts, live US sporting events, and premium news channels on Amazon Firestick, Smart TVs, Android devices, iOS, and PCs—backed by instant 24/7 activation and priority setup support.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 mb-20 relative z-10">
          {/* Gold Button */}
          <a href="#pricing" className="w-full sm:w-auto h-[3.25rem] px-8 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#121212] rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:opacity-90 transition-all text-xs">
            <ShoppingCart size={16} /> SUBSCRIBE NOW
          </a>
          <a href="/setup" className="h-[3.25rem] px-8 bg-white/80 border border-gray-300 text-[#121212] rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors w-full sm:w-auto shadow-sm text-xs">
            SEE HOW IT WORKS
          </a>
        </ScrollReveal>

        {/* Devices Row */}
        <ScrollReveal delay={0.4} className="-mt-[50px] flex items-center justify-center gap-8 md:gap-16 flex-wrap relative z-10">
          {[ 
            { icon: Smartphone, label: 'ANDROID & IOS' }, 
            { icon: Monitor, label: 'DESKTOP & MAC' }, 
            { icon: Tv, label: 'SMART TVS' }, 
            { icon: Box, label: 'FIRE TV & BOXES' } 
          ].map((device, i) => (
             <div key={i} className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 hover:text-[#EF2E55] transition-all cursor-pointer">
               <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-[#EF2E55]">
                 <device.icon size={24} className="text-[#EF2E55]" />
               </div>
               <span className="text-[10px] font-bold tracking-widest uppercase text-[#121212]">{device.label}</span>
             </div>
          ))}
        </ScrollReveal>
      </section>

      {/* STEPS SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#faf1f0] border-y border-gray-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal>
             <h2 className="text-center font-display font-black italic uppercase text-3xl md:text-5xl mb-4 tracking-tight text-[#121212]">START WATCHING IN 3 EASY STEPS</h2>
             <p className="text-center text-[#121212]/90 font-medium max-w-2xl mx-auto text-sm md:text-base mb-16">
               Setting up your FreeGo TV subscription from freegoiptv.us takes less than 5 minutes. Follow these simple steps to start streaming live channels and on-demand movies immediately.
             </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#EF2E55] to-transparent opacity-30"></div>

            {[
              { num: '01', title: 'SELECT YOUR PLAN', icon: Box, desc: 'Choose the subscription duration and device count that fits your US home. Whether you need a single screen for your mobile or a multi-room setup for your family, we have flexible plans designed for every user.', highlight: false },
              { num: '02', title: 'SECURE PAYMENT', icon: Lock, desc: 'Complete your checkout on freegoiptv.us using safe and encrypted payment gateways including Credit Card, PayPal, or Crypto. Enjoy instant checkout with no hidden service fees or automatic contract renewals.', highlight: true },
              { num: '03', title: 'GET CREDENTIALS', icon: Mail, desc: 'Receive your FreeGo IPTV credentials, M3U playlist URLs, and portal logins in your inbox within minutes. Follow our quick setup guides or let our 24/7 support team configure your devices remotely.', highlight: false },
            ].map((step, idx) => (
              <ScrollReveal delay={0.1 * idx} key={step.num} className="relative z-10">
                <div className={`p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:scale-105 border ${step.highlight ? 'bg-[#121212] text-white border-[#EF2E55] shadow-[0_0_40px_-10px_rgba(239,46,85,0.4)]' : 'bg-white border-gray-200 shadow-sm hover:border-[#EF2E55]/40'}`}>
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative ${step.highlight ? 'bg-[#EF2E55] text-white shadow-lg shadow-[#EF2E55]/30' : 'bg-[#EF2E55]/10 text-[#EF2E55] border border-[#EF2E55]/20'}`}>
                     <step.icon size={32} />
                     <div className={`absolute -bottom-4 px-4 py-1 rounded-full text-xs font-black italic border-2 ${step.highlight ? 'bg-white text-[#121212] border-[#EF2E55]' : 'bg-[#121212] text-white border-gray-700'}`}>
                       {step.num}
                     </div>
                  </div>
                  
                  <h3 className={`font-display font-black italic uppercase text-xl mb-3 tracking-widest ${step.highlight ? 'text-white' : 'text-[#121212]'}`}>{step.title}</h3>
                  <p className={`font-medium text-sm leading-relaxed ${step.highlight ? 'text-gray-300' : 'text-[#121212]/90'}`}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH PARTNERS MARQUEE — FreeGo brand red */}
      <section
        className="relative py-16 border-y border-[#EF2E86]"
        style={{ backgroundColor: '#EF2E86' }}
      >
        <h4 className="relative z-20 text-center px-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white" style={{ color: '#ffffff' }}>
          COMPATIBLE WITH ALL MAJOR US SPORTS &amp; ENTERTAINMENT NETWORKS
        </h4>
        <div className="w-full overflow-hidden relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#EF2E86] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#EF2E86] to-transparent" />
          <div className="flex w-max animate-marquee">
            {[0, 1].map((group) => (
              <div key={group} className="flex items-center gap-12 px-6">
                {Array.from({ length: 12 }, (_, i) => (
                  <Image
                    key={`partner-${group}-${i}`}
                    src={`/img/partners/${i + 1}.png`}
                    width={120}
                    height={40}
                    alt={`FreeGo TV partner ${i + 1}`}
                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity cursor-pointer"
                    unoptimized
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOVIES / SHOWS / SPORTS SLIDER */}
      <section className="py-20 overflow-hidden relative border-b border-gray-200 bg-[#faf1f0]">
        <div className="text-center mb-8 px-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF2E55] bg-[#EF2E55]/10 border border-[#EF2E55]/20 px-3 py-1 rounded-sm mb-3 inline-block">ON-DEMAND ENTERTAINMENT LIBRARY</span>
          <h3 className="text-2xl md:text-3xl font-display font-black italic text-[#121212] uppercase tracking-tight">65,000+ MOVIES, TV SERIES & US SPORTS EVENTS</h3>
        </div>
        <div className="w-full relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#faf1f0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#faf1f0] to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col gap-6 py-4">
            <div className="px-4">
              <SliderRow items={[...moviesData, ...moviesData]} />
            </div>
            
            <div className="px-4">
              <SliderRow items={[...seriesData, ...seriesData]} reverse />
            </div>
            
            <div className="px-4">
              <SliderRow items={[...sportsData, ...sportsData]} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#faf0ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,46,85,0.06),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-10 md:mb-14">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[#EF2E55] bg-[#EF2E55]/10 border border-[#EF2E55]/20 px-4 py-1.5 rounded-full inline-block mb-5">
              FreeGo TV PERFORMANCE & STATS
            </span>

            <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl md:text-6xl tracking-tight text-[#121212] mb-4 leading-none">
              TRUSTED BY US STREAMERS NATIONWIDE
            </h2>
            <p className="text-[#121212]/90 font-medium max-w-2xl mx-auto text-sm md:text-base">
              Our infrastructure on freegoiptv.us is engineered for speed, redundancy, and reliability, delivering high-bitrate streaming without interruptions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Tv, val: 20, suffix: 'K+', label: 'LIVE TV CHANNELS' },
              { icon: PlayCircle, val: 65, suffix: 'K+', label: 'MOVIES & TV SERIES' },
              { icon: Users, val: 15, suffix: 'K+', label: 'ACTIVE US SUBSCRIBERS' },
              { icon: ShieldCheck, val: 99.9, suffix: '%', label: 'GUARANTEED UPTIME' }
            ].map((stat, i) => (
              <ScrollReveal delay={0.1 * i} key={i}>
                <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#EF2E55]/40">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(239,46,85,0.08),transparent_70%)]" />

                  <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#EF2E55]/10 border border-[#EF2E55]/20 flex items-center justify-center text-[#EF2E55] mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <stat.icon size={22} className="md:w-6 md:h-6" />
                  </div>

                  <div className="relative z-10 flex items-baseline justify-center font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[#121212] mb-2 md:mb-3">
                    <AnimatedCounter
                      to={stat.val}
                      decimals={stat.val % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#121212]/90 text-center leading-relaxed">
                      {stat.label}
                    </span>
                    <div className="w-8 md:w-10 h-[2px] bg-[#EF2E55]/40 rounded-full mt-3 group-hover:w-14 md:group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 relative bg-[#121212] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF2E55] bg-[#EF2E55]/10 border border-[#EF2E55]/30 px-3 py-1 rounded-sm mb-6 inline-block">FREEGO TV & FREEGO IPTV SUBSCRIPTION PLANS</span>
            <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-6xl mb-6 tracking-tight text-white">CHOOSE YOUR PERFECT IPTV PLAN</h2>
            <p className="text-gray-300 font-medium max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
              Select the device connections and subscription duration that work best for your US home on <span className="underline font-bold text-[#EF2E55]">freegoiptv.us</span>. Enjoy full access to high-speed 4K live TV streaming with instant delivery and zero hidden extra costs.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><ShieldCheck size={14} className="text-[#EF2E55]" /> 7-DAY REFUND GUARANTEE</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Zap size={14} className="text-[#EF2E55]" /> INSTANT AUTOMATED ACTIVATION</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><MessageCircle size={14} className="text-[#EF2E55]" /> 24/7 DEDICATED CUSTOMER SUPPORT</div>
            </div>
          </ScrollReveal>

          {/* Device Selection */}
          <ScrollReveal delay={0.2} className="flex flex-col items-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-6">CHOOSE YOUR SIMULTANEOUS DEVICE CONNECTIONS</span>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-2 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { num: '1', icon: Monitor, label: '1 DEVICE', desc: 'Single Screen Setup' },
                  { num: '2', icon: Users, label: '2 DEVICES', desc: 'Duo Home Pack' },
                  { num: '3', icon: Tv, label: '3 DEVICES', desc: 'Family Bundle' }
                ].map((option) => (
                  <label
                    key={option.num}
                    className={`relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer group
                      ${devicePlan === option.num 
                        ? 'bg-[#EF2E55] text-white shadow-lg shadow-[#EF2E55]/30 scale-105' 
                        : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <input
                      type="radio"
                      name="devicePlan"
                      value={option.num}
                      checked={devicePlan === option.num}
                      onChange={() => setDevicePlan(option.num)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                      devicePlan === option.num 
                        ? 'border-white bg-white' 
                        : 'border-gray-500 group-hover:border-white'
                    }`}>
                      {devicePlan === option.num && (
                        <div className="w-2 h-2 rounded-full bg-[#EF2E55] m-0.5" />
                      )}
                    </div>
                    <option.icon size={16} className={devicePlan === option.num ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
                    <div className="text-left">
                      <div className={`text-xs font-bold uppercase tracking-wider ${devicePlan === option.num ? 'text-white' : 'text-gray-300'}`}>
                        {option.label}
                      </div>
                      <div className={`text-[9px] font-medium ${devicePlan === option.num ? 'text-white/80' : 'text-gray-500'}`}>
                        {option.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Zap size={12} className="text-[#EF2E55]" />
              <span className="text-[9px] font-bold uppercase text-gray-400 tracking-widest">SAVE UP TO $137 WITH MULTI-DEVICE ANNUAL PACKAGES ON FREEGOIPTV.US</span>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
            {(() => {
              const orderedPlans = [...currentPlans];
              const recommendedIndex = orderedPlans.findIndex(p => p.recommended);
              if (recommendedIndex !== -1 && orderedPlans.length === 3) {
                const [recommended] = orderedPlans.splice(recommendedIndex, 1);
                orderedPlans.splice(1, 0, recommended);
              }
              
              return orderedPlans.map((plan, idx) => {
                const monthlyPrice = (parseInt(plan.price.replace('$', '')) / plan.months).toFixed(2);
                
                return (
                  <ScrollReveal delay={0.3 + (idx * 0.1)} key={plan.id} className="h-full">
                    <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group/card
                      ${plan.recommended 
                        ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-[#EF2E55] shadow-[0_0_40px_-15px_rgba(239,46,85,0.4)] hover:shadow-[0_0_60px_-15px_rgba(239,46,85,0.5)] scale-100 md:scale-105 z-10' 
                        : 'bg-[#1a1a1a]/60 border-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-[#EF2E55]/5'
                      }`}>
                      
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EF2E55] text-white text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full z-20 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                          <Star size={10} className="fill-white" />
                          MOST POPULAR VALUE
                        </div>
                      )}

                      <div className="text-center mb-6 pt-4">
                        <h4 className="font-display font-black italic uppercase text-2xl mb-2 text-white group-hover/card:text-[#EF2E55] transition-colors duration-300">
                          {plan.name}
                        </h4>
                        
                        <div className="relative overflow-hidden">
                          <div className="font-display font-black text-5xl text-white mb-1">
                            {plan.price}
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            {plan.sub}
                          </div>
                        </div>

                        {plan.savings > 0 && (
                          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            SAVE {plan.savingsPercentage}% (${plan.savings})
                          </div>
                        )}
                      </div>

                      <div className="w-full h-[1px] bg-gray-800 mb-6" />

                      <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-medium">
                            <CheckCircle2 size={16} className="text-[#EF2E55] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Gold Button for Pricing Cards */}
    
<button
  type="button"
  onClick={() => {
    const message = `Hello! 1 I would like to order the FreeGo TV ${plan.name} plan for ${devicePlan} device(s) at ${plan.price} via freegoiptv.us.`;

    const whatsappNumber = "+212723870095";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }}
  className="w-full h-[3.25rem] rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#121212] hover:opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
>
  <ShoppingCart size={16} />
  <span>ORDER FREEGO TV NOW</span>
                  </button>
                </div>
              </ScrollReveal>
            
              );
            });
          })()}
        </div>
      </div>
    </section>

    {/* SERVER MAP SECTION */}
    <ServerMap />


    

      {/* BLOG SECTION */}
      <BlogSection />

      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-[#faf0ef] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF2E55] bg-[#EF2E55]/10 border border-[#EF2E55]/20 px-3 py-1 rounded-sm mb-4 inline-block">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-[#121212] tracking-tight mb-4">
              EVERYTHING YOU NEED TO KNOW ABOUT <span className="text-[#EF2E55]">FREEGO TV</span>
            </h2>
            <p className="!text-[#121212] text-sm md:text-base font-medium">
              Have questions about setup, compatibility, or channel lineup on freegoiptv.us? Browse our answers below or contact our 24/7 support team.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal delay={0.05 * index} key={index}>
                <div className="border border-gray-300 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#EF2E55]/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold !text-[#121212] text-sm sm:text-base hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="font-display uppercase tracking-wider !text-[#121212]">{faq.q}</span>
                    <ChevronDown size={20} className={`text-[#EF2E55] shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 !text-[#121212] text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CONVERSION CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="p-10 md:p-16 rounded-3xl bg-[#121212] text-white border border-[#EF2E55]/40 text-center relative overflow-hidden shadow-[0_0_50px_-20px_rgba(239,46,85,0.3)]">
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight mb-4">
              UPGRADE YOUR <span className="text-[#EF2E55]">US ENTERTAINMENT EXPERIENCE</span> TODAY
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Join 50,000+ satisfied US customers on <span className="underline font-bold text-[#EF2E55]">freegoiptv.us</span> and gain immediate instant access to 20,000+ live TV channels and 65,000+ VOD titles in Ultra 4K HD.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Gold Button */}
              <a href="#pricing" className="w-full sm:w-auto h-[3.25rem] px-8 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#121212] rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:opacity-90 transition-all text-xs">
                <ShoppingCart size={16} /> GET INSTANT ACCESS
              </a>
              
<a
  href={`https://wa.me/212723870095?text=${encodeURIComponent(
    "Hello! 1 I have a question about FreeGo TV (freegoiptv.us)."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="h-[3.25rem] px-8 bg-white/10 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 transition-colors w-full sm:w-auto text-xs"
>
  <Phone size={14} className="text-[#f02e54]" />
  WHATSAPP SUPPORT
</a>

            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
