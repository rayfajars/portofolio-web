<script setup lang="ts">
import { projects, CAROUSEL_CARDS_PER_PAGE } from '~/data/projects';
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';

const GAP_PX = 20;

const activeIndex = ref(0);
const visibleCount = ref(CAROUSEL_CARDS_PER_PAGE);
const viewportRef = ref<HTMLElement | null>(null);
const viewportWidth = ref(0);
const isTransitioning = ref(true);

const maxIndex = computed(() =>
  Math.max(0, projects.length - visibleCount.value),
);

const cardWidth = computed(() => {
  if (!viewportWidth.value) return 0;
  return (viewportWidth.value - GAP_PX * (visibleCount.value - 1)) / visibleCount.value;
});

const slideOffset = computed(() => cardWidth.value + GAP_PX);

const translateX = computed(() => activeIndex.value * slideOffset.value);

const updateLayout = () => {
  if (window.innerWidth >= 1024) {
    visibleCount.value = CAROUSEL_CARDS_PER_PAGE;
  } else if (window.innerWidth >= 640) {
    visibleCount.value = 2;
  } else {
    visibleCount.value = 1;
  }

  if (viewportRef.value) {
    viewportWidth.value = viewportRef.value.offsetWidth;
  }

  if (activeIndex.value > maxIndex.value) {
    activeIndex.value = 0;
  }
};

const jumpWithoutTransition = (index: number) => {
  isTransitioning.value = false;
  activeIndex.value = index;
  nextTick(() => {
    requestAnimationFrame(() => {
      isTransitioning.value = true;
    });
  });
};

const next = () => {
  if (maxIndex.value === 0) return;

  if (activeIndex.value >= maxIndex.value) {
    jumpWithoutTransition(0);
    return;
  }

  activeIndex.value += 1;
};

const prev = () => {
  if (maxIndex.value === 0) return;

  if (activeIndex.value <= 0) {
    jumpWithoutTransition(maxIndex.value);
    return;
  }

  activeIndex.value -= 1;
};

onMounted(() => {
  nextTick(updateLayout);
  window.addEventListener('resize', updateLayout);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout);
});
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark/50">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <h2 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-navy">
            Featured Work
          </h2>
          <p class="text-lg text-navy/60 max-w-2xl">
            A selection of projects that showcase my skills and passion for building clean, functional interfaces.
          </p>
        </div>

        <NuxtLink to="/projects">
          <Button variant="outline" class="gap-2 shrink-0">
            See All
            <ArrowRight :size="18" />
          </Button>
        </NuxtLink>
      </div>

      <div class="relative px-2 sm:px-6">
        <div ref="viewportRef" class="overflow-hidden">
          <div
            class="flex gap-5"
            :class="isTransitioning ? 'transition-transform duration-500 ease-out' : ''"
            :style="{ transform: slideOffset ? `translateX(-${translateX}px)` : undefined }"
          >
            <div
              v-for="project in projects"
              :key="project.slug"
              class="flex-shrink-0"
              :style="cardWidth ? { width: `${cardWidth}px` } : undefined"
            >
              <ProjectCard
                :slug="project.slug"
                :title="project.title"
                :description="project.description"
                :image="project.image"
                :repo-url="project.repoUrl"
                :live-url="project.liveUrl"
                :tags="project.tags"
                :context="project.context"
                :company="project.company"
              />
            </div>
          </div>
        </div>

        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cream text-navy shadow-card flex items-center justify-center hover:bg-cream-dark transition-colors border border-navy/10"
          aria-label="Previous project"
        >
          <ChevronLeft :size="20" />
        </button>
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cream text-navy shadow-card flex items-center justify-center hover:bg-cream-dark transition-colors border border-navy/10"
          aria-label="Next project"
        >
          <ChevronRight :size="20" />
        </button>
      </div>

      <p
        v-if="maxIndex > 0"
        class="text-center text-sm text-navy/40 mt-8"
      >
        {{ activeIndex + 1 }} / {{ maxIndex + 1 }}
      </p>
    </div>
  </section>
</template>
