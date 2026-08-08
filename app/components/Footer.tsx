import { IconMapPin, IconMail, IconWhatsApp, IconLinkedIn } from "./icons";
import { whatsappNumber, whatsappDisplay } from "./content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-900">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 400 120"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 40 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 10 + (row % 2) * 5}
              cy={row * 11}
              r="1"
              fill="#d9ab55"
            />
          ))
        )}
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left lg:px-10">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <IconMapPin className="h-5 w-5 text-gold-400" />
          <span>Global Offices &mdash; 20+ Countries Worldwide</span>
        </div>
        <a
          href="mailto:hello@venaticconsulting.com"
          className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
        >
          <IconMail className="h-5 w-5 text-gold-400" />
          <span>hello@venaticconsulting.com</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
        >
          <IconWhatsApp className="h-5 w-5 text-gold-400" />
          <span>WhatsApp &mdash; {whatsappDisplay}</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
        >
          <IconLinkedIn className="h-5 w-5 text-gold-400" />
          <span>Connect With Us &mdash; LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}
