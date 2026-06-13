<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';
import { profile } from '~/data/profile';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();

const firstName = profile.name.split(' ')[0];
const lastName = profile.name.split(' ').slice(1).join(' ');
</script>

<template>
  <section id="hero" class="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 pt-8 pb-20 bg-cream overflow-hidden">
    <div
      class="absolute inset-0 opacity-40"
      style="background-image: radial-gradient(circle, rgba(27,33,59,0.06) 1px, transparent 1px); background-size: 24px 24px;"
    />

    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
        <div class="space-y-6">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-navy/50">
            Hello, I'm
          </p>

          <h1 class="heading-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-navy">
            <span class="italic">{{ firstName }}</span>
            <br>
            <span>{{ lastName }}</span>
          </h1>

          <p class="text-lg sm:text-xl text-navy/70 max-w-lg leading-relaxed">
            {{ profile.title }} crafting scalable web applications with
            <span class="font-semibold text-navy">Vue.js</span>,
            <span class="font-semibold text-navy">Nuxt.js</span>, and
            <span class="font-semibold text-navy">TypeScript</span>.
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <Button
              @click="emit('scrollTo', 'projects')"
              size="lg"
              class="group"
            >
              See My Work
              <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              @click="emit('scrollTo', 'about')"
              size="lg"
              variant="outline"
            >
              About Me
            </Button>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-navy/10 shadow-card bg-cream-light">
            <NuxtImg
              src="/images/profile.png"
              :alt="profile.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
