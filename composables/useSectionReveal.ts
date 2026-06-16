import type { Ref } from 'vue';
import { getRevealRootMargin, getSectionScrollOffset } from '~/utils/sectionScrollOffset';

type SectionRevealOptions = {
  threshold?: number | number[];
  /** Observe inner `.container` so motion starts when copy enters the reading line, not section padding. */
  useContentAnchor?: boolean;
};

function resolveElement(raw: unknown): Element | null {
  return raw instanceof Element ? raw : null;
}

function getObserveTarget(root: Element, useContentAnchor: boolean): Element {
  if (!useContentAnchor) return root;

  const container = root.querySelector(':scope > .container');
  return container ?? root;
}

function isPastRevealLine(el: Element): boolean {
  const offset = getSectionScrollOffset();
  const top = el.getBoundingClientRect().top;
  const bottom = el.getBoundingClientRect().bottom;

  return top <= offset + 1 && bottom > offset;
}

export function useSectionReveal(
  rootRef: Ref<unknown>,
  options: SectionRevealOptions = {},
) {
  const isInView = ref(false);
  const useContentAnchor = options.useContentAnchor ?? true;

  onMounted(() => {
    const root = resolveElement(rootRef.value);
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isInView.value = true;
      return;
    }

    let observer: IntersectionObserver | null = null;
    let observedEl: Element | null = null;

    const reveal = () => {
      if (isInView.value) return;
      isInView.value = true;
      if (observer && observedEl) {
        observer.unobserve(observedEl);
      }
    };

    const setupObserver = () => {
      if (observer && observedEl) {
        observer.unobserve(observedEl);
        observer.disconnect();
      }

      observedEl = getObserveTarget(root, useContentAnchor);

      if (isPastRevealLine(observedEl)) {
        reveal();
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            reveal();
          }
        },
        {
          threshold: options.threshold ?? 0,
          rootMargin: getRevealRootMargin(),
        },
      );

      observer.observe(observedEl);
    };

    setupObserver();

    const onResize = () => {
      if (isInView.value) return;
      if (isPastRevealLine(getObserveTarget(root, useContentAnchor))) {
        reveal();
        return;
      }
      setupObserver();
    };

    window.addEventListener('resize', onResize, { passive: true });

    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    });
  });

  return { isInView };
}
