<script setup lang="ts">
import { Github, Linkedin, Mail, BookOpen } from 'lucide-vue-next';
import { profile } from '~/data/profile';

const links = [
  { icon: Github, href: profile.social.github, label: 'GitHub', external: true },
  { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn', external: true },
  { icon: BookOpen, href: profile.social.medium, label: 'Medium', external: true },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email', external: false },
];
</script>

<template>
  <footer id="contact" class="border-t border-navy/10 bg-cream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-navy/50">
          © {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
        </p>

        <div class="flex items-center gap-6">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="text-navy/60 hover:text-navy transition-colors"
            :aria-label="link.label"
          >
            <component :is="link.icon" :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
