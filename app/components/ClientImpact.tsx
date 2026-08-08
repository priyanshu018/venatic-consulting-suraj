"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "./content";
import { IconArrowRight, IconChevron } from "./icons";

export default function ClientImpact() {
  const [start, setStart] = useState(0);

  const visible = [0, 1, 2].map((offset) => testimonials[(start + offset) % testimonials.length]);

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

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() =>
              setStart((s) => (s - 1 + testimonials.length) % testimonials.length)
            }
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-white sm:flex"
          >
            <IconChevron direction="left" />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3">
            {visible.map((testimonial) => (
              <div
                key={testimonial.quote}
                className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6"
              >
                <span className="font-serif text-2xl leading-none text-gold-500">
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/75">
                  {testimonial.quote}
                </p>
                <p className="mt-5 text-sm font-bold text-navy-900">
                  {testimonial.attribution}
                </p>
                <p className="text-xs font-medium text-navy-900/50">
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => setStart((s) => (s + 1) % testimonials.length)}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-white sm:flex"
          >
            <IconChevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
