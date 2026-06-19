"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Dictionary, getFeaturedProjects, getOtherProjects } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";
import { Github } from "lucide-react";

interface ProjectsSectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function ProjectsSection({ dictionary, locale }: ProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects(locale);
  const otherProjects = getOtherProjects(locale);
  const { personal, projectsSection, projectCard } = dictionary;

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle title={projectsSection.title} />
        </AnimatedElement>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <AnimatedElement delay={0.1}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                {projectsSection.featuredTitle}
              </h3>
            </AnimatedElement>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <AnimatedElement key={project.slug} delay={0.15 + index * 0.05}>
                  <ProjectCard project={project} labels={projectCard} locale={locale} featured />
                </AnimatedElement>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <AnimatedElement delay={0.25}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {projectsSection.otherTitle}
            </h3>
          </AnimatedElement>
        )}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <AnimatedElement key={project.slug} delay={0.1 + index * 0.05}>
              <ProjectCard project={project} labels={projectCard} locale={locale} />
            </AnimatedElement>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedElement delay={0.3} className="text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="mr-2" size={20} />
              {projectsSection.githubCta}
            </Button>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
