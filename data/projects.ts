export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with Nuxt 3 and Stripe integration for seamless checkout experience.",
    repoUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.example.com",
    tags: ["Nuxt 3", "TypeScript", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Minimalist task management application with drag-and-drop functionality and real-time collaboration.",
    repoUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.example.com",
    tags: ["Vue 3", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description:
      "Static site generator for developers to quickly create beautiful portfolio websites with markdown support.",
    repoUrl: "https://github.com/yourusername/project3",
    tags: ["Nuxt 3", "Markdown", "SSG"],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Clean weather dashboard with location-based forecasts and interactive charts for data visualization.",
    repoUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.example.com",
    tags: ["Vue 3", "Chart.js", "API"],
  },
  {
    id: 5,
    title: "Blogging Platform",
    description:
      "Lightweight blogging platform with markdown editor, SEO optimization, and responsive design.",
    repoUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5.example.com",
    tags: ["Nuxt 3", "Markdown", "SEO"],
  },
  {
    id: 6,
    title: "Component Library",
    description:
      "Reusable component library built with Vue 3 composition API and comprehensive documentation.",
    repoUrl: "https://github.com/yourusername/project6",
    liveUrl: "https://project6.example.com",
    tags: ["Vue 3", "Storybook", "TypeScript"],
  },
];
