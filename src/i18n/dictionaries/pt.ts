export const pt = {
  metadata: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack focado em React, Node.js, TypeScript, PostgreSQL e APIs REST.",
    keywords: [
      "Desenvolvedor Full Stack",
      "Software Engineer",
      "Inteligência Artificial",
      "Engenharia de Dados",
      "Python",
      "Node.js",
      "React",
      "TypeScript",
      "Brasília",
    ],
    siteName: "Nasser Caixeta Portfolio",
  },
  navigation: [
    { label: "Sobre", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ],
  personal: {
    name: "Nasser Caixeta",
    title: "Software Engineer",
    subtitle:
      "Desenvolvedor Full Stack focado em React, Node.js, TypeScript, PostgreSQL e APIs REST.",
    secondarySubtitle:
      "Crio aplicações web, sistemas internos, dashboards, automações e integrações com IA aplicada.",
    bio: [
      "Sou Desenvolvedor Full Stack e estudante de Ciência da Computação, com foco em React, Node.js, TypeScript, PostgreSQL, Next.js e APIs REST.",
      "Tenho experiência no desenvolvimento de aplicações web, sistemas internos, dashboards, automações e integrações voltadas para reduzir tarefas manuais e organizar processos. Meus projetos incluem sistemas de tickets, gestão de ativos de TI, controle de calorias, APIs financeiras e soluções com IA aplicada.",
      "Minha base em TI, dados e automação me ajuda a construir soluções práticas, conectando frontend, backend, banco de dados e integrações para resolver problemas reais.",
    ],
    email: "nassercaixeta.profissional@gmail.com",
    location: "Brasília, Distrito Federal, Brasil",
    linkedin: "https://www.linkedin.com/in/nasser-caixeta",
    github: "https://github.com/NasserCaixeta",
    highlights: [
      "React e Node.js",
      "APIs REST",
      "PostgreSQL e dados",
      "Automação e IA aplicada",
    ],
  },
  hero: {
    greeting: "Olá, eu sou",
    projectsButton: "Ver Projetos",
    contactButton: "Fale Comigo",
    sideLinks: [
      { label: "Sobre", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projetos", href: "#projects" },
    ],
  },
  about: {
    title: "Sobre mim",
  },
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
  contact: {
    title: "Vamos trabalhar juntos?",
    subtitle:
      "Estou aberto a oportunidades como Desenvolvedor Full Stack, principalmente em projetos com React, Node.js, TypeScript, APIs, dashboards, automação e IA aplicada.",
    connect: "Conecte-se comigo",
  },
  header: {
    connect: "Conecte-se",
    menuAriaLabel: "Alternar menu",
  },
  footer: {
    separator: ",",
  },
  scrollToTop: {
    ariaLabel: "Voltar ao topo",
  },
  projectCard: {
    featured: "Destaque",
    githubAriaLabel: "Ver no GitHub",
    demoAriaLabel: "Ver demo",
    details: "Ver detalhes →",
  },
  projectPage: {
    notFound: "Projeto não encontrado",
    backToProjects: "Voltar para projetos",
    githubButton: "Ver no GitHub",
    demoButton: "Ver Demo",
  },
  projects: [
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
    },
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
    },
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
    },
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
    },
    {
      slug: "crash-recovery",
      title: "Sistema de Recuperação de Falhas",
      description: "Sistema distribuído com monitoramento e tolerância a falhas.",
      longDescription:
        "Monitor central que recebe heartbeats de workers, detecta automaticamente falhas e redistribui tarefas para workers ativos. Simula cenários reais de microserviços com balanceamento dinâmico e computação em nuvem com tolerância a falhas.",
      technologies: ["JavaScript", "Node.js", "WebSockets", "Docker"],
      githubUrl: "https://github.com/NasserCaixeta/Crash-Recovery",
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
      slug: "data-analysis-project",
      title: "Análise de Vagas de Pesquisa",
      description: "Projeto de análise de dados de vagas de pesquisas nacionais.",
      longDescription:
        "Análise completa de vagas de pesquisas nacionais baseada em diferentes métricas como idade, número de candidatos, gênero e outras variáveis demográficas. Visualizações interativas e insights estatísticos.",
      technologies: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
      githubUrl: "https://github.com/NasserCaixeta/Data-Analysis-Project",
    },
    {
      slug: "cv-nasser",
      title: "Portfólio Pessoal",
      description:
        "Meu portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.",
      longDescription:
        "Site de portfólio pessoal criado para apresentar minhas habilidades, projetos e experiências profissionais. Desenvolvido com foco em performance, SEO e design moderno com tema escuro.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/NasserCaixeta/CV-Nasser",
      liveUrl: "https://nassercaixeta.vercel.app",
    },
    {
      slug: "padaria-costao",
      title: "Site Padaria Costão",
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
  ],
} as const;
