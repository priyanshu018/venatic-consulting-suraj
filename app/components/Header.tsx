"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./content";
import { IconArrowRight, IconLogoMark } from "./icons";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <IconLogoMark />
          <span className="text-2xl font-extrabold tracking-tight text-navy-900">
            VENATIC
          </span>
          <span className="hidden text-xs font-semibold tracking-[0.3em] text-gold-500 sm:inline">
            CONSULTING
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-navy-900 ${
                  active ? "text-navy-900" : "text-navy-900/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 sm:inline-flex"
        >
          Contact Us
          <IconArrowRight />
        </Link>
      </div>
    </header>
  );
}
