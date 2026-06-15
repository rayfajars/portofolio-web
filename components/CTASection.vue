<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { profile } from '~/data/profile';
</script>

<template>
  <section id="contact" class="section-cream py-24 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-4xl">
      <div class="bg-navy rounded-3xl p-10 sm:p-16 text-center shadow-card">
        <h2 class="heading-serif text-3xl sm:text-4xl md:text-5xl text-cream mb-4 leading-tight">
          Got an Idea?
          <br>
          <span class="italic">Let's Bring It To Life!</span>
        </h2>

        <p class="text-cream/60 mb-8 max-w-md mx-auto text-sm sm:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <Button
            as="a"
            :href="`mailto:${profile.email}`"
            variant="light"
            size="lg"
          >
            Get in Touch
          </Button>

          <Button
            as="a"
            :href="profile.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            class="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
