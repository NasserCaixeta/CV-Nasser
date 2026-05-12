import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getDictionary, getProjectBySlug } from "@/i18n/getDictionary";
import { isLocale, locales, openGraphLocale } from "@/i18n/config";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);
  const project = getProjectBySlug(localeParam, slug);

  if (!project) {
    return { title: dictionary.projectPage.notFound };
  }

  return {
    title: `${project.title} | Nasser Caixeta`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Nasser Caixeta`,
      description: project.description,
      locale: openGraphLocale[localeParam],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nasser Caixeta`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const project = getProjectBySlug(localeParam, slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Link
          href={`/${localeParam}#projects`}
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          {dictionary.projectPage.backToProjects}
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-muted leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Github className="mr-2" size={20} />
                {dictionary.projectPage.githubButton}
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                <ExternalLink className="mr-2" size={20} />
                {dictionary.projectPage.demoButton}
              </Button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
