import { MailIcon, PhoneIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import InfoList from "@/components/ui/InfoList";

export default function Contact() {
  const contactItems = [
    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    ...(personalInfo.phone
      ? [{ label: "WhatsApp", value: personalInfo.phone, href: personalInfo.phoneUrl }]
      : []),
    {
      label: "Alamat",
      value: (
        <>
          {personalInfo.address}
          <span className="mt-0.5 block text-sm text-text-muted">
            {personalInfo.location}
          </span>
        </>
      ),
    },
  ];

  return (
    <Section
      id="contact"
      title="Kontak"
      subtitle="Tertarik berdiskusi mengenai web development, cyber security, teknologi AI, atau peluang kerja sama?"
    >
      <p className="mx-auto max-w-2xl text-balance text-center text-xl font-medium leading-snug tracking-tight text-text-primary sm:text-2xl">
        Saya terbuka untuk peluang profesional baru, kolaborasi proyek teknologi, konsultasi sistem, maupun bertukar wawasan seputar IT dan keamanan siber.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {personalInfo.phoneUrl && (
          <a
            href={personalInfo.phoneUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <PhoneIcon className="h-4 w-4" />
            Chat WhatsApp
          </a>
        )}
        <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
          <MailIcon className="h-4 w-4" />
          Kirim Email
        </a>
      </div>

      <div className="mt-10">
        <InfoList items={contactItems} />
      </div>
    </Section>
  );
}
