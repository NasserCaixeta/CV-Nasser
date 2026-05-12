"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechIcon } from "@/components/ui/TechIcon";
import { getStackByCategory } from "@/data/stack";
import { Dictionary } from "@/i18n/getDictionary";

interface StackSectionProps {
  dictionary: Dictionary;
}

export function StackSection({ dictionary }: StackSectionProps) {
  const { stack } = dictionary;

  return (
    <section id="stack" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle
            title={stack.title}
            subtitle={stack.subtitle}
          />
        </AnimatedElement>

        <div className="space-y-12">
          {stack.categories.map((category, categoryIndex) => (
            <AnimatedElement key={category.key} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {getStackByCategory(category.key).map((tech, techIndex) => (
                    <AnimatedElement
                      key={tech.name}
                      delay={categoryIndex * 0.1 + techIndex * 0.05}
                    >
                      <TechIcon name={tech.name} icon={tech.icon} />
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
