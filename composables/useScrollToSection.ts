const SCROLL_GUTTER_REM = 4.5;

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollOffset() {
  if (typeof window === 'undefined') return 0;

  const rootStyles = getComputedStyle(document.documentElement);
  const headerHeight = parseFloat(rootStyles.getPropertyValue('--site-header-height')) || 5;
  const gutter = parseFloat(rootStyles.getPropertyValue('--scroll-section-gutter')) || SCROLL_GUTTER_REM;
  const rootFontSize = parseFloat(rootStyles.fontSize) || 16;

  const headerEl = document.querySelector('header');
  const measuredHeader = headerEl?.getBoundingClientRect().height ?? headerHeight * rootFontSize;

  return measuredHeader + gutter * rootFontSize;
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

    const top = element.getBoundingClientRect().top + window.scrollY - getScrollOffset();

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return { scrollToSection };
}
