"use client";

import { Locale } from "@/i18n/config";
import { LocalizedProject } from "@/i18n/getDictionary";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: LocalizedProject;
  labels: {
    featured: string;
    githubAriaLabel: string;
    demoAriaLabel: string;
    details: string;
  };
  locale: Locale;
  featured?: boolean;
}

export function ProjectCard({ project, labels, locale, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={featured ? "p-7" : "p-6"}
      hover
    >
      <div className={featured ? "flex flex-col md:flex-row gap-6" : ""}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-6 h-6 text-accent" />
            {featured && (
              <Badge variant="accent">{labels.featured}</Badge>
            )}
          </div>

          <Link href={`/${locale}/projects/${project.slug}`}>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-muted mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={labels.githubAriaLabel}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={labels.demoAriaLabel}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="text-sm text-accent hover:underline ml-auto"
            >
              {labels.details}
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
