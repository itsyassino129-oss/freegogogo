
"use client";

export default function WhatsAppFloat() {
  const whatsappNumber = "212723870095";

  const message =
    "Hello! 1 I need help with FreeGo TV (freegoiptv.us).";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FreeGo TV on WhatsApp"
      className="fixed bottom-6 right-5 z-[9999] group flex flex-col items-end gap-3"
    >
      {/* Help Bubble */}
      <div className="relative bg-[#00C853] text-white text-sm font-bold px-4 py-3 rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
        Need Help?

        <span className="absolute -bottom-2 right-5 w-4 h-4 bg-[#00C853] rotate-45" />
      </div>

      {/* WhatsApp Circle */}
      <div className="w-16 h-16 rounded-full bg-[#00C853] flex items-center justify-center shadow-[0_6px_25px_rgba(0,200,83,0.35)] transition-all duration-300 group-hover:scale-110">
        <svg
          viewBox="0 0 32 32"
          className="w-9 h-9 fill-white"
          aria-hidden="true"
        >
          <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.5a12.2 12.2 0 0 1-6.2-1.7l-.4-.2-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.4-1.5 3.4s1.5 3.9 1.7 4.2c.2.3 3 4.6 7.2 6.4 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
        </svg>
      </div>
    </a>
  );
}
