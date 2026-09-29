<script setup lang="ts">
import type { Component } from 'vue'
import { Heart, MessageCircleHeart, Sparkles, Sprout } from '@lucide/vue'
import { story, type StoryIcon } from '~/data/for-you'

const icons: Record<StoryIcon, Component> = {
  sprout: Sprout,
  talk: MessageCircleHeart,
  heart: Heart,
  sparkles: Sparkles
}

const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <section aria-labelledby="story-title" class="px-6 py-20 md:py-28">
    <RomanticSectionHeading id="story-title" :title="story.title" :subtitle="story.subtitle" />

    <ol class="relative mx-auto mt-14 max-w-md md:mt-20 md:max-w-3xl">
      <!-- Vertikal chiziq: telefonda chapda, desktopda markazda -->
      <span
        aria-hidden="true"
        class="absolute top-3 bottom-3 left-5 w-px bg-linear-to-b from-petal/0 via-petal to-petal/0 md:left-1/2 md:-translate-x-1/2"
      />

      <li
        v-for="(moment, i) in story.moments"
        :key="moment.title"
        v-reveal
        class="relative grid grid-cols-[2.5rem_1fr] gap-x-5 pb-12 last:pb-0 md:grid-cols-[1fr_3rem_1fr] md:gap-x-10 md:pb-16"
      >
        <div
          class="relative z-10 flex size-10 items-center justify-center rounded-full bg-ivory text-rose-deep shadow-soft ring-1 ring-petal/60 md:col-start-2 md:row-start-1 md:size-12"
        >
          <component :is="icons[moment.icon]" class="size-[1.1rem] md:size-5" :stroke-width="1.6" aria-hidden="true" />
        </div>

        <div
          class="min-w-0 pt-1 md:row-start-1 md:pt-2"
          :class="i % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-3'"
        >
          <p class="text-xs font-medium tracking-[0.14em] text-rose-deep/80">{{ pad(i + 1) }}</p>
          <h3 class="mt-1.5 font-serif text-[1.45rem] leading-snug font-medium text-balance text-ink md:text-[1.65rem]">
            {{ moment.title }}
          </h3>
          <p class="mt-2 text-[0.95rem] leading-relaxed text-pretty text-muted">{{ moment.text }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
