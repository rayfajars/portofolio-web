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
    | "Open Source"
    | "Freelance Project";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "transtrack-ui",
    title: "Transtrack UI",
    description:
      "Reusable internal design system and component library powering multiple Transtrack products, with 48+ components published as an NPM package.",
    fullDescription:
      "Transtrack UI is a comprehensive internal design system and component library built with Nuxt 3 and Tailwind CSS. It serves as the single source of truth for UI components across all Transtrack products, ensuring visual consistency and development efficiency. The library features 48+ reusable components, full Storybook documentation, and a custom CLI tool (npx transtrack-ui add) for streamlined component scaffolding.",
    tags: ["Nuxt 3", "Tailwind CSS", "Storybook"],
    tech: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "NPM",
      "CLI",
    ],
    role: "Frontend Developer",
    duration: "Ongoing",
    challenge:
      "Maintaining consistent UI standards across multiple business domains and teams while keeping components flexible and well-documented for developer adoption.",
    solution:
      "Built a structured component library with Storybook as the documentation platform, published as an internal NPM package, and developed a custom CLI tool to streamline component integration across projects.",
    results: [
      "48+ reusable components published as internal NPM package",
      "Storybook as central documentation and playground",
      "Custom CLI (npx transtrack-ui add) for component scaffolding",
      "Used across all Transtrack company products",
    ],
    year: 2025,
    context: "Company Project",
  },
  {
    id: 2,
    slug: "transtrack-fleet-dashboard",
    title: "Fleet Monitoring Dashboard",
    description:
      "Multi-tenant operational dashboard for fleet and driver monitoring with real-time map visualization and RBAC authorization.",
    fullDescription:
      "A sophisticated multi-tenant SPA built with Nuxt 3 and TypeScript, serving multiple business domains from a unified codebase. The platform features subdomain-based routing with granular RBAC authorization, Keycloak SSO integration, and interactive operational dashboards using Leaflet.js and Chart.js. Designed for fleet management teams and driver safety monitoring operations.",
    tags: ["Nuxt 3", "Leaflet.js", "RBAC"],
    tech: [
      "Nuxt 3",
      "TypeScript",
      "Leaflet.js",
      "Chart.js",
      "Keycloak",
      "Tailwind CSS",
    ],
    role: "Frontend Developer",
    duration: "Ongoing",
    challenge:
      "Building a unified platform that serves multiple business domains with isolated data, granular permissions, and real-time map/data visualizations without sacrificing performance.",
    solution:
      "Architected a multi-tenant modular SPA using subdomain-based routing, integrated Keycloak SSO for centralized authentication, and used Leaflet.js with Chart.js for rich operational dashboards.",
    results: [
      "Multi-tenant architecture serving multiple business domains",
      "Granular RBAC with Keycloak SSO integration",
      "Real-time fleet and monitoring visualization",
      "Improved data presentation reliability for driver safety",
    ],
    year: 2025,
    context: "Company Project",
  },
  {
    id: 3,
    slug: "sapawarga-admin",
    title: "Sapawarga Admin v2",
    description:
      "Government administration platform for West Java, featuring citizen complaint management, RW management, and CMS modules used by regional government (OPD).",
    fullDescription:
      "Sapawarga Admin is the backbone of West Java's digital government services, enabling regional government organizations (OPD) to manage citizen interactions. Contributed to the migration from a legacy system to Nuxt 3, improving maintainability and performance significantly. Built features including RW management, push notifications, ticketing systems, CMS modules, and complaint management workflows for citizen report processing.",
    tags: ["Nuxt 3", "Vue 3", "Government"],
    tech: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "SonarQube",
      "Unleash",
      "Google Analytics",
    ],
    role: "Junior Frontend Engineer",
    duration: "2022 - 2025",
    challenge:
      "Migrating a complex legacy government system to a modern stack while preserving all existing workflows and ensuring compliance with government standards.",
    solution:
      "Led the incremental Nuxt 3 migration by decoupling legacy systems, implementing feature flagging with Unleash for safe rollouts, and applying performance optimizations validated by Lighthouse and SonarQube.",
    results: [
      "Successful Nuxt 3 migration improving performance and maintainability",
      "Complaint management system used by regional government organizations",
      "Feature flagging implementation with Unleash for controlled releases",
      "Mentored interns in developing Ticket Management System",
    ],
    year: 2024,
    context: "Company Project",
  },
  {
    id: 4,
    slug: "labkes",
    title: "Labkes Medical Portal",
    description:
      "Specialized web platform for doctors to create medical referrals, issue prescriptions, and access comprehensive patient medical histories via Sapawarga.",
    fullDescription:
      "Labkes is a healthcare-integrated web portal developed for Jabar Digital Service, enabling licensed doctors to manage medical referrals, issue prescriptions, and access complete patient medical histories for citizens registered through the Sapawarga super-app. The platform prioritizes data accuracy and workflow efficiency for medical professionals.",
    tags: ["Vue 3", "Healthcare", "Nuxt 3"],
    tech: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "REST API",
      "Tailwind CSS",
    ],
    role: "Junior Frontend Engineer",
    duration: "2023 - 2024",
    challenge:
      "Integrating complex medical data flows while ensuring a clean, error-proof interface for medical professionals handling sensitive patient information.",
    solution:
      "Designed a streamlined UI focused on clinical workflows, integrated with backend APIs for real-time patient data retrieval, and implemented robust form validation for prescription and referral creation.",
    results: [
      "Streamlined medical referral and prescription workflow for doctors",
      "Integrated with Sapawarga patient database for comprehensive medical histories",
      "Improved doctor productivity through intuitive UI design",
    ],
    year: 2023,
    context: "Company Project",
  },
  {
    id: 5,
    slug: "sidebar-jawa-barat",
    title: "SIDEBAR — Electronic Document System",
    description:
      "Electronic document management system for West Java government, enabling structured workflows for replying to and forwarding official documents.",
    fullDescription:
      "SIDEBAR (Sistem Informasi Dokumen Elektronik Jawa Barat) is a government-grade electronic document management system for the West Java provincial government. Contributed to the Tindak Lanjut (Follow-up) feature, which streamlines the workflow for replying to and forwarding official electronic documents between government units, replacing previously paper-based processes.",
    tags: ["Vue 3", "Government", "Document Management"],
    tech: [
      "Vue 3",
      "TypeScript",
      "REST API",
      "Tailwind CSS",
    ],
    role: "Junior Frontend Engineer",
    duration: "2023",
    challenge:
      "Digitizing complex bureaucratic document workflows that required strict approval chains and audit trails for official government correspondence.",
    solution:
      "Built the Tindak Lanjut feature with structured form flows, document routing logic, and status tracking to replicate and improve upon the existing paper-based process.",
    results: [
      "Digitized official document reply and forwarding workflows",
      "Replaced paper-based processes with trackable electronic workflows",
      "Improved efficiency for inter-department government communication",
    ],
    year: 2023,
    context: "Company Project",
  },
  {
    id: 6,
    slug: "shayna-admin",
    title: "Shayna Admin",
    description:
      "Admin dashboard for an e-commerce platform with product management, order tracking, and transaction monitoring features.",
    fullDescription:
      "Shayna Admin is a full-featured e-commerce administration dashboard built as a personal project. It provides store managers with comprehensive tools for product management, order tracking, and transaction monitoring. The intuitive UI design prioritizes ease of use while providing powerful data visualization and management capabilities.",
    tags: ["Vue.js", "Dashboard", "E-Commerce"],
    tech: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "REST API",
    ],
    role: "Solo Developer",
    duration: "Personal Project",
    challenge:
      "Designing a dashboard that balances data density with usability, allowing non-technical store managers to efficiently handle day-to-day operations.",
    solution:
      "Created a clean, intuitive interface with data tables, chart visualizations, and streamlined workflows for common admin tasks like order status updates and inventory management.",
    results: [
      "Comprehensive product, order, and transaction management",
      "Intuitive UI for non-technical store managers",
      "Real-time transaction monitoring with data visualization",
    ],
    year: 2022,
    context: "Personal Project",
  },
  {
    id: 7,
    slug: "shayna-shop",
    title: "Shayna Shop",
    description:
      "Modern e-commerce storefront with product catalog, shopping cart, and secure checkout process.",
    fullDescription:
      "Shayna Shop is the customer-facing counterpart to Shayna Admin — a modern e-commerce website featuring a rich product catalog, shopping cart, and a secure checkout experience. Built as a personal project to explore full e-commerce architecture from both the frontend and admin perspectives.",
    tags: ["Vue.js", "E-Commerce", "JavaScript"],
    tech: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
    role: "Solo Developer",
    duration: "Personal Project",
    year: 2022,
    context: "Personal Project",
  },
  {
    id: 8,
    slug: "bimasena-abadi-land",
    title: "Bimasena Abadi Land",
    description:
      "CMS and client website for a housing vendor, enabling efficient property management and customer interaction.",
    fullDescription:
      "A freelance project for Bimasena Abadi Land, a housing vendor. Developed both the content management system for property administrators and the public-facing client website. The platform enables efficient property listing management, customer inquiry handling, and showcases available housing units to potential buyers.",
    tags: ["CMS", "Freelance", "Real Estate"],
    tech: [
      "Vue.js",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
    ],
    role: "Fullstack Developer",
    duration: "Freelance",
    year: 2021,
    context: "Freelance Project",
  },
  {
    id: 9,
    slug: "bsi-cms",
    title: "Bank Syariah Indonesia (BSI)",
    description:
      "CMS for administrators and user-facing application for Bank Syariah Indonesia.",
    fullDescription:
      "A freelance project for Bank Syariah Indonesia (BSI), delivering both a content management system for bank administrators and a user-facing application. The platform manages banking-related content and provides customers with a clean, accessible interface for their digital banking needs.",
    tags: ["Banking", "CMS", "Freelance"],
    tech: [
      "Vue.js",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
    ],
    role: "Fullstack Developer",
    duration: "Freelance",
    year: 2021,
    context: "Freelance Project",
  },
  {
    id: 10,
    slug: "kulineran",
    title: "Kulineran",
    description:
      "Food ordering platform where users can browse menus, place orders, and manage transactions efficiently.",
    fullDescription:
      "Kulineran is a personal project food ordering platform providing a seamless experience for browsing restaurant menus, placing orders, and managing transactions. Built to explore the challenges of real-time order management, dynamic menus, and the UX of food delivery applications.",
    tags: ["Food Tech", "Vue.js", "Personal"],
    tech: [
      "Vue.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST API",
    ],
    role: "Solo Developer",
    duration: "Personal Project",
    year: 2021,
    context: "Personal Project",
  },
];
