<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-vue-next';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();
</script>

<template>
  <section id="hero"
    class="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/50 to-white" />
    <div class="absolute inset-0"
      style="background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: 24px 24px;" />

    <!-- Content -->
    <div class="container mx-auto max-w-4xl relative z-10">
      <div class="flex flex-col items-center text-center gap-8">
        <!-- Profile Photo -->
        <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-black/10 bg-white">
          <NuxtImg src="/images/profile.png" alt="Ray Fajar Salinggih" class="w-full h-full object-cover grayscale" />
        </div>

        <div>
          <div class="mb-3 inline-flex items-center gap-2 px-3 py-1 border border-black/20 text-sm text-muted-foreground">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to opportunities · Bandung, Indonesia
          </div>

          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Ray Fajar<br />Salinggih
          </h1>

          <p class="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Frontend Engineer
          </p>

          <p class="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            5+ years building web applications with <strong class="text-black">Vue.js</strong>, 
            <strong class="text-black">Nuxt.js</strong> & <strong class="text-black">TypeScript</strong>. 
            Specialized in frontend architecture, design systems, and multi-tenant platforms.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <Button @click="emit('scrollTo', 'projects')" size="lg" class="group">
              See My Work
              <ArrowRight :size="20" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div class="flex items-center gap-3">
              <a
                href="https://github.com/rayfajars"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 border border-black/20 hover:bg-black hover:text-white transition-all rounded-md"
                aria-label="GitHub"
              >
                <Github :size="20" />
              </a>
              <a
                href="https://linkedin.com/in/rayfajars"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 border border-black/20 hover:bg-black hover:text-white transition-all rounded-md"
                aria-label="LinkedIn"
              >
                <Linkedin :size="20" />
              </a>
              <a
                href="mailto:rayfajars@gmail.com"
                class="p-2 border border-black/20 hover:bg-black hover:text-white transition-all rounded-md"
                aria-label="Email"
              >
                <Mail :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
