<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-cream text-navy">
    <Header @scroll-to="scrollToSection" />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
