import StoriesCarousel from "./StoriesCarousel";

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

        <StoriesCarousel />
      </div>
    </section>
  );
}
