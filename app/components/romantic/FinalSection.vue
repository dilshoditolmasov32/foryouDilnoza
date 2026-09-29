<script setup lang="ts">
import { author, final, herName, herPhoto } from '~/data/for-you'
</script>

<template>
  <footer class="relative isolate overflow-hidden px-6 pt-24 pb-safe text-center md:pt-32">
    <div
      aria-hidden="true"
      class="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(70%_80%_at_50%_100%,var(--color-blush),transparent_70%)]"
    />
    <RomanticFloatingHearts :count="5" class="-z-10" />

    <div class="pb-20 md:pb-28">
      <RomanticPhoto
        v-reveal
        :src="herPhoto"
        :alt="herName"
        fallback="hide"
        class="mx-auto mb-10 size-28 rounded-full shadow-soft ring-4 ring-white md:size-32"
      />

      <p v-reveal class="flex items-center justify-center gap-2 text-sm tracking-[0.18em] text-muted uppercase">
        {{ final.madeWith }}
        <RomanticHeartGlyph class="animate-soft-pulse size-3.5 text-rose" />
      </p>
      <p v-reveal="120" class="mt-3 font-serif text-[2rem] leading-tight text-ink md:text-4xl">
        <span class="text-muted italic">{{ final.forLabel }}</span> {{ herName }}
      </p>
      <p v-reveal="240" class="mt-8 font-serif text-xl text-burgundy italic">— {{ author }}</p>
    </div>
  </footer>
</template>
