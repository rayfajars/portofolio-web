<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { ArrowRight, Download } from 'lucide-vue-next';
import { profile } from '~/data/profile';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();

const firstName = profile.name.split(' ')[0];
const lastName = profile.name.split(' ').slice(1).join(' ');
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[100svh] flex items-start section-padding pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden"
  >
    <div class="hero-color-panel hidden lg:block" aria-hidden="true" />
    <div class="hero-accent-block hidden lg:block" aria-hidden="true" />

    <div class="container relative z-10 mx-auto max-w-7xl w-full">
      <div class="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-8 xl:gap-12 items-start lg:items-center">
        <div>
          <h1 class="hero-display hero-enter" style="--hero-i: 0">
            <span class="italic font-normal">{{ firstName }}</span>
            <br>
            <span>{{ lastName }}</span>
          </h1>

          <p
            class="hero-enter mt-6 sm:mt-7 max-w-xl text-xl sm:text-2xl leading-relaxed text-navy/75 text-pretty"
            style="--hero-i: 1"
          >
            <span class="font-bold text-navy">{{ profile.title }}</span>
            building scalable web applications in
            <span class="text-navy font-semibold">Vue.js</span>,
            <span class="text-navy font-semibold">Nuxt.js</span>, and
            <span class="text-navy font-semibold">TypeScript</span>.
          </p>

          <div
            class="hero-enter mt-8 sm:mt-10 flex flex-wrap gap-4"
            style="--hero-i: 2"
          >
            <Button @click="emit('scrollTo', 'projects')" size="lg" class="group text-base">
              See My Work
              <ArrowRight
                :size="18"
                class="motion-safe:group-hover:translate-x-1 motion-safe:transition-transform duration-300 motion-reduce:transition-none"
              />
            </Button>

            <Button
              as="a"
              :href="profile.resumeUrl"
              :download="profile.resumeDownloadName"
              size="lg"
              variant="outline"
              class="gap-2 text-base border-navy/25 hover:bg-navy/8"
            >
              <Download :size="18" />
              Download CV
            </Button>
          </div>
        </div>

        <div
          class="hero-photo-enter order-first lg:order-last lg:-mr-6 xl:-mr-12 lg:mt-4"
          style="--hero-i: 3"
        >
          <div class="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md xl:max-w-lg">
            <div
              class="aspect-[4/5] overflow-hidden rounded-lg border-2 border-cream bg-cream-light motion-safe:lg:transition-transform motion-safe:lg:duration-500 motion-safe:lg:ease-out motion-reduce:transition-none motion-safe:hover:lg:-translate-y-1"
            >
              <NuxtImg
                src="/photo.png"
                :alt="`Portrait of ${profile.name}`"
                class="w-full h-full object-cover"
                width="480"
                height="600"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
