<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';
import { Button } from '~/components/ui/button';
import { profile } from '~/data/profile';

const emit = defineEmits<{
  scrollTo: [id: string]
}>();

const route = useRoute();
const router = useRouter();
const mobileMenuOpen = ref(false);

type NavItem =
  | { label: string; type: 'scroll'; target: string }
  | { label: string; type: 'link'; to: string };

const navItems: NavItem[] = [
  { label: 'About', type: 'scroll', target: 'about' },
  { label: 'Experience', type: 'scroll', target: 'experience' },
  { label: 'Work', type: 'scroll', target: 'projects' },
  { label: 'Projects', type: 'link', to: '/projects' },
];

const initials = profile.name
  .split(' ')
  .slice(0, 3)
  .map((part) => part[0])
  .join('');

const handleNavClick = (item: NavItem) => {
  mobileMenuOpen.value = false;

  if (item.type === 'link') {
    router.push(item.to);
    return;
  }

  if (route.path !== '/') {
    router.push(`/#${item.target}`);
    return;
  }

  emit('scrollTo', item.target);
};

const goHome = () => {
  mobileMenuOpen.value = false;
  if (route.path !== '/') {
    router.push('/');
    return;
  }
  emit('scrollTo', 'hero');
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-navy/5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div class="flex h-20 items-center justify-between">
        <button
          @click="goHome"
          class="font-sans text-2xl font-bold text-navy hover:opacity-70 transition-opacity"
        >
          {{ initials }}.
        </button>

        <nav class="hidden md:flex items-center gap-8">
          <button
            v-for="item in navItems"
            :key="item.label"
            @click="handleNavClick(item)"
            class="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
          >
            {{ item.label }}
          </button>
        </nav>

        <div class="hidden md:block">
          <Button
            as="a"
            :href="`mailto:${profile.email}`"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-full hover:bg-navy/5 transition-colors text-navy"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

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
          class="md:hidden py-4 border-t border-navy/10"
        >
          <div class="flex flex-col gap-4">
            <button
              v-for="item in navItems"
              :key="item.label"
              @click="handleNavClick(item)"
              class="text-sm font-medium text-navy/70 hover:text-navy text-left px-2"
            >
              {{ item.label }}
            </button>
            <Button
              as="a"
              :href="`mailto:${profile.email}`"
              class="mx-2"
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
