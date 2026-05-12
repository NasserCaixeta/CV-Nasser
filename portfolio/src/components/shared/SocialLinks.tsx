import { Github, Linkedin, Mail } from "lucide-react";
import { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  personal: Dictionary["personal"];
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ personal, className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      href: personal.github,
      icon: Github,
      label: "GitHub",
    },
    {
      href: personal.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="text-muted hover:text-accent transition-colors"
          aria-label={label}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
