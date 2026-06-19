# Portfolio Content Remodel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio around Full Stack React/Node/TypeScript/PostgreSQL work while keeping AI and automation as differentiators.

**Architecture:** Keep the existing Next.js App Router structure and current visual system. Update localized content in the dictionaries, adjust stack data, and update the project section to support multiple featured projects before the normal project grid.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, localized dictionary data.

---

## File Map

- Modify `src/i18n/getDictionary.ts`: add the secondary hero subtitle and multiple-feature helper.
- Modify `src/i18n/dictionaries/pt.ts`: update Portuguese hero, About, highlights, project copy, project order, featured flags, section labels, and contact CTA.
- Modify `src/i18n/dictionaries/en.ts`: mirror the Portuguese changes in English.
- Modify `src/components/sections/HeroSection.tsx`: render the secondary subtitle below the primary hero subtitle.
- Modify `src/components/sections/ProjectsSection.tsx`: render multiple featured projects and then the non-featured list.
- Modify `src/data/stack.ts`: reorder backend stack and add FastAPI, PostgreSQL, Redis.
- Modify `src/components/ui/TechIcon.tsx`: add icon mappings for FastAPI and Redis.
- Optional delete `src/data/projects.ts`: remove only if confirmed unused.

## Task 1: Update Dictionary Types And Project Helpers

**Files:**
- Modify: `src/i18n/getDictionary.ts`

- [ ] **Step 1: Add secondary subtitle to the dictionary type**

In `Dictionary["personal"]`, add:

```ts
secondarySubtitle: string;
```

Expected shape:

```ts
personal: {
  name: string;
  title: string;
  subtitle: string;
  secondarySubtitle: string;
  bio: readonly string[];
  email: string;
  location: string;
  linkedin: string;
  github: string;
  highlights: readonly string[];
};
```

- [ ] **Step 2: Replace single-feature helper with multiple-feature helper**

Keep `getFeaturedProject` for compatibility if desired, but add:

```ts
export function getFeaturedProjects(locale: Locale) {
  return getDictionary(locale).projects.filter((project) => project.featured);
}
```

Expected result:

- Existing project detail pages still use `getProjectBySlug`.
- `ProjectsSection` can render all featured projects.

## Task 2: Update Portuguese Content

**Files:**
- Modify: `src/i18n/dictionaries/pt.ts`

- [ ] **Step 1: Update hero and personal content**

Set:

```ts
subtitle:
  "Desenvolvedor Full Stack focado em React, Node.js, TypeScript, PostgreSQL e APIs REST.",
secondarySubtitle:
  "Crio aplicações web, sistemas internos, dashboards, automações e integrações com IA aplicada.",
bio: [
  "Sou Desenvolvedor Full Stack e estudante de Ciência da Computação, com foco em React, Node.js, TypeScript, PostgreSQL, Next.js e APIs REST.",
  "Tenho experiência no desenvolvimento de aplicações web, sistemas internos, dashboards, automações e integrações voltadas para reduzir tarefas manuais e organizar processos. Meus projetos incluem sistemas de tickets, gestão de ativos de TI, controle de calorias, APIs financeiras e soluções com IA aplicada.",
  "Minha base em TI, dados e automação me ajuda a construir soluções práticas, conectando frontend, backend, banco de dados e integrações para resolver problemas reais.",
],
highlights: [
  "React e Node.js",
  "APIs REST",
  "PostgreSQL e dados",
  "Automação e IA aplicada",
],
```

- [ ] **Step 2: Update stack subtitle and project section labels**

Set:

```ts
stack: {
  title: "Minha Stack",
  subtitle:
    "Tecnologias que uso para construir APIs, interfaces web, automações e soluções com dados.",
  categories: [
    { key: "frontend", title: "Frontend" },
    { key: "backend", title: "Backend" },
    { key: "tools", title: "Ferramentas" },
  ],
},
projectsSection: {
  title: "Projetos",
  featuredTitle: "Projetos em destaque",
  otherTitle: "Outros projetos",
  githubCta: "Explorar mais no GitHub",
},
```

- [ ] **Step 3: Update contact CTA**

Set:

```ts
contact: {
  title: "Vamos trabalhar juntos?",
  subtitle:
    "Estou aberto a oportunidades como Desenvolvedor Full Stack, principalmente em projetos com React, Node.js, TypeScript, APIs, dashboards, automação e IA aplicada.",
  connect: "Conecte-se comigo",
},
```

- [ ] **Step 4: Reorder and update project entries**

Portuguese project order:

1. CaloCount, `featured: true`
2. Camelbox Finanças, `featured: true`
3. Góis-Ticket, `featured: true`
4. Gerenciador de Ativos Forte
5. Sistema de Recuperação de Falhas
6. OrgScraper
7. TutorConnect
8. Análise de Vagas de Pesquisa
9. Portfólio Pessoal
10. Site Padaria Costão
11. FakePinterest

Use these updated descriptions for the main projects:

```ts
{
  slug: "calocount-backend",
  title: "CaloCount",
  description:
    "Aplicação full stack para controle de calorias, registro de refeições e análise de alimentos por imagem com IA.",
  longDescription:
    "Aplicação full stack para controle de calorias com registro de refeições, acompanhamento diário e análise de alimentos por imagem com IA. O projeto combina frontend, API REST, autenticação, banco de dados relacional e integrações para transformar registros alimentares em informações úteis para o usuário.",
  technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "FastAPI", "Google Gemini"],
  githubUrl: "https://github.com/NasserCaixeta/Calocount-Backend",
  featured: true,
}
```

```ts
{
  slug: "camelbox-financas",
  title: "Camelbox Finanças",
  description:
    "API backend para SaaS financeiro com autenticação, banco de dados, processamento de PDFs e extração de transações com IA.",
  longDescription:
    "API backend para um SaaS financeiro que processa extratos e faturas em PDF, extrai transações com IA, categoriza despesas e fornece dados estruturados para dashboards. A solução inclui autenticação JWT, persistência com SQLAlchemy, migrações com Alembic, prevenção de duplicidade e integração com Google Gemini.",
  technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Google Gemini", "JWT"],
  githubUrl: "https://github.com/NasserCaixeta/PI4-Backend",
  featured: true,
}
```

```ts
{
  slug: "gois-ticket",
  title: "Góis-Ticket",
  description:
    "Sistema full stack de chamados para equipes de TI, com acompanhamento de tickets e dashboard.",
  longDescription:
    "Sistema full stack de chamados para equipes de TI acompanharem solicitações, status e resolução de tickets. O projeto inclui interface web, backend, persistência em banco de dados e dashboard para dar mais visibilidade ao fluxo de atendimento.",
  technologies: ["React", "Node.js", "JavaScript", "MongoDB"],
  githubUrl: "https://github.com/NasserCaixeta/PI3-FrontEnd",
  featured: true,
}
```

```ts
{
  slug: "forte-asset-manager",
  title: "Gerenciador de Ativos Forte",
  description:
    "Sistema full stack para gestão de ativos de TI, funcionários e alocação de equipamentos.",
  longDescription:
    "Sistema full stack para o departamento de TI controlar notebooks, monitores e outros ativos, associando equipamentos a funcionários e identificando itens disponíveis. O projeto usa frontend em React, backend em Node.js, TypeScript e PostgreSQL para organizar processos internos e reduzir controle manual.",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  githubUrl:
    "https://github.com/NasserCaixeta/desafio-full-stack-forte-tecnologias",
}
```

## Task 3: Update English Content

**Files:**
- Modify: `src/i18n/dictionaries/en.ts`

- [ ] **Step 1: Update hero and personal content**

Set:

```ts
subtitle:
  "Full Stack Developer focused on React, Node.js, TypeScript, PostgreSQL, and REST APIs.",
secondarySubtitle:
  "I build web applications, internal systems, dashboards, automations, and AI-powered integrations.",
bio: [
  "I am a Full Stack Developer and Computer Science student focused on React, Node.js, TypeScript, PostgreSQL, Next.js, and REST APIs.",
  "I have experience building web applications, internal systems, dashboards, automations, and integrations designed to reduce manual work and organize processes. My projects include ticketing systems, IT asset management, calorie tracking, financial APIs, and applied AI solutions.",
  "My background in IT, data, and automation helps me build practical solutions that connect frontend, backend, databases, and integrations to solve real problems.",
],
highlights: [
  "React and Node.js",
  "REST APIs",
  "PostgreSQL and data",
  "Automation and applied AI",
],
```

- [ ] **Step 2: Add English project section labels**

Set:

```ts
projectsSection: {
  title: "Projects",
  featuredTitle: "Featured projects",
  otherTitle: "Other projects",
  githubCta: "Explore more on GitHub",
},
```

- [ ] **Step 3: Update contact CTA**

Set:

```ts
contact: {
  title: "Let's work together?",
  subtitle:
    "I am open to Full Stack Developer opportunities, especially in projects involving React, Node.js, TypeScript, APIs, dashboards, automation, and applied AI.",
  connect: "Connect with me",
},
```

- [ ] **Step 4: Mirror project order and featured flags**

English project order:

1. CaloCount, `featured: true`
2. Camelbox Finanças, `featured: true`
3. Góis-Ticket, `featured: true`
4. Forte Asset Manager
5. Crash Recovery System
6. OrgScraper
7. TutorConnect
8. Research Vacancy Data Analysis
9. Personal Portfolio
10. Padaria Costão Website
11. FakePinterest

Use English versions of the project copy from the spec.

## Task 4: Render Secondary Hero Subtitle

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Replace the single subtitle paragraph with a grouped block**

Use:

```tsx
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
```

Expected result:

- The primary hero subtitle remains prominent.
- The secondary line appears smaller and directly below it.

## Task 5: Render Multiple Featured Projects

**Files:**
- Modify: `src/i18n/getDictionary.ts`
- Modify: `src/components/sections/ProjectsSection.tsx`

- [ ] **Step 1: Update project section dictionary type**

In `Dictionary`, change:

```ts
projectsSection: { title: string; githubCta: string };
```

To:

```ts
projectsSection: {
  title: string;
  featuredTitle: string;
  otherTitle: string;
  githubCta: string;
};
```

- [ ] **Step 2: Use multiple featured projects in `ProjectsSection`**

Replace:

```tsx
const featuredProject = getFeaturedProject(locale);
const otherProjects = getOtherProjects(locale);
```

With:

```tsx
const featuredProjects = getFeaturedProjects(locale);
const otherProjects = getOtherProjects(locale);
```

Replace the featured block with:

```tsx
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
```

Add a heading before the non-featured grid:

```tsx
{otherProjects.length > 0 && (
  <AnimatedElement delay={0.25}>
    <h3 className="font-display text-2xl font-bold text-foreground mb-6">
      {projectsSection.otherTitle}
    </h3>
  </AnimatedElement>
)}
```

Expected result:

- Three featured cards render before the other project grid.
- Other projects remain in two columns on desktop.

## Task 6: Update Stack Data And Icons

**Files:**
- Modify: `src/data/stack.ts`
- Modify: `src/components/ui/TechIcon.tsx`

- [ ] **Step 1: Add icon mappings**

In `iconUrls`, add:

```ts
fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
```

- [ ] **Step 2: Update backend technologies**

Use:

```ts
// Backend
{ name: "Node.js", icon: "nodejs", category: "backend" },
{ name: "Python", icon: "python", category: "backend" },
{ name: "FastAPI", icon: "fastapi", category: "backend" },
{ name: "Flask", icon: "flask", category: "backend" },
{ name: "PostgreSQL", icon: "postgresql", category: "backend" },
{ name: "SQL", icon: "postgresql", category: "backend" },
{ name: "MongoDB", icon: "mongodb", category: "backend" },
{ name: "Redis", icon: "redis", category: "backend" },
```

Expected result:

- Node.js appears before Python.
- PostgreSQL and Redis are visible.

## Task 7: Remove Unused Project Data

**Files:**
- Delete: `src/data/projects.ts`, only if unused.

- [ ] **Step 1: Confirm no imports exist**

Run:

```bash
rg "@/data/projects|src/data/projects|from .*projects" src
```

Expected: no output.

- [ ] **Step 2: Delete file if unused**

Delete:

```bash
src/data/projects.ts
```

Expected result:

- Localized dictionaries are the only active project data source.

## Task 8: Verification

**Files:**
- No code changes.

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: exit code 0. If sandbox blocks Google Fonts, rerun with network permission.

- [ ] **Step 3: Manual review**

Review:

- `/pt#projects`
- `/en#projects`
- `/pt/projects/calocount-backend`
- `/pt/projects/camelbox-financas`
- `/pt/projects/gois-ticket`

Expected:

- Hero has two lines.
- About text matches the new Full Stack positioning.
- Featured projects are CaloCount, Camelbox Finanças, and Góis-Ticket.
- Other projects start with Gerenciador de Ativos Forte.
- Contact CTA targets Full Stack opportunities.
