<script setup lang="ts">
const frontendSkills = [
  'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Chart.js', 'Leaflet.js',
];

const backendSkills = [
  'Node.js', 'Express.js', 'Laravel', 'PHP', 'CodeIgniter',
];

const toolsSkills = [
  'Git', 'Storybook', 'SonarQube', 'Unleash', 'Figma', 'Keycloak',
];

const architectureSkills = [
  'RBAC', 'Multi-tenant Architecture', 'Design System',
  'Component Library', 'REST API Integration',
  'Feature Flagging', 'Performance Optimization',
];
</script>

<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
        About Me
      </h2>

      <div class="space-y-6 text-lg leading-relaxed">
        <p>
          I'm a <strong>Frontend Engineer with 5+ years of experience</strong> building web applications using 
          Vue.js, Nuxt.js, and TypeScript. I specialize in frontend architecture, multi-tenant systems, 
          reusable component libraries, and developer experience improvements.
        </p>

        <p>
          I've built and maintained dashboards, RBAC authentication systems, internal design systems, 
          and high-performance admin platforms for <strong>government and enterprise environments</strong>. 
          I'm passionate about creating scalable, maintainable code and improving the lives of developers 
          and end users alike.
        </p>

        <p>
          I hold a Bachelor of Engineering in Electrical Engineering from 
          <strong>UIN Sunan Gunung Djati Bandung</strong> (2014–2018).
        </p>

        <div class="pt-6 space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-3">Frontend</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in frontendSkills"
                :key="skill"
                class="px-4 py-2 border border-black/20 text-sm font-medium bg-white"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Backend</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in backendSkills"
                :key="skill"
                class="px-4 py-2 border border-black/20 text-sm font-medium bg-white"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Tools & Platforms</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in toolsSkills"
                :key="skill"
                class="px-4 py-2 border border-black/20 text-sm font-medium bg-white"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Architecture & Concepts</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in architectureSkills"
                :key="skill"
                class="px-4 py-2 border border-black/20 text-sm font-medium bg-white"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
