interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t">
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            {title}
          </h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-10 rounded-full bg-accent" />
          {subtitle && (
            <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
              {subtitle}
            </p>
          )}
        </header>
        <div className="mx-auto mt-10 min-w-0 max-w-3xl sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
