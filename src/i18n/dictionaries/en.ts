export const en = {
  metadata: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Full Stack Developer with a strong focus on Artificial Intelligence and Data Engineering. Python, Node.js, React, TypeScript.",
    keywords: [
      "Full Stack Developer",
      "Software Engineer",
      "Artificial Intelligence",
      "Data Engineering",
      "Python",
      "Node.js",
      "React",
      "TypeScript",
      "Brasilia",
    ],
    siteName: "Nasser Caixeta Portfolio",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  personal: {
    name: "Nasser Caixeta",
    title: "Software Engineer",
    subtitle:
      "Full Stack Developer with a strong focus on Artificial Intelligence and Data Engineering.",
    bio: [
      "I am a software developer pursuing a Computer Science degree, with hands-on experience in process automation, data engineering, and artificial intelligence. I have a track record of delivering measurable results, including reducing project execution time by up to 73% through agent creation and technical standardization.",
      "I have contributed to the development of technical bots using Python and LLMs that reduced ticket resolution time by 66%, in addition to automating data pipelines and creating dashboards for decision support. I work with a focus on microservices architecture, REST APIs, and asynchronous workflows, ensuring scalable solutions and reducing bug volume.",
      "My goal is to keep evolving as a full stack developer, contributing to innovative teams through technical mentoring and structured documentation. I constantly seek to deepen my knowledge in software architecture, prompt engineering, and modern web solutions to deliver high performance and quality.",
    ],
    email: "nassercaixeta.profissional@gmail.com",
    location: "Brasilia, Federal District, Brazil",
    linkedin: "https://www.linkedin.com/in/nasser-caixeta",
    github: "https://github.com/NasserCaixeta",
    highlights: [
      "Always learning",
      "Development-focused",
      "Scalable solutions",
      "Proactivity",
    ],
  },
  hero: {
    greeting: "Hi, I am",
    projectsButton: "View Projects",
    contactButton: "Contact Me",
    sideLinks: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
    ],
  },
  about: {
    title: "About me",
  },
  stack: {
    title: "My Stack",
    subtitle: "Tools I master and use every day.",
    categories: [
      { key: "frontend", title: "Frontend" },
      { key: "backend", title: "Backend" },
      { key: "tools", title: "Tools" },
    ],
  },
  projectsSection: {
    title: "Projects",
    githubCta: "Explore more on GitHub",
  },
  contact: {
    title: "Let's work together?",
    subtitle:
      "I am always open to new challenges and partnerships. If you have a project in mind or just want to exchange ideas, get in touch.",
    connect: "Connect with me",
  },
  header: {
    connect: "Connect",
    menuAriaLabel: "Toggle menu",
  },
  footer: {
    separator: ",",
  },
  scrollToTop: {
    ariaLabel: "Back to top",
  },
  projectCard: {
    featured: "Featured",
    githubAriaLabel: "View on GitHub",
    demoAriaLabel: "View demo",
    details: "View details →",
  },
  projectPage: {
    notFound: "Project not found",
    backToProjects: "Back to projects",
    githubButton: "View on GitHub",
    demoButton: "View Demo",
  },
  projects: [
    {
      slug: "calocount-backend",
      title: "CaloCount",
      description:
        "REST API for calorie tracking with authentication, meal logs, daily summaries, and AI-powered meal image analysis.",
      longDescription:
        "Backend for CaloCount, a calorie tracking REST API built with FastAPI, SQLAlchemy, and Celery. The system includes JWT authentication, user registration and login, meal log CRUD, daily calorie summaries, and meal photo analysis with Google Gemini. The architecture uses relational persistence, Alembic migrations, and asynchronous processing support with Redis and Celery.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Celery", "Redis", "Google Gemini", "JWT"],
      githubUrl: "https://github.com/NasserCaixeta/Calocount-Backend",
    },
    {
      slug: "tutor-connect",
      title: "TutorConnect",
      description: "Platform that connects teachers and students for private lessons.",
      longDescription:
        "Website developed to connect teachers with students, making direct access to teachers easier through a catalog and enabling communication between both sides to schedule classes directly on the platform.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/NasserCaixeta/PI2-REACT",
    },
    {
      slug: "cv-nasser",
      title: "Personal Portfolio",
      description:
        "My professional portfolio built with Next.js, TypeScript, and Tailwind CSS.",
      longDescription:
        "Personal portfolio website created to showcase my skills, projects, and professional experience. Built with a focus on performance, SEO, and modern dark-theme design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/NasserCaixeta/CV-Nasser",
      liveUrl: "https://nassercaixeta.vercel.app",
    },
    {
      slug: "gois-ticket",
      title: "Góis-Ticket",
      description: "A complete ticketing system for corporate IT teams.",
      longDescription:
        "Ticket management system developed for companies that need an organized IT team. It enables technical ticket creation, tracking, and resolution through a complete dashboard.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/NasserCaixeta/PI3-FrontEnd",
    },
    {
      slug: "org-scraper",
      title: "OrgScraper",
      description:
        "A web scraping tool for company analysis designed for sales teams.",
      longDescription:
        "Application that scrapes company websites and returns a complete analysis of what the company does, its services, and relevant information to help sales teams prospect clients.",
      technologies: ["Python", "BeautifulSoup", "Flask", "React"],
      githubUrl: "https://github.com/NasserCaixeta/desafiobna",
    },
    {
      slug: "forte-asset-manager",
      title: "Forte Asset Manager",
      description: "Internal IT asset management system for Forte Tecnologias.",
      longDescription:
        "System that allows the IT department to manage company assets such as laptops and monitors and assign them to employees. It solves the problem of tracking which employee has each device and which assets are available.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      githubUrl:
        "https://github.com/NasserCaixeta/desafio-full-stack-forte-tecnologias",
    },
    {
      slug: "data-analysis-project",
      title: "Research Vacancy Data Analysis",
      description: "A data analysis project focused on national research vacancies.",
      longDescription:
        "Complete analysis of national research vacancies based on different metrics such as age, number of candidates, gender, and other demographic variables. Includes interactive visualizations and statistical insights.",
      technologies: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
      githubUrl: "https://github.com/NasserCaixeta/Data-Analysis-Project",
    },
    {
      slug: "crash-recovery",
      title: "Crash Recovery System",
      description: "Distributed system with monitoring and fault tolerance.",
      longDescription:
        "Central monitor that receives worker heartbeats, automatically detects failures, and redistributes tasks to active workers. It simulates real microservices scenarios with dynamic load balancing and fault-tolerant cloud computing.",
      technologies: ["JavaScript", "Node.js", "WebSockets", "Docker"],
      githubUrl: "https://github.com/NasserCaixeta/Crash-Recovery",
    },
    {
      slug: "padaria-costao",
      title: "Padaria Costão Website",
      description: "Institutional website developed as a freelance project.",
      longDescription:
        "Complete institutional website developed for a partner bakery. Freelance project focused on presenting products, location, and contact information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NasserCaixeta/ProjetoPadaria",
    },
    {
      slug: "camelbox-financas",
      title: "Camelbox Finanças",
      description:
        "Backend API for a financial analysis SaaS with intelligent transaction extraction from PDF statements.",
      longDescription:
        "Backend for Camelbox Finanças, a financial analysis SaaS that processes bank statements and credit card bills in PDF format, extracts transactions with Google Gemini, automatically categorizes expenses, and provides dashboard data for income, expenses, balance, period comparisons, and category breakdowns. The API includes JWT authentication, free usage limits, duplicate upload prevention, SQLAlchemy persistence, and Alembic migrations.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Google Gemini", "JWT"],
      githubUrl: "https://github.com/NasserCaixeta/PI4-Backend",
      featured: true,
    },
    {
      slug: "fake-pinterest",
      title: "FakePinterest",
      description: "Pinterest clone with image collection management.",
      longDescription:
        "Web application similar to Pinterest that allows users to create and manage image collections organized by category. It provides a friendly interface to explore, save, and share images with a personalized visual experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
      githubUrl: "https://github.com/NasserCaixeta/ProjetoFakePinterest",
    },
  ],
} as const;
