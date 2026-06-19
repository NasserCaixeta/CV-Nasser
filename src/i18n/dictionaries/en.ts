export const en = {
  metadata: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Full Stack Developer focused on React, Node.js, TypeScript, PostgreSQL, and REST APIs.",
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
      "Full Stack Developer focused on React, Node.js, TypeScript, PostgreSQL, and REST APIs.",
    secondarySubtitle:
      "I build web applications, internal systems, dashboards, automations, and AI-powered integrations.",
    bio: [
      "I am a Full Stack Developer and Computer Science student focused on React, Node.js, TypeScript, PostgreSQL, Next.js, and REST APIs.",
      "I have experience building web applications, internal systems, dashboards, automations, and integrations designed to reduce manual work and organize processes. My projects include ticketing systems, IT asset management, calorie tracking, financial APIs, and applied AI solutions.",
      "My background in IT, data, and automation helps me build practical solutions that connect frontend, backend, databases, and integrations to solve real problems.",
    ],
    email: "nassercaixeta.profissional@gmail.com",
    location: "Brasilia, Federal District, Brazil",
    linkedin: "https://www.linkedin.com/in/nasser-caixeta",
    github: "https://github.com/NasserCaixeta",
    highlights: [
      "React and Node.js",
      "REST APIs",
      "PostgreSQL and data",
      "Automation and applied AI",
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
    subtitle:
      "Technologies I use to build APIs, web interfaces, automations, and data-driven solutions.",
    categories: [
      { key: "frontend", title: "Frontend" },
      { key: "backend", title: "Backend" },
      { key: "tools", title: "Tools" },
    ],
  },
  projectsSection: {
    title: "Projects",
    featuredTitle: "Featured projects",
    otherTitle: "Other projects",
    githubCta: "Explore more on GitHub",
  },
  contact: {
    title: "Let's work together?",
    subtitle:
      "I am open to Full Stack Developer opportunities, especially in projects involving React, Node.js, TypeScript, APIs, dashboards, automation, and applied AI.",
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
        "Full stack calorie tracking application with meal logging and AI-powered food image analysis.",
      longDescription:
        "Full stack calorie tracking application with meal logging, daily tracking, and AI-powered food image analysis. The project combines frontend, REST API, authentication, relational database persistence, and integrations to turn meal records into useful user insights.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "FastAPI", "Google Gemini"],
      githubUrl: "https://github.com/NasserCaixeta/Calocount-Backend",
      featured: true,
    },
    {
      slug: "camelbox-financas",
      title: "Camelbox Finanças",
      description:
        "Backend API for a financial SaaS with authentication, database persistence, PDF processing, and AI transaction extraction.",
      longDescription:
        "Backend API for a financial SaaS that processes bank statements and credit card bills in PDF format, extracts transactions with AI, categorizes expenses, and provides structured data for dashboards. The solution includes JWT authentication, SQLAlchemy persistence, Alembic migrations, duplicate prevention, and Google Gemini integration.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Google Gemini", "JWT"],
      githubUrl: "https://github.com/NasserCaixeta/PI4-Backend",
      featured: true,
    },
    {
      slug: "gois-ticket",
      title: "Góis-Ticket",
      description:
        "Full stack ticketing system for IT teams with ticket tracking and dashboard views.",
      longDescription:
        "Full stack ticketing system for IT teams to track requests, statuses, and ticket resolution. The project includes a web interface, backend, database persistence, and dashboard views to improve visibility into support workflows.",
      technologies: ["React", "Node.js", "JavaScript", "MongoDB"],
      githubUrl: "https://github.com/NasserCaixeta/PI3-FrontEnd",
      featured: true,
    },
    {
      slug: "forte-asset-manager",
      title: "Forte Asset Manager",
      description: "Full stack system for managing IT assets, employees, and equipment allocation.",
      longDescription:
        "Full stack system for IT teams to manage laptops, monitors, and other assets, assign equipment to employees, and identify available items. The project uses React, Node.js, TypeScript, and PostgreSQL to organize internal processes and reduce manual tracking.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl:
        "https://github.com/NasserCaixeta/desafio-full-stack-forte-tecnologias",
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
      slug: "tutor-connect",
      title: "TutorConnect",
      description: "Platform that connects teachers and students for private lessons.",
      longDescription:
        "Website developed to connect teachers with students, making direct access to teachers easier through a catalog and enabling communication between both sides to schedule classes directly on the platform.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/NasserCaixeta/PI2-REACT",
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
      slug: "padaria-costao",
      title: "Padaria Costão Website",
      description: "Institutional website developed as a freelance project.",
      longDescription:
        "Complete institutional website developed for a partner bakery. Freelance project focused on presenting products, location, and contact information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NasserCaixeta/ProjetoPadaria",
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
