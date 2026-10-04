"use client";

import { motion } from "framer-motion";
import { FolderIcon, CheckCircleIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Projects that demonstrate my technical skills and problem-solving abilities"
        />

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover overflow-hidden group"
            >
              <div className="relative h-32 mb-4 rounded-lg bg-gradient-to-br from-background-secondary to-background-card border border-white/5 overflow-hidden sm:h-48 sm:mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FolderIcon className="h-12 w-12 text-accent-blue/30 mx-auto mb-2" />
                    <p className="text-xs text-text-muted">
                      Project Preview
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="badge">{project.category}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent-blue">
                    {project.organization}
                  </p>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed sm:text-sm">
                  {project.description}
                </p>

                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
                      >
                        <CheckCircleIcon className="h-3 w-3 text-accent-cyan" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-text-muted"
        >
          Technology details available upon request
        </motion.p>
      </div>
    </section>
  );
}
