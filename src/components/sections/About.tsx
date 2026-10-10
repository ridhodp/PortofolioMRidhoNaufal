import { personalInfo } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import InfoList from "@/components/ui/InfoList";

const infoItems = [
  { label: "Pendidikan", value: "S1 Teknik Informatika UAD (Cumlaude)" },
  { label: "Fokus Utama", value: "Web Development, Cyber Security & AI" },
  { label: "Domisili", value: personalInfo.location },
];

export default function About() {
  return (
    <Section
      id="about"
      title="Tentang Saya"
      subtitle="Profil profesional, latar belakang akademik, dan keahlian teknis."
    >
      <div className="space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
        <p>
          Saya adalah lulusan <strong className="font-medium text-text-primary">S1 Teknik Informatika Universitas Ahmad Dahlan</strong> dengan predikat <strong className="font-medium text-text-primary">Cumlaude (IPK 3.54/4.00)</strong>. Memiliki pengalaman sebagai <strong className="font-medium text-text-primary">Penelaah Teknis Kebijakan (Digitalisasi Perencanaan dan Kemitraan)</strong> di Biro Perencanaan Kementerian Komunikasi dan Digital RI (Komdigi) serta <strong className="font-medium text-text-primary">Junior Web Developer Intern</strong> di Bidang TIK Diskominfostaper Kab. Karimun.
        </p>
        <p>
          Memiliki keahlian teruji dalam pengembangan aplikasi berbasis web, pengelolaan database relasional, analisis keamanan siber (Penetration Testing), implementasi cloud computing (GCP), hingga eksplorasi Artificial Intelligence (AI LLM) untuk otomasi telaah dokumen perencanaan (TOR & RAB).
        </p>
        <p>
          Didukung rekam jejak sebagai <strong className="font-medium text-text-primary">Asisten Laboratorium Praktikum Sistem Terdistribusi UAD</strong> dan kepemimpinan sebagai <strong className="font-medium text-text-primary">Manager Divisi Game PUBGM UAD</strong> yang berhasil meraih Juara 3 Nasional. Memiliki kemampuan problem solving, analytical thinking, komunikasi, serta adaptasi yang cepat terhadap teknologi baru.
        </p>
      </div>

      <div className="mt-10">
        <InfoList items={infoItems} />
      </div>
    </Section>
  );
}
