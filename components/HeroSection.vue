<script setup lang="ts">
import { computed } from 'vue';
import { Button } from '~/components/ui/button';
import { ArrowRight, Download } from 'lucide-vue-next';
import { profile } from '~/data/profile';
import { experiences } from '~/data/experience';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();

const firstName = profile.name.split(' ')[0];
const lastName = profile.name.split(' ').slice(1).join(' ');

const current = computed(() =>
  experiences.find((exp) => exp.endDate === 'Present'),
);
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[92vh] flex items-center section-padding pt-10 pb-16"
  >
    <div class="container mx-auto max-w-6xl w-full">
      <div class="grid lg:grid-cols-[1.45fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p class="inline-flex items-center gap-2 mb-8 text-sm font-medium text-navy/70">
            <span class="relative flex h-2 w-2" aria-hidden="true">
              <span class="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-navy/40" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-navy" />
            </span>
            Available for new roles
          </p>

          <h1 class="heading-display">
            <span class="italic">{{ firstName }}</span>
            <br>
            <span>{{ lastName }}</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-navy/70">
            <span class="font-semibold text-navy">{{ profile.title }}</span>
            with {{ profile.yearsOfExperience }} years building scalable web
            applications in Vue.js, Nuxt.js, and TypeScript — from multi-tenant
            platforms to internal design systems.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <Button @click="emit('scrollTo', 'projects')" size="lg" class="group">
              See My Work
              <ArrowRight
                :size="18"
                class="motion-safe:group-hover:translate-x-1 motion-safe:transition-transform duration-300"
              />
            </Button>

            <Button
              as="a"
              :href="profile.resumeUrl"
              :download="profile.resumeDownloadName"
              size="lg"
              variant="outline"
              class="gap-2"
            >
              <Download :size="18" />
              Download CV
            </Button>
          </div>

          <dl class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl editorial-divide pt-8">
            <div>
              <dt class="meta-key">Based in</dt>
              <dd class="meta-val">{{ profile.location }}</dd>
            </div>
            <div>
              <dt class="meta-key">Experience</dt>
              <dd class="meta-val">{{ profile.yearsOfExperience }} years</dd>
            </div>
            <div v-if="current" class="col-span-2 sm:col-span-1">
              <dt class="meta-key">Currently</dt>
              <dd class="meta-val">{{ current.company.split(' (')[0] }}</dd>
            </div>
          </dl>
        </div>

        <div class="order-first lg:order-last">
          <div class="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
            <div class="aspect-[4/5] overflow-hidden rounded-lg border border-navy/10 bg-cream-light">
              <NuxtImg
                src="/photo.png"
                :alt="`Portrait of ${profile.name}`"
                class="w-full h-full object-cover"
                width="420"
                height="525"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
