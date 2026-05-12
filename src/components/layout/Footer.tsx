import { Dictionary } from "@/i18n/getDictionary";

interface FooterProps {
  dictionary: Dictionary;
}

export function Footer({ dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { personal, footer } = dictionary;

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted text-sm">
          © {currentYear}{footer.separator} {personal.name}. {personal.title}.
        </p>
      </div>
    </footer>
  );
}
