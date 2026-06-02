# Portfolio - Nasser Caixeta

Portfólio profissional de **Nasser Caixeta**, desenvolvido para apresentar perfil, habilidades técnicas, projetos, experiências e formas de contato.

O projeto foi construído com foco em **performance**, **design moderno**, **responsividade**, **SEO**, organização de componentes e facilidade de manutenção.

## Visão geral

Este é um site de portfólio pessoal desenvolvido com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**!

A aplicação utiliza o **App Router** do Next.js e uma arquitetura baseada em componentes reutilizáveis, dados centralizados e tipagem forte.

O conteúdo principal do site é alimentado por arquivos TypeScript dentro de `src/data`, facilitando a atualização de informações pessoais, stack técnica, navegação e projetos sem necessidade de alterar diretamente os componentes de interface.

## Tecnologias utilizadas

### Frontend

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

### Qualidade e desenvolvimento

- **ESLint**
- **TypeScript strict mode**
- **Path aliases com `@/`**
- **PostCSS**
- **Componentização com React**

### Deploy

- **Vercel**

## Funcionalidades

- Página inicial com apresentação profissional
- Seção sobre o desenvolvedor
- Listagem de tecnologias por categoria
- Listagem de projetos
- Página dinâmica de detalhes para cada projeto
- Seção de contato
- Links para GitHub e LinkedIn
- Botão de voltar ao topo
- Tela de carregamento inicial
- Interface responsiva
- Animações com Framer Motion
- Ícones com Lucide React e Devicons
- Estrutura preparada para deploy na Vercel

## Arquitetura do projeto

A aplicação segue uma organização modular dentro da pasta `src`, separando responsabilidades entre páginas, componentes, dados, hooks, utilitários e tipos.

```bash
portfolio/
├── public/
│   ├── files/
│   │   └── curriculo.pdf
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ScrollToTop.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── StackSection.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   └── ui/
│   │       ├── AnimatedElement.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SectionTitle.tsx
│   │       └── TechIcon.tsx
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   └── stack.ts
│   │
│   ├── hooks/
│   │   ├── useInView.ts
│   │   └── useScrollPosition.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Principais diretórios

### `src/app`

Contém as rotas da aplicação usando o **App Router** do Next.js.

- `page.tsx`: página inicial do portfólio
- `layout.tsx`: layout global da aplicação
- `projects/[slug]/page.tsx`: rota dinâmica para detalhes dos projetos
- `globals.css`: estilos globais

### `src/components`

Contém todos os componentes React organizados por responsabilidade.

- `layout`: componentes estruturais, como cabeçalho, rodapé e botão de voltar ao topo
- `sections`: seções principais da landing page
- `shared`: componentes compartilhados entre diferentes partes da aplicação
- `ui`: componentes reutilizáveis de interface

### `src/data`

Contém os dados estáticos utilizados pelo site.

- `personal.ts`: informações pessoais, bio, links e destaques
- `projects.ts`: lista de projetos exibidos no portfólio
- `stack.ts`: tecnologias separadas por categoria
- `navigation.ts`: links de navegação

### `src/hooks`

Hooks personalizados utilizados para comportamento visual e interação.

- `useInView.ts`: controle de elementos visíveis na tela
- `useScrollPosition.ts`: controle da posição de rolagem

### `src/types`

Centraliza as interfaces TypeScript usadas no projeto.

- `Project`
- `Technology`
- `NavLink`
- `PersonalInfo`

### `src/lib`

Contém funções utilitárias compartilhadas.

## Rotas da aplicação

### Página inicial

```text
/
```

Renderiza as principais seções do portfólio:

- Hero
- Sobre
- Stack
- Projetos
- Contato

### Página de projeto

```text
/projects/[slug]
```

Rota dinâmica baseada no `slug` de cada projeto cadastrado em `src/data/projects.ts`.

Exemplo:

```text
/projects/cv-nasser
```

## Conteúdo dinâmico

Os projetos são definidos em:

```bash
src/data/projects.ts
```

Cada projeto segue a interface `Project`, definida em `src/types/index.ts`.

As tecnologias são definidas em:

```bash
src/data/stack.ts
```

Cada tecnologia possui uma categoria: `frontend`, `backend` ou `tools`.

As informações pessoais são definidas em:

```bash
src/data/personal.ts
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/NasserCaixeta/CV-Nasser.git
```

Entre na pasta do projeto:

```bash
cd CV-Nasser/portfolio
```

Instale as dependências:

```bash
npm install
```

## Como rodar localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run start
```

Executa a aplicação em modo produção após o build.

```bash
npm run lint
```

Executa o ESLint no projeto.

## Build de produção

Para gerar a build:

```bash
npm run build
```

Para rodar a versão de produção localmente:

```bash
npm run start
```

## Requisitos

Recomendado:

- **Node.js 20+**
- **npm**

Verifique sua versão do Node com:

```bash
node -v
```

## Configurações importantes

### `next.config.ts`

Configura o Next.js, incluindo permissões para imagens remotas utilizadas no projeto.

Atualmente, o projeto permite imagens vindas de:

```text
cdn.jsdelivr.net
```

### `tsconfig.json`

O projeto utiliza:

- `strict: true`
- alias `@/*` apontando para `src/*`
- suporte ao App Router do Next.js
- configuração moderna para TypeScript com React

### `eslint.config.mjs`

Configuração do ESLint com presets do Next.js:

- Core Web Vitals
- TypeScript

## Deploy

O projeto está preparado para deploy na **Vercel**.

Fluxo recomendado:

1. Subir o repositório para o GitHub
2. Importar o projeto na Vercel
3. Definir a pasta raiz como:

```text
portfolio
```

4. Usar os comandos padrão:

```bash
npm install
npm run build
```

A Vercel detecta automaticamente o Next.js.

## Projetos exibidos

O portfólio apresenta projetos como:

- Portfolio Pessoal
- Góis-Ticket
- OrgScraper
- Forte Asset Manager
- Análise de Vagas de Pesquisa
- Crash Recovery System
- TutorConnect
- Padaria Costão Website
- FakePinterest

## Autor

**Nasser Caixeta**

- GitHub: [NasserCaixeta](https://github.com/NasserCaixeta)
- LinkedIn: [nasser-caixeta](https://www.linkedin.com/in/nasser-caixeta)
- Email: nassercaixeta.profissional@gmail.com

## Licença

Este projeto é de uso pessoal e profissional como portfólio de Nasser Caixeta.
