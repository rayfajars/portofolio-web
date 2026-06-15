<script setup lang="ts">
import { ArrowLeft, ExternalLink, Github } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';
import { getProjectBadge } from '~/utils/projects';

const route = useRoute();
const router = useRouter();
const { getProjectBySlug, getNextProject, getPreviousProject } = useProjectNavigation();

const slug = route.params.slug as string;
const project = getProjectBySlug(slug);

if (!project) {
  throw createError({
    statusCode: 404,
    message: 'Project not found',
  });
}

const nextProject = getNextProject(slug);
const previousProject = getPreviousProject(slug);

const projectBadge = getProjectBadge(project);

useHead({
  title: `${project.title} - Portfolio`,
  meta: [
    { name: 'description', content: project.description },
    { property: 'og:title', content: project.title },
    { property: 'og:description', content: project.description },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-cream">
    <div class="border-b border-navy/10 bg-cream/90 backdrop-blur-md sticky top-0 z-40">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-4">
        <Button
          variant="ghost"
          @click="router.push('/#projects')"
          class="gap-2"
        >
          <ArrowLeft :size="18" />
          <span>Back to Projects</span>
        </Button>
      </div>
    </div>

    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-5 mb-10">
          <div v-if="projectBadge">
            <span class="px-3 py-1.5 text-xs font-semibold bg-navy text-cream rounded-full uppercase tracking-wide">
              {{ projectBadge }}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-sm text-navy/50">
            <span>{{ project.year }}</span>
            <span v-if="project.duration">· {{ project.duration }}</span>
            <span v-if="project.role">· {{ project.role }}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy">
            {{ project.title }}
          </h1>

          <p class="text-lg sm:text-xl text-navy/60 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 mb-10">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-3 py-1 text-sm rounded-full bg-navy/5 text-navy/70 font-medium"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap gap-4">
          <Button
            v-if="project.liveUrl"
            as="a"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="gap-2"
          >
            <ExternalLink :size="18" />
            Live Demo
          </Button>

          <Button
            v-if="project.repoUrl"
            as="a"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            class="gap-2"
          >
            <Github :size="18" />
            View Code
          </Button>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-navy">
      <div class="container mx-auto max-w-4xl">
        <h2 class="heading-serif text-2xl sm:text-3xl mb-6 text-cream">
          About This Project
        </h2>
        <p class="text-lg leading-relaxed text-cream/70">
          {{ project.fullDescription }}
        </p>
      </div>
    </section>

    <section
      v-if="project.challenge && project.solution"
      class="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="container mx-auto max-w-4xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-6 rounded-2xl bg-cream-light border border-navy/10">
            <h2 class="heading-serif text-xl mb-4 text-navy">Challenge</h2>
            <p class="text-base leading-relaxed text-navy/60">
              {{ project.challenge }}
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-cream-light border border-navy/10">
            <h2 class="heading-serif text-xl mb-4 text-navy">Solution</h2>
            <p class="text-base leading-relaxed text-navy/60">
              {{ project.solution }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="project.results && project.results.length"
      class="py-12 px-4 sm:px-6 lg:px-8 bg-cream-light"
    >
      <div class="container mx-auto max-w-4xl">
        <h2 class="heading-serif text-2xl sm:text-3xl mb-6 text-navy">
          Results & Impact
        </h2>
        <ul class="grid sm:grid-cols-2 gap-4">
          <li
            v-for="(result, index) in project.results"
            :key="index"
            class="flex items-start gap-3 p-5 rounded-2xl border border-navy/10 bg-cream"
          >
            <span class="mt-2 w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0" />
            <span class="text-base text-navy/70">{{ result }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8 border-t border-navy/10">
      <div class="container mx-auto max-w-4xl">
        <div class="flex flex-col sm:flex-row justify-between gap-4">
          <NuxtLink
            v-if="previousProject"
            :to="`/projects/${previousProject.slug}`"
            class="group flex-1 p-6 rounded-2xl border border-navy/10 hover:border-navy/25 hover:shadow-soft transition-all bg-cream-light"
          >
            <div class="text-sm text-navy/40 mb-2">← Previous Project</div>
            <div class="text-lg font-semibold group-hover:opacity-80 transition-opacity text-navy">
              {{ previousProject.title }}
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="nextProject"
            :to="`/projects/${nextProject.slug}`"
            class="group flex-1 p-6 rounded-2xl border border-navy/10 hover:border-navy/25 hover:shadow-soft transition-all bg-cream-light text-right"
          >
            <div class="text-sm text-navy/40 mb-2">Next Project →</div>
            <div class="text-lg font-semibold group-hover:opacity-80 transition-opacity text-navy">
              {{ nextProject.title }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
