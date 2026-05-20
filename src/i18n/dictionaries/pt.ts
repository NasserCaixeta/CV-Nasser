export const pt = {
  metadata: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack com forte viés em Inteligência Artificial e Engenharia de Dados. Python, Node.js, React, TypeScript.",
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
      "Desenvolvedor Full Stack com forte viés em Inteligência Artificial e Engenharia de Dados.",
    bio: [
      "Sou um desenvolvedor de software em formação pela Ciência da Computação com experiência prática em automação de processos, engenharia de dados e inteligência artificial. Tenho um histórico de entrega de resultados mensuráveis, incluindo a redução de até 73% no tempo de execução de projetos através da criação de agentes e padronização técnica.",
      "Participei do desenvolvimento de bots técnicos utilizando Python e LLMs que reduziram o tempo de resolução de tickets em 66%, além de automatizar pipelines de dados e criar dashboards para suporte à decisão. Atuo com foco em arquitetura de microserviços, APIs REST e fluxos assíncronos, garantindo soluções escaláveis e redução no volume de bugs.",
      "Meu objetivo é continuar evoluindo como desenvolvedor full stack, contribuindo com times inovadores através de mentoria técnica e documentação estruturada. Busco aprofundar constantemente meus conhecimentos em arquitetura de software, engenharia de prompts e soluções web modernas para entregar alta performance e qualidade.",
    ],
    email: "nassercaixeta.profissional@gmail.com",
    location: "Brasília, Distrito Federal, Brasil",
    linkedin: "https://www.linkedin.com/in/nasser-caixeta",
    github: "https://github.com/NasserCaixeta",
    highlights: [
      "Sempre aprendendo",
      "Foco em Desenvolvimento",
      "Soluções escaláveis",
      "Proatividade",
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
    subtitle: "Ferramentas que domino e utilizo diariamente.",
    categories: [
      { key: "frontend", title: "Frontend" },
      { key: "backend", title: "Backend" },
      { key: "tools", title: "Ferramentas" },
    ],
  },
  projectsSection: {
    title: "Projetos",
    githubCta: "Explorar mais no GitHub",
  },
  contact: {
    title: "Vamos trabalhar juntos?",
    subtitle:
      "Estou sempre aberto a novos desafios e parcerias. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato.",
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
      slug: "cv-nasser",
      title: "Portfólio Pessoal",
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
      description: "Sistema de tickets completo para equipes de TI corporativas.",
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
      title: "Gerenciador de Ativos Forte",
      description: "Sistema interno de gestão de ativos de TI para a Forte Tecnologias.",
      longDescription:
        "Sistema que permite ao departamento de TI gerenciar os ativos da empresa (notebooks, monitores) e associá-los aos funcionários. Resolve o problema de saber qual funcionário está com qual equipamento e quais estão disponíveis.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      githubUrl:
        "https://github.com/NasserCaixeta/desafio-full-stack-forte-tecnologias",
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
      slug: "crash-recovery",
      title: "Sistema de Recuperação de Falhas",
      description: "Sistema distribuído com monitoramento e tolerância a falhas.",
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
      title: "Site Padaria Costão",
      description: "Website institucional desenvolvido como freelancer.",
      longDescription:
        "Site institucional completo desenvolvido para uma padaria parceira. Projeto freelancer com foco em apresentação dos produtos, localização e informações de contato.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NasserCaixeta/ProjetoPadaria",
    },
    {
      slug: "camelbox-dashboard",
      title: "CamelBox Dashboard",
      description: "Dashboard feito para um sistema financeiro.",
      longDescription:
        "Dashboard feito utilizando React para o sistema financeiro CamelBox.",
      technologies: ["React", "Node.js", "JavaScript"],
      githubUrl: "https://github.com/NasserCaixeta/pi4-frontend-CAMELBOX",
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
