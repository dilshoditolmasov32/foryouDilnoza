<script setup lang="ts">
import { ChevronDown, Music, Pause } from '@lucide/vue'
import { intro } from '~/data/for-you'

const emit = defineEmits<{ open: [] }>()
const { available, playing, toggle } = useSong()
</script>

<template>
  <section
    aria-labelledby="intro-title"
    class="relative isolate flex min-h-screen-safe flex-col items-center justify-center overflow-hidden bg-[radial-gradient(90%_60%_at_50%_0%,var(--color-blush),transparent_70%)] px-6 pt-safe pb-safe text-center"
  >
    <RomanticFloatingHearts :count="7" class="-z-10" />

    <p
      class="animate-fade-up flex items-center gap-2 font-serif text-xl text-rose-deep italic"
      style="--delay: 150ms"
    >
      {{ intro.eyebrow }}
      <RomanticHeartGlyph class="animate-soft-pulse size-3.5 text-rose" />
    </p>

    <h1
      id="intro-title"
      class="animate-fade-up mt-6 font-serif text-[2.5rem] leading-[1.08] font-medium text-ink sm:text-5xl md:text-6xl"
      style="--delay: 450ms"
    >
      <span v-for="line in intro.lines" :key="line" class="block">{{ line }}</span>
    </h1>

    <div class="animate-fade-up mt-12 flex flex-col items-center gap-3" style="--delay: 900ms">
      <RomanticPillButton class="min-w-40" @click="emit('open')">
        {{ intro.openLabel }}
        <ChevronDown class="size-4" aria-hidden="true" />
      </RomanticPillButton>

      <!-- Joy oldindan ajratilgan — tugma paydo bo'lganda layout sakramasin -->
      <div class="flex min-h-12 items-center">
        <Transition
          enter-active-class="transition duration-700 ease-soft"
          enter-from-class="opacity-0 translate-y-1"
        >
          <RomanticPillButton
            v-if="available"
            variant="ghost"
            class="text-sm"
            @click="toggle"
          >
            <component :is="playing ? Pause : Music" class="size-4" aria-hidden="true" />
            {{ playing ? 'Pause our song' : intro.songLabel }}
          </RomanticPillButton>
        </Transition>
      </div>
    </div>
  </section>
</template>
