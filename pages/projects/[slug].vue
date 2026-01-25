<script setup lang="ts">
import { ArrowLeft, ExternalLink, Github } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';

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

// SEO
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
  <div class="min-h-screen bg-white">
    <!-- Back Button -->
    <div class="border-b border-black/10 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button
          variant="ghost"
          @click="router.push('/#projects')"
          class="gap-2"
        >
          <ArrowLeft :size="20" />
          <span>Back to Projects</span>
        </Button>
      </div>
    </div>

    <!-- Project Hero -->
    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-4 mb-8">
          <!-- Context Badge -->
          <div v-if="project.context" class="inline-block">
            <span class="px-3 py-1.5 text-xs font-semibold border-2 border-black bg-black text-white uppercase tracking-wide">
              {{ project.context }}
            </span>
          </div>
          
          <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{{ project.year }}</span>
            <span v-if="project.duration">• {{ project.duration }}</span>
            <span v-if="project.role">• {{ project.role }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {{ project.title }}
          </h1>
          
          <p class="text-lg sm:text-xl text-muted-foreground">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-3 py-1 text-sm border border-black/20 rounded"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Links -->
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

    <!-- About Project -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-bold mb-6">About This Project</h2>
        <p class="text-lg leading-relaxed">
          {{ project.fullDescription }}
        </p>
      </div>
    </section>

    <!-- Challenge & Solution -->
    <section v-if="project.challenge && project.solution" class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-4xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">Challenge</h2>
            <p class="text-base leading-relaxed text-muted-foreground">
              {{ project.challenge }}
            </p>
          </div>
          
          <div>
            <h2 class="text-2xl font-bold mb-4">Solution</h2>
            <p class="text-base leading-relaxed text-muted-foreground">
              {{ project.solution }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section v-if="project.results && project.results.length" class="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-bold mb-6">Results & Impact</h2>
        <ul class="grid sm:grid-cols-2 gap-4">
          <li
            v-for="(result, index) in project.results"
            :key="index"
            class="flex items-start gap-3 p-4 border border-black/10 bg-white"
          >
            <span class="mt-1.5 w-2 h-2 bg-black rounded-full flex-shrink-0" />
            <span class="text-base">{{ result }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Navigation to Other Projects -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 border-t border-black/10">
      <div class="container mx-auto max-w-4xl">
        <div class="flex flex-col sm:flex-row justify-between gap-4">
          <NuxtLink
            v-if="previousProject"
            :to="`/projects/${previousProject.slug}`"
            class="group flex-1 p-6 border border-black/10 hover:border-black/30 transition-colors"
          >
            <div class="text-sm text-muted-foreground mb-2">← Previous Project</div>
            <div class="font-semibold group-hover:opacity-70 transition-opacity">
              {{ previousProject.title }}
            </div>
          </NuxtLink>
          
          <NuxtLink
            v-if="nextProject"
            :to="`/projects/${nextProject.slug}`"
            class="group flex-1 p-6 border border-black/10 hover:border-black/30 transition-colors text-right"
          >
            <div class="text-sm text-muted-foreground mb-2">Next Project →</div>
            <div class="font-semibold group-hover:opacity-70 transition-opacity">
              {{ nextProject.title }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
