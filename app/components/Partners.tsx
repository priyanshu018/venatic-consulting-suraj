import Image from "next/image";
import Link from "next/link";
import { partners as partnersDefaults } from "./content";
import { getSection } from "@/lib/content-db";
import { IconArrowRight } from "./icons";

export default async function Partners() {
  const partners = await getSection("partners", partnersDefaults);
  const track = partners.length ? [...partners, ...partners] : [];

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

      {track.length ? (
        <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
            {track.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-navy-900/10 bg-white px-4"
              >
                {partner.image ? (
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="192px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-lg font-extrabold tracking-tight text-navy-900/70">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

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
