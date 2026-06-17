<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-vue-next';
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
  compact?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
});

const badge = computed(() =>
  getProjectBadge({ context: props.context, company: props.company } as Project),
);

const tagLimit = computed(() => (props.compact ? 2 : 3));
</script>

<template>
  <Card
    class="project-card group h-full overflow-hidden motion-safe:transition-[border-color,background-color] motion-safe:duration-200 motion-reduce:transition-none"
    :class="compact ? 'project-card--compact' : 'project-card--default'"
  >
    <NuxtLink :to="`/projects/${slug}`" class="block h-full focus-ring rounded-lg">
      <CardHeader class="p-0">
        <div
          class="project-card-image"
          :class="compact ? 'aspect-[5/3]' : 'aspect-[16/10]'"
        >
          <NuxtImg
            v-if="image"
            :src="image"
            :alt="`${title} preview`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center project-card-image-fallback"
          >
            <span
              class="font-sans text-navy/25"
              :class="compact ? 'text-2xl' : 'text-4xl'"
              aria-hidden="true"
            >
              {{ title.charAt(0) }}
            </span>
          </div>

          <div v-if="badge" class="absolute top-2 left-2 max-w-[80%]">
            <span class="project-card-badge" :class="{ 'project-card-badge--compact': compact }">
              {{ badge }}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent
        class="project-card-body"
        :class="compact ? 'p-3.5' : 'p-5'"
      >
        <div class="project-card-heading">
          <CardTitle :class="compact ? 'project-card-title-sm' : 'project-card-title'">
            {{ title }}
          </CardTitle>
          <ArrowUpRight
            :size="compact ? 15 : 17"
            class="project-card-arrow shrink-0"
            aria-hidden="true"
          />
        </div>
        <CardDescription
          class="project-card-desc"
          :class="compact ? 'line-clamp-2 text-sm' : 'line-clamp-3'"
        >
          {{ description }}
        </CardDescription>

        <div v-if="tags && tags.length" class="flex flex-wrap gap-1 mt-2.5">
          <span
            v-for="tag in tags.slice(0, tagLimit)"
            :key="tag"
            class="project-card-tag"
          >
            {{ tag }}
          </span>
        </div>
      </CardContent>
    </NuxtLink>

    <CardFooter
      v-if="repoUrl || liveUrl"
      class="flex gap-3 border-t border-navy/10 mt-auto"
      :class="compact ? 'px-3.5 py-2.5' : 'px-5 py-4'"
    >
      <a
        v-if="repoUrl"
        :href="repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card-link"
        :class="{ 'text-xs gap-1': compact }"
        @click.stop
      >
        <Github :size="compact ? 12 : 14" aria-hidden="true" />
        <span>Code</span>
      </a>

      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card-link"
        :class="{ 'text-xs gap-1': compact }"
        @click.stop
      >
        <ExternalLink :size="compact ? 12 : 14" aria-hidden="true" />
        <span>Live</span>
      </a>
    </CardFooter>
  </Card>
</template>
