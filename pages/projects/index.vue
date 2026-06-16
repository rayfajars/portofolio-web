<script setup lang="ts">
import { profile } from '~/data/profile';
import { projects } from '~/data/projects';
import { ArrowLeft } from 'lucide-vue-next';
import { PROJECT_FILTERS, filterProjects, type ProjectFilter } from '~/utils/projects';
import { computed, ref, watch } from 'vue';

useHead({
  title: `Projects - ${profile.name}`,
  meta: [
    {
      name: 'description',
      content: `Selected company, freelance, and personal projects by ${profile.name}.`,
    },
    { property: 'og:title', content: `Projects - ${profile.name}` },
  ],
});

const route = useRoute();
const router = useRouter();

const activeFilter = ref<ProjectFilter>(
  (route.query.filter as ProjectFilter) || 'all',
);

const filteredProjects = computed(() =>
  filterProjects(projects, activeFilter.value),
);

const setFilter = (filter: ProjectFilter) => {
  activeFilter.value = filter;
  router.replace({
    query: { ...route.query, filter: filter === 'all' ? undefined : filter },
  });
};

watch(
  () => route.query.filter,
  (val) => {
    activeFilter.value = (val as ProjectFilter) || 'all';
  },
);

const filterButtonClass = (active: boolean) => [
  'filter-chip',
  active ? 'filter-chip-active' : 'filter-chip-inactive',
];
</script>

<template>
  <div class="page-padding bg-cream min-h-full">
    <div class="container mx-auto max-w-6xl">
      <header class="mb-10">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-ring rounded-sm mb-10">
          <ArrowLeft :size="16" aria-hidden="true" />
          Back to home
        </NuxtLink>

        <div class="section-opener">
          <span class="section-eyebrow">Index</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h1 class="heading-serif text-4xl sm:text-5xl md:text-6xl text-navy text-balance">
            All Projects
          </h1>
          <p class="meta-val text-navy/55">{{ filteredProjects.length }} of {{ projects.length }}</p>
        </div>

        <p class="section-lead mt-4">
          Company, freelance, and personal work across dashboards, design
          systems, and multi-tenant platforms.
        </p>
      </header>

      <div
        role="group"
        aria-label="Filter projects"
        class="flex flex-wrap gap-2 mb-10"
      >
        <button
          v-for="filter in PROJECT_FILTERS"
          :key="filter.value"
          type="button"
          :aria-pressed="activeFilter === filter.value"
          :class="filterButtonClass(activeFilter === filter.value)"
          @click="setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <p
        v-if="filteredProjects.length === 0"
        class="text-center py-16 meta-copy"
      >
        No projects match this filter.
      </p>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
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
</template>
