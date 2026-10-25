import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="section-container flex flex-col items-center gap-4 py-8">
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-accent"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-sm text-text-muted">
          &copy; {currentYear} {personalInfo.name}, S.Kom.
        </p>
      </div>
    </footer>
  );
}
