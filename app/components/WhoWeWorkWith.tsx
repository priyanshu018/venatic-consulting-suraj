import Image from "next/image";
import Link from "next/link";
import { workWithCards as workWithCardsDefaults } from "./content";
import {
  IconArrowRight,
  IconBuilding,
  IconLandmark,
  IconGlobe,
  IconTrendUp,
} from "./icons";
import { getSection } from "@/lib/content-db";

const cardIcons = [IconBuilding, IconLandmark, IconGlobe, IconTrendUp];

export default async function WhoWeWorkWith() {
  const workWithCards = await getSection("who_we_work_with", workWithCardsDefaults);

  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            OUR CLIENTS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900">
            Who We Work With
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/65">
            We collaborate with a diverse set of organizations to drive
            meaningful transformation and sustainable growth.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Know More About Us
            <IconArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {workWithCards.map((card, i) => {
            const Icon = cardIcons[i] ?? IconBuilding;
            return (
              <div
                key={card.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.image || "/images/corporates.jpg"}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-navy-950/10" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/80">
                    <Icon className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
