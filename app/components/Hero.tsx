import Image from "next/image";
import Link from "next/link";
import { hero as heroDefaults, heroFeatures as heroFeaturesDefaults } from "./content";
import { IconArrowRight, IconCheckShield, IconChartLine, IconGlobe } from "./icons";
import Counter from "./Counter";
import { getStats } from "@/lib/stats";
import { getSection } from "@/lib/content-db";

const featureIcons = [IconGlobe, IconChartLine, IconCheckShield];

function HeroVisual({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <>
      <div className="clip-hero absolute inset-0 overflow-hidden bg-navy-900">
        <Image
          src="/images/hero-skyline.jpg"
          alt="City skyline at sunset"
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/35 via-transparent to-transparent" />
        <div className="absolute right-10 top-10 h-px w-28 rotate-45 bg-gold-400/60" />
        <div className="absolute right-28 top-24 h-px w-16 rotate-45 bg-gold-400/35" />
      </div>
      <div className="clip-hero-line absolute inset-0 bg-gold-500" />

      <div className="absolute bottom-20 left-4 z-10 flex divide-x divide-white/15 rounded-2xl bg-navy-950 px-6 py-6 shadow-xl sm:left-8 sm:px-10 lg:bottom-24">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0 sm:px-6">
            <p className="text-2xl font-extrabold text-gold-400 sm:text-3xl">
              <Counter value={stat.value} />
            </p>
            <p className="mt-1 text-xs font-medium text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default async function Hero() {
  const [dbStats, hero, heroFeatures] = await Promise.all([
    getStats(),
    getSection("hero", heroDefaults),
    getSection("hero_features", heroFeaturesDefaults),
  ]);
  const stats = [
    { value: `${dbStats.countries}+`, label: "Countries" },
    { value: `${dbStats.projects}+`, label: "Projects" },
    { value: `${dbStats.clients}+`, label: "Clients" },
  ];

  return (
    <section className="relative overflow-hidden bg-cream-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}{" "}
            <span className="text-gold-500">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-navy-900/70">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Explore Our Services
              <IconArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              Talk to an Expert
              <IconArrowRight />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 border-t border-navy-900/10 pt-8">
            {heroFeatures.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={feature.title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <p className="text-sm font-semibold leading-snug text-navy-900">
                    {feature.title}
                    <br />
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile/tablet: image sits in normal flow, full width */}
        <div className="relative min-h-[420px] lg:hidden">
          <HeroVisual stats={stats} />
        </div>
      </div>

      {/* desktop: image bleeds from viewport center to the right edge */}
      <div className="absolute inset-y-0 left-1/2 right-0 hidden lg:block">
        <HeroVisual stats={stats} />
      </div>
    </section>
  );
}
