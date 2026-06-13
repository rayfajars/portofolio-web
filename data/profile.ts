export interface SocialLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface FeaturedTech {
  name: string;
  abbr: string;
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Ray Fajar Salinggih",
  title: "Frontend Engineer",
  location: "Bandung, Indonesia",
  email: "rayfajars@gmail.com",
  phone: "+62 878-2122-5330",
  tagline:
    "Frontend Engineer with 5+ years of experience building web applications with Vue.js, Nuxt.js, and TypeScript.",
  bio: [
    "Frontend Engineer with 5+ years of experience building web applications using Vue.js, Nuxt.js, and TypeScript. Experienced in frontend architecture, multi-tenant systems, reusable component libraries, and developer experience improvements.",
    "I have built and maintained dashboards, RBAC authentication systems, internal design systems, and high-performance admin platforms for government and enterprise environments.",
  ],
  // NOTE: Update these handles with your real profile URLs.
  social: {
    github: "https://github.com/rayfajars",
    linkedin: "https://www.linkedin.com/in/rayfajars",
    medium: "https://medium.com/@rayfajars",
  },
  yearsOfExperience: "5+",
};

export const services: Service[] = [
  {
    title: "Frontend Architecture & Development",
    description:
      "Building scalable, multi-tenant SPAs with Vue.js, Nuxt.js, and TypeScript — from modular dashboards to enterprise admin platforms.",
  },
  {
    title: "Design System & Component Library",
    description:
      "Creating reusable internal design systems with Storybook documentation, NPM packages, and CLI tooling for consistent UI across products.",
  },
  {
    title: "Dashboard & Data Visualization",
    description:
      "Developing interactive operational dashboards with Chart.js and Leaflet.js for fleet monitoring, analytics, and real-time data presentation.",
  },
  {
    title: "Authentication & Access Control",
    description:
      "Implementing RBAC authorization, Keycloak SSO integration, and secure user management workflows for government and enterprise systems.",
  },
];

export const featuredTech: FeaturedTech[] = [
  { name: "Vue.js", abbr: "Vue", color: "#42b883" },
  { name: "Nuxt.js", abbr: "Nuxt", color: "#00DC82" },
  { name: "TypeScript", abbr: "TS", color: "#3178C6" },
  { name: "Tailwind CSS", abbr: "TW", color: "#06B6D4" },
  { name: "Storybook", abbr: "SB", color: "#FF4785" },
  { name: "Figma", abbr: "Fig", color: "#F24E1E" },
];

export const allTechSkills: FeaturedTech[] = [
  { name: "Vue.js", abbr: "Vue", color: "#42b883" },
  { name: "Nuxt.js", abbr: "Nuxt", color: "#00DC82" },
  { name: "TypeScript", abbr: "TS", color: "#3178C6" },
  { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
  { name: "Tailwind CSS", abbr: "TW", color: "#06B6D4" },
  { name: "Node.js", abbr: "Node", color: "#339933" },
  { name: "Laravel", abbr: "Lara", color: "#FF2D20" },
  { name: "Storybook", abbr: "SB", color: "#FF4785" },
  { name: "Git", abbr: "Git", color: "#F05032" },
  { name: "Figma", abbr: "Fig", color: "#F24E1E" },
  { name: "Chart.js", abbr: "Chart", color: "#FF6384" },
  { name: "Keycloak", abbr: "KC", color: "#4D4D4D" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "Medium", href: profile.social.medium },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "Leaflet.js",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "PHP", "CodeIgniter"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Storybook",
      "SonarQube",
      "Unleash",
      "Figma",
      "ClickUp",
      "Keycloak",
    ],
  },
  {
    category: "Architecture & Concepts",
    items: [
      "RBAC",
      "Multi-tenant Architecture",
      "Design System",
      "Component Library",
      "REST API Integration",
      "Feature Flagging",
      "Performance Optimization",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Islam Negeri Sunan Gunung Djati",
    degree: "Bachelor of Engineering",
    field: "Electrical Engineering",
    duration: "2014 - 2018",
    location: "Bandung, Indonesia",
  },
];
