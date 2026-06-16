<script setup lang="ts">
import { education } from '~/data/profile';
</script>

<template>
  <section id="education" class="section-padding section-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow">Education</span>
      </div>

      <div class="divide-y divide-navy/10">
        <article
          v-for="(edu, index) in education"
          :key="index"
          class="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-3 py-8 first:pt-0"
        >
          <div>
            <p class="meta-val">{{ edu.duration }}</p>
            <p class="meta-key mt-1">{{ edu.location }}</p>
          </div>
          <div>
            <h3 class="font-serif text-2xl text-navy">{{ edu.degree }}</h3>
            <p class="text-base text-navy/70 mt-1">{{ edu.field }}</p>
            <p class="text-sm text-navy/60 mt-2">{{ edu.institution }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
