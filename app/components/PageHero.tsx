export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-6 py-16 lg:px-10 lg:py-20">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 85% 0%, #1c3a67 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
