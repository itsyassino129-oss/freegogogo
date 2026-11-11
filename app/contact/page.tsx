'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Mail,
  Send,
  ChevronDown,
  ShieldCheck,
  Headphones,
  Users,
  Globe,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const BRAND = '#f02e54';
const WHATSAPP_NUMBER = '212723870095';

const SUPPORT_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const infoCards = [
  {
    icon: Clock3,
    title: 'Contact Our Team',
    description: 'Send your question with relevant details so our support team can assist you.',
    label: 'Support Requests',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    description: 'Never include passwords, payment-card details, or other sensitive information in your message.',
    label: 'Account Safety',
  },
  {
    icon: Globe,
    title: 'Device Setup Help',
    description: 'Ask for guidance with Firestick, Smart TV, Android, iOS, or another supported device.',
    label: 'Setup Guidance',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // This page has no mail API/backend configured. Do not display a fake
  // "Message sent" success state: open the existing FreeGo TV support page.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      'Hello FreeGo TV Support,',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      '',
      formData.message,
    ].join('\n');

    const url = `${SUPPORT_URL}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf0ef] px-4 pb-24 pt-32 text-[#121212]">
      {/* Subtle FreeGo TV brand background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,46,84,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(240,46,84,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f02e54]/25 bg-[#f02e54]/10 px-4 py-2">
            <Headphones size={15} color={BRAND} />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#f02e54]">
              FreeGo TV Customer Support
            </span>
          </div>
          <h1 className="mb-5 font-display text-4xl font-black uppercase italic tracking-tight text-[#121212] sm:text-5xl md:text-7xl">
            Contact <span className="text-[#f02e54]">FreeGo TV</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#374151] md:text-lg">
            Need help with a FreeGo IPTV subscription, account activation, or device setup?
            Send your question to our support team using the form below.
          </p>
        </ScrollReveal>

        {/* Contact form */}
        <ScrollReveal delay={0.15}>
          <div className="mx-auto mb-16 max-w-2xl rounded-3xl border border-[#f02e54]/20 bg-white p-6 shadow-[0_18px_60px_rgba(18,18,18,0.07)] md:p-9">
            <div className="mb-7 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f02e54]/10 text-[#f02e54]">
                <Send size={21} />
              </div>
              <h2 className="font-display text-2xl font-black uppercase italic text-[#121212]">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-[#4b5563]">
                Fill in your details, then continue to our support page.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#374151]">Your Name</span>
                  <div className="relative">
                    <Users size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-300 bg-[#fffafa] py-3 pl-10 pr-4 text-[#121212] placeholder:text-gray-500 outline-none transition-colors focus:border-[#f02e54] focus:ring-2 focus:ring-[#f02e54]/15"
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#374151]">Email Address</span>
                  <div className="relative">
                    <Mail size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-300 bg-[#fffafa] py-3 pl-10 pr-4 text-[#121212] placeholder:text-gray-500 outline-none transition-colors focus:border-[#f02e54] focus:ring-2 focus:ring-[#f02e54]/15"
                    />
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#374151]">Subject</span>
                <div className="relative">
                  <MessageCircle size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-[#fffafa] py-3 pl-10 pr-10 text-[#121212] outline-none transition-colors focus:border-[#f02e54] focus:ring-2 focus:ring-[#f02e54]/15"
                  >
                    <option value="">Select a subject</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Inquiry">Billing Inquiry</option>
                    <option value="Account Activation">Account Activation</option>
                    <option value="Device Setup">Device Setup</option>
                    <option value="General Question">General Question</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <ChevronDown size={17} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#374151]">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={3000}
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full resize-y rounded-xl border border-gray-300 bg-[#fffafa] px-4 py-3 text-[#121212] placeholder:text-gray-500 outline-none transition-colors focus:border-[#f02e54] focus:ring-2 focus:ring-[#f02e54]/15"
                />
              </label>

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#f02e54] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#f02e54]/20 transition-all hover:bg-[#d92349] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f02e54]"
              >
                <Send size={17} /> Continue to Support <ExternalLink size={15} />
              </button>
              <p className="text-center text-xs leading-relaxed text-[#6b7280]">
                This opens our support website in a new tab with your message prepared.
                Review and submit it there. This form does not send email directly.
              </p>
            </form>
          </div>
        </ScrollReveal>

        {/* Useful info cards */}
        <ScrollReveal className="mb-8 text-center">
          <span className="mb-3 inline-block rounded-full border border-[#f02e54]/20 bg-[#f02e54]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f02e54]">
            Here to Help
          </span>
          <h2 className="font-display text-2xl font-black uppercase italic text-[#121212] md:text-3xl">
            Support for <span className="text-[#f02e54]">FreeGo TV</span>
          </h2>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {infoCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.08 * i}>
              <div className="h-full rounded-2xl border border-[#f02e54]/15 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f02e54]/10 text-[#f02e54]">
                  <card.icon size={23} />
                </div>
                <h3 className="mb-2 font-display text-lg font-black uppercase text-[#121212]">{card.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[#4b5563]">{card.description}</p>
                <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-xs font-bold uppercase tracking-wide text-[#f02e54]">
                  <CheckCircle2 size={15} /> {card.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-3 text-sm text-[#374151]">Prefer to contact support directly?</p>
          <Link
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#f02e54]/30 bg-white px-6 py-3 text-sm font-bold text-[#f02e54] shadow-sm transition-all hover:bg-[#f02e54] hover:text-white"
          >
            <MessageCircle size={18} /> Open FreeGo TV Support <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
