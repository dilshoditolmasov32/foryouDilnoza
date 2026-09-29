<script setup lang="ts">
import { memories } from '~/data/for-you'
</script>

<template>
  <section aria-labelledby="memories-title" class="bg-cream/55 py-20 md:py-28">
    <div class="px-6">
      <RomanticSectionHeading id="memories-title" :title="memories.title" :subtitle="memories.subtitle" />
    </div>

    <!--
      Telefonda: gorizontal swipe (scroll-snap), faqat shu konteyner ichida — sahifa gorizontal scroll bo'lmaydi.
      md+: oddiy grid.
    -->
    <div
      role="region"
      aria-label="Xotiralar"
      tabindex="0"
      class="no-scrollbar mt-12 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-px-6 focus-visible:rounded-2xl focus-visible:-outline-offset-2 md:mt-16 md:overflow-visible"
    >
      <ul class="flex w-max gap-4 px-6 pt-2 pb-5 md:mx-auto md:grid md:w-auto md:max-w-5xl md:grid-cols-2 md:gap-6 lg:max-w-6xl lg:grid-cols-4">
        <li
          v-for="(memory, i) in memories.items"
          :key="memory.image"
          v-reveal="(i % 4) * 90"
          class="w-[78vw] max-w-75 shrink-0 snap-center md:w-auto md:max-w-none"
        >
          <RomanticMemoryCard :memory="memory" />
        </li>
      </ul>
    </div>

    <p class="mt-3 text-center text-xs tracking-wide text-muted/80 md:hidden" aria-hidden="true">
      ← surib ko‘ring →
    </p>
  </section>
</template>
