import { experiences } from "@/data/portfolio";
import Section from "@/components/ui/Section";

const typeLabels = {
  work: "Kerja",
  internship: "Magang",
  organization: "Organisasi",
  academic: "Asisten Lab",
};

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Pengalaman"
      subtitle="Pengalaman profesional, akademik, dan organisasi yang membentuk karier saya."
    >
      <ol className="divide-y">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs leading-relaxed text-text-muted sm:block">
              <p>{exp.period}</p>
              <p className="text-accent sm:mt-1">{typeLabels[exp.type]}</p>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-text-primary">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-text-primary/80 sm:text-base">
                {exp.organization}
              </p>
              <p className="mt-0.5 text-sm text-text-muted">{exp.location}</p>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {exp.description}
              </p>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text-secondary marker:text-text-muted">
                {exp.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
