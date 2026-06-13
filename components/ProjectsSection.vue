<script setup lang="ts">
import {
  featuredCarouselProjects,
  CAROUSEL_CARDS_PER_PAGE,
  featuredCarouselPageCount,
} from '~/data/projects';
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';

const activePage = ref(0);

const visibleProjects = computed(() => {
  const start = activePage.value * CAROUSEL_CARDS_PER_PAGE;
  return featuredCarouselProjects.slice(start, start + CAROUSEL_CARDS_PER_PAGE);
});

const next = () => {
  activePage.value = (activePage.value + 1) % featuredCarouselPageCount;
};

const prev = () => {
  activePage.value =
    (activePage.value - 1 + featuredCarouselPageCount) % featuredCarouselPageCount;
};

const goTo = (page: number) => {
  activePage.value = page;
};
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
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
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-x-6"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-6"
        >
          <div
            :key="activePage"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <ProjectCard
              v-for="project in visibleProjects"
              :key="project.slug"
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
        </Transition>

        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cream text-navy shadow-card flex items-center justify-center hover:bg-cream-dark transition-colors border border-navy/10"
          aria-label="Previous page"
        >
          <ChevronLeft :size="20" />
        </button>
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cream text-navy shadow-card flex items-center justify-center hover:bg-cream-dark transition-colors border border-navy/10"
          aria-label="Next page"
        >
          <ChevronRight :size="20" />
        </button>
      </div>

      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="page in featuredCarouselPageCount"
          :key="page"
          @click="goTo(page - 1)"
          :class="[
            'h-2 rounded-full transition-all duration-300',
            activePage === page - 1 ? 'w-8 bg-navy' : 'w-2 bg-navy/20 hover:bg-navy/40',
          ]"
          :aria-label="`Go to page ${page}`"
        />
      </div>
    </div>
  </section>
</template>
