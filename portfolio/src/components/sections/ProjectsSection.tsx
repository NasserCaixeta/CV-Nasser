"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedProject, getOtherProjects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import { Github } from "lucide-react";

export function ProjectsSection() {
  const featuredProject = getFeaturedProject();
  const otherProjects = getOtherProjects();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle title="Projetos" />
        </AnimatedElement>

        {/* Featured Project */}
        {featuredProject && (
          <AnimatedElement delay={0.1} className="mb-8">
            <ProjectCard project={featuredProject} featured />
          </AnimatedElement>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <AnimatedElement key={project.slug} delay={0.1 + index * 0.05}>
              <ProjectCard project={project} />
            </AnimatedElement>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedElement delay={0.3} className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="mr-2" size={20} />
              Explorar mais no GitHub
            </Button>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
