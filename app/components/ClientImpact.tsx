import Link from "next/link";
import { testimonials as testimonialsDefaults } from "./content";
import { IconArrowRight } from "./icons";
import { getSection } from "@/lib/content-db";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default async function ClientImpact() {
  const testimonials = await getSection("testimonials", testimonialsDefaults);

  return (
    <section className="bg-cream-50 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col justify-center rounded-2xl bg-navy-900 p-10">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-400">
            CLIENT IMPACT
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Real Challenges. Real Results.
          </h2>
          <Link
            href="/resources"
            className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            View Case Studies
            <IconArrowRight />
          </Link>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
