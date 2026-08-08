import Image from "next/image";
import Link from "next/link";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconLinkedIn,
} from "./icons";
import {
  whatsappNumber,
  whatsappDisplay,
  contactEmail,
  phoneNumbers,
  officeAddress,
  navLinks,
} from "./content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-900">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {Array.from({ length: 20 }).map((_, row) =>
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

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-mark.png"
                alt=""
                width={152}
                height={130}
                className="h-7 w-auto"
              />
              <span className="text-lg font-extrabold tracking-tight text-white">
                VENATIC
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Strategy, performance and transformation partners to
              organizations across the globe.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-400">
              CONTACT
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{contactEmail}</span>
              </a>
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>
                    {phone.display}{" "}
                    <span className="text-white/40">({phone.country})</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-400">
              OFFICE
            </p>
            <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{officeAddress}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-400">
              CONNECT
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0 text-gold-400" />
                <span>WhatsApp &mdash; {whatsappDisplay}</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconLinkedIn className="h-4 w-4 shrink-0 text-gold-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {year} Venatic Consulting. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
