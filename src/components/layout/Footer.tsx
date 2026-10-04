import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background-secondary/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-text-muted text-center">
            &copy; {currentYear} {personalInfo.name} S.Kom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

