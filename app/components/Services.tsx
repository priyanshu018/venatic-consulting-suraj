import Link from "next/link";
import { services } from "./content";
import {
  IconArrowRight,
  IconTrendUp,
  IconGear,
  IconPieChart,
  IconPeople,
  IconLaptop,
  IconLandmark,
} from "./icons";

const serviceIcons = [
  IconTrendUp,
  IconGear,
  IconPieChart,
  IconPeople,
  IconLaptop,
  IconLandmark,
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            End-to-End Solutions for Complex Challenges
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={service.title}
                id={service.slug}
                className="scroll-mt-24 rounded-2xl border border-navy-900/10 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-gold-500"
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
