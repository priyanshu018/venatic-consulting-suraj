import { industries as industriesDefaults } from "./content";
import { getSection } from "@/lib/content-db";
import {
  IconBuilding,
  IconHeart,
  IconCart,
  IconFactory,
  IconCpu,
  IconLandmark,
  IconGradCap,
  IconNetwork,
} from "./icons";

const industryIcons = [
  IconBuilding,
  IconHeart,
  IconCart,
  IconFactory,
  IconCpu,
  IconLandmark,
  IconGradCap,
  IconNetwork,
];

export default async function Industries() {
  const industries = await getSection("industries", industriesDefaults);

  return (
    <section className="bg-navy-900 px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-400">
          CLIENTS WE SERVE
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Trusted by Leading Organizations Across Industries
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((industry, i) => {
            const Icon = industryIcons[i] ?? IconBuilding;
            return (
              <div key={industry} className="flex flex-col items-center gap-3">
                <Icon className="h-7 w-7 text-gold-400" />
                <p className="text-xs font-medium leading-snug text-white/80">
                  {industry}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
