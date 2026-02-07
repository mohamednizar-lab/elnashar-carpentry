import { useState, useEffect } from 'react'

const STORAGE_KEY = 'carpentry-lang'

export const useLanguage = () => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'ar'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const setLang = (newLang) => {
    setLangState(newLang === 'ar' || newLang === 'en' ? newLang : 'ar')
  }

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar')
  }

  return { lang, setLang, toggleLang }
}
