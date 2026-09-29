<script setup lang="ts">
/** "Ha" bosilganda bir marta chiqadigan nozik yuraklar — confetti o'rniga. */
const HEART_COUNT = 12

const hearts = Array.from({ length: HEART_COUNT }, (_, i) => {
  const angle = (i / HEART_COUNT) * Math.PI * 2 + (i % 2) * 0.25
  const distance = 70 + ((i * 23) % 60)
  return {
    '--x': `${Math.round(Math.cos(angle) * distance)}px`,
    '--y': `${Math.round(Math.sin(angle) * distance * 0.8 - 40)}px`,
    '--r': `${((i * 37) % 50) - 25}deg`,
    width: `${10 + ((i * 7) % 9)}px`,
    animationDelay: `${(i % 4) * 60}ms`
  }
})
</script>

<template>
  <div class="motion-decor pointer-events-none absolute top-1/2 left-1/2 size-0" aria-hidden="true">
    <RomanticHeartGlyph
      v-for="(style, i) in hearts"
      :key="i"
      class="heart absolute aspect-square -translate-1/2"
      :class="i % 3 === 0 ? 'text-ivory/80' : i % 3 === 1 ? 'text-petal' : 'text-rose'"
      :style="style"
    />
  </div>
</template>

<style scoped>
.heart {
  opacity: 0;
  animation: burst 1.8s var(--ease-soft) both;
}

@keyframes burst {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.2) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--x), var(--y), 0) scale(1) rotate(var(--r));
  }
}
</style>
