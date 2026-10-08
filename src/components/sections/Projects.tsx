import { projects } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Proyek"
      subtitle="Proyek yang menunjukkan kemampuan teknis dan pemecahan masalah."
    >
      <ol className="divide-y">
        {projects.map((project, index) => (
          <li key={project.id} className="py-8 first:pt-0 last:pb-0">
            <p className="font-mono text-xs text-text-muted">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-text-primary sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.organization}</p>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
              {project.description}
            </p>

            <ul className="mt-5 grid list-disc gap-x-8 gap-y-1.5 pl-5 text-sm text-text-secondary marker:text-text-muted sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-text-muted">
        Detail teknologi tersedia atas permintaan.
      </p>
    </Section>
  );
}
