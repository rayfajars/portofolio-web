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
  <Card class="group h-full overflow-hidden border-navy/10 bg-cream-light motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-reduce:transition-none motion-safe:hover:shadow-card motion-safe:hover:-translate-y-1">
    <NuxtLink :to="`/projects/${slug}`" class="block h-full focus-ring rounded-lg">
      <CardHeader class="p-0">
        <div class="aspect-[16/10] bg-navy/5 overflow-hidden relative">
          <NuxtImg
            v-if="image"
            :src="image"
            :alt="`${title} preview`"
            class="w-full h-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 motion-reduce:transition-none"
            loading="lazy"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center bg-navy/5"
          >
            <span class="text-4xl font-bold text-navy/20" aria-hidden="true">
              {{ title.charAt(0) }}
            </span>
          </div>

          <div class="absolute inset-0 bg-navy/70 opacity-0 motion-safe:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300 motion-reduce:opacity-0 flex items-center justify-center">
            <span class="text-cream font-medium flex items-center gap-2 text-sm">
              View Details
              <ArrowRight :size="16" aria-hidden="true" />
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
        <CardTitle class="text-lg mb-2 text-navy motion-safe:group-hover:opacity-80 motion-safe:transition-opacity">
          {{ title }}
        </CardTitle>
        <CardDescription class="text-sm leading-relaxed text-navy/70 line-clamp-2">
          {{ description }}
        </CardDescription>

        <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 mt-3">
          <span
            v-for="tag in tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] px-2 py-0.5 rounded-full bg-navy/5 text-navy/70 font-medium"
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
        class="flex items-center gap-1.5 text-xs text-navy/70 hover:text-navy transition-colors focus-ring rounded-sm"
        @click.stop
      >
        <Github :size="14" aria-hidden="true" />
        <span>Code</span>
      </a>

      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-xs text-navy/70 hover:text-navy transition-colors focus-ring rounded-sm"
        @click.stop
      >
        <ExternalLink :size="14" aria-hidden="true" />
        <span>Live Demo</span>
      </a>
    </CardFooter>
  </Card>
</template>
