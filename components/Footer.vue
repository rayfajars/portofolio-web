<script setup lang="ts">
import { profile } from '~/data/profile';

const footerRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(footerRef, { useContentAnchor: false });
</script>

<template>
  <footer
    ref="footerRef"
    class="footer-reveal bg-cream"
    :class="{ 'is-inview': isInView }"
  >
    <div class="footer-rule w-full h-px bg-navy/10" aria-hidden="true" />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-navy/50">
        <p class="reveal-fade" style="--reveal-i: 0">
          © {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
        </p>
        <p class="reveal-fade" style="--reveal-i: 1">
          {{ profile.location }}
        </p>
      </div>
    </div>
  </footer>
</template>
