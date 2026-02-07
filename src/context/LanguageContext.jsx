import { createContext, useContext } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const language = useLanguage()
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
