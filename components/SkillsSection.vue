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
  Shield,
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
  Keycloak: Shield,
};

const getFallbackIcon = (category: string, skill: string) => {
  if (category === 'Architecture & Concepts') {
    return getConceptIcon(skill);
  }
  return toolFallbackIcons[skill] ?? Code2;
};
</script>

<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
    <div class="container mx-auto max-w-4xl">
      <h2 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-navy">
        Skills & Technologies
      </h2>

      <div class="space-y-10">
        <div v-for="group in skillGroups" :key="group.category">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-navy/40 mb-4">
            {{ group.category }}
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <div
              v-for="skill in group.items"
              :key="skill"
              class="flex items-center gap-3 px-4 py-3 rounded-xl border border-navy/10 bg-cream-light hover:border-navy/20 hover:shadow-soft transition-all duration-300"
            >
              <div class="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-navy/5">
                <img
                  v-if="usesBrandIcon(group.category, skill)"
                  :src="getSkillBrandIconUrl(skill)!"
                  :alt="`${skill} icon`"
                  class="w-5 h-5 object-contain"
                  loading="lazy"
                >
                <component
                  v-else
                  :is="getFallbackIcon(group.category, skill)"
                  :size="18"
                  class="text-navy"
                />
              </div>
              <span class="text-sm font-medium text-navy leading-tight">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
