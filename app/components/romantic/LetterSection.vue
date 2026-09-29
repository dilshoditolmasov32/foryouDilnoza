<script setup lang="ts">
import { letter } from '~/data/for-you'

const CHAR_MS = 22
const PARAGRAPH_PAUSE_MS = 420

type BlockKind = 'greeting' | 'body' | 'closing'
interface Block {
  kind: BlockKind
  text: string
  start: number
}

// Xat bloklari va har birining umumiy matndagi boshlanish indeksi
const blocks: Block[] = []
let offset = 0
for (const [kind, text] of [
  ['greeting', letter.greeting],
  ...letter.paragraphs.map((p) => ['body', p] as const),
  ['closing', letter.closing]
] as const) {
  blocks.push({ kind, text, start: offset })
  offset += text.length
}
const totalChars = offset

const blockClass: Record<BlockKind, string> = {
  greeting: 'font-serif text-[1.45rem] italic text-burgundy md:text-[1.6rem]',
  body: 'font-serif text-[1.2rem] leading-[1.65] text-ink/90 md:text-[1.3rem]',
  closing: 'pt-2 font-serif text-[1.45rem] font-medium italic text-burgundy md:text-[1.6rem]'
}

const card = ref<HTMLElement | null>(null)
const inView = useInViewOnce(card, 0.3)
const reducedMotion = usePrefersReducedMotion()

const typed = ref(0)
const done = computed(() => typed.value >= totalChars)
const typing = computed(() => typed.value > 0 && !done.value)

let timer: ReturnType<typeof setTimeout> | undefined

function tick() {
  typed.value++
  if (done.value) return
  const atBoundary = blocks.some((b) => b.start === typed.value)
  timer = setTimeout(tick, atBoundary ? PARAGRAPH_PAUSE_MS : CHAR_MS)
}

function skip() {
  clearTimeout(timer)
  typed.value = totalChars
}

watch(inView, (visible) => {
  if (!visible || typed.value > 0) return
  if (reducedMotion.value) skip()
  else timer = setTimeout(tick, 500)
})

onBeforeUnmount(() => clearTimeout(timer))

const visibleText = (block: Block) => block.text.slice(0, Math.max(0, typed.value - block.start))
const isCurrent = (block: Block) =>
  typing.value && typed.value >= block.start && typed.value < block.start + block.text.length
</script>

<template>
  <section aria-labelledby="letter-title" class="px-5 py-20 md:py-28">
    <RomanticSectionHeading id="letter-title" :title="letter.title" />

    <article
      ref="card"
      v-reveal
      class="relative mx-auto mt-14 max-w-xl rounded-[1.75rem] bg-[#fffdf9] px-6 pt-12 pb-10 shadow-lift ring-1 ring-line sm:px-10 md:mt-16 md:px-14 md:pt-14 md:pb-12"
    >
      <!-- Muhr -->
      <div
        aria-hidden="true"
        class="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-burgundy text-petal shadow-soft ring-4 ring-ivory"
      >
        <RomanticHeartGlyph class="size-4" />
      </div>

      <!-- Ekran o'quvchilar uchun to'liq matn -->
      <div class="sr-only">
        <p v-for="block in blocks" :key="block.start">{{ block.text }}</p>
        <p>{{ letter.signature }}</p>
      </div>

      <!-- Ko'rinadigan matn: to'liq matn joyni oldindan egallaydi, shuning uchun typing paytida layout sakramaydi -->
      <div aria-hidden="true" class="space-y-4">
        <p v-for="block in blocks" :key="block.start" class="relative" :class="blockClass[block.kind]">
          <span class="invisible">{{ block.text }}</span>
          <!-- prettier-ignore -->
          <span class="absolute inset-0">{{ visibleText(block) }}<span v-if="isCurrent(block)" class="ml-px inline-block h-[1em] w-px translate-y-[0.15em] bg-rose-deep motion-safe:animate-[caret-blink_1s_steps(1)_infinite]" /></span>
        </p>

        <p
          class="pt-4 text-right font-serif text-xl text-ink transition duration-1000 ease-soft"
          :class="done ? 'opacity-100' : 'translate-y-2 opacity-0'"
        >
          {{ letter.signature }}
        </p>
      </div>
    </article>

    <div class="mt-6 flex min-h-12 justify-center">
      <Transition leave-active-class="transition duration-300" leave-to-class="opacity-0">
        <RomanticPillButton v-if="!done" variant="ghost" class="text-sm" @click="skip">
          Hammasini ko‘rsatish
        </RomanticPillButton>
      </Transition>
    </div>
  </section>
</template>
