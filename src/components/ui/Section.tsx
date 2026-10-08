interface SectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t">
      <div className="section-container grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-xs text-accent">{index}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base lg:max-w-xs">
                {subtitle}
              </p>
            )}
          </div>
        </header>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
