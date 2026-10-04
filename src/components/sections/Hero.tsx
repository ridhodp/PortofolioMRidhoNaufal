"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % personalInfo.headline.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6"
          >
            <div className="relative mx-auto h-28 w-28 sm:h-44 sm:w-44 rounded-full p-1.5 bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-blue shadow-2xl shadow-accent-blue/20">
              <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-background bg-background-secondary">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to initials if image missing
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 mt-4 text-[10px] font-semibold tracking-widest text-accent-blue uppercase sm:text-xs"
          >
            Portofolio & Resume
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-5xl"
          >
            M.Ridho Naufal Dwinanda Pakpahan S.Kom
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 h-8 flex items-center justify-center"
          >
            <span className="text-sm font-medium text-accent-cyan sm:text-lg lg:text-xl">
              {personalInfo.headline[currentHeadline]}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-3xl text-sm text-text-secondary sm:text-base leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
          >
            <button
              onClick={() => handleNavClick("#projects")}
              className="btn-primary !px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
            >
              Lihat Project
            </button>
            <button
              onClick={() => handleNavClick("#experience")}
              className="btn-secondary !px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
            >
              Pengalaman Kerja
            </button>
            <a
              href={personalInfo.cvUrl}
              download
              className="btn-secondary !px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
            >
              <DownloadIcon className="h-3.5 w-3.5 text-accent-cyan sm:h-4 sm:w-4" />
              Download CV
            </a>
          </motion.div>


        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => handleNavClick("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/50 rounded-full p-2"
        aria-label="Scroll to about section"
      >
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
}

