import Link from "next/link";
import { workWithCards } from "./content";
import {
  IconArrowRight,
  IconBuilding,
  IconLandmark,
  IconGlobe,
  IconTrendUp,
} from "./icons";

const cardIcons = [IconBuilding, IconLandmark, IconGlobe, IconTrendUp];

export default function WhoWeWorkWith() {
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
            const Icon = cardIcons[i];
            return (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl bg-navy-900 p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(160deg, #16305a 0%, #0e2140 70%)",
                }}
              >
                <Icon className="h-7 w-7 text-gold-400" />
                <h3 className="mt-4 text-base font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
