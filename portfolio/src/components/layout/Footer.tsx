import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted text-sm">
          © {currentYear}, {personalInfo.name}. {personalInfo.title}.
        </p>
      </div>
    </footer>
  );
}
