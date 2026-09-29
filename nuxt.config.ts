// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  // Asosiy manzil ochilganda to'g'ridan-to'g'ri /for-you sahifasiga o'tadi
  routeRules: {
    '/': { redirect: '/for-you' }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uz' },
      // viewport-fit=cover — iPhone notch / safe-area insetlari ishlashi uchun
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [
        { name: 'theme-color', content: '#fbf7f2' },
        // Shaxsiy sahifa — qidiruv tizimlarida ko'rinmasin
        { name: 'robots', content: 'noindex, nofollow' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
