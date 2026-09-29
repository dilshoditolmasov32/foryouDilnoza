<script setup lang="ts">
import { Play } from '@lucide/vue'

/** Qo'shiq bir marta boshlangach paydo bo'ladigan kichik doimiy tugma. */
const { playing, started, toggle } = useSong()
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-soft"
    enter-from-class="opacity-0 scale-90"
  >
    <button
      v-if="started"
      type="button"
      class="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex size-12 touch-manipulation items-center justify-center rounded-full bg-ivory/85 text-burgundy shadow-lift ring-1 ring-line backdrop-blur-sm transition duration-300 ease-soft hover:scale-105 active:scale-95"
      :aria-label="playing ? 'Qo‘shiqni to‘xtatish' : 'Qo‘shiqni davom ettirish'"
      @click="toggle"
    >
      <span v-if="playing" class="flex h-4 items-end gap-0.75" aria-hidden="true">
        <span
          v-for="i in 3"
          :key="i"
          class="eq-bar w-0.75 rounded-full bg-current"
          :style="{ animationDelay: `${i * -0.3}s` }"
        />
      </span>
      <Play v-else class="ml-0.5 size-4" aria-hidden="true" />
    </button>
  </Transition>
</template>

<style scoped>
.eq-bar {
  height: 100%;
  transform-origin: bottom;
  animation: eq 1.1s ease-in-out infinite;
}

@keyframes eq {
  0%,
  100% {
    transform: scaleY(0.35);
  }
  50% {
    transform: scaleY(1);
  }
}
</style>
