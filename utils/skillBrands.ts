export interface SkillBrandIcon {
  slug: string;
  color?: string;
}

/** Simple Icons slugs — https://simpleicons.org */
export const skillBrandIcons: Record<string, SkillBrandIcon> = {
  'Vue.js': { slug: 'vuedotjs', color: '42b883' },
  'Nuxt.js': { slug: 'nuxt', color: '00DC82' },
  'TypeScript': { slug: 'typescript', color: '3178C6' },
  'JavaScript': { slug: 'javascript', color: 'F7DF1E' },
  'Tailwind CSS': { slug: 'tailwindcss', color: '06B6D4' },
  'Chart.js': { slug: 'chartdotjs', color: 'FF6384' },
  'Leaflet.js': { slug: 'leaflet', color: '199900' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  'Express.js': { slug: 'express', color: '000000' },
  'Laravel': { slug: 'laravel', color: 'FF2D20' },
  'PHP': { slug: 'php', color: '777BB4' },
  'CodeIgniter': { slug: 'codeigniter', color: 'EF4223' },
  'Git': { slug: 'git', color: 'F05032' },
  'Storybook': { slug: 'storybook', color: 'FF4785' },
  'SonarQube': { slug: 'sonarqube', color: '4E9BCD' },
  'Figma': { slug: 'figma', color: 'F24E1E' },
  'ClickUp': { slug: 'clickup', color: '7B68EE' },
};

export const brandIconCategories = new Set([
  'Frontend',
  'Backend',
  'Tools & Platforms',
]);

export function getSkillBrandIconUrl(skill: string): string | null {
  const brand = skillBrandIcons[skill];
  if (!brand) return null;
  return brand.color
    ? `https://cdn.simpleicons.org/${brand.slug}/${brand.color}`
    : `https://cdn.simpleicons.org/${brand.slug}`;
}

export function usesBrandIcon(category: string, skill: string): boolean {
  return brandIconCategories.has(category) && skill in skillBrandIcons;
}
