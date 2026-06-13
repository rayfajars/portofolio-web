<script setup lang="ts">
import type { Component } from 'vue';
import {
  Boxes,
  Layers,
  Code2,
  Braces,
  Palette,
  BarChart3,
  Map,
  Server,
  Zap,
  Database,
  GitBranch,
  BookOpen,
  ShieldCheck,
  Flag,
  Figma,
  CheckSquare,
  Shield,
  Lock,
  Network,
  Puzzle,
  Component as ComponentIcon,
  Plug,
  Gauge,
} from 'lucide-vue-next';
import { skillGroups } from '~/data/profile';

const skillIcons: Record<string, Component> = {
  'Vue.js': Boxes,
  'Nuxt.js': Layers,
  'TypeScript': Code2,
  'JavaScript': Braces,
  'Tailwind CSS': Palette,
  'Chart.js': BarChart3,
  'Leaflet.js': Map,
  'Node.js': Server,
  'Express.js': Zap,
  'Laravel': Database,
  'PHP': Code2,
  'CodeIgniter': Code2,
  'Git': GitBranch,
  'Storybook': BookOpen,
  'SonarQube': ShieldCheck,
  'Unleash': Flag,
  'Figma': Figma,
  'ClickUp': CheckSquare,
  'Keycloak': Shield,
  'RBAC': Lock,
  'Multi-tenant Architecture': Network,
  'Design System': Puzzle,
  'Component Library': ComponentIcon,
  'REST API Integration': Plug,
  'Feature Flagging': Flag,
  'Performance Optimization': Gauge,
};

const getSkillIcon = (skill: string) => skillIcons[skill] ?? Code2;
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
              <div class="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                <component :is="getSkillIcon(skill)" :size="18" class="text-navy" />
              </div>
              <span class="text-sm font-medium text-navy leading-tight">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
