"use client";

import { useState } from "react";
import type { testimonials as testimonialsType } from "./content";
import { IconChevron } from "./icons";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: typeof testimonialsType;
}) {
  const [start, setStart] = useState(0);

  const visible = [0, 1, 2].map(
    (offset) => testimonials[(start + offset) % testimonials.length]
  );

  return (
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
        {visible.map((testimonial, i) => (
          <div
            key={`${testimonial.quote}-${i}`}
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
  );
}
