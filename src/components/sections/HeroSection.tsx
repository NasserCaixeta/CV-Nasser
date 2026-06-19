"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Dictionary } from "@/i18n/getDictionary";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  dictionary: Dictionary;
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  const { hero, personal } = dictionary;

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 space-y-3"
          >
            <p className="text-xl md:text-2xl text-muted leading-relaxed">
              {personal.subtitle}
            </p>
            <p className="text-base md:text-lg text-muted/90 leading-relaxed">
              {personal.secondarySubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button variant="primary" size="lg">
                {hero.projectsButton}
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                {hero.contactButton}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted hover:text-accent transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </a>
      </motion.div>

      {/* Side Links (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 text-sm"
      >
        {hero.sideLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted hover:text-accent transition-colors writing-mode-vertical"
            style={{ writingMode: "vertical-rl" }}
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
