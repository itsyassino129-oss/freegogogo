
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#f02e54]/20 bg-[#faf0ef] pt-20 pb-10 px-4 text-[#121212]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">

        {/* LOGO AND DESCRIPTION */}
        <div className="md:w-1/3">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="h-15 w-auto relative">
              <Image
                src="/img/logo.png"
                alt="FreeGo TV Logo"
                width={200}
                height={75}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <p className="text-[#374151] font-medium text-sm leading-relaxed">
            FreeGo TV provides premium IPTV subscriptions with
            ultra-fast activation, stable servers, and
            round-the-clock WhatsApp support across the
            United States. Enjoy buffer-free HD streaming
            on any device. Join FreeGo TV today for the
            best entertainment experience.
          </p>
        </div>

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">

          {/* QUICK LINKS */}
          <div>
            <h5 className="font-display font-black uppercase tracking-widest text-[#121212] text-xs mb-6">
              QUICK LINKS
            </h5>

            <ul className="space-y-4 text-sm font-semibold text-[#374151]">
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/setup"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Setup Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/freego-tv"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  FreeGo TV
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h5 className="font-display font-black uppercase tracking-widest text-[#121212] text-xs mb-6">
              COMPANY
            </h5>

            <ul className="space-y-4 text-sm font-semibold text-[#374151]">
              <li>
                <Link
                  href="/legal/dmca"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  DMCA
                </Link>
              </li>

              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Terms of use
                </Link>
              </li>

              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/legal/refund"
                  className="hover:text-[#f02e54] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-display font-black uppercase tracking-widest text-[#121212] text-xs mb-6">
              SUPPORT
            </h5>

            <p className="text-sm font-medium text-[#374151] mb-6">
              Need help? FreeGo TV support team replies fast
              on WhatsApp 24 hours a day, 7 days a week.
            </p>

            
<Link
  href={`https://wa.me/212723870095?text=${encodeURIComponent(
    "Hello! 1 I need assistance with FreeGo TV (freegoiptv.us)."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm font-bold text-[#128C46] hover:text-[#075E2D] transition-colors"
>
  <MessageCircle size={18} />
  Chat on WhatsApp
</Link>
</div>
</div>
</div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto border-t border-[#f02e54]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-[#4b5563]">

        {/* COPYRIGHT */}
        <p>
          © {new Date().getFullYear()} FreeGo TV.
          ALL RIGHTS RESERVED.
        </p>

        {/* PAYMENT METHODS */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">

          {/* PAYPAL */}
          <Image
            src="/img/payment/4.png"
            alt="PayPal"
            width={88}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* BITCOIN */}
          <Image
            src="/img/payment/3.png"
            alt="BTC"
            width={95}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* VISA */}
          <Image
            src="/img/payment/2.png"
            alt="VISA"
            width={88}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* MASTERCARD */}
          <Image
            src="/img/payment/1.png"
            alt="Mastercard"
            width={88}
            height={40}
            className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />

        </div>
      </div>
    </footer>
  );
}
