"use client";

import { motion } from "framer-motion";
import { CodeIcon, ShieldIcon, CloudIcon, DatabaseIcon, CpuIcon } from "@/components/ui/icons";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Code: CodeIcon,
  Shield: ShieldIcon,
  Cloud: CloudIcon,
  Database: DatabaseIcon,
  Cpu: CpuIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Keterampilan & Keahlian"
          subtitle="Kompetensi teknis yang dikembangkan melalui pengalaman kerja di instansi, riset, dan akademik"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || CodeIcon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-accent-blue/10 p-2.5">
                    <IconComponent className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
