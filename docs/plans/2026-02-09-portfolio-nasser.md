# Portfolio Nasser Caixeta - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional dark-themed portfolio website for Nasser Caixeta to attract recruiters, using Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

**Architecture:** Single-page application with anchor navigation and dynamic project detail pages. Data-driven approach with all content in `/src/data/` files. Component-based structure with reusable UI elements, section components, and layout components.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3+, Framer Motion, Lucide React, Google Fonts (Sora + DM Sans)

---

## Phase 1: Project Setup

### Task 1: Initialize Next.js Project

**Files:**
- Create: `portfolio/` (entire project structure)

**Step 1: Create Next.js project with TypeScript and Tailwind**

```bash
cd /home/dministrador/dev/work/CV-Nasser
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Select options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: @/*

**Step 2: Verify project structure**

```bash
cd portfolio && ls -la src/
```

Expected: `app/` folder exists

---

### Task 2: Install Dependencies

**Files:**
- Modify: `portfolio/package.json`

**Step 1: Install Framer Motion, Lucide React, and clsx**

```bash
cd /home/dministrador/dev/work/CV-Nasser/portfolio
npm install framer-motion lucide-react clsx tailwind-merge
```

**Step 2: Verify installation**

```bash
cat package.json | grep -E "framer-motion|lucide-react|clsx|tailwind-merge"
```

Expected: All packages listed in dependencies

---

### Task 3: Configure Tailwind and Global Styles

**Files:**
- Modify: `portfolio/tailwind.config.ts`
- Modify: `portfolio/src/app/globals.css`

**Step 1: Update tailwind.config.ts with custom theme**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#F9FAFB",
        muted: "#9CA3AF",
        accent: "#10B981",
        "accent-hover": "#059669",
        card: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Update globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-body antialiased;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .glass {
    @apply bg-card backdrop-blur-md border border-border;
  }

  .glow-accent {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent;
  }
}
```

---

### Task 4: Configure Fonts in Layout

**Files:**
- Modify: `portfolio/src/app/layout.tsx`

**Step 1: Update layout.tsx with Google Fonts and metadata**

```typescript
import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasser Caixeta | Software Engineer",
  description:
    "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis. Python, Node.js, React, TypeScript.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Software Engineer",
    "Python",
    "Node.js",
    "React",
    "TypeScript",
    "Brasília",
  ],
  authors: [{ name: "Nasser Caixeta" }],
  openGraph: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis.",
    url: "https://nassercaixeta.vercel.app",
    siteName: "Nasser Caixeta Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

### Task 5: Create Directory Structure

**Files:**
- Create: Multiple directories

**Step 1: Create all required directories**

```bash
cd /home/dministrador/dev/work/CV-Nasser/portfolio
mkdir -p public/images/projects
mkdir -p public/files
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/components/shared
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/app/projects/\[slug\]
```

**Step 2: Verify structure**

```bash
find src -type d | sort
```

Expected: All directories listed

---

## Phase 2: Types and Data Layer

### Task 6: Create TypeScript Types

**Files:**
- Create: `portfolio/src/types/index.ts`

**Step 1: Create types file**

```typescript
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  email: string;
  location: string;
  linkedin: string;
  github: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
```

---

### Task 7: Create Personal Data

**Files:**
- Create: `portfolio/src/data/personal.ts`

**Step 1: Create personal data file**

```typescript
import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nasser Caixeta",
  title: "Software Engineer",
  subtitle:
    "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis.",
  bio: [
    "Sou um profissional em formação na área de tecnologia com experiência prática em desenvolvimento web full stack, automação de processos e proteção de dados, especialmente voltado para o compliance com a LGPD.",
    "Participei de projetos como sistemas de gerenciamento de estoque, e-commerces e plataformas de conexão entre alunos e tutores, sempre buscando soluções escaláveis, funcionais e alinhadas com as necessidades do cliente.",
    "Meu objetivo é continuar evoluindo como desenvolvedor, contribuindo com times de tecnologia inovadores, enquanto aprofundo meus conhecimentos em arquitetura de software, segurança da informação e soluções web modernas.",
  ],
  email: "nassercaixeta.profissional@gmail.com",
  location: "Brasília, Distrito Federal, Brasil",
  linkedin: "https://www.linkedin.com/in/nassercaixeta",
  github: "https://github.com/NasserCaixeta",
  highlights: ["Sempre aprendendo", "Foco em LGPD", "Soluções escaláveis"],
};
```

---

### Task 8: Create Stack Data

**Files:**
- Create: `portfolio/src/data/stack.ts`

**Step 1: Create stack data file**

```typescript
import { Technology } from "@/types";

export const technologies: Technology[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "HTML5", icon: "html5", category: "frontend" },
  { name: "CSS3", icon: "css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },

  // Backend
  { name: "Python", icon: "python", category: "backend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Flask", icon: "flask", category: "backend" },
  { name: "SQL", icon: "postgresql", category: "backend" },
  { name: "MongoDB", icon: "mongodb", category: "backend" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Jupyter", icon: "jupyter", category: "tools" },
];

export const getStackByCategory = (category: Technology["category"]) =>
  technologies.filter((tech) => tech.category === category);
```

---

### Task 9: Create Projects Data

**Files:**
- Create: `portfolio/src/data/projects.ts`

**Step 1: Create projects data file**

```typescript
import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "cv-nasser",
    title: "Portfolio Pessoal",
    description:
      "Meu portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.",
    longDescription:
      "Site de portfólio pessoal criado para apresentar minhas habilidades, projetos e experiências profissionais. Desenvolvido com foco em performance, SEO e design moderno com tema escuro.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/NasserCaixeta/CV-Nasser",
    liveUrl: "https://nassercaixeta.vercel.app",
    featured: true,
  },
  {
    slug: "gois-ticket",
    title: "Góis-Ticket",
    description:
      "Sistema de tickets completo para equipes de TI corporativas.",
    longDescription:
      "Sistema de gerenciamento de tickets desenvolvido para empresas que necessitam de uma equipe de TI organizada. Permite criação, acompanhamento e resolução de chamados técnicos com dashboard completo.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/NasserCaixeta/PI3-FrontEnd",
  },
  {
    slug: "org-scraper",
    title: "OrgScraper",
    description:
      "Ferramenta de web scraping para análise de empresas voltada para equipes de vendas.",
    longDescription:
      "Aplicação que realiza web scraping de sites de empresas e retorna uma análise completa sobre o que a empresa faz, seus serviços e informações relevantes para equipes de vendas prospectar clientes.",
    technologies: ["Python", "BeautifulSoup", "Flask", "React"],
    githubUrl: "https://github.com/NasserCaixeta/desafiobna",
  },
  {
    slug: "forte-asset-manager",
    title: "Forte Asset Manager",
    description:
      "Sistema interno de gestão de ativos de TI para a Forte Tecnologias.",
    longDescription:
      "Sistema que permite ao departamento de TI gerenciar os ativos da empresa (notebooks, monitores) e associá-los aos funcionários. Resolve o problema de saber qual funcionário está com qual equipamento e quais estão disponíveis.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    githubUrl:
      "https://github.com/NasserCaixeta/desafio-full-stack-forte-tecnologias",
  },
  {
    slug: "data-analysis-project",
    title: "Análise de Vagas de Pesquisa",
    description:
      "Projeto de análise de dados de vagas de pesquisas nacionais.",
    longDescription:
      "Análise completa de vagas de pesquisas nacionais baseada em diferentes métricas como idade, número de candidatos, gênero e outras variáveis demográficas. Visualizações interativas e insights estatísticos.",
    technologies: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
    githubUrl: "https://github.com/NasserCaixeta/Data-Analysis-Project",
  },
  {
    slug: "crash-recovery",
    title: "Crash Recovery System",
    description:
      "Sistema distribuído com monitoramento e tolerância a falhas.",
    longDescription:
      "Monitor central que recebe heartbeats de workers, detecta automaticamente falhas e redistribui tarefas para workers ativos. Simula cenários reais de microserviços com balanceamento dinâmico e computação em nuvem com tolerância a falhas.",
    technologies: ["JavaScript", "Node.js", "WebSockets", "Docker"],
    githubUrl: "https://github.com/NasserCaixeta/Crash-Recovery",
  },
  {
    slug: "tutor-connect",
    title: "TutorConnect",
    description:
      "Plataforma de conexão entre professores e alunos para aulas particulares.",
    longDescription:
      "Site desenvolvido para conectar professores a alunos, facilitando o acesso direto aos professores através de um catálogo e permitindo a comunicação entre ambos para agendar aulas diretamente na plataforma.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/NasserCaixeta/PI2-REACT",
  },
  {
    slug: "padaria-costao",
    title: "Padaria Costão Website",
    description: "Website institucional desenvolvido como freelancer.",
    longDescription:
      "Site institucional completo desenvolvido para uma padaria parceira. Projeto freelancer com foco em apresentação dos produtos, localização e informações de contato.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/NasserCaixeta/ProjetoPadaria",
  },
  {
    slug: "fake-pinterest",
    title: "FakePinterest",
    description: "Clone do Pinterest com gerenciamento de coleções de imagens.",
    longDescription:
      "Aplicação web similar ao Pinterest que permite usuários criar e gerenciar coleções de imagens (pins) organizadas por categorias. Interface amigável para explorar, salvar e compartilhar imagens com experiência visual personalizada.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
    githubUrl: "https://github.com/NasserCaixeta/ProjetoFakePinterest",
  },
];

export const getFeaturedProject = () =>
  projects.find((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getOtherProjects = () =>
  projects.filter((project) => !project.featured);
```

---

### Task 10: Create Navigation Data

**Files:**
- Create: `portfolio/src/data/navigation.ts`

**Step 1: Create navigation data file**

```typescript
import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];
```

---

## Phase 3: Utility Functions and Hooks

### Task 11: Create Utility Functions

**Files:**
- Create: `portfolio/src/lib/utils.ts`

**Step 1: Create utils file**

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}
```

---

### Task 12: Create Custom Hooks

**Files:**
- Create: `portfolio/src/hooks/useScrollPosition.ts`
- Create: `portfolio/src/hooks/useInView.ts`

**Step 1: Create useScrollPosition hook**

```typescript
"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, isScrolled };
}
```

**Step 2: Create useInView hook**

```typescript
"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView];
}
```

---

## Phase 4: UI Components

### Task 13: Create Button Component

**Files:**
- Create: `portfolio/src/components/ui/Button.tsx`

**Step 1: Create Button component**

```typescript
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-accent text-background hover:bg-accent-hover glow-accent",
      outline:
        "border border-accent text-accent hover:bg-accent hover:text-background",
      ghost: "text-muted hover:text-foreground hover:bg-card",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-7 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
```

---

### Task 14: Create Badge Component

**Files:**
- Create: `portfolio/src/components/ui/Badge.tsx`

**Step 1: Create Badge component**

```typescript
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-card text-muted border border-border",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "border border-border text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```

---

### Task 15: Create Card Component

**Files:**
- Create: `portfolio/src/components/ui/Card.tsx`

**Step 1: Create Card component**

```typescript
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hover &&
          "transition-all duration-300 hover:border-accent/50 hover:glow-accent hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

### Task 16: Create SectionTitle Component

**Files:**
- Create: `portfolio/src/components/ui/SectionTitle.tsx`

**Step 1: Create SectionTitle component**

```typescript
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
```

---

### Task 17: Create AnimatedElement Component

**Files:**
- Create: `portfolio/src/components/ui/AnimatedElement.tsx`

**Step 1: Create AnimatedElement component**

```typescript
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function AnimatedElement({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimatedElementProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

### Task 18: Create TechIcon Component

**Files:**
- Create: `portfolio/src/components/ui/TechIcon.tsx`

**Step 1: Create TechIcon component**

```typescript
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechIconProps {
  name: string;
  icon: string;
  className?: string;
}

const iconUrls: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
};

export function TechIcon({ name, icon, className }: TechIconProps) {
  const iconUrl = iconUrls[icon] || iconUrls.javascript;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-lg glass transition-all duration-300 hover:border-accent/50 hover:glow-accent",
        className
      )}
    >
      <Image
        src={iconUrl}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12"
        unoptimized
      />
      <span className="text-sm text-muted">{name}</span>
    </div>
  );
}
```

---

### Task 19: Create ProjectCard Component

**Files:**
- Create: `portfolio/src/components/ui/ProjectCard.tsx`

**Step 1: Create ProjectCard component**

```typescript
"use client";

import { Project } from "@/types";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={featured ? "md:col-span-2 p-8" : "p-6"}
      hover
    >
      <div className={featured ? "flex flex-col md:flex-row gap-6" : ""}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-6 h-6 text-accent" />
            {featured && (
              <Badge variant="accent">Destaque</Badge>
            )}
          </div>

          <Link href={`/projects/${project.slug}`}>
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
                aria-label="Ver no GitHub"
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
                aria-label="Ver demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-accent hover:underline ml-auto"
            >
              Ver detalhes →
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
```

---

## Phase 5: Shared Components

### Task 20: Create Logo Component

**Files:**
- Create: `portfolio/src/components/shared/Logo.tsx`

**Step 1: Create Logo component**

```typescript
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-2xl font-bold text-accent hover:opacity-80 transition-opacity",
        className
      )}
    >
      NC.
    </Link>
  );
}
```

---

### Task 21: Create SocialLinks Component

**Files:**
- Create: `portfolio/src/components/shared/SocialLinks.tsx`

**Step 1: Create SocialLinks component**

```typescript
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      href: personalInfo.github,
      icon: Github,
      label: "GitHub",
    },
    {
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="text-muted hover:text-accent transition-colors"
          aria-label={label}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
```

---

### Task 22: Create LoadingScreen Component

**Files:**
- Create: `portfolio/src/components/shared/LoadingScreen.tsx`

**Step 1: Create LoadingScreen component**

```typescript
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.span
              className="font-display text-5xl font-bold text-accent"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              NC.
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

## Phase 6: Layout Components

### Task 23: Create Header Component

**Files:**
- Create: `portfolio/src/components/layout/Header.tsx`

**Step 1: Create Header component**

```typescript
"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              Conecte-se
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-lg p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="w-full mt-4">
                Conecte-se
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
```

---

### Task 24: Create Footer Component

**Files:**
- Create: `portfolio/src/components/layout/Footer.tsx`

**Step 1: Create Footer component**

```typescript
import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted text-sm">
          © {currentYear}, {personalInfo.name}. {personalInfo.title}.
        </p>
      </div>
    </footer>
  );
}
```

---

### Task 25: Create ScrollToTop Component

**Files:**
- Create: `portfolio/src/components/layout/ScrollToTop.tsx`

**Step 1: Create ScrollToTop component**

```typescript
"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const { isScrolled } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 p-3 rounded-full bg-accent text-background transition-all duration-300 hover:bg-accent-hover glow-accent z-30",
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
}
```

---

## Phase 7: Section Components

### Task 26: Create HeroSection Component

**Files:**
- Create: `portfolio/src/components/sections/HeroSection.tsx`

**Step 1: Create HeroSection component**

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
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
            Olá, eu sou
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted mb-8 leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button variant="primary" size="lg">
                Ver Projetos
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Fale Comigo
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
        {["Sobre", "Stack", "Projetos"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-muted hover:text-accent transition-colors writing-mode-vertical"
            style={{ writingMode: "vertical-rl" }}
          >
            {label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
```

---

### Task 27: Create AboutSection Component

**Files:**
- Create: `portfolio/src/components/sections/AboutSection.tsx`

**Step 1: Create AboutSection component**

```typescript
"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/personal";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle title="Sobre mim" />
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement delay={0.1}>
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 pt-4">
                {personalInfo.highlights.map((highlight) => (
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
                <span className="font-display text-6xl font-bold text-accent">NC</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 28: Create StackSection Component

**Files:**
- Create: `portfolio/src/components/sections/StackSection.tsx`

**Step 1: Create StackSection component**

```typescript
"use client";

import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechIcon } from "@/components/ui/TechIcon";
import { getStackByCategory } from "@/data/stack";

export function StackSection() {
  const categories = [
    { key: "frontend" as const, title: "Frontend" },
    { key: "backend" as const, title: "Backend" },
    { key: "tools" as const, title: "Ferramentas" },
  ];

  return (
    <section id="stack" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <SectionTitle
            title="Minha Stack"
            subtitle="Ferramentas que domino e utilizo diariamente."
          />
        </AnimatedElement>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
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
```

---

### Task 29: Create ProjectsSection Component

**Files:**
- Create: `portfolio/src/components/sections/ProjectsSection.tsx`

**Step 1: Create ProjectsSection component**

```typescript
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
```

---

### Task 30: Create ContactSection Component

**Files:**
- Create: `portfolio/src/components/sections/ContactSection.tsx`

**Step 1: Create ContactSection component**

```typescript
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
```

---

## Phase 8: Main Page and Project Detail Page

### Task 31: Create Main Page

**Files:**
- Modify: `portfolio/src/app/page.tsx`

**Step 1: Update main page with all sections**

```typescript
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
```

---

### Task 32: Create Project Detail Page

**Files:**
- Create: `portfolio/src/app/projects/[slug]/page.tsx`

**Step 1: Create dynamic project page**

```typescript
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.title} | Nasser Caixeta`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para projetos
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
                Ver no GitHub
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
                Ver Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
```

---

## Phase 9: Public Assets and Final Configuration

### Task 33: Copy CV PDF to Public

**Files:**
- Create: `portfolio/public/files/curriculo.pdf`

**Step 1: Copy the CV PDF**

```bash
cp "/home/dministrador/dev/work/CV-Nasser/Profile (1).pdf" /home/dministrador/dev/work/CV-Nasser/portfolio/public/files/curriculo.pdf
```

---

### Task 34: Configure Next.js for Vercel

**Files:**
- Modify: `portfolio/next.config.ts`

**Step 1: Update next.config with image domains**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/**",
      },
    ],
  },
};

export default nextConfig;
```

---

### Task 35: Create README

**Files:**
- Create: `portfolio/README.md`

**Step 1: Create README file**

```markdown
# Portfolio - Nasser Caixeta

Meu portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fontes:** Google Fonts (Sora, DM Sans)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/NasserCaixeta/CV-Nasser.git

# Entre na pasta do projeto
cd CV-Nasser/portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── app/              # App Router pages
├── components/       # React components
│   ├── layout/       # Header, Footer, etc.
│   ├── sections/     # Page sections
│   ├── ui/           # Reusable UI components
│   └── shared/       # Shared components
├── data/             # Static data files
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── types/            # TypeScript types
```

## Deploy

Este projeto está configurado para deploy na Vercel. Basta conectar o repositório e o deploy será automático.

## Autor

**Nasser Caixeta** - [GitHub](https://github.com/NasserCaixeta) | [LinkedIn](https://linkedin.com/in/nassercaixeta)
```

---

## Phase 10: Build and Verify

### Task 36: Run Build and Fix Errors

**Step 1: Run the build**

```bash
cd /home/dministrador/dev/work/CV-Nasser/portfolio
npm run build
```

**Step 2: Fix any TypeScript or build errors that appear**

Review error messages and fix accordingly. Common issues:
- Missing imports
- Type errors
- ESLint errors

**Step 3: Re-run build until successful**

```bash
npm run build
```

Expected: "✓ Compiled successfully"

---

### Task 37: Final Verification

**Step 1: Start dev server and manually test**

```bash
npm run dev
```

**Step 2: Verify in browser at http://localhost:3000:**

- [ ] Loading screen appears and fades out
- [ ] Header is sticky with blur effect on scroll
- [ ] Hero section displays correctly with animations
- [ ] About section shows bio and placeholder initials
- [ ] Stack section shows all technologies by category
- [ ] Projects section displays all 9 projects
- [ ] Contact section shows email and social links
- [ ] Footer displays copyright
- [ ] ScrollToTop button appears on scroll
- [ ] Mobile menu works
- [ ] Project detail pages work (/projects/cv-nasser)

---

## Summary

Total Tasks: 37
Phases: 10

1. **Phase 1 (Tasks 1-5):** Project Setup
2. **Phase 2 (Tasks 6-10):** Types and Data Layer
3. **Phase 3 (Tasks 11-12):** Utilities and Hooks
4. **Phase 4 (Tasks 13-19):** UI Components
5. **Phase 5 (Tasks 20-22):** Shared Components
6. **Phase 6 (Tasks 23-25):** Layout Components
7. **Phase 7 (Tasks 26-30):** Section Components
8. **Phase 8 (Tasks 31-32):** Main Page and Project Detail
9. **Phase 9 (Tasks 33-35):** Public Assets and Config
10. **Phase 10 (Tasks 36-37):** Build and Verify
