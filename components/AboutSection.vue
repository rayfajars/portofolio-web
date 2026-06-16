<script setup lang="ts">
import { profile, services } from '~/data/profile';

const sectionRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(sectionRef);
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="section-padding section-muted section-reveal"
    :class="{ 'is-inview': isInView }"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div>
          <p class="about-lead max-w-[60ch] reveal-slide-in" style="--reveal-i: 0">
            I build frontend architecture for enterprise and government
            products — multi-tenant platforms, design systems, and dashboards
            that hold up in production.
          </p>

          <div class="mt-5 space-y-4 about-body max-w-[60ch]">
            <p
              v-for="(paragraph, index) in profile.bio"
              :key="index"
              class="reveal-shift"
              :style="{ '--reveal-i': index + 1 }"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div>
          <h2 class="about-heading mb-6 reveal-shift" style="--reveal-i: 0">
            What I do
          </h2>

          <dl class="space-y-6">
            <div
              v-for="(service, index) in services"
              :key="service.title"
              class="reveal-shift"
              :style="{ '--reveal-i': index + 1 }"
            >
              <dt class="about-service-title">
                {{ service.title }}
              </dt>
              <dd class="about-service-desc mt-1">
                {{ service.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
