import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, openGraphLocale } from "@/i18n/config";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: [...dictionary.metadata.keywords],
    authors: [{ name: dictionary.personal.name }],
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: "https://nassercaixeta.vercel.app",
      siteName: dictionary.metadata.siteName,
      locale: openGraphLocale[localeParam],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return children;
}
