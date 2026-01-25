import { projects } from "~/data/projects";

export const useProjectNavigation = () => {
  const getProjectBySlug = (slug: string) => {
    return projects.find((p) => p.slug === slug);
  };

  const getNextProject = (currentSlug: string) => {
    const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
  };

  const getPreviousProject = (currentSlug: string) => {
    const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) return null;
    const previousIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    return projects[previousIndex];
  };

  return {
    getProjectBySlug,
    getNextProject,
    getPreviousProject,
  };
};
