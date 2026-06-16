<script setup lang="ts">
import { profile } from '~/data/profile';

useHead({
  title: `${profile.name} - ${profile.title}`,
  meta: [
    { name: 'description', content: profile.tagline },
    { property: 'og:title', content: `${profile.name} - ${profile.title}` },
    { property: 'og:description', content: profile.tagline },
  ],
});

const route = useRoute();
const { scrollToSection } = useScrollToSection();

onMounted(() => {
  const hash = route.hash?.replace('#', '');
  if (hash) {
    nextTick(() => scrollToSection(hash));
  }
});

watch(
  () => route.hash,
  (hash) => {
    const target = hash?.replace('#', '');
    if (target) {
      nextTick(() => scrollToSection(target));
    }
  },
);
</script>

<template>
  <div>
    <HeroSection @scroll-to="scrollToSection" />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <CTASection />
  </div>
</template>
