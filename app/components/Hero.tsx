import Link from "next/link";
import { heroFeatures, heroStats } from "./content";
import { IconArrowRight, IconCheckShield, IconChartLine, IconGlobe } from "./icons";
import Counter from "./Counter";

const featureIcons = [IconGlobe, IconChartLine, IconCheckShield];

const buildings = [
  { x: 20, w: 55, h: 150 },
  { x: 85, w: 40, h: 200 },
  { x: 135, w: 50, h: 130 },
  { x: 195, w: 35, h: 230 },
  { x: 240, w: 65, h: 170 },
  { x: 315, w: 45, h: 260 },
  { x: 370, w: 55, h: 150 },
  { x: 435, w: 40, h: 190 },
  { x: 485, w: 60, h: 140 },
  { x: 555, w: 45, h: 220 },
  { x: 610, w: 55, h: 170 },
  { x: 675, w: 50, h: 210 },
  { x: 735, w: 40, h: 140 },
];

function buildingWindows(b: (typeof buildings)[number], seed: number) {
  const rows = Math.floor(b.h / 22);
  const cols = Math.max(2, Math.floor(b.w / 16));
  const windows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (r * cols + c + seed) % 3 === 0;
      if (!lit) continue;
      windows.push(
        <rect
          key={`${r}-${c}`}
          x={b.x + 8 + c * 14}
          y={300 - b.h + 14 + r * 22}
          width={6}
          height={9}
          fill="#e9c887"
          opacity={0.7}
        />
      );
    }
  }
  return windows;
}

function HeroVisual() {
  return (
    <>
      <div className="clip-hero absolute inset-0 overflow-hidden bg-navy-900">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1c3a67" />
              <stop offset="45%" stopColor="#142c52" />
              <stop offset="100%" stopColor="#0a1a33" />
            </linearGradient>
            <radialGradient id="glow" cx="78%" cy="38%" r="55%">
              <stop offset="0%" stopColor="#f0c877" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f0c877" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="url(#sky)" />
          <rect width="800" height="500" fill="url(#glow)" />
          <g opacity="0.5">
            {buildings.slice(2, 9).map((b, i) => (
              <rect
                key={`back-${i}`}
                x={b.x - 10}
                y={200 - b.h * 0.6}
                width={b.w}
                height={b.h * 0.6 + 100}
                fill="#0a1a33"
              />
            ))}
          </g>
          <g>
            {buildings.map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={300 - b.h} width={b.w} height={b.h} fill="#0a1a33" />
                {buildingWindows(b, i)}
              </g>
            ))}
          </g>
          <rect y="298" width="800" height="4" fill="#0a1a33" />
        </svg>
        <div className="absolute right-10 top-10 h-px w-28 rotate-45 bg-gold-400/50" />
        <div className="absolute right-28 top-24 h-px w-16 rotate-45 bg-gold-400/30" />
      </div>
      <div className="clip-hero-line absolute inset-0 bg-gold-500" />

      <div className="absolute bottom-8 left-4 z-10 flex divide-x divide-white/15 rounded-2xl bg-navy-950 px-6 py-6 shadow-xl sm:left-8 sm:px-10">
        {heroStats.map((stat) => (
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
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
          <HeroVisual />
        </div>
      </div>

      {/* desktop: image bleeds from viewport center to the right edge */}
      <div className="absolute inset-y-0 left-1/2 right-0 hidden lg:block">
        <HeroVisual />
      </div>
    </section>
  );
}
