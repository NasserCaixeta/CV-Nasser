"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/shared/Logo";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Dictionary } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { navigation, personal, header } = dictionary;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((link) => link.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              {header.connect}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={header.menuAriaLabel}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-lg p-6">
          <nav className="flex flex-col gap-4">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher locale={locale} className="pt-2" />
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="w-full mt-4">
                {header.connect}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
