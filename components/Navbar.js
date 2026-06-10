'use client'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'

// شريط التنقل — ثابت في أعلى الصفحة
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, theme, toggleTheme, toggleLang } = useApp()
  const { navLinks, langToggle } = data[lang].ui

  return (
    <header style={{
      position:        'fixed',
      top:             0,
      left:            0,
      right:           0,
      zIndex:          1000,
      backgroundColor: 'var(--bg)',
      borderBottom:    '1px solid var(--bdr)',
    }}>
      <div style={{
        maxWidth:       1024,
        margin:         '0 auto',
        padding:        '0 1rem',
        height:         60,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        gap:            12,
      }}>

        {/* روابط التنقل — تظهر فقط على md وما فوق */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 lg:px-4 py-2 rounded-lg text-fore hover:bg-surface transition-all text-sm lg:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* أزرار الثيم واللغة وقائمة الجوال */}
        <div className="flex items-center gap-1.5 sm:gap-2 ms-auto">

          {/* زر تبديل الثيم */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className="rounded-lg border border-border text-muted hover:text-fore hover:border-accent transition-all flex items-center gap-1"
            style={{ height: 36, padding: '0 10px', fontSize: 14 }}
          >
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLang}
            title="Toggle language"
            className="rounded-lg border border-border text-muted hover:text-fore hover:border-accent font-semibold transition-all"
            style={{ height: 36, padding: '0 10px', fontSize: 14 }}
          >
            {langToggle}
          </button>

          {/* زر القائمة للجوال */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border border-border flex flex-col items-center justify-center gap-1 hover:border-accent transition-colors"
            style={{ height: 36, width: 36 }}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-0.5 bg-fore rounded" />
            <span className="block w-4 h-0.5 bg-fore rounded" />
            <span className="block w-4 h-0.5 bg-fore rounded" />
          </button>

        </div>
      </div>

      {/* قائمة الجوال المنسدلة */}
      {open && (
        <div className="md:hidden border-t border-border px-3 py-2" style={{ backgroundColor: 'var(--surface)' }}>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2.5 rounded-lg text-muted hover:text-fore hover:bg-bg transition-all text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
