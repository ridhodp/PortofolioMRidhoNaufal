import { DownloadIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "3.54", label: "IPK Cumlaude (4.00)" },
  { value: "Komdigi RI", label: "Maganghub Penelaah Kebijakan" },
  { value: "3+", label: "Pengalaman Kerja & Asistensi" },
  { value: "Juara 3", label: "Turnamen Esport PMKC 2024" },
];

export default function Hero() {
  return (
    <section id="home" className="pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="text-center lg:col-span-7 lg:text-left">
            <p className="flex items-center justify-center gap-2 text-sm text-text-secondary lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {personalInfo.availability}
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {personalInfo.name}
              <span className="text-text-muted">, S.Kom</span>
            </h1>

            <p className="mt-5 text-lg text-accent sm:text-xl">
              {personalInfo.title}
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base lg:mx-0 leading-relaxed text-text-secondary">
              {personalInfo.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                Lihat Proyek
              </a>
              <a href="#experience" className="btn-secondary">
                Pengalaman Kerja
              </a>
              <a href={personalInfo.cvUrl} download className="btn-secondary">
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <figure className="order-first lg:order-none lg:col-span-5">
            <div className="relative mx-auto w-40 sm:w-48 lg:mr-0 lg:w-full lg:max-w-sm">
              {/* Offset accent frame peeking out behind the photo card. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border-2 border-accent/60 lg:-translate-x-4 lg:translate-y-4"
              />
              <div className="relative rounded-2xl border bg-background-secondary p-1.5 shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  width={480}
                  height={600}
                  className="aspect-square w-full rounded-xl object-cover object-top lg:aspect-[4/5]"
                />
              </div>
            </div>
            <figcaption className="eyebrow mt-7 hidden lg:ml-auto lg:block lg:max-w-sm">
              {personalInfo.location}
            </figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-line shadow-card lg:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end gap-1 bg-background p-4 sm:p-5"
            >
              <dt className="text-xs leading-snug text-text-muted sm:text-sm">
                {stat.label}
              </dt>
              <dd className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
