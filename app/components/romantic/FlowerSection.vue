<script setup lang="ts">
import { flower } from '~/data/for-you'

const stage = ref<HTMLElement | null>(null)
const open = useInViewOnce(stage, 0.35)
</script>

<template>
  <section aria-label="Senga gul" class="overflow-hidden bg-linear-to-b from-ivory via-blush/40 to-ivory px-6 py-20 md:py-28">
    <div ref="stage" class="relative mx-auto max-w-md md:max-w-xl">
      <!-- Yumshoq nur -->
      <div
        aria-hidden="true"
        class="absolute top-1/2 left-1/2 aspect-square w-[125%] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(230_179_184/0.5),transparent)] transition-opacity duration-2000 ease-out"
        :class="open ? 'opacity-100' : 'opacity-0'"
      />

      <div
        class="relative transition duration-1400 ease-soft"
        :class="open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      >
        <div :class="{ 'flower-float': open }">
          <RomanticPhoto
            :src="flower.image"
            :alt="flower.alt"
            class="aspect-6/5 w-full rounded-[1.75rem] shadow-lift ring-1 ring-white/70 md:rounded-[2rem]"
          />
        </div>
      </div>
    </div>

    <p
      class="mx-auto mt-10 max-w-sm text-center font-serif text-[1.6rem] leading-snug text-balance text-ink transition duration-1000 ease-soft md:mt-12 md:max-w-md md:text-3xl"
      :class="open ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-3 opacity-0'"
    >
      <span v-for="line in flower.lines" :key="line" class="block">{{ line }}</span>
      <span class="mt-3 block text-xl" aria-hidden="true">🌹</span>
    </p>
  </section>
</template>

<style scoped>
.flower-float {
  animation: gentle-float 7s ease-in-out 1.6s infinite;
}
</style>
