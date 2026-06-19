import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import { defaultLocale, isLocale, Locale } from "./config";

export type LocalizedProject = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: readonly string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    keywords: readonly string[];
    siteName: string;
  };
  navigation: readonly { label: string; href: string }[];
  personal: {
    name: string;
    title: string;
    subtitle: string;
    secondarySubtitle: string;
    bio: readonly string[];
    email: string;
    location: string;
    linkedin: string;
    github: string;
    highlights: readonly string[];
  };
  hero: {
    greeting: string;
    projectsButton: string;
    contactButton: string;
    sideLinks: readonly { label: string; href: string }[];
  };
  about: { title: string };
  stack: {
    title: string;
    subtitle: string;
    categories: readonly { key: "frontend" | "backend" | "tools"; title: string }[];
  };
  projectsSection: {
    title: string;
    featuredTitle: string;
    otherTitle: string;
    githubCta: string;
  };
  contact: { title: string; subtitle: string; connect: string };
  header: { connect: string; menuAriaLabel: string };
  footer: { separator: string };
  scrollToTop: { ariaLabel: string };
  projectCard: {
    featured: string;
    githubAriaLabel: string;
    demoAriaLabel: string;
    details: string;
  };
  projectPage: {
    notFound: string;
    backToProjects: string;
    githubButton: string;
    demoButton: string;
  };
  projects: readonly LocalizedProject[];
};

const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getSafeLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getDictionary(locale).projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(locale: Locale) {
  return getDictionary(locale).projects.filter((project) => project.featured);
}

export function getOtherProjects(locale: Locale) {
  return getDictionary(locale).projects.filter((project) => !project.featured);
}
