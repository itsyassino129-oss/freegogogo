'use client';

import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import { 
  CheckCircle, ArrowRight, MonitorPlay, Smartphone, Laptop, Tv, 
  Clock, ShieldCheck, Zap, Headphones, Star, Trophy, Sparkles, 
  Rocket, Lock, Users, Globe, HelpCircle, CreditCard 
} from 'lucide-react';
import SetupTimeline from '@/components/SetupTimeline';
import SetupFaq from '@/components/SetupFaq';

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-[#faf0ef] text-[#121212] pt-32 pb-24 px-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,46,85,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,46,85,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EF2E55]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Hero Section */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EF2E55]/10 border border-[#EF2E55]/20 rounded-full px-4 py-1.5 mb-6">
            <Rocket size={12} className="text-[#EF2E55]" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#EF2E55]">EASY SETUP</span>
          </div>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#121212] mb-6">
            Setup <span className="text-[#EF2E55]">FreeGo TV</span>
          </h1>
          <p className="text-[#121212]/80 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Get up and running in minutes on <a href="https://freegoiptv.us" className="text-[#EF2E55] underline font-bold">freegoiptv.us</a>. Follow our simple step-by-step instructions below to configure your device and start streaming 20,000+ live channels and 65,000+ VODs.
          </p>
        </ScrollReveal>

        {/* Quick Stats Row */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
              <Clock size={16} className="text-[#EF2E55]" />
              <span className="text-xs font-bold uppercase text-[#121212]">Under 10 Minutes Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
              <Zap size={16} className="text-[#EF2E55]" />
              <span className="text-xs font-bold uppercase text-[#121212]">Instant Activation</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
              <Headphones size={16} className="text-[#EF2E55]" />
              <span className="text-xs font-bold uppercase text-[#121212]">24/7 Live Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
              <Star size={16} className="text-[#EF2E55]" />
              <span className="text-xs font-bold uppercase text-[#121212]">4.9/5 Rating</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Timeline Component */}
        <SetupTimeline />

        {/* Supported Devices Section */}
        <section className="py-20 border-t border-gray-200 mt-10" aria-label="Supported Devices">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF2E55] bg-[#EF2E55]/10 px-3 py-1 rounded-sm mb-4 inline-block">COMPATIBILITY</span>
            <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-[#121212] mb-4 tracking-tight">
              WORKS ON <span className="text-[#EF2E55]">ALL US DEVICES</span>
            </h2>
            <p className="text-[#121212]/80 font-medium max-w-2xl mx-auto">
              FreeGo TV and FreeGo IPTV are compatible with any streaming device you own across the United States. No special hardware required.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Tv, name: 'Smart TV', desc: 'Samsung, LG, Android TV', features: '4K HDR | Dolby Audio' },
              { icon: MonitorPlay, name: 'TV Box', desc: 'Firestick, MAG, Apple TV', features: 'Easy Setup | Fast Loading' },
              { icon: Smartphone, name: 'Mobile', desc: 'iOS & Android', features: 'Mobile Optimized | Cast Support' },
              { icon: Laptop, name: 'Computer', desc: 'Windows & Mac', features: '4K Streaming | EPG Guide' },
            ].map((device, i) => (
              <ScrollReveal key={device.name} delay={0.1 * i} className="group">
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 text-center hover:border-[#EF2E55]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-14 h-14 mx-auto bg-[#EF2E55]/10 rounded-xl flex items-center justify-center mb-4 text-[#EF2E55] group-hover:scale-110 transition-transform duration-300 border border-[#EF2E55]/20">
                    <device.icon size={28} />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-[#121212] mb-2 text-lg">{device.name}</h3>
                  <p className="text-xs text-[#121212]/70 font-medium mb-2">{device.desc}</p>
                  <p className="text-[9px] text-[#EF2E55] font-bold uppercase tracking-wider">{device.features}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Compatibility Note */}
          <div className="mt-8 text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center justify-center gap-2">
              <Tv size={12} className="text-[#EF2E55]" />
              <p className="text-xs text-[#121212]/80 font-medium">
                Also supports: Amazon Firestick, Chromecast, Roku, Nvidia Shield, Formuler, Dreamlink, and all Android-based US streaming devices.
              </p>
            </div>
          </div>
        </section>

        {/* Setup FAQ Section */}
        <section className="py-20 border-t border-gray-200" aria-label="Frequently Asked Questions">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EF2E55]/10 border border-[#EF2E55]/20 rounded-full px-4 py-1.5 mb-4">
              <HelpCircle size={12} className="text-[#EF2E55]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#EF2E55]">FAQ</span>
            </div>
            <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-[#121212] mb-4 tracking-tight">
              COMMON <span className="text-[#EF2E55]">SETUP QUESTIONS</span>
            </h2>
            <p className="text-[#121212]/80 font-medium max-w-2xl mx-auto">
              Trouble logging in? Need the best app recommendations on freegoiptv.us? Find answers below.
            </p>
          </ScrollReveal>
          
          <SetupFaq />
        </section>

        {/* Video Tutorials Section */}
        <section className="py-10 border-t border-gray-200" aria-label="Video Tutorials">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display font-black italic uppercase text-2xl md:text-3xl text-[#121212] mb-3 tracking-tight">
              <span className="text-[#EF2E55]">VIDEO</span> TUTORIALS
            </h2>
            <p className="text-[#121212]/80 text-sm font-medium">Watch our step-by-step video guides for visual instructions</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 text-center hover:border-[#EF2E55]/40 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#EF2E55]/10 border border-[#EF2E55]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MonitorPlay size={32} className="text-[#EF2E55]" />
              </div>
              <h3 className="font-display font-black italic uppercase text-lg text-[#121212] mb-2">Firestick Setup Guide</h3>
              <p className="text-[#121212]/70 text-sm mb-4">Complete installation tutorial for Amazon Firestick and Fire TV in the US</p>
              <div className="text-[#EF2E55] text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Available 24/7 via WhatsApp Support
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 text-center hover:border-[#EF2E55]/40 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#EF2E55]/10 border border-[#EF2E55]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone size={32} className="text-[#EF2E55]" />
              </div>
              <h3 className="font-display font-black italic uppercase text-lg text-[#121212] mb-2">Mobile App Setup</h3>
              <p className="text-[#121212]/70 text-sm mb-4">Install FreeGo TV on iOS and Android devices</p>
              <div className="text-[#EF2E55] text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Available 24/7 via WhatsApp Support
              </div>
            </div>
          </div>
        </section>

        {/* Subscription CTA Card */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="w-full bg-[#121212] text-white border border-[#EF2E55]/40 transition-all duration-500 rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-[0_0_50px_-20px_rgba(239,46,85,0.3)]">
            
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EF2E55]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#EF2E55]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#EF2E55]/20 flex items-center justify-center mb-6 animate-pulse">
                <Trophy size={40} className="text-[#EF2E55]" />
              </div>
              <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl text-white mb-4 tracking-tight">
                READY TO <span className="text-[#EF2E55]">GET STARTED</span>?
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mb-8 leading-relaxed">
                Join <span className="text-[#EF2E55] font-bold">15,000+</span> satisfied US users on <span className="underline font-bold text-[#EF2E55]">freegoiptv.us</span>. Grab your FreeGo TV subscription today and gain access to 
                <span className="text-[#EF2E55] font-bold"> 20,000+ channels</span> and 
                <span className="text-[#EF2E55] font-bold"> 65,000+ VODs</span> in stunning 4K/8K quality.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <ShieldCheck size={14} className="text-[#EF2E55]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">7-Day Refund</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Zap size={14} className="text-[#EF2E55]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">Instant Activation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Headphones size={14} className="text-[#EF2E55]" />
                  <span className="text-[10px] font-bold uppercase text-gray-300">24/7 Support</span>
                </div>
              </div>
              
              {/* Gold Button */}
              <button
                onClick={() => {
                  window.location.href = '/pricing';
                }}
                className="h-[3.25rem] px-8 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#121212] rounded-full font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:opacity-90 transition-all text-xs cursor-pointer"
              >
                <span>GET SUBSCRIPTION NOW</span>
                <ArrowRight size={16} />
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Lock size={10} className="text-gray-400" />
                  <p className="text-[10px] text-gray-400">Secure payment on freegoiptv.us</p>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <div className="flex items-center gap-2">
                  <CreditCard size={10} className="text-gray-400" />
                  <p className="text-[10px] text-gray-400">No contract</p>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <div className="flex items-center gap-2">
                  <Globe size={10} className="text-gray-400" />
                  <p className="text-[10px] text-gray-400">Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#121212]/60 mb-4">TRUSTED BY THOUSANDS ACROSS THE US</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-[#EF2E55] fill-[#EF2E55]" />
              <span className="text-xs text-[#121212]/70 font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#EF2E55]" />
              <span className="text-xs text-[#121212]/70 font-medium">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#EF2E55]" />
              <span className="text-xs text-[#121212]/70 font-medium">15K+ US Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#EF2E55]" />
              <span className="text-xs text-[#121212]/70 font-medium">Instant Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}