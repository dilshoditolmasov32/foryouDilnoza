/**
 * "For You" sahifasining barcha matnlari va rasmlari shu yerda.
 * UI komponentlarini ochmasdan, faqat shu faylni tahrirlab hammasini o'zgartirish mumkin.
 *
 * Rasmlar:  /public/images/  (masalan /public/images/memory-1.webp)
 * Qo'shiq:  /public/audio/our-song.mp3
 */

export type StoryIcon = 'sprout' | 'talk' | 'heart' | 'sparkles'

export interface StoryMoment {
  icon: StoryIcon
  title: string
  text: string
}

export interface Memory {
  image: string
  alt: string
  label: string
  title: string
  description: string
}

export interface Letter {
  title: string
  greeting: string
  paragraphs: string[]
  closing: string
  signature: string
}

// ————————————————————————————————————————————————
// Asosiy ismlar
// ————————————————————————————————————————————————

export const author = 'Dilshodbek'

/** Uning ismi — xat va oxirgi sahifada ishlatiladi */
export const herName = 'Dilnoza'

/** Uning rasmi (oxirgi sahifada). Fayl bo'lmasa, rasm shunchaki ko'rsatilmaydi. */
export const herPhoto = '/images/her.jpg'

/** Qo'shiq. Fayl bo'lmasa, "Play our song" tugmasi ko'rinmaydi. */
export const songSrc = '/audio/our-song.mp3'

// ————————————————————————————————————————————————
// 1. Intro
// ————————————————————————————————————————————————

export const intro = {
  eyebrow: 'for you',
  lines: ['Senga kichkina', 'narsam bor...'],
  openLabel: 'Ochish',
  songLabel: 'Play our song'
}

// ————————————————————————————————————————————————
// 2. Bizning hikoyamiz
// ————————————————————————————————————————————————

export const story = {
  title: 'Bizning hikoyamiz',
  subtitle: 'Hammasi qanday boshlangan edi',
  moments: [
    {
      icon: 'sprout',
      title: 'Birinchi uchrashuvimiz',
      text: 'O‘sha kuni hech narsa oddiydek tuyulmagan edi. Hozir bilaman — nega.'
    },
    {
      icon: 'talk',
      title: 'Birinchi marta uzoq gaplashganimiz',
      text: 'Vaqt qanday o‘tib ketganini sezmay qolgandik. Men esa hali ham gaplashgim kelardi.'
    },
    {
      icon: 'heart',
      title: 'Sen men uchun oddiy inson emasligingni tushungan paytim',
      text: 'Kunimning eng yaxshi qismi sen bilan bog‘liq ekanini anglab qoldim.'
    },
    {
      icon: 'sparkles',
      title: 'Eng yaxshi xotiralarimiz',
      text: 'Kichik kulgilar, uzun suhbatlar, jim o‘tirgan damlarimiz ham — hammasi.'
    }
  ] satisfies StoryMoment[]
}

// ————————————————————————————————————————————————
// 3. Xotiralar — rasmlarni /public/images/ ga joylang
// ————————————————————————————————————————————————

export const memories = {
  title: 'Men unutishni istamaydigan xotiralar',
  subtitle: 'Har biri men uchun alohida',
  items: [
    {
      image: '/images/memory-1.webp',
      alt: 'Chiroq nurlari orasida pushti atirgul va qo‘lda yozilgan xat',
      label: 'Birinchi kun',
      title: 'Birinchi xotiramiz',
      description: 'O‘sha kuni sen bilan gaplashganimiz hali ham esimda.'
    },
    {
      image: '/images/memory-2.webp',
      alt: 'Quyosh botayotganda shaharga qarab yonma-yon o‘tirgan ikki kishi',
      label: 'Oddiy bir kun',
      title: 'Birga kulgan kunimiz',
      description: 'Sababsiz kulganimiz — eng chiroyli kunlardan biri edi.'
    },
    {
      image: '/images/memory-3.webp',
      alt: 'Quyosh botishida gullagan sakura daraxtlari ostidagi yo‘lak',
      label: 'Kechqurun',
      title: 'Uzun sayr',
      description: 'Yo‘l qancha uzun bo‘lsa ham, sen bilan qisqa tuyulardi.'
    },
    {
      image: '/images/memory-4.webp',
      alt: 'Qizil yurak ushlagan ayiqcha, atrofida pushti lolalar va atirgullar',
      label: 'Sevimli rasm',
      title: 'Sevimli rasmim',
      description: 'Bu rasmga qaraganimda har safar jilmayib qo‘yaman.'
    }
  ] satisfies Memory[]
}

// ————————————————————————————————————————————————
// 4. Seni nega qadrlayman?
// ————————————————————————————————————————————————

export const reasons = {
  title: 'Seni nega qadrlayman?',
  subtitle: 'Ro‘yxat bundan ancha uzun, albatta',
  items: [
    'Sen kulganingda atrofdagi hamma narsa yorishib ketgani uchun.',
    'Meni tushunishga harakat qilganing uchun — hatto men o‘zimni tushuntira olmaganimda ham.',
    'Oddiy kunlarni ham chiroyli qila olganing uchun.',
    'Samimiyliging uchun. Sen bilan hech qachon o‘zimni boshqacha ko‘rsatishim shart emas.',
    'Mehribonliging uchun — nafaqat menga, balki hammaga.',
    'Sabring uchun. Men buni ko‘pincha qadriga yetmaganman.',
    'Kichik narsalarni eslab qolishing uchun.',
    'Qiyin paytda ham yonimda bo‘lganing uchun.',
    'Seni o‘ylasam, xotirjam bo‘lib qolganim uchun.',
    'Menga yaxshiroq inson bo‘lishni xohlatganing uchun.',
    'Ovozing, gapirish ohanging, kulishing uchun.',
    'Shunchaki — sen bo‘lganing uchun.'
  ]
}

// ————————————————————————————————————————————————
// 5. Raqamli gul
// ————————————————————————————————————————————————

export const flower = {
  image: '/images/flower.webp',
  alt: 'Chiroqlar bilan bezatilgan qizil atirgul va “Haqiqiy gul bera olmasam ham, o‘zim yaratgan gulni senga berdim” yozilgan xat',
  lines: ['Haqiqiy gul bera olmasam ham,', 'o‘zim yaratgan gulni senga berdim.']
}

// ————————————————————————————————————————————————
// 6. Xat
// ————————————————————————————————————————————————

export const letter: Letter = {
  title: 'Senga xat',
  greeting: `${herName},`,
  paragraphs: [
    'Men seni xafa qilganimni tushundim.',
    'Buni oqlashga yoki aybni boshqa narsaga yuklashga harakat qilmayman. Xato meniki edi.',
    'Men seni o‘sha paytda qanday his qilganingni tushunishga harakat qilyapman. Seni og‘ritgan har bir so‘zim uchun afsusdaman.',
    'Sen menga ishonding, men esa o‘sha ishonchni ehtiyot qila olmadim. Bundan keyin so‘zlarim bilan emas, ishlarim bilan isbotlashni xohlayman.',
    'Sen men uchun juda muhimsan. Buni har kuni his qildirishni istayman.'
  ],
  closing: 'Kechir meni.',
  signature: `— ${author}`
}

// ————————————————————————————————————————————————
// 7. Kechirim
// ————————————————————————————————————————————————

export const forgive = {
  lines: ['Men seni majburlab', 'kechirtirmoqchi emasman.'],
  lead: 'Faqat shuni bilishingni istayman:',
  emphasis: 'Sen men uchun muhim odamsan.',
  question: 'Meni kechira olasanmi?',
  yesLabel: 'Ha',
  notYetLabel: 'Hali emas',
  yesResponse: {
    title: 'Rahmat.',
    text: 'Bu men uchun juda katta narsa.'
  },
  notYetResponse: {
    title: 'Tushunaman.',
    text: 'Shoshilma. Men qaroringni hurmat qilaman.'
  },
  backLabel: 'Savolga qaytish'
}

// ————————————————————————————————————————————————
// 8. Final
// ————————————————————————————————————————————————

export const final = {
  madeWith: 'Made with',
  forLabel: 'for'
}
