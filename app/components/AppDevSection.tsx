import Link from "next/link";
import { appDev } from "./content";
import { IconArrowRight, IconCheckShield } from "./icons";

export default function AppDevSection() {
  return (
    <section id="application-development" className="scroll-mt-24 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          DIGITAL TRANSFORMATION
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Application Development &amp; Maintenance
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-900/70">
          {appDev.description}
        </p>

        <h3 className="mt-10 text-lg font-bold text-navy-900">
          {appDev.helpsTitle}
        </h3>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {appDev.helps.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-navy-900/10 px-4 py-3 text-sm text-navy-900/75"
            >
              <IconCheckShield className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Talk to an Expert
          <IconArrowRight />
        </Link>
      </div>
    </section>
  );
}
