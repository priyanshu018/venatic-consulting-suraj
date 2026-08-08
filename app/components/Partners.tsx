import Link from "next/link";
import { IconArrowRight } from "./icons";

const logos = [
  { name: "adani", className: "text-red-600" },
  { name: "vedanta", className: "text-emerald-600" },
  { name: "TATA", className: "text-blue-800" },
  { name: "Mahindra", className: "text-red-500" },
  { name: "Reliance", className: "text-navy-900" },
  { name: "AXIS BANK", className: "text-rose-800" },
];

const track = [...logos, ...logos];

export default function Partners() {
  return (
    <section className="bg-cream-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          PREVIOUS &amp; CURRENT CUSTOMERS
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Partners in Progress, Together We Achieve More
        </h2>
      </div>

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-navy-900/10 bg-white"
            >
              <span className={`text-lg font-extrabold tracking-tight ${logo.className}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center px-6">
        <Link
          href="/clients"
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          View All Clients
          <IconArrowRight />
        </Link>
      </div>
    </section>
  );
}
