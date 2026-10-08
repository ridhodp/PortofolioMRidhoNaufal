"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@/components/ui/icons";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { navItems } from "@/data/portfolio";
import { cn, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen
          ? "border-b bg-background/90 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("#home")}
            className="whitespace-nowrap rounded font-mono text-sm font-semibold text-text-primary"
            aria-label="Go to home"
          >
            &lt;Mr IT Boy&apos;S/&gt;
          </button>

          <div className="hidden xl:flex xl:items-center xl:gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "rounded px-2.5 py-2 text-sm transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-text-secondary transition-colors hover:text-text-primary xl:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!isOpen}
        className={cn(
          "overflow-y-auto transition-[max-height,opacity] duration-300 ease-out xl:hidden",
          isOpen ? "max-h-[calc(100dvh-4rem)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="section-container grid gap-1 border-t py-4 sm:grid-cols-2">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
              className={cn(
                "flex items-baseline gap-3 rounded-md px-3 py-3 text-left text-base transition-colors",
                activeSection === item.href.slice(1)
                  ? "bg-background-secondary text-accent"
                  : "text-text-secondary hover:bg-background-secondary hover:text-text-primary"
              )}
            >
              <span className="font-mono text-xs text-text-muted">
                {String(index).padStart(2, "0")}
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
