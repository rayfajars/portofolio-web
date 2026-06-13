<script setup lang="ts">
import { experiences } from '~/data/experience';
import { Briefcase } from 'lucide-vue-next';
import { ref, computed } from 'vue';

type ExperienceType = 'fulltime' | 'freelance';

const activeTab = ref<ExperienceType>('fulltime');

const fulltimeExperiences = computed(() =>
  experiences.filter((exp) => exp.type === 'fulltime'),
);

const freelanceExperiences = computed(() =>
  experiences.filter((exp) => exp.type === 'freelance'),
);

const displayedExperiences = computed(() =>
  activeTab.value === 'fulltime'
    ? fulltimeExperiences.value
    : freelanceExperiences.value,
);

const setActiveTab = (tab: ExperienceType) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark/50">
    <div class="container mx-auto max-w-4xl">
      <h2 class="heading-serif text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-navy">
        Work Experience
      </h2>

      <div class="flex gap-8 mb-12 border-b border-navy/10">
        <button
          @click="setActiveTab('fulltime')"
          :class="[
            'pb-3 px-1 text-lg font-medium transition-all',
            activeTab === 'fulltime'
              ? 'text-navy border-b-2 border-navy'
              : 'text-navy/50 hover:text-navy',
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
              ? 'text-navy border-b-2 border-navy'
              : 'text-navy/50 hover:text-navy',
          ]"
        >
          Freelance
          <span class="ml-2 text-sm">({{ freelanceExperiences.length }})</span>
        </button>
      </div>

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
            class="relative pl-8 pb-8 border-l-2 border-navy/15 last:pb-0"
          >
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-navy border-2 border-cream rounded-full" />

            <div class="space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 class="text-xl font-bold text-navy">{{ exp.position }}</h3>
                <span class="text-sm text-navy/50">{{ exp.duration }}</span>
              </div>

              <div class="flex items-center gap-3 text-navy/60">
                <div
                  v-if="exp.logo"
                  class="w-8 h-8 rounded-lg overflow-hidden border border-navy/10 bg-cream flex-shrink-0"
                >
                  <NuxtImg
                    :src="exp.logo"
                    :alt="exp.company"
                    class="w-full h-full object-contain"
                  />
                </div>
                <Briefcase v-else :size="16" />
                <span class="font-medium">{{ exp.company }}</span>
              </div>

              <p class="text-base leading-relaxed text-navy/70">
                {{ exp.description }}
              </p>

              <ul v-if="exp.highlights?.length" class="space-y-2 mt-4">
                <li
                  v-for="(highlight, hIndex) in exp.highlights"
                  :key="hIndex"
                  class="flex items-start gap-2 text-sm text-navy/60"
                >
                  <span class="mt-1.5 w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0" />
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
