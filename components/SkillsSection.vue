<script setup lang="ts">
import type { Component } from 'vue';
import {
  Code2,
  Lock,
  Network,
  Puzzle,
  Component as ComponentIcon,
  Plug,
  Gauge,
  Flag,
} from 'lucide-vue-next';
import { skillGroups } from '~/data/profile';
import { getSkillBrandIconUrl, usesBrandIcon } from '~/utils/skillBrands';

const sectionRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(sectionRef);

const conceptIcons: Record<string, Component> = {
  'RBAC': Lock,
  'Multi-tenant Architecture': Network,
  'Design System': Puzzle,
  'Component Library': ComponentIcon,
  'REST API Integration': Plug,
  'Feature Flagging': Flag,
  'Performance Optimization': Gauge,
};

const getConceptIcon = (skill: string) => conceptIcons[skill] ?? Code2;

const toolFallbackIcons: Record<string, Component> = {
  Unleash: Flag,
};

const getFallbackIcon = (category: string, skill: string) => {
  if (category === 'Architecture & Concepts') {
    return getConceptIcon(skill);
  }
  return toolFallbackIcons[skill] ?? Code2;
};
</script>

<template>
  <section
    id="skills"
    ref="sectionRef"
    class="section-padding section-cream section-reveal"
    :class="{ 'is-inview': isInView }"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow reveal-fade" style="--reveal-i: 0">Stack</span>
      </div>

      <h2
        class="heading-serif text-4xl sm:text-5xl text-navy mb-10 text-balance reveal-shift-lg"
        style="--reveal-i: 1"
      >
        What I build with
      </h2>

      <div class="divide-y divide-navy/10">
        <div
          v-for="(group, groupIndex) in skillGroups"
          :key="group.category"
          class="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-4 py-8 first:pt-0 reveal-shift"
          :style="{ '--reveal-i': groupIndex + 2 }"
        >
          <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-navy/45">
            {{ group.category }}
          </h3>

          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(skill, index) in group.items"
              :key="skill"
              class="skill-chip"
              :style="{ '--chip-i': index }"
            >
              <span class="skill-chip-icon">
                <img
                  v-if="usesBrandIcon(group.category, skill)"
                  :src="getSkillBrandIconUrl(skill)!"
                  :alt="`${skill} icon`"
                  class="w-3.5 h-3.5 object-contain"
                  loading="lazy"
                  width="14"
                  height="14"
                >
                <component
                  v-else
                  :is="getFallbackIcon(group.category, skill)"
                  :size="14"
                  class="text-navy"
                  aria-hidden="true"
                />
              </span>
              <span class="skill-chip-label">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
