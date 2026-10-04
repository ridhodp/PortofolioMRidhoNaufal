"use client";

import { motion } from "framer-motion";
import { MapPinIcon, SendIcon, PhoneIcon, MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Hubungi Saya"
          subtitle="Tertarik berdiskusi mengenai proyek web development, cyber security, teknologi AI, atau peluang kerja sama? Silakan hubungi kontak di bawah ini."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-base text-text-secondary leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang profesional baru, kolaborasi proyek teknologi, konsultasi sistem, maupun bertukar wawasan seputar dunia IT dan keamanan siber.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-background-secondary p-4 transition-all duration-300 hover:border-accent-blue/30 group"
                >
                  <div className="rounded-lg bg-accent-blue/10 p-2.5 text-accent-blue group-hover:scale-110 transition-transform">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent-blue transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp / Phone */}
                {personalInfo.phone && (
                  <a
                    href={personalInfo.phoneUrl || `https://wa.me/62${personalInfo.phone.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-background-secondary p-4 transition-all duration-300 hover:border-emerald-500/30 group"
                  >
                    <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-400 group-hover:scale-110 transition-transform">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-muted uppercase tracking-wider">
                        WhatsApp / Telepon
                      </p>
                      <p className="text-sm font-medium text-text-primary group-hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>
                )}

                {/* Alamat */}
                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-background-secondary p-4">
                  <div className="rounded-lg bg-accent-cyan/10 p-2.5 text-accent-cyan flex-shrink-0 mt-0.5">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      Alamat & Domisili
                    </p>
                    <p className="text-sm font-medium text-text-primary leading-snug">
                      {personalInfo.address}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="card h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-background-secondary to-background-secondary/70 border-accent-blue/10">
                <div className="rounded-2xl bg-accent-blue/10 border border-accent-blue/20 p-4 mb-5 text-accent-blue">
                  <SendIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Siap Berkolaborasi?
                </h3>
                <p className="text-sm text-text-secondary mb-6 max-w-sm leading-relaxed">
                  Punya kebutuhan pengembangan aplikasi web, analisis keamanan sistem, atau ingin mendiskusikan peluang kerja? Kirim pesan langsung melalui tombol di bawah.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-xs sm:flex-row">
                  {personalInfo.phoneUrl && (
                    <a
                      href={personalInfo.phoneUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !bg-emerald-600 hover:!bg-emerald-500 w-full"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Chat WhatsApp
                    </a>
                  )}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-secondary w-full"
                  >
                    <MailIcon className="h-4 w-4 text-accent-blue" />
                    Kirim Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

