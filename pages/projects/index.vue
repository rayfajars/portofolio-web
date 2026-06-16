<script setup lang="ts">
import { profile } from '~/data/profile';
import { projects } from '~/data/projects';
import { ArrowLeft } from 'lucide-vue-next';
import {
  PROJECT_FILTERS,
  filterProjects,
  getProjectBadge,
  type ProjectFilter,
} from '~/utils/projects';
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
const listRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(listRef);

const activeFilter = ref<ProjectFilter>(
  (route.query.filter as ProjectFilter) || 'all',
);

const filteredProjects = computed(() =>
  filterProjects(projects, activeFilter.value),
);

const showFeatured = computed(
  () => activeFilter.value === 'all' && filteredProjects.value.length > 0,
);

const featuredProject = computed(() =>
  showFeatured.value ? filteredProjects.value[0] : null,
);

const listProjects = computed(() =>
  showFeatured.value ? filteredProjects.value.slice(1) : filteredProjects.value,
);

const setFilter = (filter: ProjectFilter) => {
  activeFilter.value = filter;
  router.replace({
    query: { ...route.query, filter: filter === 'all' ? undefined : filter },
  });
};

const clearFilter = () => setFilter('all');

const cappedRevealIndex = (index: number) => Math.min(index, 10);

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
    <div class="container mx-auto max-w-5xl">
      <header class="mb-10 sm:mb-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-ring rounded-sm mb-10"
        >
          <ArrowLeft :size="16" aria-hidden="true" />
          Back to home
        </NuxtLink>

        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6">
          <h1 class="heading-serif text-4xl sm:text-5xl md:text-6xl text-navy text-balance">
            All Projects
          </h1>
          <p class="meta-val text-navy/60 shrink-0 tabular-nums">
            {{ filteredProjects.length }} of {{ projects.length }}
          </p>
        </div>

        <p class="section-lead mt-4 sm:mt-5">
          Company, freelance, and personal work across dashboards, design
          systems, and multi-tenant platforms.
        </p>
      </header>

      <div
        role="group"
        aria-label="Filter projects"
        class="project-filter-bar mb-8 sm:mb-10"
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

      <div
        v-if="filteredProjects.length === 0"
        class="project-index-empty"
      >
        <p class="meta-copy">
          No projects match this filter.
        </p>
        <button
          v-if="activeFilter !== 'all'"
          type="button"
          class="filter-chip filter-chip-inactive mt-4"
          @click="clearFilter"
        >
          Show all projects
        </button>
      </div>

      <div
        v-else
        ref="listRef"
        class="project-index-reveal section-reveal"
        :class="{ 'is-inview': isInView }"
      >
        <ul class="project-index list-none p-0 m-0">
          <ProjectIndexRow
            v-if="featuredProject"
            :slug="featuredProject.slug"
            :title="featuredProject.title"
            :description="featuredProject.description"
            :year="featuredProject.year"
            :badge="getProjectBadge(featuredProject)"
            :tags="featuredProject.tags"
            featured
            :reveal-index="cappedRevealIndex(0)"
          />

          <ProjectIndexRow
            v-for="(project, index) in listProjects"
            :key="project.id"
            :slug="project.slug"
            :title="project.title"
            :description="project.description"
            :year="project.year"
            :badge="getProjectBadge(project)"
            :tags="project.tags"
            :reveal-index="cappedRevealIndex(showFeatured ? index + 1 : index)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
