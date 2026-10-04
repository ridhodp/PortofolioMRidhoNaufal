"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, AwardIcon, CalendarIcon, BookOpenIcon } from "@/components/ui/icons";
import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic background and achievements"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-accent-blue/10 p-3">
                    <GraduationCapIcon className="h-6 w-6 text-accent-blue" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {edu.institution}
                    </h3>
                    {edu.predicate && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                        <AwardIcon className="h-3 w-3" />
                        {edu.predicate}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-accent-blue mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-text-secondary mb-3">
                    {edu.field}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="flex items-center gap-1">
                        <BookOpenIcon className="h-3.5 w-3.5" />
                        GPA: {edu.gpa} / {edu.gpaScale}
                      </span>
                    )}
                  </div>

                  {edu.description && (
                    <p className="mt-3 text-sm text-text-secondary">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
