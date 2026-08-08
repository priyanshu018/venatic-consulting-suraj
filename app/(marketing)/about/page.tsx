import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import WhoWeWorkWith from "../../components/WhoWeWorkWith";
import StatsCta from "../../components/StatsCta";
import Counter from "../../components/Counter";
import { heroFeatures as heroFeaturesDefaults } from "../../components/content";
import { IconGlobe, IconChartLine, IconCheckShield } from "../../components/icons";
import { getStats } from "@/lib/stats";
import { getSection } from "@/lib/content-db";

export const metadata: Metadata = {
  title: "About Us | Venatic Consulting",
  description:
    "Learn about Venatic Consulting — a global advisory partner helping organizations solve complex challenges through strategy, insight and execution.",
};

export const dynamic = "force-dynamic";

const valueIcons = [IconGlobe, IconChartLine, IconCheckShield];

export default async function AboutPage() {
  const [dbStats, heroFeatures] = await Promise.all([
    getStats(),
    getSection("hero_features", heroFeaturesDefaults),
  ]);
  const stats = [
    { value: `${dbStats.countries}+`, label: "Countries" },
    { value: `${dbStats.projects}+`, label: "Projects" },
    { value: `${dbStats.clients}+`, label: "Clients" },
  ];

  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Strategy, Insight and Execution — For Every Challenge"
        description="Venatic Consulting partners with organizations across the globe to solve complex challenges and create lasting value."
      />

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
              OUR STORY
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Built on Local Understanding, Scaled to a Global Perspective
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-900/70">
              We work alongside corporates, governments, development
              partners and startups to turn complexity into clear,
              actionable strategy. Every engagement is grounded in local
              context and delivered with the rigor of a global advisory
              practice.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
              From market entry and operations excellence to digital
              transformation and public policy, our teams combine deep
              sector expertise with hands-on execution — so strategy
              doesn&apos;t stop at the recommendation, it becomes measurable
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-navy-900/10 p-6 text-center lg:flex lg:items-center lg:justify-between lg:text-left"
              >
                <p className="text-3xl font-extrabold text-navy-900">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-1 text-sm font-medium text-navy-900/60 lg:mt-0">
                  {stat.label} Served
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
              WHAT DRIVES US
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              The Principles Behind Every Engagement
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {heroFeatures.map((feature, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-8 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-7 w-7 text-gold-500" />
                  <p className="mt-4 text-base font-bold text-navy-900">
                    {feature.title}
                  </p>
                  <p className="text-sm text-navy-900/60">{feature.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhoWeWorkWith />
      <StatsCta />
    </>
  );
}
