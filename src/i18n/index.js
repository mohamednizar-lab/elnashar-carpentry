import ar from './ar.json'
import en from './en.json'

const translations = { ar, en }

export const getTranslations = (lang) => translations[lang] || translations.ar

export const t = (lang, key) => {
  const keys = key.split('.')
  let value = translations[lang] || translations.ar
  for (const k of keys) {
    value = value?.[k]
  }
  return value ?? key
}
