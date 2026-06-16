<script setup lang="ts">
import { profile, services } from '~/data/profile';
</script>

<template>
  <section id="about" class="section-padding section-muted">
    <div class="container mx-auto max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div>
          <p class="about-lead max-w-[60ch]">
            I build frontend architecture for enterprise and government
            products — multi-tenant platforms, design systems, and dashboards
            that hold up in production.
          </p>

          <div class="mt-5 space-y-4 about-body max-w-[60ch]">
            <p v-for="(paragraph, index) in profile.bio" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div>
          <h2 class="about-heading mb-6">
            What I do
          </h2>

          <dl class="space-y-6">
            <div v-for="service in services" :key="service.title">
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
