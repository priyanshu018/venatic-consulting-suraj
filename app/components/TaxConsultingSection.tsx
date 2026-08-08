import { taxConsulting } from "./content";
import Accordion from "./Accordion";
import { IconArrowRight } from "./icons";

export default function TaxConsultingSection() {
  return (
    <section id="us-tax" className="scroll-mt-24 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          US TAX CONSULTING
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Individual Tax Preparation, Done Right
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            {taxConsulting.intro.map((p) => (
              <p
                key={p}
                className="mt-4 text-sm leading-relaxed text-navy-900/70 first:mt-0"
              >
                {p}
              </p>
            ))}

            <h3 className="mt-8 text-lg font-bold text-navy-900">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {taxConsulting.services.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-navy-900/75"
                >
                  <IconArrowRight className="h-3.5 w-3.5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Accordion
              items={[
                {
                  title: "Pricing",
                  content: (
                    <ul className="flex flex-col gap-2.5">
                      {taxConsulting.pricing.map((row) => (
                        <li
                          key={row.label}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-navy-900/75">
                            {row.label}
                          </span>
                          <span className="font-bold text-navy-900">
                            {row.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ),
                },
              ]}
              defaultOpen={[0]}
            />
            <p className="mt-5 text-sm italic leading-relaxed text-navy-900/60">
              {taxConsulting.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
