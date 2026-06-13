<script setup lang="ts">
import { profile } from '~/data/profile';
</script>

<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark/50">
    <div class="container mx-auto max-w-4xl">
      <h2 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-navy">
        About Me
      </h2>

      <div class="space-y-6 text-lg leading-relaxed text-navy/70">
        <p v-for="(paragraph, index) in profile.bio" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
