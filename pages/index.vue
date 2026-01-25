<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div>
    <HeroSection @scroll-to="scrollToSection" />
    <ProjectsSection />
    <ExperienceSection />
    <AboutSection />
  </div>
</template>
