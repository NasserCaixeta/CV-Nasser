import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      href: personalInfo.github,
      icon: Github,
      label: "GitHub",
    },
    {
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${personalInfo.email}`,
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
