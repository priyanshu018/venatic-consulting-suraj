import Link from "next/link";
import { heroFeatures, heroStats } from "./content";
import { IconArrowRight, IconCheckShield, IconChartLine, IconGlobe } from "./icons";

const featureIcons = [IconGlobe, IconChartLine, IconCheckShield];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            STRATEGY. PERFORMANCE. TRANSFORMATION.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
            Driving Growth.
            <br />
            Delivering <span className="text-gold-500">Impact.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-navy-900/70">
            Venatic Consulting partners with organizations across the globe
            to solve complex challenges and create lasting value through
            strategy, insight and execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Explore Our Services
              <IconArrowRight />
            </Link>
            <Link
              href="#contact"
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

        <div className="relative min-h-[420px] lg:min-h-[600px]">
          <div className="clip-hero absolute inset-0 bg-navy-900">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #142c52 0%, #0e2140 55%, #0a1a33 100%)",
              }}
            />
            <svg
              className="absolute bottom-0 left-0 h-2/3 w-full text-navy-950/60"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <rect x="40" y="120" width="60" height="180" />
              <rect x="110" y="80" width="45" height="220" />
              <rect x="165" y="150" width="55" height="150" />
              <rect x="230" y="60" width="40" height="240" />
              <rect x="280" y="100" width="70" height="200" />
              <rect x="360" y="40" width="50" height="260" />
              <rect x="420" y="130" width="60" height="170" />
              <rect x="490" y="90" width="45" height="210" />
              <rect x="545" y="150" width="65" height="150" />
              <rect x="620" y="70" width="50" height="230" />
              <rect x="680" y="110" width="60" height="190" />
              <rect x="750" y="150" width="40" height="150" />
            </svg>
            <div className="absolute right-8 top-10 h-px w-24 rotate-45 bg-gold-400/60" />
            <div className="absolute right-24 top-24 h-px w-16 rotate-45 bg-gold-400/40" />
          </div>
          <div className="clip-hero-line absolute inset-0 bg-gold-500" />

          <div className="absolute bottom-8 left-4 z-10 flex divide-x divide-white/15 rounded-2xl bg-navy-950 px-6 py-6 shadow-xl sm:left-8 sm:px-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0 sm:px-6">
                <p className="text-2xl font-extrabold text-gold-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
