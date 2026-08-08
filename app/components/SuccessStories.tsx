import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "./content";
import { IconArrowRight } from "./icons";

export default function SuccessStories() {
  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
            SUCCESS STORIES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Success Stories That Speak for{" "}
            <span className="text-gold-500">Themselves</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((story) => (
            <div
              key={story.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-cream-50"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-block w-fit rounded-full bg-navy-900 px-3 py-1 text-xs font-bold tracking-wide text-gold-400">
                  {story.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">
                  {story.title}
                </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
