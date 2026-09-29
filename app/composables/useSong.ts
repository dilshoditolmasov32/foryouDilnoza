import { songSrc } from '~/data/for-you'

const TARGET_VOLUME = 0.6
const FADE_IN_MS = 1800

// Audio elementi bitta — butun sahifa bo'ylab umumiy
let audio: HTMLAudioElement | null = null

function fadeIn(el: HTMLAudioElement) {
  const start = performance.now()
  const step = (now: number) => {
    const progress = Math.min((now - start) / FADE_IN_MS, 1)
    el.volume = TARGET_VOLUME * progress
    if (progress < 1 && !el.paused) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

/**
 * Ixtiyoriy fon qo'shig'i. Hech qachon avtomatik boshlanmaydi —
 * faqat foydalanuvchi tugmani bosganda (brauzer autoplay siyosatiga mos).
 */
export function useSong() {
  const available = useState('song-available', () => false)
  const playing = useState('song-playing', () => false)
  const started = useState('song-started', () => false)

  /** Qo'shiq fayli haqiqatan bormi — yo'q bo'lsa tugmalar ko'rsatilmaydi */
  async function detect() {
    if (!songSrc) return
    try {
      const res = await fetch(songSrc, { method: 'HEAD' })
      const type = res.headers.get('content-type') ?? ''
      available.value = res.ok && !type.includes('text/html')
    } catch {
      available.value = false
    }
  }

  function ensureAudio() {
    if (audio) return audio
    audio = new Audio(songSrc)
    audio.loop = true
    audio.addEventListener('play', () => (playing.value = true))
    audio.addEventListener('pause', () => (playing.value = false))
    audio.addEventListener('error', () => {
      playing.value = false
      available.value = false
    })
    return audio
  }

  async function play() {
    const el = ensureAudio()
    started.value = true
    el.volume = 0
    try {
      await el.play()
      fadeIn(el)
    } catch {
      playing.value = false
    }
  }

  function pause() {
    audio?.pause()
  }

  function toggle() {
    if (playing.value) pause()
    else play()
  }

  return { available, playing, started, detect, play, pause, toggle }
}
