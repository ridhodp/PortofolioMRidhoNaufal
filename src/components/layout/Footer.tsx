import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="section-container py-8">
        <p className="text-sm text-text-muted">
          &copy; {currentYear} {personalInfo.name}, S.Kom.
        </p>
      </div>
    </footer>
  );
}
