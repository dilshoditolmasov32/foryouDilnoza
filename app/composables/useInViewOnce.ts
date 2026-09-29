import type { Ref } from 'vue'

/**
 * Element viewport'ga birinchi marta kirganini bildiradi (keyin kuzatish to'xtaydi).
 * Gul va xat animatsiyalarini kerakli paytda boshlash uchun.
 */
export function useInViewOnce(target: Ref<HTMLElement | null>, threshold = 0.35) {
  const inView = ref(false)

  onMounted(() => {
    const el = target.value
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      inView.value = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        inView.value = true
        observer.disconnect()
      },
      { threshold }
    )
    observer.observe(el)
    onBeforeUnmount(() => observer.disconnect())
  })

  return inView
}
