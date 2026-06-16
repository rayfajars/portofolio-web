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
  <section id="skills" class="section-padding section-cream">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow">Stack</span>
      </div>

      <h2 class="heading-serif text-4xl sm:text-5xl text-navy mb-10 text-balance">
        Tools of the trade
      </h2>

      <div class="divide-y divide-navy/10">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          class="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-4 py-8 first:pt-0"
        >
          <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-navy/45">
            {{ group.category }}
          </h3>

          <ul class="flex flex-wrap gap-2.5">
            <li
              v-for="skill in group.items"
              :key="skill"
              class="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-navy/15 bg-cream-light text-sm font-medium text-navy"
            >
              <span class="w-6 h-6 rounded-md bg-white flex items-center justify-center flex-shrink-0 border border-navy/5">
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
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
