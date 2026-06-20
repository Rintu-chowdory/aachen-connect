import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'de')
  const toggleLang = () => {
    const next = lang === 'de' ? 'en' : 'de'
    setLang(next)
    localStorage.setItem('lang', next)
  }
  const tr = translations[lang]
  return <LangContext.Provider value={{ lang, toggleLang, tr }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}