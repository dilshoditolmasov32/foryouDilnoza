<script setup lang="ts">
withDefaults(defineProps<{ title: string; subtitle?: string; id?: string; tone?: 'light' | 'dark' }>(), {
  subtitle: undefined,
  id: undefined,
  tone: 'light'
})
</script>

<template>
  <header class="mx-auto max-w-xl text-center">
    <div
      v-reveal
      class="mb-5 flex items-center justify-center gap-3"
      :class="tone === 'dark' ? 'text-petal/70' : 'text-rose/70'"
      aria-hidden="true"
    >
      <span class="h-px w-8 bg-current" />
      <RomanticHeartGlyph class="size-2.5" />
      <span class="h-px w-8 bg-current" />
    </div>

    <h2
      :id="id"
      v-reveal="80"
      class="font-serif text-[2rem] leading-[1.1] font-medium text-balance sm:text-4xl md:text-5xl"
      :class="tone === 'dark' ? 'text-ivory' : 'text-ink'"
    >
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      v-reveal="160"
      class="mt-3 text-[0.95rem] text-pretty"
      :class="tone === 'dark' ? 'text-ivory/65' : 'text-muted'"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
