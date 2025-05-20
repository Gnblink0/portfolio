const projects = [
  {
    id: 1,
    name: "Tomatch",
    time: "Mar 2025 - Present",
    description: "Description of Project 1",
    image: "",
    codeLink: "",
    liveLink: "",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const hobbies = [
  {
    id: 1,
    name: "Bouldering",
    emoji: "🧗",
  },
  {
    id: 2,
    name: "Hiking",
    emoji: "🥾",
  },
  {
    id: 3,
    name: "Music",
    emoji: "🎸",
  },
  {
    id: 4,
    name: "Gaming",
    emoji: "🎮",
  },
];

interface TechStack {
  id: string;
  name: string;
  slug?: string; // simpleicons slug
  svg?: string; // svg icon
  category: "language" | "web" | "backend&database" | "devops" | "tools";
  proficiency?: number; // 1-5 represent the proficiency of the tech stack
}

const techStacks: TechStack[] = [
  {
    id: "javascript",
    name: "JavaScript",
    slug: "javascript",
    category: "language",
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    category: "language",
  },
  {
    id: "python",
    name: "Python",
    slug: "python",
    category: "language",
  },
  {
    id: "java",
    name: "Java",
    slug: "java",
    category: "language",
  },
  {
    id: "bash",
    name: "Bash",
    slug: "gnubash",
    category: "language",
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    category: "web",
  },
  {
    id: "html",
    name: "HTML",
    slug: "html5",
    category: "web",
  },
  {
    id: "css",
    name: "CSS",
    slug: "css3",
    category: "web",
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    slug: "tailwindcss",
    category: "web",
  },
  {
    id: "express",
    name: "Express",
    slug: "express",
    category: "web",
  },
  {
    id: "vite",
    name: "Vite",
    slug: "vite",
    category: "web",
  },
  {
    id: "material-ui",
    name: "Material-UI",
    slug: "mui",
    category: "web",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "web",
  },
  {
    id: "nodejs",
    name: "Node.js",
    slug: "nodedotjs",
    category: "backend&database",
  },
  {
    id: "prisma",
    name: "Prisma",
    slug: "prisma",
    category: "backend&database",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    slug: "mongodb",
    category: "backend&database",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    slug: "postgresql",
    category: "backend&database",
  },
  {
    id: "firebase",
    name: "Firebase",
    slug: "firebase",
    category: "backend&database",
  },
  {
    id: "vercel",
    name: "Vercel",
    slug: "vercel",
    category: "devops",
  },
  {
    id: "git",
    name: "Git",
    slug: "git",
    category: "tools",
  },
  {
    id: "github",
    name: "GitHub",
    slug: "github",
    category: "tools",
  },
  {
    id: "vscode",
    name: "VSCode",
    slug: "visualstudiocode",
    category: "tools",
  },
  {
    id: "figma",
    name: "Figma",
    slug: "figma",
    category: "tools",
  },
];

const categoryDisplayNames: Record<TechStack["category"], string> = {
  language: "Programming Languages",
  web: "Web Development",
  "backend&database": "Backend & Database",
  devops: "DevOps",
  tools: "Development Tools",
};

export { projects, hobbies, techStacks, categoryDisplayNames };
