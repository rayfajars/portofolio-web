<script setup lang="ts">
import { projects } from '~/data/projects';
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-12">
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Selected Work
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl">
          A collection of projects that showcase my skills and passion for creating clean, functional interfaces.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :slug="project.slug"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :repo-url="project.repoUrl"
          :live-url="project.liveUrl"
          :tags="project.tags"
          :context="project.context"
        />
      </div>
    </div>
  </section>
</template>
