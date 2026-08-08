import Link from "next/link";
import { IconArrowRight } from "./icons";

function AdaniMark() {
  return (
    <span
      className="text-xl font-extrabold italic tracking-tight"
      style={{
        backgroundImage: "linear-gradient(90deg,#e5352b,#8c3494,#0f5ba7)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      adani
    </span>
  );
}

function VedantaMark() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#0f9d58" strokeWidth="1.6" />
        <circle cx="12" cy="7" r="1.6" fill="#f4a300" />
        <circle cx="16.5" cy="14" r="1.6" fill="#0f9d58" />
        <circle cx="7.5" cy="14" r="1.6" fill="#1a73c7" />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-lg font-extrabold text-emerald-700">vedanta</p>
        <p className="text-[9px] font-medium text-navy-900/40">
          transforming for good
        </p>
      </div>
    </div>
  );
}

function TataMark() {
  return (
    <span className="text-xl font-extrabold tracking-tight text-blue-900">
      TATA
    </span>
  );
}

function MahindraMark() {
  return (
    <div className="text-left leading-tight">
      <p className="text-lg font-extrabold tracking-tight text-red-600">
        Mahindra
      </p>
      <p className="-mt-0.5 text-[10px] font-semibold italic text-navy-900/40">
        Rise.
      </p>
    </div>
  );
}

function RelianceMark() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 2c2.5 3 4 6 4 9a4 4 0 1 1-8 0c0-3 1.5-6 4-9Z"
          fill="#c9973f"
        />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-base font-extrabold text-navy-900">Reliance</p>
        <p className="-mt-0.5 text-[9px] font-medium text-navy-900/40">
          Industries Limited
        </p>
      </div>
    </div>
  );
}

function AxisMark() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M4 19 12 4l8 15h-4l-4-8-4 8Z" fill="#97144d" />
      </svg>
      <span className="text-lg font-extrabold tracking-wide text-rose-900">
        AXIS BANK
      </span>
    </div>
  );
}

const logos = [
  { name: "adani", Mark: AdaniMark },
  { name: "vedanta", Mark: VedantaMark },
  { name: "TATA", Mark: TataMark },
  { name: "Mahindra", Mark: MahindraMark },
  { name: "Reliance", Mark: RelianceMark },
  { name: "AXIS BANK", Mark: AxisMark },
];

const track = [...logos, ...logos];

export default function Partners() {
  return (
    <section className="bg-cream-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          PREVIOUS &amp; CURRENT CUSTOMERS
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Partners in Progress, Together We Achieve More
        </h2>
      </div>

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-navy-900/10 bg-white px-4"
            >
              <logo.Mark />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center px-6">
        <Link
          href="/clients"
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          View All Clients
          <IconArrowRight />
        </Link>
      </div>
    </section>
  );
}
