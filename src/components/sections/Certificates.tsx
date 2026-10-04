"use client";

import { motion } from "framer-motion";
import { AwardIcon, BookOpenIcon, CalendarIcon } from "@/components/ui/icons";
import { certificates } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certificates() {
  const certifications = certificates.filter((c) => c.type === "certification");
  const trainings = certificates.filter((c) => c.type === "training");

  return (
    <section id="certificates" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Certifications & Training"
          subtitle="Professional development and certifications"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-text-primary mb-4">
              <AwardIcon className="h-5 w-5 text-accent-blue" />
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent-blue/10 p-2 flex-shrink-0">
                      <AwardIcon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-text-secondary mb-2">
                        {cert.issuer}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <CalendarIcon className="h-3 w-3" />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-text-primary mb-4">
              <BookOpenIcon className="h-5 w-5 text-accent-cyan" />
              Training
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {trainings.map((training, index) => (
                <motion.div
                  key={training.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent-cyan/10 p-2 flex-shrink-0">
                      <BookOpenIcon className="h-5 w-5 text-accent-cyan" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">
                        {training.title}
                      </h4>
                      <p className="text-xs text-text-secondary mb-2">
                        {training.issuer}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <CalendarIcon className="h-3 w-3" />
                        {training.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
