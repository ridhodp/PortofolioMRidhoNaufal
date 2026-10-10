import { certificates } from "@/data/portfolio";
import Section from "@/components/ui/Section";

const groups = [
  { label: "Sertifikasi", type: "certification" },
  { label: "Pelatihan", type: "training" },
] as const;

export default function Certificates() {
  return (
    <Section
      id="certificates"
      index="07"
      title="Sertifikasi & Pelatihan"
      subtitle="Pengembangan profesional dan sertifikasi."
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.type}>
            <h3 className="eyebrow">{group.label}</h3>
            <ul className="mt-3 divide-y border-y">
              {certificates
                .filter((c) => c.type === group.type)
                .map((cert) => (
                  <li
                    key={cert.id}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-primary sm:text-base">
                        {cert.url ? (
                          <a
                            href={cert.url}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {cert.title}
                          </a>
                        ) : (
                          cert.title
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-text-secondary">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-text-muted">
                      {cert.year}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
