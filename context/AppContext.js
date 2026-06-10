'use client'
// السياق العام — يحمل حالة الثيم واللغة لكل المكونات
import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [lang,  setLang]  = useState('en')
  const [theme, setTheme] = useState('dark')

  // تطبيق الثيم والاتجاه على الـ html عند كل تغيير
  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('light', theme === 'light')
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr'
    html.lang = lang
  }, [theme, lang])

  return (
    <AppContext.Provider value={{
      lang,
      theme,
      toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
      toggleLang:  () => setLang(l  => l  === 'en'   ? 'ar'    : 'en'),
    }}>
      {children}
    </AppContext.Provider>
  )
}

// hook سهل الاستخدام في كل مكون
export const useApp = () => useContext(AppContext)
