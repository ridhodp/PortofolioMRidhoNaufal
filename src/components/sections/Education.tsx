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
                  // Styled after the real graduation sash: orange band, navy edges, blue capitals, gold medal.
                  <span className="inline-flex items-center gap-1.5 border-y-[3px] border-[#3a3d93] bg-[#f47a3c] py-0.5 pl-2.5 pr-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1f2676]">
                    {edu.predicate}
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff6c8,#e6c35c_45%,#a9802a)] ring-1 ring-[#a9802a]/60"
                    />
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-text-primary/80 sm:text-base">
                {edu.degree}
              </p>
              <p className="mt-0.5 text-sm text-text-muted">{edu.field}</p>

              {edu.gpa && (
                <p className="mt-3 font-mono text-sm text-text-secondary">
                  {edu.gpaScale === "4.00" ? "IPK" : "Nilai"} {edu.gpa} / {edu.gpaScale}
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
