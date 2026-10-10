import { education } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Education() {
  return (
    <Section
      id="education"
      title="Pendidikan"
      subtitle="Latar belakang akademik dan pencapaian."
    >
      <ol className="divide-y">
        {education.map((edu) => (
          <li
            key={edu.id}
            className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs leading-relaxed text-text-muted">
              {edu.period}
            </p>

            <div className="min-w-0">
              <h3 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold leading-snug text-text-primary">
                {edu.institution}
                {edu.predicate && (
                  <span className="rounded border border-accent/40 px-2 py-0.5 text-xs font-medium text-accent">
                    {edu.predicate}
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-text-primary/80 sm:text-base">
                {edu.degree}
              </p>
              <p className="mt-0.5 text-sm text-text-muted">{edu.field}</p>

              {edu.gpa && (
                <p className="mt-3 font-mono text-sm text-text-secondary">
                  Nilai {edu.gpa} / {edu.gpaScale}
                </p>
              )}

              {edu.description && (
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {edu.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
