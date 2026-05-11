"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { personalInfo } from "@/data/personal";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle
            title="Vamos trabalhar juntos?"
            subtitle="Estou sempre aberto a novos desafios e parcerias. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato."
          />
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-accent hover:underline mb-8"
            >
              <Mail size={28} />
              {personalInfo.email}
            </a>

            <p className="text-muted mb-6">Conecte-se comigo</p>

            <SocialLinks className="justify-center" iconSize={28} />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
