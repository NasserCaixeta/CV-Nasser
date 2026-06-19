# Portfolio Content Remodel Design

Date: 2026-06-19

## Goal

Reposition the portfolio around Full Stack development with React, Node.js, TypeScript, PostgreSQL, and REST APIs as the primary identity. AI, automation, and data should remain visible as differentiators, but they should no longer be the opening message of the site.

The redesign is primarily a content and information-architecture update. The current visual style can remain, but the page should read less like a generic developer template and more like a focused Full Stack portfolio aligned with the updated resume.

## Non-Goals

- Do not redesign the whole visual system.
- Do not replace the current dark theme.
- Do not add new animations.
- Do not rewrite the app architecture.
- Do not introduce a CMS.
- Do not remove English support.
- Do not invent metrics or claims that are not defensible.

## Source Files Expected To Change

- `src/i18n/dictionaries/pt.ts`
- `src/i18n/dictionaries/en.ts`
- `src/data/stack.ts`
- `src/components/sections/ProjectsSection.tsx`

Optional cleanup:

- `src/data/projects.ts`, if confirmed unused.

## Hero Section

### Current Problem

The hero currently opens with an identity centered on Artificial Intelligence and Data Engineering:

> Desenvolvedor Full Stack com forte viés em Inteligência Artificial e Engenharia de Dados.

That positioning is not wrong, but it does not match the updated resume focus. It can make the portfolio feel less aligned with Full Stack React/Node opportunities.

### Required Change

The main subtitle should lead with Full Stack development and the core stack:

> Desenvolvedor Full Stack focado em React, Node.js, TypeScript, PostgreSQL e APIs REST.

Add or support a secondary line with:

> Crio aplicações web, sistemas internos, dashboards, automações e integrações com IA aplicada.

### English Version

Primary line:

> Full Stack Developer focused on React, Node.js, TypeScript, PostgreSQL, and REST APIs.

Secondary line:

> I build web applications, internal systems, dashboards, automations, and AI-powered integrations.

### Implementation Notes

The current `personal.subtitle` only supports one line. Preferred implementation:

- Add `personal.subtitle` for the primary line.
- Add `personal.secondarySubtitle` or `hero.secondarySubtitle` for the second line.
- Update `HeroSection` to render the second line under the main subtitle with smaller text.

Acceptance criteria:

- The first hero message clearly says Full Stack, React, Node.js, TypeScript, PostgreSQL, and REST APIs.
- AI appears as an applied differentiator, not as the main identity.
- Both Portuguese and English versions are updated.

## About Section

### Current Problem

The current "Sobre mim" has too much corporate and AI-heavy wording. It mentions aggressive metrics and abstract claims such as ticket reduction percentages, microservices, bug reduction, and technical mentoring. These may be valid, but they make the home page sound less natural and less aligned with the updated resume.

### Required Portuguese Copy

Use this direction:

Paragraph 1:

> Sou Desenvolvedor Full Stack e estudante de Ciência da Computação, com foco em React, Node.js, TypeScript, PostgreSQL, Next.js e APIs REST.

Paragraph 2:

> Tenho experiência no desenvolvimento de aplicações web, sistemas internos, dashboards, automações e integrações voltadas para reduzir tarefas manuais e organizar processos. Meus projetos incluem sistemas de tickets, gestão de ativos de TI, controle de calorias, APIs financeiras e soluções com IA aplicada.

Paragraph 3:

> Minha base em TI, dados e automação me ajuda a construir soluções práticas, conectando frontend, backend, banco de dados e integrações para resolver problemas reais.

### Required English Copy

Paragraph 1:

> I am a Full Stack Developer and Computer Science student focused on React, Node.js, TypeScript, PostgreSQL, Next.js, and REST APIs.

Paragraph 2:

> I have experience building web applications, internal systems, dashboards, automations, and integrations designed to reduce manual work and organize processes. My projects include ticketing systems, IT asset management, calorie tracking, financial APIs, and applied AI solutions.

Paragraph 3:

> My background in IT, data, and automation helps me build practical solutions that connect frontend, backend, databases, and integrations to solve real problems.

### Highlights

Replace the current generic highlights:

- Sempre aprendendo
- Foco em Desenvolvimento
- Soluções escaláveis
- Proatividade

With more concrete positioning:

- React e Node.js
- APIs REST
- PostgreSQL e dados
- Automação e IA aplicada

English:

- React and Node.js
- REST APIs
- PostgreSQL and data
- Automation and applied AI

Acceptance criteria:

- Home page no longer opens the About section with aggressive percentage claims.
- About text is aligned with the updated resume.
- Highlights describe concrete skills, not personality traits.

## Stack Section

### Current Problem

The backend stack currently lists Python before Node.js. Since the new positioning is Full Stack React/Node, Node.js should appear first. PostgreSQL should also be explicit instead of being represented only as generic SQL.

### Required Order

Frontend:

1. React
2. TypeScript
3. JavaScript
4. Next.js
5. HTML5
6. CSS3
7. Tailwind CSS

Backend:

1. Node.js
2. Python
3. FastAPI
4. Flask
5. PostgreSQL
6. SQL
7. MongoDB
8. Redis

Tools:

Keep the current tools unless there is a clear reason to change them:

- Git
- Docker
- Figma
- VS Code
- Jupyter

### Implementation Notes

- Update `src/data/stack.ts`.
- Confirm `TechIcon` supports `fastapi`, `postgresql`, and `redis`.
- If an icon is not supported, add a fallback or map to an existing icon style.

Acceptance criteria:

- Node.js appears before Python in backend.
- PostgreSQL appears explicitly.
- Redis appears if icon support exists or fallback is acceptable.
- Stack order reinforces the Full Stack React/Node positioning.

## Project Strategy

### Current Problem

The project section currently behaves like a flat list with one featured item. This does not clearly guide recruiters toward the strongest Full Stack evidence.

### Required Structure

Create a short "Projetos em destaque" area before the rest of the projects.

Featured projects:

1. CaloCount
2. Camelbox Finanças
3. Góis-Ticket

Then show "Outros projetos" below.

Other projects order:

1. Gerenciador de Ativos Forte
2. Sistema de Recuperação de Falhas
3. OrgScraper
4. TutorConnect
5. Análise de Vagas de Pesquisa
6. Portfólio Pessoal
7. Site Padaria Costão
8. FakePinterest

### Rationale

- CaloCount best combines Full Stack and applied AI.
- Camelbox Finanças is a strong backend and AI project that reinforces APIs, authentication, database work, PDF processing, and a business-oriented SaaS use case.
- Góis-Ticket reinforces corporate Full Stack development with ticketing and dashboards.
- Gerenciador de Ativos Forte remains important, but it should support the main project group instead of replacing Camelbox.
- The personal portfolio should stay visible but not occupy prime project space.

Acceptance criteria:

- The first three visible non-hero projects are CaloCount, Camelbox Finanças, and Góis-Ticket.
- Gerenciador de Ativos Forte remains visible immediately after the featured group.
- The portfolio project appears lower in the list.

## Project Card Copy

### CaloCount

Portuguese short description:

> Aplicação full stack para controle de calorias, registro de refeições e análise de alimentos por imagem com IA.

Portuguese long description:

> Aplicação full stack para controle de calorias com registro de refeições, acompanhamento diário e análise de alimentos por imagem com IA. O projeto combina frontend, API REST, autenticação, banco de dados relacional e integrações para transformar registros alimentares em informações úteis para o usuário.

English short description:

> Full stack calorie tracking application with meal logging and AI-powered food image analysis.

English long description:

> Full stack calorie tracking application with meal logging, daily tracking, and AI-powered food image analysis. The project combines frontend, REST API, authentication, relational database persistence, and integrations to turn meal records into useful user insights.

### Gerenciador de Ativos Forte

Portuguese short description:

> Sistema full stack para gestão de ativos de TI, funcionários e alocação de equipamentos.

Portuguese long description:

> Sistema full stack para o departamento de TI controlar notebooks, monitores e outros ativos, associando equipamentos a funcionários e identificando itens disponíveis. O projeto usa frontend em React, backend em Node.js, TypeScript e PostgreSQL para organizar processos internos e reduzir controle manual.

English short description:

> Full stack system for managing IT assets, employees, and equipment allocation.

English long description:

> Full stack system for IT teams to manage laptops, monitors, and other assets, assign equipment to employees, and identify available items. The project uses React, Node.js, TypeScript, and PostgreSQL to organize internal processes and reduce manual tracking.

### Góis-Ticket

Portuguese short description:

> Sistema full stack de chamados para equipes de TI, com acompanhamento de tickets e dashboard.

Portuguese long description:

> Sistema full stack de chamados para equipes de TI acompanharem solicitações, status e resolução de tickets. O projeto inclui interface web, backend, persistência em banco de dados e dashboard para dar mais visibilidade ao fluxo de atendimento.

English short description:

> Full stack ticketing system for IT teams with ticket tracking and dashboard views.

English long description:

> Full stack ticketing system for IT teams to track requests, statuses, and ticket resolution. The project includes a web interface, backend, database persistence, and dashboard views to improve visibility into support workflows.

### Camelbox Finanças

Portuguese short description:

> API backend para SaaS financeiro com autenticação, banco de dados, processamento de PDFs e extração de transações com IA.

Portuguese long description:

> API backend para um SaaS financeiro que processa extratos e faturas em PDF, extrai transações com IA, categoriza despesas e fornece dados estruturados para dashboards. A solução inclui autenticação JWT, persistência com SQLAlchemy, migrações com Alembic, prevenção de duplicidade e integração com Google Gemini.

English short description:

> Backend API for a financial SaaS with authentication, database persistence, PDF processing, and AI transaction extraction.

English long description:

> Backend API for a financial SaaS that processes bank statements and credit card bills in PDF format, extracts transactions with AI, categorizes expenses, and provides structured data for dashboards. The solution includes JWT authentication, SQLAlchemy persistence, Alembic migrations, duplicate prevention, and Google Gemini integration.

Acceptance criteria:

- Main project descriptions emphasize Full Stack where appropriate.
- Camelbox remains clearly backend-focused.
- Wording is consistent across Portuguese and English.

## Contact CTA

### Current Problem

The final CTA is generic:

> Estou sempre aberto a novos desafios e parcerias...

### Required Portuguese Copy

> Estou aberto a oportunidades como Desenvolvedor Full Stack, principalmente em projetos com React, Node.js, TypeScript, APIs, dashboards, automação e IA aplicada.

### Required English Copy

> I am open to Full Stack Developer opportunities, especially in projects involving React, Node.js, TypeScript, APIs, dashboards, automation, and applied AI.

Acceptance criteria:

- CTA clearly points to Full Stack opportunities.
- The copy remains concise and natural.

## Data Cleanup

### Current Problem

`src/data/projects.ts` appears to be unused while localized project data lives in `src/i18n/dictionaries/pt.ts` and `src/i18n/dictionaries/en.ts`. This duplication can make the project look less maintained.

### Required Change

Before deleting, confirm no imports reference `src/data/projects.ts`.

If unused:

- Remove `src/data/projects.ts`.
- Confirm build still passes.

If used:

- Consolidate data access or leave it with a comment explaining why it exists.

Acceptance criteria:

- Project data has one clear source of truth.
- No unused duplicate project list remains.

## Testing And Verification

Run:

```bash
npm run lint
npm run build
```

Manual verification:

- Open the home page in Portuguese.
- Open the home page in English.
- Confirm hero text and About text are updated.
- Confirm stack order.
- Confirm featured project order.
- Confirm project detail pages still work for the reordered projects.
- Confirm no project has duplicate slug.

## Implementation Priority

1. Hero text and secondary line.
2. About text and highlights.
3. Project order and project copy.
4. Stack order with Node.js and PostgreSQL emphasis.
5. Project section split into "Projetos em destaque" and "Outros projetos".
6. Contact CTA.
7. Cleanup of unused project data.

## Project Highlighting Decision

Use the existing `featured: true` field for the three highlighted projects. This keeps the data model simple and avoids introducing a new project priority system for a small portfolio.

Update `ProjectsSection` so it can render multiple featured projects before the non-featured project list.

Acceptance criteria:

- CaloCount, Camelbox Finanças, and Góis-Ticket use `featured: true`.
- `ProjectsSection` supports multiple featured projects.
- Non-featured projects still render below the featured group.
