export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  images?: string[];
  repoUrl?: string;
  liveUrl?: string;
  tags?: string[];
  tech: string[];
  role?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  year: number;
  context?:
    | "Client Work"
    | "Company Project"
    | "Personal Project"
    | "Open Source";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with Nuxt 3 and Stripe integration for seamless checkout experience.",
    fullDescription:
      "A comprehensive e-commerce platform designed for small to medium-sized businesses. The platform features a modern, responsive interface built with Nuxt 3, providing excellent performance and SEO benefits. Integrated Stripe for secure payment processing, built a custom admin dashboard for inventory management, and implemented real-time order tracking.",
    repoUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.example.com",
    tags: ["Nuxt 3", "TypeScript", "Stripe"],
    tech: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Stripe API",
      "Pinia",
      "Nitro",
    ],
    role: "Lead Frontend Developer",
    duration: "3 months",
    challenge:
      "Creating a seamless checkout experience while maintaining PCI compliance and integrating with multiple payment methods was the primary challenge. The client also required real-time inventory updates across multiple sales channels.",
    solution:
      "Implemented Stripe Elements for secure payment handling, used WebSockets for real-time inventory sync, and created a modular architecture that allowed easy integration with additional payment providers in the future.",
    results: [
      "Achieved 99.9% uptime during first 6 months",
      "Reduced checkout abandonment rate by 35%",
      "Processing $50K+ in monthly transactions",
      "Average page load time under 1.5 seconds",
    ],
    year: 2024,
    context: "Company Project",
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Minimalist task management application with drag-and-drop functionality and real-time collaboration.",
    fullDescription:
      "A collaborative task management application built for teams to organize their work efficiently. Features include real-time updates, drag-and-drop task organization, customizable boards, and team collaboration features. The app emphasizes simplicity and speed, with a clean interface that helps teams stay focused.",
    repoUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.example.com",
    tags: ["Vue 3", "Firebase", "Tailwind"],
    tech: [
      "Vue 3",
      "TypeScript",
      "Firebase Realtime Database",
      "Firebase Auth",
      "Tailwind CSS",
      "Vite",
    ],
    role: "Full Stack Developer",
    duration: "2 months",
    challenge:
      "Implementing real-time synchronization across multiple users without conflicts, while maintaining good performance even with large task lists. Drag-and-drop interactions needed to work smoothly across different devices.",
    solution:
      "Used Firebase Realtime Database with optimistic updates for instant feedback, implemented conflict resolution using timestamps, and leveraged Vue 3 Composition API for efficient reactivity. Used VueDraggable library optimized for touch devices.",
    results: [
      "Supports 50+ concurrent users per board",
      "Real-time updates with <100ms latency",
      "95% user satisfaction rating",
      "Mobile usage accounts for 40% of traffic",
    ],
    year: 2023,
    context: "Personal Project",
  },
  {
    id: 3,
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    description:
      "Static site generator for developers to quickly create beautiful portfolio websites with markdown support.",
    fullDescription:
      "A tool that helps developers create stunning portfolio websites without writing code. Users can customize themes, add projects via markdown files, and deploy with one command. Built with Nuxt 3 content module for markdown processing and includes multiple pre-designed themes.",
    repoUrl: "https://github.com/yourusername/project3",
    tags: ["Nuxt 3", "Markdown", "SSG"],
    tech: [
      "Nuxt 3",
      "Nuxt Content",
      "TypeScript",
      "Tailwind CSS",
      "Markdown-it",
      "Shiki",
    ],
    role: "Solo Developer",
    duration: "6 weeks",
    challenge:
      "Creating a flexible theming system that allows users to customize their portfolio without touching code, while still generating fast, optimized static sites. Markdown parsing needed to support syntax highlighting and custom components.",
    solution:
      "Built a JSON-based configuration system for themes, integrated Nuxt Content for markdown processing with custom components, used Shiki for beautiful code syntax highlighting, and implemented automatic image optimization.",
    results: [
      "500+ portfolios generated in first month",
      "Average Lighthouse score of 95+",
      "Featured in Vue.js developers newsletter",
      "200+ GitHub stars",
    ],
    year: 2023,
    context: "Open Source",
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Clean weather dashboard with location-based forecasts and interactive charts for data visualization.",
    fullDescription:
      "An elegant weather dashboard that provides detailed weather information with beautiful visualizations. Features include current conditions, 7-day forecasts, hourly breakdowns, and historical data comparison. Uses geolocation for automatic location detection and supports multiple saved locations.",
    repoUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.example.com",
    tags: ["Vue 3", "Chart.js", "API"],
    tech: [
      "Vue 3",
      "Chart.js",
      "OpenWeather API",
      "Composition API",
      "Axios",
      "Day.js",
    ],
    role: "Frontend Developer",
    duration: "3 weeks",
    challenge:
      "Presenting complex weather data in an intuitive, visually appealing way while handling API rate limits and ensuring the app works offline for recently viewed locations.",
    solution:
      "Implemented smart caching with localStorage, used Chart.js for interactive visualizations, created custom weather icons, and implemented service workers for offline functionality.",
    results: [
      "Caches data for 12 hours to minimize API calls",
      "Works offline for last 5 viewed locations",
      "10K+ monthly active users",
      "Average session duration of 3.5 minutes",
    ],
    year: 2022,
    context: "Personal Project",
  },
  {
    id: 5,
    slug: "blogging-platform",
    title: "Blogging Platform",
    description:
      "Lightweight blogging platform with markdown editor, SEO optimization, and responsive design.",
    fullDescription:
      "A fast, modern blogging platform built for writers who value simplicity and performance. Features a distraction-free markdown editor, automatic SEO optimization, image optimization, and RSS feed generation. Supports custom domains and includes built-in analytics.",
    repoUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5.example.com",
    tags: ["Nuxt 3", "Markdown", "SEO"],
    tech: [
      "Nuxt 3",
      "Nuxt Content",
      "TypeScript",
      "Tailwind CSS",
      "Sitemap",
      "RSS",
    ],
    role: "Lead Developer",
    duration: "2 months",
    challenge:
      "Creating a writing experience that rivals Medium while maintaining full control and ownership for users. SEO needed to be automatic and foolproof, without requiring technical knowledge.",
    solution:
      "Built a custom markdown editor with live preview, implemented automatic meta tag generation, created a plugin system for easy extensibility, and used Nuxt generate for optimal performance.",
    results: [
      "100+ active blogs hosted",
      "Average Lighthouse SEO score of 98",
      "Sub-1-second page loads",
      "Featured in Indie Hackers showcase",
    ],
    year: 2023,
    context: "Client Work",
  },
  {
    id: 6,
    slug: "component-library",
    title: "Component Library",
    description:
      "Reusable component library built with Vue 3 composition API and comprehensive documentation.",
    fullDescription:
      "A production-ready component library designed for enterprise applications. Includes 50+ components, comprehensive documentation with Storybook, TypeScript support, and accessibility compliance. Components are fully customizable and follow WAI-ARIA guidelines.",
    repoUrl: "https://github.com/yourusername/project6",
    liveUrl: "https://project6.example.com",
    tags: ["Vue 3", "Storybook", "TypeScript"],
    tech: [
      "Vue 3",
      "TypeScript",
      "Storybook",
      "Vitest",
      "Vite",
      "Rollup",
      "Tailwind CSS",
    ],
    role: "Component Architect",
    duration: "4 months",
    challenge:
      "Building components that are flexible enough for various use cases while maintaining consistency and accessibility. Tree-shaking was crucial to keep bundle sizes small when users import only what they need.",
    solution:
      "Used Composition API for maximum flexibility, implemented thorough unit tests with Vitest, documented all components in Storybook with multiple variants, and optimized build process for tree-shaking.",
    results: [
      "50+ components with full TypeScript support",
      "95% test coverage",
      "Used in 10+ production applications",
      "NPM package with 1K+ weekly downloads",
    ],
    year: 2024,
    context: "Company Project",
  },
];
