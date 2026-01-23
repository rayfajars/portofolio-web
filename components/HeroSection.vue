<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();
</script>

<template>
  <section id="hero" class="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-4xl text-center">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
        Your Name
      </h1>
      
      <p class="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        Frontend Developer crafting minimal, impactful digital experiences
      </p>
      
      <Button
        @click="emit('scrollTo', 'projects')"
        size="lg"
        class="group"
      >
        See My Work
        <ArrowRight :size="20" class="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </section>
</template>
