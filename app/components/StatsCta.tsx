import Link from "next/link";
import { closingStats } from "./content";
import { IconArrowRight } from "./icons";

export default function StatsCta() {
  return (
    <section id="contact" className="bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 divide-x divide-white/10">
          {closingStats.map((stat) => (
            <div key={stat.label} className="px-6 text-center first:pl-0">
              <p className="text-2xl font-extrabold text-gold-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-gold-500 px-8 py-6">
          <p className="text-lg font-extrabold text-navy-900 sm:text-xl">
            Let&apos;s Build a Better Future Together
          </p>
          <Link
            href="mailto:hello@venaticconsulting.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Get in Touch
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
