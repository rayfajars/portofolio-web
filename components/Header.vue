<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();

const mobileMenuOpen = ref(false);

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'About', target: 'about' },
];

const handleNavClick = (target: string) => {
  emit('scrollTo', target);
  mobileMenuOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <button
            @click="handleNavClick('hero')"
            class="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            PORTFOLIO
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <button
            v-for="item in navItems"
            :key="item.target"
            @click="handleNavClick(item.target)"
            class="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            {{ item.label }}
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 hover:bg-black/5 rounded-md transition-colors"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-black/10"
        >
          <div class="flex flex-col space-y-4">
            <button
              v-for="item in navItems"
              :key="item.target"
              @click="handleNavClick(item.target)"
              class="text-sm font-medium hover:opacity-70 transition-opacity text-left px-2"
            >
              {{ item.label }}
            </button>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
