<script setup lang="ts">
type Variant = 'solid' | 'soft' | 'ghost'
type Tone = 'light' | 'dark'

const props = withDefaults(defineProps<{ variant?: Variant; tone?: Tone }>(), {
  variant: 'solid',
  tone: 'light'
})

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: 'bg-burgundy text-ivory shadow-soft hover:bg-rose-deep hover:shadow-lift',
    soft: 'bg-white/70 text-burgundy ring-1 ring-line hover:bg-white hover:shadow-soft',
    ghost: 'text-muted hover:text-burgundy'
  },
  dark: {
    solid: 'bg-ivory text-burgundy shadow-[0_12px_32px_-12px_rgb(0_0_0/0.5)] hover:bg-white',
    soft: 'bg-white/5 text-ivory ring-1 ring-white/25 hover:bg-white/10 hover:ring-white/40',
    ghost: 'text-ivory/75 hover:text-ivory'
  }
}
</script>

<template>
  <button
    type="button"
    class="inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-7 text-[0.95rem] font-medium tracking-wide transition duration-300 ease-soft select-none hover:scale-[1.02] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50"
    :class="[styles[props.tone][props.variant], props.tone === 'dark' && 'focus-visible:outline-petal']"
  >
    <slot />
  </button>
</template>
