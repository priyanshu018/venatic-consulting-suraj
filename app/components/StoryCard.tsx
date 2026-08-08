import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./icons";
import type { caseStudies } from "./content";

export default function StoryCard({
  story,
}: {
  story: (typeof caseStudies)[number];
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-cream-50">
      <div className="relative aspect-[4/3]">
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(min-width: 1024px) 33vw, 85vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-block w-fit rounded-full bg-navy-900 px-3 py-1 text-xs font-bold tracking-wide text-gold-400">
          {story.tag}
        </span>
        <h3 className="mt-4 text-lg font-bold text-navy-900">{story.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/65">
          {story.description}
        </p>
        <Link
          href="/resources"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Read More
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
}
