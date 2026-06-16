<script setup lang="ts">
import { ArrowLeft, ExternalLink, Github } from 'lucide-vue-next';
import { profile } from '~/data/profile';
import { Button } from '~/components/ui/button';
import { getProjectBadge } from '~/utils/projects';

const route = useRoute();
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
  title: `${project.title} - ${profile.name}`,
  meta: [
    { name: 'description', content: project.description },
    { property: 'og:title', content: project.title },
    { property: 'og:description', content: project.description },
  ],
});
</script>

<template>
  <article class="bg-cream">
    <div class="page-padding pb-0">
      <div class="container mx-auto max-w-4xl">
        <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-ring rounded-sm mb-10">
          <ArrowLeft :size="16" aria-hidden="true" />
          Back to projects
        </NuxtLink>

        <header class="mb-10">
          <div class="section-opener">
            <span class="section-eyebrow">{{ projectBadge }}</span>
          </div>

          <h1 class="heading-serif text-4xl sm:text-5xl md:text-6xl text-navy text-balance">
            {{ project.title }}
          </h1>

          <p class="section-lead mt-5 text-pretty">
            {{ project.description }}
          </p>

          <dl class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 editorial-divide pt-6">
            <div>
              <dt class="meta-key">Year</dt>
              <dd class="meta-val">{{ project.year }}</dd>
            </div>
            <div v-if="project.duration">
              <dt class="meta-key">Timeline</dt>
              <dd class="meta-val">{{ project.duration }}</dd>
            </div>
            <div v-if="project.role">
              <dt class="meta-key">Role</dt>
              <dd class="meta-val">{{ project.role }}</dd>
            </div>
          </dl>
        </header>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-3 py-1 text-sm rounded-full bg-navy/5 text-navy/70 font-medium"
          >
            {{ tech }}
          </span>
        </div>

        <div v-if="project.liveUrl || project.repoUrl" class="flex flex-wrap gap-4 pb-12 sm:pb-16">
          <Button
            v-if="project.liveUrl"
            as="a"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="gap-2"
          >
            <ExternalLink :size="18" aria-hidden="true" />
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
            <Github :size="18" aria-hidden="true" />
            View Code
          </Button>
        </div>
      </div>
    </div>

    <section class="section-padding section-navy">
      <div class="container mx-auto max-w-4xl">
        <div class="section-opener-light">
          <span class="section-eyebrow-light">Overview</span>
        </div>
        <p class="font-serif text-2xl sm:text-3xl leading-snug text-cream max-w-prose text-pretty">
          {{ project.fullDescription }}
        </p>
      </div>
    </section>

    <section
      v-if="project.challenge && project.solution"
      class="section-padding section-cream"
    >
      <div class="container mx-auto max-w-4xl grid md:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h2 class="section-eyebrow mb-3">Challenge</h2>
          <p class="text-lg leading-relaxed text-navy/70 text-pretty">
            {{ project.challenge }}
          </p>
        </div>
        <div>
          <h2 class="section-eyebrow mb-3">Solution</h2>
          <p class="text-lg leading-relaxed text-navy/70 text-pretty">
            {{ project.solution }}
          </p>
        </div>
      </div>
    </section>

    <section
      v-if="project.results && project.results.length"
      class="section-padding section-muted"
    >
      <div class="container mx-auto max-w-4xl">
        <div class="section-opener">
          <span class="section-eyebrow">Impact</span>
        </div>
        <ul class="divide-y divide-navy/10">
          <li
            v-for="(result, index) in project.results"
            :key="index"
            class="flex items-start gap-4 py-5 first:pt-0"
          >
            <span class="mt-2.5 w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0" aria-hidden="true" />
            <span class="text-lg leading-relaxed text-navy/80">{{ result }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section
      v-if="previousProject || nextProject"
      class="section-padding editorial-divide"
    >
      <div class="container mx-auto max-w-4xl">
        <div class="grid sm:grid-cols-2 gap-4">
          <NuxtLink
            v-if="previousProject"
            :to="`/projects/${previousProject.slug}`"
            class="nav-card group"
          >
            <div class="meta-key mb-2">Previous</div>
            <div class="font-serif text-xl text-navy motion-safe:group-hover:opacity-80">
              {{ previousProject.title }}
            </div>
          </NuxtLink>

          <div v-else class="hidden sm:block" aria-hidden="true" />

          <NuxtLink
            v-if="nextProject"
            :to="`/projects/${nextProject.slug}`"
            class="nav-card group sm:text-right"
          >
            <div class="meta-key mb-2">Next</div>
            <div class="font-serif text-xl text-navy motion-safe:group-hover:opacity-80">
              {{ nextProject.title }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>
