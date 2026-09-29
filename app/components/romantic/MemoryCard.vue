<script setup lang="ts">
import { Heart } from '@lucide/vue'
import type { Memory } from '~/data/for-you'

defineProps<{ memory: Memory }>()
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/80 shadow-soft ring-1 ring-line/70 transition duration-500 ease-soft hover:-translate-y-1 hover:shadow-lift"
  >
    <RomanticPhoto :src="memory.image" :alt="memory.alt" class="aspect-4/5 w-full" />

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <p class="text-[0.7rem] font-medium tracking-[0.22em] text-rose-deep uppercase">{{ memory.label }}</p>
      <h3 class="mt-1.5 font-serif text-[1.4rem] leading-snug font-medium text-ink">{{ memory.title }}</h3>
      <p class="mt-2 text-[0.93rem] leading-relaxed text-pretty text-muted">{{ memory.description }}</p>
      <div class="mt-auto pt-4">
        <Heart class="size-4 text-rose/60" :stroke-width="1.5" aria-hidden="true" />
      </div>
    </div>
  </article>
</template>
