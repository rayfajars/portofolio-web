import type { Project } from '~/data/projects';

export const PROJECT_COMPANIES = [
  'Transtrack (PT Indo Trans Teknologi)',
  'Jabar Digital Service',
  'PT Kreasi Rekayasa Indonesia',
] as const;

export type ProjectCompanyFilter = (typeof PROJECT_COMPANIES)[number];

export type ProjectFilter = 'all' | 'personal' | 'freelance' | ProjectCompanyFilter;

export const PROJECT_FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'personal', label: 'Personal Project' },
  { value: 'freelance', label: 'Freelance Project' },
  ...PROJECT_COMPANIES.map((company) => ({ value: company, label: company })),
];

export function getProjectBadge(project: Project): string {
  if (project.context === 'Company Project' && project.company) {
    return project.company;
  }
  return project.context ?? '';
}

export function filterProjects(projects: Project[], filter: ProjectFilter): Project[] {
  if (filter === 'all') return projects;
  if (filter === 'personal') {
    return projects.filter((project) => project.context === 'Personal Project');
  }
  if (filter === 'freelance') {
    return projects.filter((project) => project.context === 'Freelance Project');
  }
  return projects.filter(
    (project) => project.context === 'Company Project' && project.company === filter,
  );
}
