<script setup lang="ts">
import { profile, services } from '~/data/profile';
</script>

<template>
  <section id="about" class="section-padding section-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow">About</span>
      </div>

      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
        <div>
          <p class="lead-statement">
            I build frontend architecture for enterprise and government
            products — multi-tenant platforms, design systems, and dashboards
            that hold up in production.
          </p>

          <div class="mt-8 space-y-5 text-lg leading-relaxed text-navy/70 max-w-prose">
            <p v-for="(paragraph, index) in profile.bio" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-sm font-semibold uppercase tracking-[0.14em] text-navy/45 mb-6">
            What I do
          </h2>
          <dl class="divide-y divide-navy/10">
            <div v-for="service in services" :key="service.title" class="py-5 first:pt-0">
              <dt class="font-serif text-xl text-navy mb-1.5">{{ service.title }}</dt>
              <dd class="text-base leading-relaxed text-navy/70">{{ service.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
