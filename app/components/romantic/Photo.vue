<script setup lang="ts">
import { Heart } from '@lucide/vue'

/**
 * Lazy-load rasm. Fayl hali qo'shilmagan bo'lsa:
 *  - fallback="placeholder" → chiroyli yumshoq placeholder ko'rsatiladi
 *  - fallback="hide"        → komponent umuman ko'rinmaydi
 */
const props = withDefaults(
  defineProps<{ src: string; alt: string; fallback?: 'placeholder' | 'hide'; eager?: boolean }>(),
  { fallback: 'placeholder', eager: false }
)

const img = ref<HTMLImageElement | null>(null)
const failed = ref(false)
const loaded = ref(false)

// SSR'da rasm hydration'dan oldin xato berib ulgurgan bo'lishi mumkin — shuni ham tekshiramiz
onMounted(() => {
  const el = img.value
  if (!el?.complete) return
  if (el.naturalWidth === 0) failed.value = true
  else loaded.value = true
})
</script>

<template>
  <div v-if="!(failed && props.fallback === 'hide')" class="relative overflow-hidden bg-cream">
    <img
      v-if="!failed"
      ref="img"
      :src="props.src"
      :alt="props.alt"
      :loading="props.eager ? 'eager' : 'lazy'"
      decoding="async"
      class="size-full object-cover transition-opacity duration-700 ease-soft"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="failed = true"
    >

    <div
      v-else
      role="img"
      :aria-label="props.alt"
      class="flex size-full items-center justify-center bg-[radial-gradient(120%_90%_at_30%_20%,var(--color-blush),var(--color-cream)_60%,#efe3d8)]"
    >
      <Heart class="size-7 text-rose/45" :stroke-width="1.25" aria-hidden="true" />
    </div>
  </div>
</template>
