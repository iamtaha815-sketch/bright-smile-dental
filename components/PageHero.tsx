export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-neutral-200 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
