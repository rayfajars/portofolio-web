<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { ExternalLink, Github, ArrowRight } from 'lucide-vue-next';
import { getProjectBadge } from '~/utils/projects';
import type { Project } from '~/data/projects';
import { computed } from 'vue';

interface Props {
  slug: string;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  tags?: string[];
  context?: Project['context'];
  company?: string;
}

const props = defineProps<Props>();

const badge = computed(() =>
  getProjectBadge({ context: props.context, company: props.company } as Project),
);
</script>

<template>
  <Card class="group hover:shadow-card transition-all duration-300 border-navy/10 overflow-hidden rounded-2xl bg-cream-light hover:-translate-y-1 h-full">
    <NuxtLink :to="`/projects/${slug}`" target="_blank" rel="noopener noreferrer" class="block h-full">
      <CardHeader class="p-0">
        <div class="aspect-[16/10] bg-navy/5 overflow-hidden relative">
          <NuxtImg
            v-if="image"
            :src="image"
            :alt="title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/5 to-navy/10"
          >
            <span class="text-4xl font-bold text-navy/20">
              {{ title.charAt(0) }}
            </span>
          </div>

          <div class="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="text-cream font-medium flex items-center gap-2 text-sm">
              View Details
              <ArrowRight :size="16" />
            </span>
          </div>

          <div v-if="badge" class="absolute top-3 right-3 max-w-[70%]">
            <span class="block px-2.5 py-1 text-[10px] font-semibold bg-navy text-cream rounded-full uppercase tracking-wide truncate">
              {{ badge }}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent class="p-5">
        <CardTitle class="text-lg mb-2 text-navy group-hover:opacity-80 transition-opacity">
          {{ title }}
        </CardTitle>
        <CardDescription class="text-sm leading-relaxed text-navy/60 line-clamp-2">
          {{ description }}
        </CardDescription>

        <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 mt-3">
          <span
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] px-2 py-0.5 rounded-full bg-navy/5 text-navy/60 font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </CardContent>
    </NuxtLink>

    <CardFooter v-if="repoUrl || liveUrl" class="p-5 pt-0 flex gap-4">
      <a
        v-if="repoUrl"
        :href="repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="flex items-center gap-1.5 text-xs text-navy/60 hover:text-navy transition-colors"
      >
        <Github :size="14" />
        <span>Code</span>
      </a>

      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="flex items-center gap-1.5 text-xs text-navy/60 hover:text-navy transition-colors"
      >
        <ExternalLink :size="14" />
        <span>Live Demo</span>
      </a>
    </CardFooter>
  </Card>
</template>
