import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './ar.json'
import en from './en.json'

const STORAGE_KEY = 'carpentry-lang'

const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const initialLang = savedLang === 'en' || savedLang === 'ar' ? savedLang : 'ar'

i18n.use(initReactI18next).init({
  resources: { ar: { translation: ar }, en: { translation: en } },
  lng: initialLang,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

const applyRTL = (lng) => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.classList.toggle('rtl', lng === 'ar')
  document.body.classList.toggle('rtl', lng === 'ar')
}

applyRTL(initialLang)

i18n.on('languageChanged', (lng) => {
  if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lng)
  applyRTL(lng)
})

export default i18n
