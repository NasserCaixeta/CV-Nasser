"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Dictionary } from "@/i18n/getDictionary";
import Image from "next/image";

interface AboutSectionProps {
  dictionary: Dictionary;
}

export function AboutSection({ dictionary }: AboutSectionProps) {
  const { about, personal } = dictionary;

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle title={about.title} />
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement delay={0.1}>
            <div className="space-y-6">
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 pt-4">
                {personal.highlights.map((highlight) => (
                  <Badge key={highlight} variant="accent">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2} direction="right">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/50 bg-card flex items-center justify-center">
                <Image
                  src="/images/Foto profissional minha.png"
                  alt={personal.name}
                  fill
                  sizes="(min-width: 768px) 20rem, 16rem"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
