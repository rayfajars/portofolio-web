<script setup lang="ts">
import { experiences } from '~/data/experience';
import { ref, computed } from 'vue';

type ExperienceType = 'fulltime' | 'freelance';

const sectionRef = ref<HTMLElement | null>(null);
const { isInView } = useSectionReveal(sectionRef);

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

const tabButtonClass = (tab: ExperienceType) => [
  'pb-3 px-1 text-lg font-medium transition-colors duration-300 motion-reduce:transition-none focus-ring rounded-sm border-b-2',
  activeTab.value === tab
    ? 'text-navy border-navy'
    : 'text-navy/60 hover:text-navy border-transparent',
];
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    class="section-padding section-cream section-reveal"
    :class="{ 'is-inview': isInView }"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="section-opener">
        <span class="section-eyebrow reveal-fade" style="--reveal-i: 0">Experience</span>
      </div>

      <h2
        class="heading-serif text-4xl sm:text-5xl text-navy mb-10 text-balance reveal-shift-lg"
        style="--reveal-i: 1"
      >
        Where I've shipped
      </h2>

      <div
        role="tablist"
        aria-label="Experience type"
        class="flex gap-8 mb-12 border-b border-navy/10 reveal-shift"
        style="--reveal-i: 2"
      >
        <button
          id="tab-fulltime"
          role="tab"
          type="button"
          :aria-selected="activeTab === 'fulltime'"
          aria-controls="experience-panel"
          :class="tabButtonClass('fulltime')"
          @click="setActiveTab('fulltime')"
        >
          Full-time
          <span class="ml-2 text-sm text-navy/55">({{ fulltimeExperiences.length }})</span>
        </button>

        <button
          id="tab-freelance"
          role="tab"
          type="button"
          :aria-selected="activeTab === 'freelance'"
          aria-controls="experience-panel"
          :class="tabButtonClass('freelance')"
          @click="setActiveTab('freelance')"
        >
          Freelance
          <span class="ml-2 text-sm text-navy/55">({{ freelanceExperiences.length }})</span>
        </button>
      </div>

      <Transition
        mode="out-in"
        enter-active-class="motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out"
        enter-from-class="motion-safe:opacity-0 motion-safe:translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="motion-safe:opacity-0 motion-safe:-translate-y-4"
      >
        <div
          id="experience-panel"
          role="tabpanel"
          :aria-labelledby="activeTab === 'fulltime' ? 'tab-fulltime' : 'tab-freelance'"
          :key="activeTab"
          class="divide-y divide-navy/10"
        >
          <article
            v-for="(exp, index) in displayedExperiences"
            :key="exp.id"
            class="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-3 py-10 first:pt-0 reveal-shift"
            :style="{ '--reveal-i': index + 3 }"
          >
            <div>
              <p class="meta-val">{{ exp.duration }}</p>
              <p class="meta-key mt-1">{{ exp.company }}</p>
            </div>

            <div>
              <h3 class="font-sans text-2xl text-navy mb-3">{{ exp.position }}</h3>
              <p class="text-base leading-relaxed text-navy/70 max-w-prose">
                {{ exp.description }}
              </p>

              <ul v-if="exp.highlights?.length" class="mt-5 space-y-2.5">
                <li
                  v-for="(highlight, hIndex) in exp.highlights"
                  :key="hIndex"
                  class="flex items-start gap-3 text-sm leading-relaxed text-navy/70"
                >
                  <span class="mt-2 w-1.5 h-1.5 bg-navy/70 rounded-full flex-shrink-0" aria-hidden="true" />
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </Transition>
    </div>
  </section>
</template>
