<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next';
import { education } from '~/data/profile';
</script>

<template>
  <section id="education" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark/50">
    <div class="container mx-auto max-w-4xl">
      <h2 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-navy">
        Education
      </h2>

      <div
        v-for="(edu, index) in education"
        :key="index"
        class="flex items-start gap-4 p-6 border border-navy/10 bg-cream rounded-2xl"
      >
        <div class="w-12 h-12 flex items-center justify-center border border-navy/10 rounded-xl flex-shrink-0 bg-cream-light">
          <GraduationCap :size="24" class="text-navy" />
        </div>
        <div>
          <h3 class="text-lg font-bold text-navy">{{ edu.degree }}</h3>
          <p class="text-base text-navy/60">{{ edu.field }}</p>
          <p class="text-sm text-navy/50 mt-1">
            {{ edu.institution }} · {{ edu.location }}
          </p>
          <p class="text-sm text-navy/50">{{ edu.duration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
