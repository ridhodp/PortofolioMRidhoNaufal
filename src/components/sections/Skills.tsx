import { skillCategories } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      title="Keahlian"
      subtitle="Kompetensi teknis yang dikembangkan melalui pengalaman kerja di instansi, riset, dan akademik."
    >
      <dl className="divide-y border-y">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="text-sm font-medium text-text-primary sm:pt-1">
              {category.title}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
