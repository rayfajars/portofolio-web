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
      "Building a multi-tenant modular SPA and an internal design system for fleet and monitoring products in Bandung, Indonesia.",
    highlights: [
      "Architected a multi-tenant modular SPA using Nuxt 3 and TypeScript, serving multiple business domains from a unified codebase.",
      "Implemented subdomain-based routing with granular RBAC authorization and Keycloak SSO integration.",
      "Developed interactive operational dashboards using Leaflet.js and Chart.js for fleet and monitoring visualization.",
      "Built and maintained Transtrack UI, a reusable internal design system and component library using Nuxt 3 and Tailwind CSS.",
      "Established Storybook as the central component playground and documentation platform to improve frontend collaboration and consistency.",
      "Published and maintained an internal NPM package containing 48+ reusable components used across company products.",
      "Developed a custom CLI tool (npx transtrack-ui add) to streamline component scaffolding and integration workflows.",
      "Rewrote frontend of a driver safety monitoring platform using Nuxt 3.",
      "Integrated real-time anomaly detection APIs while preserving existing operational workflows and improving data presentation reliability.",
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
      "Developed and maintained internal government administration platforms serving regional government organizations across West Java, Indonesia.",
    highlights: [
      "Developed and maintained internal government administration features including RW management, push notifications, ticketing systems, and CMS modules (Sapawarga Admin).",
      "Built complaint management features used by regional government organizations (OPD) to process and verify citizen reports.",
      "Implemented user support workflows including account verification, password reset, and complaint tracking with Web View (Sapawarga Web).",
      "Contributed to migration and rewrite of Sapawarga Admin v2 using Nuxt 3, improving maintainability and performance by decoupling legacy systems.",
      "Contributed to the development of the SIDEBAR (Sistem Informasi Dokumen Elektronik Jawa Barat) application by building the Tindak Lanjut feature, streamlining the workflow for replying to and forwarding official electronic documents, and supported the User Management module by handling account modifications and role assignments to maintain secure and accurate access control across the system.",
      "Developed and maintained the Labkes web platform for doctors to create medical referrals, issue prescriptions, and access patient medical histories.",
      "Developed frontend interfaces for executive dashboards integrated with backend LLM services for dynamic insight visualization.",
      "Built internal platforms including URL shortening services and mock API tools to improve frontend-backend collaboration.",
      "Optimized code quality with SonarQube and improved web performance through Lighthouse analysis.",
      "Implemented innovations including Unleash for feature flagging, unit testing, and Google Analytics tracking improvements.",
      "Conducted regular maintenance to ensure system stability and security.",
      "Mentored interns in developing the Ticket Management System and conducted regular code reviews.",
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
      "Developed and maintained ticketing, GPS tracking, and content management systems in Bandung, Indonesia.",
    highlights: [
      "Developed and maintained the Ticketing Online System and Bignet, ensuring optimal system performance.",
      "Developed and maintained Man-IC, a platform for storing research papers, modules, learning materials, and articles.",
      "Developed and supported EZ Track, a GPS-based vehicle monitoring system, including user management features.",
      "Engaged directly with clients through regular meetings to discuss development, update features, and align solutions with user requirements.",
    ],
    type: "fulltime",
  },

  // Freelance Projects
  {
    id: 4,
    company: "Bimasena Abadi Land",
    position: "Frontend Developer",
    duration: "Freelance Project",
    startDate: "",
    endDate: "",
    description:
      "Developed a CMS and client website for a housing vendor, enabling efficient property management and customer interaction.",
    type: "freelance",
  },
  {
    id: 5,
    company: "CV IDES",
    position: "Frontend Developer",
    duration: "Freelance Project",
    startDate: "",
    endDate: "",
    description:
      "Built a CMS and client website for an electrical engineering company to showcase its corporate portfolio and services.",
    type: "freelance",
  },
  {
    id: 6,
    company: "Bank Syariah Indonesia (BSI)",
    position: "Frontend Developer",
    duration: "Freelance Project",
    startDate: "",
    endDate: "",
    description:
      "Developed a CMS for administrators and a user-facing application.",
    type: "freelance",
  },
  {
    id: 7,
    company: "IKA-FK",
    position: "Frontend Developer",
    duration: "Freelance Project",
    startDate: "",
    endDate: "",
    description:
      "Developed a digital documentation system for Faculty of Medicine alumni, enabling structured data storage and easy access to alumni records.",
    type: "freelance",
  },
];
