<script setup lang="ts">
const skills = [
  'Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS',
  'JavaScript', 'React', 'HTML/CSS', 'Git',
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
          I'm a passionate frontend developer with a focus on creating minimal, 
          impactful digital experiences. My approach combines clean design 
          with robust functionality.
        </p>
        
        <p>
          With expertise in modern web technologies, I build performant, 
          accessible, and user-friendly applications that solve real problems.
        </p>
        
        <div class="pt-6">
          <h3 class="text-xl font-semibold mb-4">Skills & Technologies</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 border border-black/20 text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
