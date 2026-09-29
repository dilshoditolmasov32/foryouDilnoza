<script setup lang="ts">
/**
 * Fon uchun juda nozik suzuvchi yuraklar va nuqtalar.
 * Faqat CSS transform/opacity animatsiyasi — telefonda ham yengil.
 * Pozitsiyalar deterministik (SSR hydration mos kelishi uchun Math.random ishlatilmaydi).
 */
const props = withDefaults(defineProps<{ count?: number; tone?: 'rose' | 'ivory' }>(), {
  count: 8,
  tone: 'rose'
})

interface Particle {
  heart: boolean
  style: Record<string, string>
}

const particles = computed<Particle[]>(() =>
  Array.from({ length: props.count }, (_, i) => {
    const size = 8 + ((i * 5) % 9)
    return {
      heart: i % 3 !== 1,
      style: {
        left: `${((i * 37 + 11) % 88) + 6}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${13 + ((i * 7) % 8)}s`,
        animationDelay: `${-((i * 2.3) % 14)}s`,
        '--drift': `${i % 2 ? '-' : ''}${10 + ((i * 9) % 22)}px`,
        '--o': `${0.18 + ((i * 3) % 4) * 0.07}`
      }
    }
  })
)
</script>

<template>
  <div class="motion-decor pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <span
      v-for="(p, i) in particles"
      :key="i"
      class="absolute -bottom-6 block opacity-0 will-change-transform"
      :class="tone === 'rose' ? 'text-rose' : 'text-petal'"
      :style="{ ...p.style, animationName: 'float-up', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }"
    >
      <RomanticHeartGlyph v-if="p.heart" class="size-full" />
      <span v-else class="block size-1/2 rounded-full bg-current" />
    </span>
  </div>
</template>
