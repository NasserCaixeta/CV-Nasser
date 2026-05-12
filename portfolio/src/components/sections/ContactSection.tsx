"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Dictionary } from "@/i18n/getDictionary";
import { Mail } from "lucide-react";

interface ContactSectionProps {
  dictionary: Dictionary;
}

export function ContactSection({ dictionary }: ContactSectionProps) {
  const { contact, personal } = dictionary;

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle
            title={contact.title}
            subtitle={contact.subtitle}
          />
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <div className="text-center">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-accent hover:underline mb-8"
            >
              <Mail size={28} />
              {personal.email}
            </a>

            <p className="text-muted mb-6">{contact.connect}</p>

            <SocialLinks personal={personal} className="justify-center" iconSize={28} />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
