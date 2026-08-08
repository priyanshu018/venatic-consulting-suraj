import Link from "next/link";
import { IconArrowRight, IconGlobe, IconPeople, IconBriefcase } from "./icons";
import Counter from "./Counter";
import { getStats } from "@/lib/stats";

const statIcons = [IconGlobe, IconPeople, IconBriefcase];

export default async function StatsCta() {
  const dbStats = await getStats();
  const closingStats = [
    { value: `${dbStats.countries}+`, label: "Countries Served" },
    { value: `${dbStats.projects}+`, label: "Projects Delivered" },
    { value: `${dbStats.clients}+`, label: "Client Partnerships" },
  ];

  return (
    <section className="bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-stretch">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-6 divide-white/10 px-6 py-8 sm:justify-start sm:divide-x lg:px-10">
          {closingStats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 pl-0 sm:pl-10 sm:first:pl-0"
              >
                <Icon className="h-8 w-8 shrink-0 text-gold-400" />
                <div>
                  <p className="text-2xl font-extrabold text-gold-400 sm:text-3xl">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-6 bg-gold-500 px-8 py-8 lg:px-12"
          style={{ clipPath: "polygon(28px 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <p className="text-lg font-extrabold text-navy-900 sm:text-xl">
            Let&apos;s Build a Better Future Together
          </p>
          <Link
            href="/contact"
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
