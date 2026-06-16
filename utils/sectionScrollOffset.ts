const SCROLL_GUTTER_REM = 4.5;

/** Pixel offset from viewport top where section content should sit (header + gutter). */
export function getSectionScrollOffset(): number {
  if (typeof window === 'undefined') return 0;

  const rootStyles = getComputedStyle(document.documentElement);
  const headerHeight = parseFloat(rootStyles.getPropertyValue('--site-header-height')) || 5;
  const gutter = parseFloat(rootStyles.getPropertyValue('--scroll-section-gutter')) || SCROLL_GUTTER_REM;
  const rootFontSize = parseFloat(rootStyles.fontSize) || 16;

  const headerEl = document.querySelector('header');
  const measuredHeader = headerEl?.getBoundingClientRect().height ?? headerHeight * rootFontSize;

  return measuredHeader + gutter * rootFontSize;
}

/** IntersectionObserver rootMargin — top inset matches nav / scroll-margin-top. */
export function getRevealRootMargin(): string {
  const offset = Math.round(getSectionScrollOffset());
  return `-${offset}px 0px 0px 0px`;
}
