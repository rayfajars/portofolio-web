<script setup lang="ts">
import { computed } from 'vue';
import { projects } from '~/data/projects';
import { ArrowRight } from 'lucide-vue-next';

const featured = computed(() => projects.slice(0, 4));
</script>

<template>
  <section id="projects" class="section-padding section-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow">Projects</span>
      </div>

      <div class="project-section-head">
        <h2 class="heading-serif text-4xl sm:text-5xl text-navy text-balance min-w-0">
          Selected work
        </h2>
        <NuxtLink
          to="/projects"
          class="project-section-link focus-ring rounded-sm"
        >
          <span class="project-section-link-text">View all</span>
          <span class="project-section-link-count">({{ projects.length }})</span>
          <ArrowRight :size="18" class="project-section-link-icon" aria-hidden="true" />
        </NuxtLink>
      </div>

      <p class="project-section-desc">
        Platforms, design systems, and product UI shipped across company
        and personal work.
      </p>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
        <li v-for="project in featured" :key="project.id" class="min-w-0">
          <ProjectCard
            compact
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
        </li>
      </ul>
    </div>
  </section>
</template>
