<script setup lang="ts">
import { computed } from 'vue';
import { projects } from '~/data/projects';
import { getProjectBadge } from '~/utils/projects';
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';

const featured = computed(() => projects.slice(0, 5));
const lead = computed(() => featured.value[0]);
const rest = computed(() => featured.value.slice(1));
</script>

<template>
  <section id="projects" class="section-padding section-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow">Selected Work</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <h2 class="heading-serif text-4xl sm:text-5xl text-navy text-balance max-w-xl">
          Things I've built that matter
        </h2>
        <NuxtLink to="/projects" class="shrink-0">
          <Button variant="outline" class="gap-2">
            All {{ projects.length }} projects
            <ArrowRight :size="18" aria-hidden="true" />
          </Button>
        </NuxtLink>
      </div>

      <NuxtLink
        v-if="lead"
        :to="`/projects/${lead.slug}`"
        class="group block editorial-divide pt-10 mb-4 focus-ring rounded-lg"
      >
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="aspect-[16/10] overflow-hidden rounded-lg bg-navy/5 border border-navy/10 order-last lg:order-first">
            <NuxtImg
              v-if="lead.image"
              :src="lead.image"
              :alt="`${lead.title} preview`"
              class="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 motion-reduce:transition-none"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="font-serif text-6xl text-navy/15" aria-hidden="true">{{ lead.title.charAt(0) }}</span>
            </div>
          </div>

          <div>
            <p class="section-eyebrow mb-4">{{ getProjectBadge(lead) }}</p>
            <h3 class="font-serif text-3xl sm:text-4xl text-navy leading-tight text-balance">
              {{ lead.title }}
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-navy/70 max-w-prose">
              {{ lead.description }}
            </p>
            <div v-if="lead.tags?.length" class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in lead.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy/70 font-medium"
              >
                {{ tag }}
              </span>
            </div>
            <span class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              View project
              <ArrowUpRight
                :size="16"
                class="motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </NuxtLink>

      <div class="grid sm:grid-cols-2 gap-x-8 gap-y-2 editorial-divide">
        <NuxtLink
          v-for="project in rest"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="group flex items-start justify-between gap-4 py-6 border-b border-navy/10 focus-ring rounded-sm"
        >
          <div>
            <p class="section-eyebrow mb-2">{{ getProjectBadge(project) }}</p>
            <h3 class="font-serif text-xl text-navy group-hover:opacity-80 transition-opacity">
              {{ project.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-navy/70 line-clamp-2 max-w-md">
              {{ project.description }}
            </p>
          </div>
          <ArrowUpRight
            :size="20"
            class="flex-shrink-0 mt-1 text-navy/40 motion-safe:group-hover:text-navy motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-all"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
