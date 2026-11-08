import { certificates } from "@/data/portfolio";
import type { Certificate } from "@/types/portfolio";
import Section from "@/components/ui/Section";

const certifications = certificates.filter((c) => c.type === "certification");
const trainings = certificates.filter((c) => c.type === "training");

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <li>
      {cert.url && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-[4/3] items-center justify-center rounded-lg border bg-background-secondary p-3 shadow-card transition-colors hover:border-accent/40"
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
      <p className="mt-0.5 text-sm text-text-secondary">{cert.issuer}</p>
      <p className="mt-1 font-mono text-xs text-text-muted">{cert.year}</p>
    </li>
  );
}

function CertificateGroup({
  title,
  items,
}: {
  title: string;
  items: Certificate[];
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h3>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </ul>
    </div>
  );
}

export default function Certificates() {
  return (
    <Section
      id="certificates"
      title="Sertifikasi & Pelatihan"
      subtitle="Sertifikasi kompetensi dan pelatihan profesional dari lembaga dan institusi resmi."
      wide
    >
      <div className="space-y-12">
        <CertificateGroup title="Sertifikasi" items={certifications} />
        <CertificateGroup title="Pelatihan" items={trainings} />
      </div>
    </Section>
  );
}
