<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];
</script>

<template>
  <footer class="border-t border-black/10 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} All rights reserved.
        </p>
        
        <div class="flex items-center gap-6">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-70 transition-opacity"
            :aria-label="link.label"
          >
            <component :is="link.icon" :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
