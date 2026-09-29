import type { Directive } from 'vue'

/**
 * v-reveal — element viewport'ga kirganda yumshoq fade-up bilan paydo bo'ladi.
 * Qiymat — ms'dagi kechikish (stagger uchun): v-reveal="index * 80"
 *
 * Bitta umumiy IntersectionObserver ishlatiladi, element bir marta ko'ringach kuzatuvdan chiqariladi.
 */

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
  }
  return observer
}

const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
