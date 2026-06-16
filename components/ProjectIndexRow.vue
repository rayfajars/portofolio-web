<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

interface Props {
  slug: string;
  title: string;
  description: string;
  year: number;
  badge?: string;
  tags?: string[];
  featured?: boolean;
  revealIndex?: number;
}

withDefaults(defineProps<Props>(), {
  featured: false,
});
</script>

<template>
  <li
    class="project-index-item reveal-shift"
    :class="{ 'project-index-item--featured': featured }"
    :style="revealIndex !== undefined ? { '--reveal-i': revealIndex } : undefined"
  >
    <NuxtLink
      :to="`/projects/${slug}`"
      class="project-index-row group focus-ring"
      :aria-label="`View ${title} project`"
    >
      <div class="project-index-row-main min-w-0 flex-1">
        <p v-if="featured" class="meta-key mb-2">Featured</p>
        <h2
          class="project-index-row-title"
          :class="featured ? 'project-index-row-title--featured' : undefined"
        >
          {{ title }}
        </h2>
        <p
          class="project-index-row-desc"
          :class="featured ? 'project-index-row-desc--featured' : undefined"
        >
          {{ description }}
        </p>
      </div>

      <div class="project-index-row-meta">
        <span v-if="badge" class="project-index-badge">{{ badge }}</span>
        <span class="project-index-year tabular-nums">{{ year }}</span>
        <div v-if="tags && tags.length" class="project-index-tags">
          <span
            v-for="tag in tags.slice(0, 2)"
            :key="tag"
            class="project-card-tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <ArrowUpRight
        :size="featured ? 20 : 18"
        class="project-index-arrow shrink-0"
        aria-hidden="true"
      />
    </NuxtLink>
  </li>
</template>
