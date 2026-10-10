import { research } from "@/data/portfolio";
import Section from "@/components/ui/Section";

export default function Research() {
  return (
    <Section
      id="research"
      title="Penelitian Tugas Akhir"
      subtitle="Riset akademik di bidang keamanan informasi dan penetration testing website."
    >
      {research.map((item) => (
        <article key={item.id}>
          <p className="font-mono text-xs text-text-muted">
            {item.year} / {item.field}
          </p>
          <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-text-primary sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-accent">
            Objek riset: {item.target}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            {item.description}
          </p>

          <p className="eyebrow mt-8">Fokus & Metodologi</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {item.focus.map((f) => (
              <li key={f} className="tag">
                {f}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}
