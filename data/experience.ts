export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights?: string[];
  type: "fulltime" | "freelance";
  logo?: string;
}

export const experiences: Experience[] = [
  // Fulltime Positions
  {
    id: 1,
    company: "Transtrack (PT Indo Trans Teknologi)",
    position: "Frontend Developer",
    duration: "April 2025 - Present",
    startDate: "2025-04",
    endDate: "Present",
    description:
      "Architected and developed a multi-tenant modular SPA using Nuxt 3 and TypeScript, serving multiple business domains from a unified codebase.",
    highlights: [
      "Architected multi-tenant SPA with subdomain-based routing and granular RBAC authorization",
      "Integrated Keycloak SSO for centralized authentication across business domains",
      "Built interactive fleet and monitoring dashboards using Leaflet.js and Chart.js",
      "Built and maintained Transtrack UI, an internal design system with 48+ reusable components",
      "Established Storybook as the central component documentation and playground platform",
      "Published and maintained internal NPM package used across all company products",
      "Developed custom CLI tool (npx transtrack-ui add) for component scaffolding",
      "Rewrote frontend of driver safety monitoring platform using Nuxt 3",
    ],
    type: "fulltime",
  },
  {
    id: 2,
    company: "Jabar Digital Service",
    position: "Junior Frontend Engineer",
    duration: "September 2022 - March 2025",
    startDate: "2022-09",
    endDate: "2025-03",
    description:
      "Developed and maintained internal government administration features for West Java's digital services platform, Sapawarga, serving millions of citizens and regional government organizations.",
    highlights: [
      "Developed RW management, push notifications, ticketing, and CMS modules for government use",
      "Built complaint management features used by regional government organizations (OPD)",
      "Contributed to Sapawarga Admin v2 Nuxt 3 migration, improving performance and maintainability",
      "Built the Tindak Lanjut feature for SIDEBAR (electronic document system)",
      "Developed Labkes — a specialized portal for doctors to manage referrals and prescriptions",
      "Built executive dashboards integrated with backend LLM services for dynamic insights",
      "Optimized performance using SonarQube and Lighthouse analysis",
      "Implemented Unleash for feature flagging and conducted unit testing improvements",
      "Mentored interns, guiding Ticket Management System development and code reviews",
    ],
    type: "fulltime",
  },
  {
    id: 3,
    company: "PT Kreasi Rekayasa Indonesia",
    position: "Fullstack Engineer",
    duration: "November 2019 - August 2022",
    startDate: "2019-11",
    endDate: "2022-08",
    description:
      "Developed and maintained multiple web platforms including ticketing systems, research paper management, and GPS-based vehicle monitoring for clients.",
    highlights: [
      "Developed and maintained Ticketing Online System and Bignet platform",
      "Built Man-IC, a content platform for storing research papers, modules, and articles",
      "Developed EZ Track, a GPS-based vehicle monitoring system with user management features",
      "Engaged directly with clients through regular meetings and feature alignment sessions",
    ],
    type: "fulltime",
  },

  // Freelance Projects
  {
    id: 4,
    company: "Bimasena Abadi Land",
    position: "Fullstack Developer",
    duration: "Freelance",
    startDate: "2021-01",
    endDate: "2021-12",
    description:
      "Developed a CMS and client website for a housing vendor, enabling efficient property management and customer interaction.",
    highlights: [
      "Built property listing management system for administrators",
      "Developed public-facing website for customer property browsing",
      "Implemented customer inquiry and contact features",
    ],
    type: "freelance",
  },
  {
    id: 5,
    company: "CV IDES",
    position: "Fullstack Developer",
    duration: "Freelance",
    startDate: "2021-01",
    endDate: "2021-12",
    description:
      "Built a CMS and client website for an electrical engineering company to showcase its corporate portfolio and services.",
    highlights: [
      "Developed company portfolio and services showcase website",
      "Built CMS for managing corporate content and project portfolios",
      "Delivered responsive, modern design aligned with brand identity",
    ],
    type: "freelance",
  },
  {
    id: 6,
    company: "Bank Syariah Indonesia (BSI)",
    position: "Fullstack Developer",
    duration: "Freelance",
    startDate: "2021-01",
    endDate: "2022-01",
    description:
      "Developed CMS for administrators and a user-facing application for Bank Syariah Indonesia.",
    highlights: [
      "Built admin CMS for managing banking content and user data",
      "Developed user-facing application for banking services",
      "Ensured secure and compliant data handling",
    ],
    type: "freelance",
  },
  {
    id: 7,
    company: "IKA-FK",
    position: "Fullstack Developer",
    duration: "Freelance",
    startDate: "2020-01",
    endDate: "2020-12",
    description:
      "Developed a digital documentation system for the alumni of the Faculty of Medicine, enabling structured data storage and easy access to alumni records.",
    highlights: [
      "Built alumni data management and documentation system",
      "Implemented structured search and filtering for alumni records",
      "Enabled secure access control for alumni information",
    ],
    type: "freelance",
  },
  {
    id: 8,
    company: "E-Assessment",
    position: "Fullstack Developer",
    duration: "Freelance",
    startDate: "2020-01",
    endDate: "2020-12",
    description:
      "Developed a student assessment system allowing educators to evaluate student performance based on predefined indicators.",
    highlights: [
      "Built configurable assessment module for educators",
      "Implemented student performance tracking and reporting",
      "Developed role-based access for educators and students",
    ],
    type: "freelance",
  },
];
