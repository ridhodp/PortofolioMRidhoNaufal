"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, BuildingIcon, MapPinIcon, CalendarIcon } from "@/components/ui/icons";
import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const typeColors = {
  work: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  internship: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  organization: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  academic: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const typeLabels = {
  work: "Work",
  internship: "Internship",
  organization: "Organization",
  academic: "Teaching Laboratory",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="Professional and organizational experiences that shaped my career"
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-cyan/30 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 top-6 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent-blue/30 bg-background">
                    <BriefcaseIcon className="h-3.5 w-3.5 text-accent-blue" />
                  </div>
                </div>

                <div className="ml-10 sm:ml-0 sm:w-1/2">
                  <div
                    className={`card card-hover ${
                      index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeColors[exp.type]}`}
                      >
                        {typeLabels[exp.type]}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <CalendarIcon className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-text-primary mb-1 sm:text-lg">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                      <BuildingIcon className="h-4 w-4 text-accent-blue" />
                      <span>{exp.organization}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                      <MapPinIcon className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs text-text-secondary mb-4 sm:text-sm">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-text-secondary sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
