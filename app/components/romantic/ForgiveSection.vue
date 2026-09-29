<script setup lang="ts">
import { forgive } from '~/data/for-you'

/**
 * Hech qanday bosim yo'q: ikkala tugma ham bir xil hajmda, joyida turadi,
 * "Hali emas" javobi hurmat bilan qabul qilinadi.
 */
type Answer = 'yes' | 'notYet' | null

const answer = ref<Answer>(null)
const response = ref<HTMLElement | null>(null)
const question = ref<HTMLElement | null>(null)

// Tugma yo'qolgach, fokus javob matniga (yoki savolga) o'tadi — klaviatura va screen reader uchun
function moveFocus() {
  const target = answer.value === null ? question.value : response.value
  target?.focus({ preventScroll: true })
}
</script>

<template>
  <section
    aria-labelledby="forgive-title"
    class="relative isolate overflow-hidden bg-wine px-6 py-24 text-ivory md:py-36"
  >
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgb(122_38_56/0.55),transparent_70%),radial-gradient(70%_40%_at_50%_100%,rgb(122_38_56/0.35),transparent_70%)]"
    />
    <RomanticFloatingHearts tone="ivory" :count="5" class="-z-10 opacity-50" />

    <div class="mx-auto max-w-md text-center">
      <p v-reveal class="font-serif text-[1.65rem] leading-snug text-balance md:text-3xl">
        <span v-for="line in forgive.lines" :key="line" class="block">{{ line }}</span>
      </p>

      <p v-reveal="120" class="mt-10 text-[0.95rem] text-ivory/70">{{ forgive.lead }}</p>
      <p v-reveal="240" class="mt-3 font-serif text-[1.9rem] leading-tight text-balance text-petal italic md:text-4xl">
        {{ forgive.emphasis }}
      </p>

      <div v-reveal="300" aria-hidden="true" class="mx-auto my-14 h-px w-16 bg-white/20" />

      <h2 id="forgive-title" ref="question" v-reveal tabindex="-1" class="outline-none font-serif text-[2rem] leading-tight font-medium md:text-[2.6rem]">
        {{ forgive.question }}
      </h2>

      <div v-reveal="120" class="relative mt-9 min-h-36" aria-live="polite">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-700 ease-soft"
          enter-from-class="opacity-0 translate-y-2"
          leave-active-class="transition duration-300"
          leave-to-class="opacity-0"
          @after-enter="moveFocus"
        >
          <div v-if="answer === null" key="ask" class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <RomanticPillButton tone="dark" class="w-full max-w-64 sm:w-44" @click="answer = 'yes'">
              <span aria-hidden="true">❤️</span> {{ forgive.yesLabel }}
            </RomanticPillButton>
            <RomanticPillButton tone="dark" variant="soft" class="w-full max-w-64 sm:w-44" @click="answer = 'notYet'">
              <span aria-hidden="true">🥺</span> {{ forgive.notYetLabel }}
            </RomanticPillButton>
          </div>

          <div v-else-if="answer === 'yes'" key="yes" ref="response" tabindex="-1" class="relative outline-none">
            <RomanticHeartBurst />
            <RomanticHeartGlyph class="animate-soft-pulse mx-auto size-7 text-rose" />
            <p class="mt-4 font-serif text-[1.9rem] text-ivory">{{ forgive.yesResponse.title }}</p>
            <p class="mt-2 text-ivory/75">{{ forgive.yesResponse.text }}</p>
          </div>

          <div v-else key="notYet" ref="response" tabindex="-1" class="outline-none">
            <p class="font-serif text-[1.9rem] text-ivory">{{ forgive.notYetResponse.title }}</p>
            <p class="mx-auto mt-2 max-w-xs text-balance text-ivory/75">
              {{ forgive.notYetResponse.text }}&nbsp;<span aria-hidden="true">❤️</span>
            </p>
            <RomanticPillButton tone="dark" variant="ghost" class="mt-6 text-sm" @click="answer = null">
              {{ forgive.backLabel }}
            </RomanticPillButton>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
