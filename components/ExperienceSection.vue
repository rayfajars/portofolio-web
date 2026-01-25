<script setup lang="ts">
import { experiences } from '~/data/experience';
import { Briefcase } from 'lucide-vue-next';
import { ref, computed } from 'vue';

type ExperienceType = 'fulltime' | 'freelance';

const activeTab = ref<ExperienceType>('fulltime');

const fulltimeExperiences = computed(() => 
  experiences.filter(exp => exp.type === 'fulltime')
);

const freelanceExperiences = computed(() => 
  experiences.filter(exp => exp.type === 'freelance')
);

const displayedExperiences = computed(() => 
  activeTab.value === 'fulltime' ? fulltimeExperiences.value : freelanceExperiences.value
);

const setActiveTab = (tab: ExperienceType) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
        Work Experience
      </h2>
      
      <!-- Tab Navigation -->
      <div class="flex gap-8 mb-12 border-b border-black/10">
        <button
          @click="setActiveTab('fulltime')"
          :class="[
            'pb-3 px-1 text-lg font-medium transition-all',
            activeTab === 'fulltime' 
              ? 'text-black border-b-2 border-black' 
              : 'text-muted-foreground hover:text-black'
          ]"
        >
          Fulltime
          <span class="ml-2 text-sm">({{ fulltimeExperiences.length }})</span>
        </button>
        
        <button
          @click="setActiveTab('freelance')"
          :class="[
            'pb-3 px-1 text-lg font-medium transition-all',
            activeTab === 'freelance' 
              ? 'text-black border-b-2 border-black' 
              : 'text-muted-foreground hover:text-black'
          ]"
        >
          Freelance
          <span class="ml-2 text-sm">({{ freelanceExperiences.length }})</span>
        </button>
      </div>
      
      <!-- Timeline -->
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div :key="activeTab" class="space-y-8">
          <div
            v-for="exp in displayedExperiences"
            :key="exp.id"
            class="relative pl-8 pb-8 border-l-2 border-black/20 last:pb-0"
          >
            <!-- Timeline dot -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white rounded-full" />
            
            <!-- Content -->
            <div class="space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 class="text-xl font-bold">{{ exp.position }}</h3>
                <span class="text-sm text-muted-foreground">{{ exp.duration }}</span>
              </div>
              
              <div class="flex items-center gap-2 text-muted-foreground">
                <Briefcase :size="16" />
                <span class="font-medium">{{ exp.company }}</span>
              </div>
              
              <p class="text-base leading-relaxed">
                {{ exp.description }}
              </p>
              
              <ul v-if="exp.highlights && exp.highlights.length" class="space-y-2 mt-4">
                <li
                  v-for="(highlight, hIndex) in exp.highlights"
                  :key="hIndex"
                  class="flex items-start gap-2 text-sm"
                >
                  <span class="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
