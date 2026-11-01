import { DownloadIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";


export default function Hero() {
  return (
    <section id="home" className="pb-16 pt-28 sm:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:py-28">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="text-center lg:col-span-7 lg:text-left">
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
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
            <div className="mx-auto w-40 sm:w-48 lg:mr-0 lg:w-full lg:max-w-sm">
              <div className="rounded-2xl bg-background-secondary p-2 shadow-card ring-1 ring-accent/40">
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
            <figcaption className="eyebrow mt-4 hidden lg:ml-auto lg:block lg:max-w-sm">
              {personalInfo.location}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
