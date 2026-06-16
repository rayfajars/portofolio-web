<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, BookOpen } from 'lucide-vue-next';
import type { Component } from 'vue';
import { profile, socialLinks } from '~/data/profile';

const sectionRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(sectionRef);

const socialIcons: Record<string, Component> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Medium: BookOpen,
};
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="section-padding section-navy section-reveal"
    :class="{ 'is-inview': isInView }"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener-light">
        <span class="section-eyebrow-light reveal-fade" style="--reveal-i: 0">Contact</span>
      </div>

      <div class="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <h2
            class="heading-serif text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.05] text-balance reveal-shift-lg"
            style="--reveal-i: 1"
          >
            Reach out.
          </h2>
          <p
            class="mt-6 text-lg leading-relaxed text-cream/70 max-w-md reveal-shift"
            style="--reveal-i: 2"
          >
            Open to frontend engineering roles and selective freelance work.
            Email me directly to get in touch.
          </p>
        </div>

        <div class="lg:pb-2 reveal-shift" style="--reveal-i: 3">
          <a
            :href="`mailto:${profile.email}`"
            class="cta-email-link group font-serif text-2xl sm:text-3xl text-cream pb-1 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 focus-visible:ring-offset-4 focus-visible:ring-offset-navy rounded-sm"
            style="--reveal-i: 4"
          >
            {{ profile.email }}
            <ArrowUpRight
              :size="24"
              class="motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:transition-transform"
              aria-hidden="true"
            />
          </a>

          <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <li
              v-for="(link, index) in socialLinks"
              :key="link.label"
              class="reveal-fade"
              :style="{ '--reveal-i': index + 5 }"
            >
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm"
              >
                <component :is="socialIcons[link.label]" :size="16" aria-hidden="true" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
