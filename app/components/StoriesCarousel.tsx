"use client";

import { useEffect, useRef, useState } from "react";
import type { caseStudies as caseStudiesType } from "./content";
import StoryCard from "./StoryCard";

export default function StoriesCarousel({
  stories: caseStudies,
}: {
  stories: typeof caseStudiesType;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActive(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="mt-14">
      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {caseStudies.map((story) => (
          <div
            key={story.title}
            className="w-[82%] shrink-0 snap-center sm:w-[60%] lg:w-auto lg:shrink lg:snap-align-none"
          >
            <StoryCard story={story} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 lg:hidden">
        {caseStudies.map((story, i) => (
          <button
            key={story.title}
            type="button"
            aria-label={`Go to story ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-6 bg-gold-500" : "w-1.5 bg-navy-900/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
