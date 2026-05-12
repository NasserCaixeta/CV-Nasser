"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          <Link
            href={getLocalizedPath(pathname, item)}
            className={cn(
              "transition-colors",
              item === locale ? "text-accent" : "text-muted hover:text-foreground"
            )}
            aria-current={item === locale ? "page" : undefined}
          >
            {localeLabels[item]}
          </Link>
          {index < locales.length - 1 && <span className="text-muted">/</span>}
        </span>
      ))}
    </div>
  );
}
