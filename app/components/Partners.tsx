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

export default function Partners() {
  return (
    <section className="bg-cream-50 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          PREVIOUS &amp; CURRENT CUSTOMERS
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Partners in Progress, Together We Achieve More
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 w-40 items-center justify-center rounded-xl border border-navy-900/10 bg-white"
            >
              <span className={`text-lg font-extrabold tracking-tight ${logo.className}`}>
                {logo.name}
              </span>
            </div>
          ))}
          <Link
            href="#clients"
            className="flex h-16 w-40 items-center justify-center gap-2 rounded-xl bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            View All Clients
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
