import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { IconArrowRight, IconGlobe, IconChartLine, IconCheckShield } from "../components/icons";

export const metadata: Metadata = {
  title: "Careers | Venatic Consulting",
  description:
    "Join Venatic Consulting and work on complex, high-impact challenges for organizations across the globe.",
};

const culture = [
  {
    icon: IconGlobe,
    title: "Global Exposure",
    description:
      "Work across 20+ countries and multiple industries from day one.",
  },
  {
    icon: IconChartLine,
    title: "Real Impact",
    description:
      "Every engagement is measured by outcomes, not just recommendations.",
  },
  {
    icon: IconCheckShield,
    title: "Growth-Focused",
    description:
      "Structured mentorship and fast-tracked ownership as you grow.",
  },
];

const roles = [
  {
    title: "Strategy Consultant",
    location: "Multiple Locations",
    type: "Full-time",
  },
  {
    title: "Data & Analytics Associate",
    location: "Multiple Locations",
    type: "Full-time",
  },
  {
    title: "Engagement Manager",
    location: "Multiple Locations",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Build Your Career Solving Real Problems"
        description="We're always looking for people who want to do meaningful, high-impact consulting work."
      />

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {culture.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-900/10 p-8 text-center"
              >
                <item.icon className="mx-auto h-7 w-7 text-gold-500" />
                <p className="mt-4 text-base font-bold text-navy-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-navy-900/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            OPEN ROLES
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Current Opportunities
          </h2>

          <div className="mt-10 divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-base font-bold text-navy-900">
                    {role.title}
                  </p>
                  <p className="text-sm text-navy-900/60">
                    {role.location} &middot; {role.type}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
                >
                  Apply
                  <IconArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-900/60">
            Don&apos;t see a fit?{" "}
            <Link
              href="/contact"
              className="font-semibold text-navy-900 underline underline-offset-2"
            >
              Reach out
            </Link>{" "}
            and tell us how you&apos;d like to contribute.
          </p>
        </div>
      </section>
    </>
  );
}
