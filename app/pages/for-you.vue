<script setup lang="ts">
import { intro } from '~/data/for-you'

useSeoMeta({
  title: 'For You ❤️',
  description: intro.lines.join(' '),
  ogTitle: 'For You ❤️',
  ogDescription: intro.lines.join(' ')
})

const { detect } = useSong()
const reducedMotion = usePrefersReducedMotion()

onMounted(detect)

function openStory() {
  const target = document.getElementById('story')
  if (!target) return
  target.scrollIntoView({ behavior: reducedMotion.value ? 'auto' : 'smooth', block: 'start' })
  target.focus({ preventScroll: true })
}
</script>

<template>
  <div>
    <div
      aria-hidden="true"
      class="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-linear-to-r from-petal via-rose to-burgundy"
    />

    <main>
      <RomanticIntroSection @open="openStory" />
      <RomanticStorySection id="story" tabindex="-1" class="outline-none" />
      <RomanticMemoriesSection />
      <RomanticReasonsSection />
      <RomanticFlowerSection />
      <RomanticLetterSection />
      <RomanticForgiveSection />
    </main>

    <RomanticFinalSection />
    <RomanticMusicControl />
  </div>
</template>
