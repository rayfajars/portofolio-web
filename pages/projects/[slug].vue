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
  const parts: string[] = [];
  if (project.role) parts.push(project.role);
  if (project.duration) parts.push(project.duration);
  return parts.join(' · ');
});

const hasChallengeSolution = computed(
  () => Boolean(project.challenge && project.solution),
);

const hasImpact = computed(() => Boolean(project.results?.length));

const hasNarrativeBody = computed(
  () => hasChallengeSolution.value || hasImpact.value,
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
    <header
      class="project-hero"
      :class="{ 'project-hero--has-narrative': hasNarrativeBody }"
    >
      <div class="container mx-auto max-w-6xl">
        <div class="project-hero-topbar">
          <NuxtLink
            to="/projects"
            class="project-hero-backlink"
          >
            <ArrowLeft :size="16" aria-hidden="true" />
            Back to projects
          </NuxtLink>

          <nav
            v-if="previousProject || nextProject"
            class="project-hero-nav"
            aria-label="Project navigation"
          >
            <NuxtLink
              v-if="previousProject"
              :to="`/projects/${previousProject.slug}`"
              class="project-hero-backlink group"
            >
              <span class="sr-only">Previous project:</span>
              <ArrowLeft :size="16" aria-hidden="true" />
              <span class="project-hero-nav-label motion-safe:group-hover:text-navy">
                {{ previousProject.title }}
              </span>
            </NuxtLink>

            <NuxtLink
              v-if="nextProject"
              :to="`/projects/${nextProject.slug}`"
              class="project-hero-backlink group"
            >
              <span class="sr-only">Next project:</span>
              <span class="project-hero-nav-label motion-safe:group-hover:text-navy">
                {{ nextProject.title }}
              </span>
              <ArrowRight :size="16" aria-hidden="true" />
            </NuxtLink>
          </nav>
        </div>

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
      v-if="hasNarrativeBody"
      class="project-detail-body"
    >
      <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          v-if="hasChallengeSolution"
          class="project-detail-grid"
          aria-labelledby="project-challenge"
        >
          <div class="project-detail-challenge">
            <h2 id="project-challenge" class="case-study-heading">Challenge</h2>
            <p class="project-detail-prose">
              {{ project.challenge }}
            </p>
          </div>
          <div class="project-detail-solution">
            <h2 class="case-study-heading">Solution</h2>
            <p class="project-detail-prose">
              {{ project.solution }}
            </p>
          </div>
        </div>

        <section
          v-if="hasImpact"
          class="project-detail-impact"
          :class="{ 'project-detail-impact--after-grid': hasChallengeSolution }"
          aria-labelledby="project-impact"
        >
          <h2 id="project-impact" class="case-study-heading">
            Impact
          </h2>
          <ul class="project-detail-results">
            <li
              v-for="(result, index) in project.results"
              :key="index"
              class="project-detail-result"
            >
              <span
                class="project-detail-result-marker"
                aria-hidden="true"
              />
              <span>{{ result }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </article>
</template>
