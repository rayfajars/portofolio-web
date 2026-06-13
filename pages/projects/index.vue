<script setup lang="ts">
import { profile } from '~/data/profile';
import { projects } from '~/data/projects';
import { ArrowLeft } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';
import { PROJECT_FILTERS, filterProjects, type ProjectFilter } from '~/utils/projects';
import { computed, ref } from 'vue';

useHead({
  title: `Projects - ${profile.name}`,
  meta: [
    { name: 'description', content: 'Selected projects and client work by ' + profile.name },
  ],
});

const activeFilter = ref<ProjectFilter>('all');

const filteredProjects = computed(() =>
  filterProjects(projects, activeFilter.value),
);

const filterButtonClass = (active: boolean) => [
  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap',
  active
    ? 'bg-navy text-cream border-navy shadow-soft'
    : 'bg-cream text-navy/70 border-navy/15 hover:border-navy/30 hover:text-navy',
];
</script>

<template>
  <div class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-cream min-h-screen">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-10">
        <NuxtLink to="/">
          <Button variant="ghost" class="gap-2 mb-8 -ml-2">
            <ArrowLeft :size="18" />
            Back to Home
          </Button>
        </NuxtLink>

        <h1 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-navy">
          All Projects
        </h1>
        <p class="text-lg text-navy/60 max-w-2xl">
          A complete collection of company, freelance, and personal projects.
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="filter in PROJECT_FILTERS"
          :key="filter.value"
          @click="activeFilter = filter.value"
          :class="filterButtonClass(activeFilter === filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16 text-navy/50"
      >
        No projects found for this filter.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
