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
