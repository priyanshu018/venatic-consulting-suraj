import { outsourcing } from "./content";

export default function OutsourcingSection() {
  return (
    <section id="outsourcing" className="scroll-mt-24 bg-cream-50 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          OUTSOURCING
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Scale Your Team Without the Overhead
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-900/70">
          {outsourcing.intro}
        </p>

        <div className="mt-10 rounded-3xl bg-navy-900 p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {outsourcing.items.map((item, i) => (
              <div
                key={item.title}
                id={i === 0 ? "recruiting" : undefined}
                className="scroll-mt-24"
              >
                <h3 className="text-base font-bold text-gold-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-sm italic text-gold-400/90">
            {outsourcing.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
