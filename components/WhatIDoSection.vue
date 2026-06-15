<script setup lang="ts">
import { services } from '~/data/profile';
</script>

<template>
  <section id="services" class="section-cream py-24 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        <div>
          <h2 class="heading-serif text-4xl sm:text-5xl text-navy sticky top-28">
            What I Do
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 gap-8 sm:gap-10">
          <div
            v-for="service in services"
            :key="service.title"
            class="space-y-3 group"
          >
            <h3 class="heading-serif text-xl sm:text-2xl text-navy group-hover:opacity-80 transition-opacity">
              {{ service.title }}
            </h3>
            <p class="text-sm sm:text-base text-navy/60 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
