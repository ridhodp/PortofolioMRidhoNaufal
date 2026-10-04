"use client";

import { motion } from "framer-motion";
import { TrophyIcon, CalendarIcon, UsersIcon } from "@/components/ui/icons";
import { achievements } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Achievement() {
  return (
    <section id="achievement" className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Pencapaian & Prestasi"
          subtitle="Penghargaan dan rekam jejak kepemimpinan dalam kompetisi turnamen nasional"
        />

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-amber-500/15 via-accent-cyan/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4">
                    <TrophyIcon className="h-10 w-10 text-amber-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-400">
                      {achievement.title}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      Tahun {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {achievement.event}
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                    <UsersIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent-blue" />
                    <p>{achievement.context}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

