<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();
</script>

<template>
  <section id="hero" class="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/50 to-white" />
    <div 
      class="absolute inset-0" 
      style="background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: 24px 24px;"
    />
    
    <!-- Content -->
    <div class="container mx-auto max-w-4xl relative z-10">
      <div class="flex flex-col items-center text-center gap-8">
        <!-- Profile Photo -->
        <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-black/10 bg-white">
          <NuxtImg
            src="/images/profile.png"
            alt="Profile Photo"
            class="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div>
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
      </div>
    </div>
  </section>
</template>
