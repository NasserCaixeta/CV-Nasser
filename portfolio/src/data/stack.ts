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
