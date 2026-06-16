<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';
import { profile, socialLinks } from '~/data/profile';
</script>

<template>
  <section id="contact" class="section-padding section-navy">
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener-light">
        <span class="section-eyebrow-light">Contact</span>
      </div>

      <div class="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <h2 class="heading-serif text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.05] text-balance">
            Reach out.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-cream/70 max-w-md">
            Open to frontend engineering roles and selective freelance work.
            Email me directly to get in touch.
          </p>
        </div>

        <div class="lg:pb-2">
          <a
            :href="`mailto:${profile.email}`"
            class="group inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl text-cream border-b border-cream/30 pb-1 hover:border-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 focus-visible:ring-offset-4 focus-visible:ring-offset-navy rounded-sm"
          >
            {{ profile.email }}
            <ArrowUpRight
              :size="24"
              class="motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform"
              aria-hidden="true"
            />
          </a>

          <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <li v-for="link in socialLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-cream/70 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
