import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio_lang'

const LanguageContext = createContext({
  language: 'fr',
  setLanguage: () => {}
})

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'fr'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      setLanguageState(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
