import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { IconArrowRight } from "../components/icons";

export const metadata: Metadata = {
  title: "Resources | Venatic Consulting",
  description:
    "Perspectives and insights from Venatic Consulting on strategy, operations, digital transformation and public policy.",
};

const insights = [
  {
    tag: "Strategy",
    title: "Navigating Market Entry in Emerging Economies",
    blurb:
      "A practical framework for evaluating growth opportunities and commercial risk before committing capital.",
  },
  {
    tag: "Operations",
    title: "Building Resilient Supply Chains Under Pressure",
    blurb:
      "How leading organizations are redesigning operations to absorb shocks without sacrificing performance.",
  },
  {
    tag: "Digital",
    title: "From Pilot to Scale: Making Digital Transformation Stick",
    blurb:
      "Why most digital initiatives stall after the pilot phase, and what it takes to embed change organization-wide.",
  },
  {
    tag: "Public Sector",
    title: "Strengthening Institutional Capacity for Long-Term Impact",
    blurb:
      "Lessons from working with governments and development partners on policy design and program evaluation.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Perspectives That Turn Insight Into Action"
        description="Views from our consulting teams on the strategy, operations and transformation challenges shaping our clients today."
      />

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
          {insights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy-900/10 p-8"
            >
              <span className="inline-block rounded-full bg-navy-900/5 px-3 py-1 text-xs font-bold tracking-wide text-navy-900/70">
                {item.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                {item.blurb}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 rounded-2xl bg-navy-900 px-8 py-10 text-center">
          <p className="text-lg font-bold text-white sm:text-xl">
            Want perspectives tailored to your industry?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Talk to an Expert
            <IconArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
