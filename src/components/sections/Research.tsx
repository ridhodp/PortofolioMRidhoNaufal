"use client";

import { motion } from "framer-motion";
import { ShieldIcon, TargetIcon, CrosshairIcon, CalendarIcon } from "@/components/ui/icons";
import { research } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Research() {
  return (
    <section id="research" className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Penelitian Tugas Akhir"
          subtitle="Riset akademik berfokus pada Keamanan Informasi dan Penetration Testing website"
        />

        <div className="max-w-4xl mx-auto">
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-accent-blue/10 p-2">
                      <ShieldIcon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <span className="badge">{item.field}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-3 sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                    <TargetIcon className="h-4 w-4 text-accent-cyan" />
                    <span>Target Objek Riset: {item.target}</span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mb-6 sm:text-sm">
                    {item.description}
                  </p>

                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
                      Fokus & Metodologi Penelitian
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.focus.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1.5 text-xs text-accent-cyan"
                        >
                          <CrosshairIcon className="h-3 w-3" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-64 flex-shrink-0">
                  <div className="rounded-lg border border-white/5 bg-background p-4 font-mono text-xs">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="space-y-1.5 text-text-muted">
                      <p>
                        <span className="text-accent-blue">$</span> pentest
                        --target audit
                      </p>
                      <p className="text-text-secondary">
                        [+] Analyzing web security...
                      </p>
                      <p className="text-text-secondary">
                        [+] Scanning vulnerabilities...
                      </p>
                      <p className="text-text-secondary">
                        [+] Evaluating risk score...
                      </p>
                      <p className="text-emerald-400">
                        [+] Audit completed
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>Periode Riset: {item.year}</span>
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

