import Link from "next/link";
import { services } from "./content";
import { IconArrowRight, IconBriefcase, IconGlobe, IconDocument, IconLaptop } from "./icons";

const serviceIcons = [IconBriefcase, IconGlobe, IconDocument, IconLaptop];

export default function Services() {
  return (
    <section className="relative z-10 -mt-12 rounded-t-[3rem] bg-white px-6 pb-20 pt-16 shadow-[0_-24px_48px_-32px_rgba(10,26,51,0.35)] lg:-mt-16 lg:rounded-t-[4rem] lg:px-10 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            End-to-End Solutions for Complex Challenges
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-navy-900/10 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-gold-500"
                >
                  Learn More
                  <IconArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
