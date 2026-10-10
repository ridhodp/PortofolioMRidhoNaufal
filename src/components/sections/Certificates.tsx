import { certificates } from "@/data/portfolio";
import Section from "@/components/ui/Section";

const certifications = certificates.filter((c) => c.type === "certification");
const trainings = certificates.filter((c) => c.type === "training");

export default function Certificates() {
  return (
    <Section
      id="certificates"
      index="07"
      title="Sertifikasi & Pelatihan"
      subtitle="Pengembangan profesional dan sertifikasi."
    >
      <div className="space-y-10">
        <div>
          <h3 className="eyebrow">Sertifikasi</h3>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.id}>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg border bg-background-secondary p-3 transition-colors hover:border-accent/40"
                  >
                    {/* Preview is page 1 of the PDF, pre-rendered to a .jpg beside it. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.url.replace(/\.pdf$/, ".jpg")}
                      alt={`Sertifikat ${cert.title}`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                )}
                <p className="mt-3 text-sm font-medium text-text-primary sm:text-base">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {cert.issuer}
                </p>
                <p className="mt-1 font-mono text-xs text-text-muted">
                  {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Pelatihan</h3>
          <ul className="mt-3 divide-y border-y">
            {trainings.map((cert) => (
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
      </div>
    </Section>
  );
}
