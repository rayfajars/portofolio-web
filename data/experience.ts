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
}

export const experiences: Experience[] = [
  // Fulltime Positions
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    startDate: "2022-01",
    endDate: "Present",
    description:
      "Leading frontend development for enterprise applications using Vue 3 and Nuxt 3.",
    highlights: [
      "Built scalable component library used across multiple products",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40%",
    ],
    type: "fulltime",
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    startDate: "2020-03",
    endDate: "2022-01",
    description:
      "Developed responsive web applications for various clients using modern JavaScript frameworks.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Implemented responsive designs with Tailwind CSS",
      "Collaborated with design and backend teams",
    ],
    type: "fulltime",
  },
  {
    id: 3,
    company: "Startup Ventures",
    position: "Junior Frontend Developer",
    duration: "2018 - 2020",
    startDate: "2018-06",
    endDate: "2020-03",
    description:
      "Started my professional journey building user interfaces and learning best practices in web development.",
    highlights: [
      "Contributed to product development from MVP to production",
      "Learned Vue.js, React, and modern development workflows",
      "Participated in agile development processes",
    ],
    type: "fulltime",
  },

  // Freelance Projects
  {
    id: 4,
    company: "E-Commerce Client",
    position: "Freelance Vue.js Developer",
    duration: "2023 - 2024",
    startDate: "2023-06",
    endDate: "2024-02",
    description:
      "Built a complete e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    highlights: [
      "Implemented Stripe payment integration",
      "Created responsive product catalog with filtering",
      "Delivered project 2 weeks ahead of schedule",
    ],
    type: "freelance",
  },
  {
    id: 5,
    company: "Consulting Firm",
    position: "Freelance Frontend Consultant",
    duration: "2021 - 2022",
    startDate: "2021-09",
    endDate: "2022-03",
    description:
      "Provided frontend expertise for web application modernization project.",
    highlights: [
      "Migrated legacy jQuery app to Vue 3",
      "Improved load time by 60%",
      "Trained internal team on modern practices",
    ],
    type: "freelance",
  },
  {
    id: 6,
    company: "Creative Studio",
    position: "Freelance Web Developer",
    duration: "2020",
    startDate: "2020-01",
    endDate: "2020-06",
    description:
      "Developed portfolio websites and landing pages for small business clients.",
    highlights: [
      "Created 8+ custom websites with unique designs",
      "Implemented SEO best practices",
      "Maintained ongoing client relationships",
    ],
    type: "freelance",
  },
];
