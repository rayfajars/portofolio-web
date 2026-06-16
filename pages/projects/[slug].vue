<script setup lang="ts">
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-vue-next';
import { profile } from '~/data/profile';
import { Button } from '~/components/ui/button';
import { getProjectBadge } from '~/utils/projects';
import { computed } from 'vue';

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

const metaLine = computed(() => {
  const parts = [String(project.year)];
  if (project.role) parts.push(project.role);
  if (project.duration) parts.push(project.duration);
  return parts.join(' · ');
});

const hasNarrativeBody = computed(
  () =>
    Boolean(project.challenge && project.solution)
    || Boolean(project.results?.length),
);

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
    <header class="project-hero">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-ring rounded-sm mb-10"
        >
          <ArrowLeft :size="16" aria-hidden="true" />
          Back to projects
        </NuxtLink>

        <div class="project-hero-grid">
          <div class="project-hero-main">
            <div class="section-opener">
              <span class="section-eyebrow">{{ projectBadge }}</span>
            </div>

            <h1 class="heading-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl text-navy text-balance">
              {{ project.title }}
            </h1>

            <p class="section-lead mt-5 text-pretty">
              {{ project.description }}
            </p>

            <p class="project-hero-meta mt-4">
              {{ metaLine }}
            </p>
          </div>

          <aside
            class="project-hero-overview"
            aria-labelledby="project-overview"
          >
            <h2 id="project-overview" class="sr-only">Overview</h2>
            <p class="project-overview-body">
              {{ project.fullDescription }}
            </p>
          </aside>

          <div
            v-if="project.tech.length || project.liveUrl || project.repoUrl"
            class="project-hero-tools"
          >
            <div
              v-if="project.tech.length"
              role="list"
              aria-label="Technology stack"
            >
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  role="listitem"
                  class="project-card-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div
              v-if="project.liveUrl || project.repoUrl"
              class="project-hero-actions"
              :class="{ 'mt-6': project.tech.length }"
            >
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
      </div>
    </header>

    <div
      v-if="hasNarrativeBody || previousProject || nextProject"
      class="section-cream"
    >
      <section
        v-if="project.challenge && project.solution"
        class="section-padding !pb-0"
        aria-labelledby="project-challenge"
      >
        <div class="container mx-auto max-w-4xl grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 id="project-challenge" class="case-study-heading">Challenge</h2>
            <p class="text-lg leading-relaxed text-navy/70 text-pretty">
              {{ project.challenge }}
            </p>
          </div>
          <div>
            <h2 class="case-study-heading">Solution</h2>
            <p class="text-lg leading-relaxed text-navy/70 text-pretty">
              {{ project.solution }}
            </p>
          </div>
        </div>
      </section>

      <section
        v-if="project.results?.length"
        class="section-padding"
        :class="{ '!pt-12 sm:!pt-16': project.challenge && project.solution }"
        aria-labelledby="project-impact"
      >
        <div class="container mx-auto max-w-4xl">
          <h2 id="project-impact" class="case-study-heading mb-6">
            Impact
          </h2>
          <ul class="divide-y divide-navy/10">
            <li
              v-for="(result, index) in project.results"
              :key="index"
              class="flex items-start gap-4 py-5 first:pt-0"
            >
              <span
                class="mt-2.5 w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0"
                aria-hidden="true"
              />
              <span class="text-lg leading-relaxed text-navy/80">{{ result }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section
        v-if="previousProject || nextProject"
        class="section-padding editorial-divide"
        aria-label="Project navigation"
      >
        <div class="container mx-auto max-w-4xl">
          <div
            class="project-nav-bar"
            :class="{ 'project-nav-bar--single': !previousProject || !nextProject }"
          >
            <NuxtLink
              v-if="previousProject"
              :to="`/projects/${previousProject.slug}`"
              class="project-nav-item project-nav-item--prev group"
            >
              <span class="project-nav-label">
                <ArrowLeft :size="14" aria-hidden="true" />
                Previous
              </span>
              <span class="project-nav-title motion-safe:group-hover:opacity-80">
                {{ previousProject.title }}
              </span>
            </NuxtLink>

            <div
              v-else
              class="project-nav-spacer hidden sm:block"
              aria-hidden="true"
            />

            <NuxtLink
              v-if="nextProject"
              :to="`/projects/${nextProject.slug}`"
              class="project-nav-item project-nav-item--next group"
            >
              <span class="project-nav-label">
                Next
                <ArrowRight :size="14" aria-hidden="true" />
              </span>
              <span class="project-nav-title motion-safe:group-hover:opacity-80">
                {{ nextProject.title }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>
