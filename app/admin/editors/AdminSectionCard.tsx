export default function AdminSectionCard({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8"
    >
      <h2 className="text-lg font-extrabold text-navy-900">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-navy-900/60">{description}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
