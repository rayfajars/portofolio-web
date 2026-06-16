import { getSectionScrollOffset } from '~/utils/sectionScrollOffset';

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollOffset() {
  return getSectionScrollOffset();
}

export function useScrollToSection() {
  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return;

    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const target = element.querySelector(':scope > .container') ?? element;
    const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return { scrollToSection };
}
