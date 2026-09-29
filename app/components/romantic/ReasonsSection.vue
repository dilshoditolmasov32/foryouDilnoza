<script setup lang="ts">
import { reasons } from '~/data/for-you'

const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <section aria-labelledby="reasons-title" class="px-6 py-20 md:py-28">
    <RomanticSectionHeading id="reasons-title" :title="reasons.title" :subtitle="reasons.subtitle" />

    <ol class="mx-auto mt-12 grid max-w-md gap-3 sm:max-w-3xl sm:grid-cols-2 sm:gap-4 md:mt-16 lg:max-w-5xl lg:grid-cols-3 lg:gap-5">
      <li
        v-for="(reason, i) in reasons.items"
        :key="i"
        v-reveal="(i % 3) * 90"
        class="flex gap-4 rounded-3xl bg-white/75 p-5 shadow-soft ring-1 ring-line/60 transition duration-500 ease-soft hover:-translate-y-0.5 hover:shadow-lift sm:flex-col sm:gap-3 sm:p-6"
      >
        <span class="w-8 shrink-0 font-serif text-[1.65rem] leading-none text-rose italic sm:w-auto sm:text-3xl" aria-hidden="true">
          {{ pad(i + 1) }}
        </span>
        <p class="min-w-0 pt-0.5 text-[0.95rem] leading-relaxed text-pretty text-ink/85">{{ reason }}</p>
      </li>
    </ol>
  </section>
</template>
