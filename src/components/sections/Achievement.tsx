import { achievements } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Achievement() {
  return (
    <Section
      id="achievement"
      title="Prestasi"
      subtitle="Pencapaian dan apresiasi sebagai Manager Esport PUBG Mobile Universitas Ahmad Dahlan."
    >
      <div className="space-y-6">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-lg border bg-background-secondary p-6 shadow-card sm:p-8"
          >
            <header className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {achievement.title}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-snug text-text-primary">
                {achievement.event}
              </h3>
            </header>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
              {achievement.context}
            </p>
            {achievement.images && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {achievement.images.map((image) => (
                  <figure key={image.src}>
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex aspect-[4/3] items-center justify-center rounded-lg border bg-background p-2 transition-colors hover:border-accent/40"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.caption}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full rounded object-contain"
                      />
                    </a>
                    <figcaption className="mt-2 text-xs text-text-muted sm:text-sm">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
