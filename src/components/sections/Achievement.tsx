import { achievements } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Achievement() {
  return (
    <Section
      id="achievement"
      index="08"
      title="Prestasi"
      subtitle="Rekam jejak kepemimpinan dalam kompetisi tingkat nasional."
    >
      <div className="space-y-6">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-lg border bg-background-secondary p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-text-muted">
              {achievement.year}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
              {achievement.title}
            </p>
            <h3 className="mt-2 text-lg font-medium leading-snug text-text-primary">
              {achievement.event}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
              {achievement.context}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
