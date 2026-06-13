<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-2xl border border-navy/10 bg-cream-light text-card-foreground shadow-soft',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
