"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  GraduationCapIcon,
  TargetIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "3.54", label: "IPK Cumlaude (4.00)" },
  { value: "Komdigi RI", label: "Maganghub Penelaah Kebijakan" },
  { value: "3+", label: "Pengalaman Kerja & Asistensi" },
  { value: "Juara 3", label: "Turnamen Esport PMKC 2024" },
];

const infoItems = [
  {
    icon: GraduationCapIcon,
    label: "Pendidikan",
    value: "S1 Teknik Informatika UAD (Cumlaude)",
  },
  {
    icon: TargetIcon,
    label: "Fokus Utama",
    value: "Web Development, Cyber Security & AI",
  },
  {
    icon: MapPinIcon,
    label: "Domisili",
    value: personalInfo.address || personalInfo.location,
  },
  {
    icon: PhoneIcon,
    label: "WhatsApp / Telepon",
    value: personalInfo.phone || "085229989866",
    href: personalInfo.phoneUrl,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background-secondary/20">
      <div className="section-container">
        <SectionHeading
          title="Tentang Saya"
          subtitle="Profil profesional, latar belakang akademik, dan keahlian teknis"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-base text-text-secondary leading-relaxed sm:text-lg">
              Saya adalah lulusan <strong className="text-text-primary">S1 Teknik Informatika Universitas Ahmad Dahlan</strong> dengan predikat <span className="text-amber-400 font-semibold">Cumlaude (IPK 3.54/4.00)</span>. Memiliki pengalaman sebagai <strong className="text-text-primary">Penelaah Teknis Kebijakan (Digitalisasi Perencanaan dan Kemitraan)</strong> di Biro Perencanaan Kementerian Komunikasi dan Digital RI (Komdigi) serta <strong className="text-text-primary">Junior Web Developer Intern</strong> di Bidang TIK Diskominfostaper Kab. Karimun.
            </p>

            <p className="text-base text-text-secondary leading-relaxed">
              Memiliki keahlian teruji dalam pengembangan aplikasi berbasis web, pengelolaan database relasional, analisis keamanan siber (Penetration Testing), implementasi cloud computing (GCP), hingga eksplorasi Artificial Intelligence (AI LLM) untuk otomasi telaah dokumen perencanaan (TOR & RAB).
            </p>

            <p className="text-base text-text-secondary leading-relaxed">
              Didukung rekam jejak sebagai <strong className="text-text-primary">Asisten Laboratorium Praktikum Sistem Terdistribusi UAD</strong> dan kepemimpinan sebagai <strong className="text-text-primary">Manager Divisi Game PUBGM UAD</strong> yang berhasil meraih Juara 3 Nasional. Memiliki kemampuan problem solving, analytical thinking, komunikasi, serta adaptasi yang cepat terhadap teknologi baru.
            </p>

            <div className="pt-4 grid gap-2 sm:grid-cols-2 sm:gap-3">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-background-secondary/60 p-3"
                >
                  <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue flex-shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-text-muted uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-text-primary hover:text-accent-blue transition-colors truncate block"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-text-primary truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Skills Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card card-hover text-center p-3 sm:p-5"
                >
                  <p className="text-xl font-bold gradient-text sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] text-text-muted leading-snug sm:text-xs sm:mt-1.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-base font-semibold text-text-primary mb-3">
                Keahlian & Kompetensi Utama
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Cyber Security",
                  "Penetration Testing",
                  "Artificial Intelligence (LLM)",
                  "Google Cloud Platform (GCP)",
                  "Database Management",
                  "Sistem Terdistribusi",
                  "Data Analysis",
                  "Problem Solving",
                ].map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

