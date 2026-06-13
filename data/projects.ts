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
    | "Company Project"
    | "Personal Project"
    | "Freelance Project"
    | "Open Source";
  company?: string;
}

export const projects: Project[] = [
  // ─── Transtrack (2025–Present) ─────────────────────────────────────────────
  {
    id: 1,
    slug: "transtrack-ui",
    title: "Transtrack UI",
    description:
      "Internal design system and component library with 48+ reusable components, Storybook docs, and a custom CLI — powering all Transtrack products.",
    fullDescription:
      "Transtrack UI is a comprehensive internal design system and component library built with Nuxt 3 and Tailwind CSS. It serves as the single source of truth for UI components across all Transtrack products, ensuring visual consistency and development efficiency. Includes 48+ reusable components, full Storybook documentation, and a custom CLI tool (npx transtrack-ui add) for streamlined component scaffolding across projects.",
    tags: ["Nuxt 3", "Design System", "Storybook"],
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "Tailwind CSS", "Storybook", "NPM", "CLI"],
    role: "Frontend Developer",
    duration: "2025 – Ongoing",
    challenge:
      "Maintaining consistent UI standards across multiple business domains and developer teams while keeping components flexible, well-documented, and easy to adopt.",
    solution:
      "Built a structured component library with Storybook as the documentation platform, published as an internal NPM package, and created a custom CLI (npx transtrack-ui add) to streamline integration.",
    results: [
      "48+ reusable components published as an internal NPM package",
      "Storybook established as the central documentation and playground",
      "Custom CLI tool for rapid component scaffolding",
      "Adopted across all Transtrack company products",
    ],
    year: 2025,
    context: "Company Project",
    company: "Transtrack (PT Indo Trans Teknologi)",
  },
  {
    id: 2,
    slug: "transtrack-fleet-dashboard",
    title: "Fleet & Driver Monitoring Dashboard",
    description:
      "Multi-tenant SPA for fleet management and driver safety monitoring with real-time map visualization, RBAC, and Keycloak SSO.",
    fullDescription:
      "A sophisticated multi-tenant SPA built with Nuxt 3 and TypeScript, serving multiple business domains from a unified codebase. Features subdomain-based routing with granular RBAC authorization, Keycloak SSO integration, and interactive operational dashboards using Leaflet.js and Chart.js. Also includes a rewritten driver safety monitoring platform with real-time anomaly detection API integration.",
    tags: ["Nuxt 3", "Leaflet.js", "Multi-tenant"],
    tech: ["Nuxt 3", "TypeScript", "Leaflet.js", "Chart.js", "Keycloak", "Tailwind CSS"],
    role: "Frontend Developer",
    duration: "2025 – Ongoing",
    challenge:
      "Building a unified platform for multiple business domains with isolated data, granular permissions, and real-time map/data visualizations while preserving existing operational workflows.",
    solution:
      "Architected a multi-tenant modular SPA with subdomain-based routing, integrated Keycloak SSO for centralized authentication, and used Leaflet.js + Chart.js for rich operational dashboards.",
    results: [
      "Multi-tenant architecture serving multiple business domains",
      "Granular RBAC with Keycloak SSO integration",
      "Real-time fleet and monitoring visualization via Leaflet.js",
      "Driver safety platform rewritten with improved data presentation reliability",
    ],
    year: 2025,
    context: "Company Project",
    company: "Transtrack (PT Indo Trans Teknologi)",
  },

  // ─── Jabar Digital Service (2022–2025) ────────────────────────────────────
  {
    id: 3,
    slug: "sapawarga-admin",
    title: "Sapawarga Admin v2",
    description:
      "Government administration platform for West Java, handling citizen complaints, RW management, push notifications, and CMS modules used by regional government (OPD).",
    fullDescription:
      "Sapawarga Admin is the backbone of West Java's digital government services, enabling regional government organizations (OPD) to manage citizen interactions. Contributed to the migration from a legacy system to Nuxt 3, improving maintainability and performance significantly. Built features including RW management, push notifications, ticketing systems, CMS modules, complaint management workflows, account verification, and user support features.",
    tags: ["Nuxt 3", "Government", "Vue 3"],
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "Tailwind CSS", "SonarQube", "Unleash", "Google Analytics"],
    role: "Junior Frontend Engineer",
    duration: "2022 – 2025",
    challenge:
      "Migrating a complex legacy government platform to a modern stack while preserving existing workflows and ensuring compliance with government data standards.",
    solution:
      "Led the incremental Nuxt 3 migration by decoupling legacy systems, used Unleash for feature-flagged safe rollouts, and validated improvements with Lighthouse and SonarQube.",
    results: [
      "Successful Nuxt 3 migration — improved performance and maintainability",
      "Complaint management system adopted by regional government organizations",
      "Feature flagging with Unleash for controlled, safe deployments",
      "Mentored interns in building the Ticket Management System",
    ],
    year: 2024,
    context: "Company Project",
    company: "Jabar Digital Service",
  },
  {
    id: 4,
    slug: "sapawarga-admin-v1",
    title: "Sapawarga Admin v1",
    description:
      "The original government administration platform for West Java (Sapawarga), built with the legacy stack — serving as the foundation before the Nuxt 3 migration.",
    fullDescription:
      "Sapawarga Admin v1 is the original internal administration platform built for Jabar Digital Service. The platform served regional government organizations (OPD) for managing citizen services, complaints, and administrative workflows. Developed and maintained features including RW management, push notification systems, ticketing modules, CMS content management, complaint handling, and user account management. This version served as the production baseline before the full Nuxt 3 rewrite in v2.",
    tags: ["Vue 2", "Government", "Legacy"],
    tech: ["Vue 2", "JavaScript", "Vuex", "Vuetify", "REST API"],
    role: "Junior Frontend Engineer",
    duration: "2022 – 2023",
    challenge:
      "Extending and maintaining a legacy Vue 2 codebase across multiple feature domains while ensuring system stability for live government operations.",
    solution:
      "Developed new features incrementally without breaking existing workflows, applied SonarQube for code quality, and used Lighthouse to identify performance improvement opportunities.",
    results: [
      "RW management, push notifications, ticketing, and CMS modules delivered",
      "Complaint management features adopted by regional government organizations",
      "User support workflows — account verification, password reset, complaint tracking",
      "Stable platform maintained across multiple concurrent government feature teams",
    ],
    year: 2023,
    context: "Company Project",
    company: "Jabar Digital Service",
  },
  {
    id: 5,
    slug: "sapawarga-webview",
    title: "Sapawarga Super App — Web View",
    description:
      "Web View pages embedded inside the Sapawarga mobile super app, delivering citizen-facing features like complaint tracking, account management, and service workflows.",
    fullDescription:
      "Sapawarga is a West Java government super app serving millions of citizens. As part of the Jabar Digital Service frontend team, contributed to the Web View layer — responsive web pages that are embedded directly inside the native mobile app shell. These Web Views power features such as complaint tracking, account verification, password reset, and other citizen-facing service workflows, ensuring a consistent experience between the web and mobile platforms.",
    tags: ["Web View", "Super App", "Mobile-first"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "REST API"],
    role: "Junior Frontend Engineer",
    duration: "2022 – 2025",
    challenge:
      "Building responsive, lightweight web interfaces that must work seamlessly when rendered inside a native mobile app WebView across various Android and iOS devices and OS versions.",
    solution:
      "Designed mobile-first, touch-friendly interfaces with minimal dependencies, tested extensively across WebView environments, and collaborated closely with the mobile team to ensure smooth native-web integration.",
    results: [
      "Complaint tracking, account verification, and password reset served via WebView",
      "Seamless citizen experience bridging web and native mobile surfaces",
      "Consistently maintained across Sapawarga app updates",
    ],
    year: 2023,
    context: "Company Project",
    company: "Jabar Digital Service",
  },
  {
    id: 6,
    slug: "jabar-internal-tools",
    title: "Jabar Digital Service — Internal Tools",
    description:
      "Internal developer productivity tools including a URL shortening service and a mock API tool to improve frontend-backend collaboration efficiency.",
    fullDescription:
      "Developed and maintained a suite of internal developer tools at Jabar Digital Service to improve the efficiency of the frontend-backend collaboration workflow. Tools included a URL shortening service for sharing internal links and environments, and a mock API tool that enabled frontend developers to continue development independently of backend readiness, reducing blocking dependencies and accelerating delivery cycles.",
    tags: ["Internal Tools", "DX", "Productivity"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js", "REST API", "Tailwind CSS"],
    role: "Junior Frontend Engineer",
    duration: "2022 – 2025",
    challenge:
      "Frontend and backend teams were often blocked waiting on each other, and sharing environment URLs internally was cumbersome without a standardized internal tooling setup.",
    solution:
      "Built a lightweight URL shortener for internal use and a mock API tool that allowed frontend developers to define and consume stub API responses, enabling parallel development without backend dependencies.",
    results: [
      "Reduced frontend-backend development blockers with mock API tooling",
      "Streamlined internal URL sharing with a dedicated shortener service",
      "Improved team development velocity and collaboration efficiency",
    ],
    year: 2023,
    context: "Company Project",
    company: "Jabar Digital Service",
  },
  {
    id: 7,
    slug: "sidebar-jawa-barat",
    title: "SIDEBAR — Electronic Document System",
    description:
      "West Java government electronic document system — built the Tindak Lanjut feature for replying to and forwarding official documents, and supported User Management for secure access control.",
    fullDescription:
      "SIDEBAR (Sistem Informasi Dokumen Elektronik Jawa Barat) is a government-grade electronic document management system for the West Java provincial government. Contributed to two key areas: (1) the Tindak Lanjut (Follow-up) feature, which streamlines the workflow for replying to and forwarding official electronic documents between government units — replacing previously paper-based processes; and (2) the User Management module, handling account modifications and role assignments to maintain secure and accurate access control across the system.",
    tags: ["Vue 3", "Government", "Document Management"],
    tech: ["Vue 3", "TypeScript", "REST API", "Tailwind CSS"],
    role: "Junior Frontend Engineer",
    duration: "2023",
    challenge:
      "Digitizing complex bureaucratic document workflows requiring strict approval chains, while also ensuring the user management system maintained accurate role assignments and access control for all government system users.",
    solution:
      "Built the Tindak Lanjut feature with structured form flows, document routing logic, and status tracking. Supported the User Management module with account modification and role assignment interfaces to uphold secure, accurate access across the system.",
    results: [
      "Streamlined official document reply and forwarding via the Tindak Lanjut feature",
      "Replaced paper-based inter-department document processes with a tracked digital workflow",
      "Supported User Management — account modifications and role assignments for secure access control",
      "Improved collaboration efficiency across West Java government departments",
    ],
    year: 2023,
    context: "Company Project",
    company: "Jabar Digital Service",
  },
  {
    id: 8,
    slug: "labkes",
    title: "Labkes — Medical Referral Portal",
    description:
      "Specialized portal for doctors to create medical referrals, issue prescriptions, and access patient histories integrated with Sapawarga.",
    fullDescription:
      "Labkes is a healthcare-integrated web portal developed for Jabar Digital Service, enabling licensed doctors to manage medical referrals, issue prescriptions, and access complete patient medical histories for citizens registered through the Sapawarga super-app. The platform prioritizes data accuracy and workflow efficiency for medical professionals.",
    tags: ["Nuxt 3", "Healthcare", "Vue 3"],
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "REST API", "Tailwind CSS"],
    role: "Junior Frontend Engineer",
    duration: "2023 – 2024",
    challenge:
      "Integrating complex medical data flows while delivering a clean, error-proof interface for medical professionals handling sensitive patient information.",
    solution:
      "Designed a streamlined UI focused on clinical workflows, integrated with backend APIs for real-time patient data retrieval, and implemented robust form validation for prescriptions and referrals.",
    results: [
      "Streamlined medical referral and prescription workflow for doctors",
      "Integrated with Sapawarga patient database for comprehensive histories",
      "Improved doctor productivity with an intuitive, focused UI",
    ],
    year: 2023,
    context: "Company Project",
    company: "Jabar Digital Service",
  },

  // ─── PT Kreasi Rekayasa Indonesia (2019–2022) ──────────────────────────────
  {
    id: 9,
    slug: "ez-track",
    title: "EZ Track",
    description:
      "GPS-based vehicle monitoring system with real-time tracking and user management features for fleet operators.",
    fullDescription:
      "EZ Track is a GPS-based vehicle monitoring system developed and maintained at PT Kreasi Rekayasa Indonesia. The platform provides fleet operators with real-time vehicle location tracking, route history, and comprehensive user management features. Worked directly with clients to continuously improve and align features with operational requirements.",
    tags: ["GPS Tracking", "Fleet", "Fullstack"],
    tech: ["Vue.js", "JavaScript", "PHP", "CodeIgniter", "MySQL", "REST API"],
    role: "Fullstack Engineer",
    duration: "2019 – 2022",
    challenge:
      "Delivering reliable real-time GPS tracking with accurate map rendering and scalable user management for multiple fleet operators.",
    solution:
      "Integrated GPS data streams into an interactive map view, built a flexible user management module, and maintained close client communication to iterate on features based on real operational feedback.",
    results: [
      "Real-time GPS tracking for multiple vehicle fleets",
      "User management supporting multiple operator accounts",
      "Iteratively improved through direct client collaboration",
    ],
    year: 2021,
    context: "Company Project",
    company: "PT Kreasi Rekayasa Indonesia",
  },
  {
    id: 10,
    slug: "man-ic",
    title: "Man-IC",
    description:
      "Content management platform for storing and organizing research papers, modules, learning materials, and articles.",
    fullDescription:
      "Man-IC is a knowledge management platform built for PT Kreasi Rekayasa Indonesia to facilitate organized content management. The platform enables teams to store, categorize, and retrieve research papers, training modules, learning materials, and articles in a structured way, improving knowledge sharing across the organization.",
    tags: ["CMS", "Knowledge Management", "Fullstack"],
    tech: ["Vue.js", "JavaScript", "PHP", "Laravel", "MySQL", "REST API"],
    role: "Fullstack Engineer",
    duration: "2019 – 2022",
    challenge:
      "Building a flexible content system that could handle varied document types and make them easily searchable and accessible to different user roles.",
    solution:
      "Designed a categorized content structure with role-based access control, search and filtering capabilities, and a clean authoring interface for content contributors.",
    results: [
      "Centralized repository for research papers, modules, and articles",
      "Structured content categorization with search and filtering",
      "Role-based access for contributors and readers",
    ],
    year: 2020,
    context: "Company Project",
    company: "PT Kreasi Rekayasa Indonesia",
  },
  {
    id: 11,
    slug: "ticketing-online",
    title: "Ticketing Online System",
    description:
      "Online ticketing platform ensuring optimal system performance for event and service ticket management.",
    fullDescription:
      "A fullstack ticketing system developed and maintained at PT Kreasi Rekayasa Indonesia. The platform supports the full lifecycle of ticket management — from issuance and tracking to resolution. Maintained system stability and performance through ongoing development and client-driven feature updates.",
    tags: ["Ticketing", "Fullstack", "PHP"],
    tech: ["Vue.js", "JavaScript", "PHP", "CodeIgniter", "MySQL", "REST API"],
    role: "Fullstack Engineer",
    duration: "2019 – 2022",
    challenge:
      "Keeping the system stable and performant while continuously adding client-requested features without disrupting live operations.",
    solution:
      "Adopted an iterative development approach with client feedback loops, maintained backward compatibility for critical workflows, and monitored system performance proactively.",
    results: [
      "Stable ticketing system with continuous feature improvements",
      "Optimal performance maintained through active monitoring",
      "Feature updates aligned with client requirements",
    ],
    year: 2020,
    context: "Company Project",
    company: "PT Kreasi Rekayasa Indonesia",
  },

  // ─── Freelance Projects ────────────────────────────────────────────────────
  {
    id: 12,
    slug: "bimasena-abadi-land",
    title: "Bimasena Abadi Land",
    description:
      "Developed a CMS and client website for a housing vendor, enabling efficient property management and customer interaction.",
    fullDescription:
      "Developed a CMS and client website for a housing vendor, enabling efficient property management and customer interaction. The CMS lets administrators manage property listings and customer inquiries, while the public-facing website helps potential buyers explore available properties and interact with the company.",
    tags: ["Vue.js", "Nuxt.js", "CMS"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "REST API"],
    role: "Freelance Frontend Developer",
    year: 2023,
    context: "Freelance Project",
  },
  {
    id: 13,
    slug: "cv-ides",
    title: "CV IDES",
    description:
      "Built a CMS and client website for an electrical engineering company to showcase its corporate portfolio and services.",
    fullDescription:
      "Built a CMS and client website for an electrical engineering company to showcase its corporate portfolio and services. The platform enables the company to present its projects and expertise professionally, while the CMS allows the team to keep content up to date without touching the codebase.",
    tags: ["Vue.js", "Nuxt.js", "CMS"],
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"],
    role: "Freelance Frontend Developer",
    year: 2022,
    context: "Freelance Project",
  },
  {
    id: 14,
    slug: "e-assessment",
    title: "E-Assessment",
    description:
      "Developed a student assessment system, allowing educators to evaluate student performance based on predefined indicators.",
    fullDescription:
      "Developed a student assessment system allowing educators to evaluate student performance based on predefined indicators. The platform streamlines the grading workflow and provides a structured way to record, track, and review student progress with configurable assessment criteria.",
    tags: ["Vue.js", "Nuxt.js", "Education"],
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"],
    role: "Freelance Frontend Developer",
    year: 2022,
    context: "Freelance Project",
  },
  {
    id: 15,
    slug: "bank-syariah-indonesia",
    title: "Bank Syariah Indonesia (BSI)",
    description:
      "Developed CMS for administrators and a user-facing application for Bank Syariah Indonesia.",
    fullDescription:
      "Developed CMS for administrators and a user-facing application for Bank Syariah Indonesia. The CMS empowers administrators to manage content and data, while the user-facing application delivers banking-related information and services to end users.",
    tags: ["Vue.js", "Nuxt.js", "CMS"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "REST API"],
    role: "Freelance Frontend Developer",
    year: 2023,
    context: "Freelance Project",
  },
  {
    id: 16,
    slug: "ika-fk",
    title: "IKA-FK",
    description:
      "Developed a digital documentation system for the alumni of the Faculty of Medicine, enabling structured data storage and easy access to alumni records.",
    fullDescription:
      "Developed a digital documentation system for the alumni of the Faculty of Medicine, enabling structured data storage and easy access to alumni records. The platform makes it simple to maintain and look up alumni information with organized categorization and search capabilities.",
    tags: ["Vue.js", "Nuxt.js", "Documentation"],
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"],
    role: "Freelance Frontend Developer",
    year: 2022,
    context: "Freelance Project",
  },

  // ─── Personal Projects ─────────────────────────────────────────────────────
  {
    id: 17,
    slug: "shayna-admin",
    title: "Shayna Admin",
    description:
      "Developed an admin dashboard for an e-commerce platform, enabling product management, order tracking, and transaction monitoring with an intuitive UI.",
    fullDescription:
      "Developed an admin dashboard for an e-commerce platform, enabling product management, order tracking, and transaction monitoring with an intuitive UI. The dashboard gives store owners a clear overview of their business operations and simplifies day-to-day management tasks.",
    tags: ["Vue.js", "Dashboard", "E-Commerce"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    role: "Solo Developer",
    year: 2023,
    context: "Personal Project",
  },
  {
    id: 18,
    slug: "kulineran",
    title: "Kulineran",
    description:
      "Built a food ordering platform where users can browse menus, place orders, and manage transactions efficiently.",
    fullDescription:
      "Built a food ordering platform where users can browse menus, place orders, and manage transactions efficiently. The application focuses on a smooth, intuitive ordering flow and efficient transaction handling for a seamless dining experience.",
    tags: ["Vue.js", "Nuxt.js", "Food"],
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"],
    role: "Solo Developer",
    year: 2022,
    context: "Personal Project",
  },
  {
    id: 19,
    slug: "shayna-shop",
    title: "Shayna Shop",
    description:
      "Developed a modern e-commerce website, featuring a product catalog, shopping cart, and secure checkout process to enhance the online shopping experience.",
    fullDescription:
      "Developed a modern e-commerce website featuring a product catalog, shopping cart, and secure checkout process to enhance the online shopping experience. The site delivers a clean, responsive interface designed to convert visitors into buyers with a streamlined purchase flow.",
    tags: ["Vue.js", "Nuxt.js", "E-Commerce"],
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    role: "Solo Developer",
    year: 2023,
    context: "Personal Project",
  },
];

export const CAROUSEL_CARDS_PER_PAGE = 4;
export const FEATURED_CAROUSEL_TOTAL = 8;
export const featuredCarouselProjects = projects.slice(0, FEATURED_CAROUSEL_TOTAL);
export const featuredCarouselPageCount = FEATURED_CAROUSEL_TOTAL / CAROUSEL_CARDS_PER_PAGE;
