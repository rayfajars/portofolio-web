<script setup lang="ts">
import { profile } from '~/data/profile';
</script>

<template>
  <footer class="border-t border-navy/10 bg-cream">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-navy/50">
        <p>
          © {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
        </p>
        <p>{{ profile.location }}</p>
      </div>
    </div>
  </footer>
</template>
