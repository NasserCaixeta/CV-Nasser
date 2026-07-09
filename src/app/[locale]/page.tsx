import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { PortfolioChat } from "@/components/shared/PortfolioChat";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale } from "@/i18n/config";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <>
      <LoadingScreen />
      <Header dictionary={dictionary} locale={localeParam} />
      <main>
        <HeroSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <StackSection dictionary={dictionary} />
        <ProjectsSection dictionary={dictionary} locale={localeParam} />
        <ContactSection dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
      <ScrollToTop ariaLabel={dictionary.scrollToTop.ariaLabel} />
      <PortfolioChat locale={localeParam} />
    </>
  );
}
