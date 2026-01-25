<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { ExternalLink, Github, ArrowRight } from 'lucide-vue-next';

interface Props {
  slug: string;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  tags?: string[];
  context?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <Card class="group hover:shadow-lg transition-all duration-300 border-black/10 overflow-hidden">
    <!-- Clickable Card Content -->
    <NuxtLink :to="`/projects/${slug}`" class="block">
      <CardHeader class="p-0">
        <div class="aspect-video bg-secondary overflow-hidden relative">
          <NuxtImg
            v-if="image"
            :src="image"
            :alt="title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-muted-foreground">
            <span class="text-4xl font-bold">{{ title.charAt(0) }}</span>
          </div>
          
          <!-- View Details Indicator on Hover -->
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="text-white font-medium flex items-center gap-2">
              View Details
              <ArrowRight :size="18" />
            </span>
          </div>
          
          <!-- Context Badge -->
          <div v-if="context" class="absolute top-3 right-3">
            <span class="px-2 py-1 text-xs font-semibold bg-black text-white border border-white uppercase tracking-wide">
              {{ context }}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent class="p-6">
        <CardTitle class="text-xl mb-2 group-hover:opacity-70 transition-opacity">
          {{ title }}
        </CardTitle>
        <CardDescription class="text-sm leading-relaxed">
          {{ description }}
        </CardDescription>
        
        <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-xs px-2 py-1 border border-black/10 rounded"
          >
            {{ tag }}
          </span>
        </div>
      </CardContent>
    </NuxtLink>
    
    <!-- External Links -->
    <CardFooter v-if="repoUrl || liveUrl" class="p-6 pt-0 flex gap-3">
      <a
        v-if="repoUrl"
        :href="repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
      >
        <Github :size="16" />
        <span>Code</span>
      </a>
      
      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
      >
        <ExternalLink :size="16" />
        <span>Live Demo</span>
      </a>
    </CardFooter>
  </Card>
</template>
