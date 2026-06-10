'use client'
import { useState, useEffect } from 'react'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import {
  IconEmail, IconWhatsApp, IconLinkedIn, IconGitHub,
  IconCV, IconDownload, IconContact, IconExternalLink,
} from '@/components/Icons'

// الكلمات التقنية التي تتبدل في Hero
const WORDS = ['React.js', 'Next.js', 'TypeScript', 'JavaScript']

export default function Hero() {
  const [imgError,    setImgError]    = useState(false)
  const [wordIndex,   setWordIndex]   = useState(0)
  const [visible,     setVisible]     = useState(true)
  const [showCV,      setShowCV]      = useState(false)
  const [showContact, setShowContact] = useState(false)
  const { lang } = useApp()
  const p = data[lang]
  const { contact } = data

  // تبديل الكلمة كل 2.2 ثانية مع fade
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % WORDS.length)
        setVisible(true)
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  // إغلاق المودالات بـ Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setShowCV(false); setShowContact(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // بيانات روابط التواصل في البوب أب
  const contactItems = [
    {
      icon:  <IconEmail />,
      label: 'Email',
      value: contact.email,
      href:  `ms-outlook://compose?to=${contact.email}`,
      color: '#6c63ff',
      bg:    'rgba(108,99,255,0.08)',
    },
    {
      icon:  <IconWhatsApp />,
      label: 'WhatsApp',
      value: contact.phone,
      href:  `https://wa.me/${contact.phone.replace(/\D/g, '')}`,
      color: '#25D366',
      bg:    'rgba(37,211,102,0.08)',
    },
    {
      icon:  <IconLinkedIn />,
      label: 'LinkedIn',
      value: contact.linkedin || 'قريباً',
      href:  contact.linkedin || null,
      color: '#0A66C2',
      bg:    'rgba(10,102,194,0.08)',
    },
    {
      icon:  <IconGitHub />,
      label: 'GitHub',
      value: contact.github || 'قريباً',
      href:  contact.github || null,
      color: '#9d97ff',
      bg:    'rgba(157,151,255,0.08)',
    },
  ]

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 sm:pb-16">

        {/* صورة الملف الشخصي */}
        <div className="mb-6 sm:mb-7 w-28 h-28 sm:w-36 sm:h-36">
          {!imgError ? (
            <img
              src="/photo.jpg"
              alt={p.name}
              onError={() => setImgError(true)}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover object-top border-2 border-accent shadow-[0_0_30px_rgba(108,99,255,0.3)]"
            />
          ) : (
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-accent bg-surface shadow-[0_0_30px_rgba(108,99,255,0.3)]" />
          )}
        </div>

        {/* الاسم — تأثير تدرج بنفسجي */}
        <h1 className="name-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4">
          {p.name}
        </h1>

        {/* العنوان الوظيفي — ثابت + كلمة تقنية متبدلة */}
        <p className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#9d97ff]">
            {lang === 'ar' ? 'مطور الواجهات' : 'Frontend Developer'}
          </span>
          <span className="text-muted">·</span>
          <span
            className="text-[#9d97ff] font-semibold"
            style={{ transition: 'opacity 0.4s ease', opacity: visible ? 1 : 0 }}
          >
            {WORDS[wordIndex]}
          </span>
        </p>

        {/* الموقع الجغرافي */}
        <p className="text-muted text-sm sm:text-base md:text-lg mb-6 sm:mb-8">📍 {p.location}</p>

        {/* أزرار الإجراءات */}
        <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">

          {/* زر عرض السيرة الذاتية */}
          <button
            onClick={() => setShowCV(true)}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-accent hover:bg-[#9d97ff] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg transition-all hover:-translate-y-0.5"
          >
            <IconCV />
            {p.ui.hireMe}
          </button>

          {/* زر تواصل معي */}
          <button
            onClick={() => setShowContact(true)}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 border border-border hover:border-accent hover:text-[#9d97ff] text-fore font-semibold rounded-lg text-sm sm:text-base md:text-lg transition-all hover:-translate-y-0.5"
          >
            <IconContact />
            {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
          </button>

          {/* زر تنزيل السيرة الذاتية */}
          <a
            href="/cv.pdf"
            download="Abdullah_Alshahi_CV.pdf"
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 border border-border hover:border-accent hover:text-[#9d97ff] text-fore font-semibold rounded-lg text-sm sm:text-base md:text-lg transition-all hover:-translate-y-0.5"
          >
            <IconDownload />
            {p.ui.downloadCV}
          </a>

        </div>
      </section>

      {/* ===== مودال عرض السيرة الذاتية ===== */}
      {showCV && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setShowCV(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-border"
            style={{ backgroundColor: 'var(--surface)', height: '90dvh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* شريط أعلى المودال */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-border">
              <span className="font-semibold text-fore text-sm sm:text-base">Abdullah Alshahi — CV</span>
              <div className="flex items-center gap-2">
                <a
                  href="/cv.pdf"
                  download="Abdullah_Alshahi_CV.pdf"
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg border border-border hover:border-accent hover:text-[#9d97ff] text-muted text-xs sm:text-sm transition-all"
                >
                  <IconDownload />
                  Download
                </a>
                <button
                  onClick={() => setShowCV(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-border text-muted hover:text-fore hover:border-accent transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* عارض PDF */}
            <iframe
              src="/cv.pdf"
              className="w-full"
              style={{ height: 'calc(90dvh - 56px)', border: 'none' }}
              title="CV"
            />
          </div>
        </div>
      )}

      {/* ===== مودال تواصل معي ===== */}
      {showContact && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setShowContact(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border overflow-hidden"
            style={{ backgroundColor: 'var(--surface)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* هيدر البوب أب */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border">
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-fore">
                  {lang === 'ar' ? 'تواصل معي' : 'Contact Me'}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-0.5">
                  {lang === 'ar' ? 'اختر الطريقة المفضلة' : 'Choose your preferred way'}
                </p>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-border text-muted hover:text-fore hover:border-accent transition-all"
              >
                ✕
              </button>
            </div>

            {/* حقول التواصل */}
            <div className="p-4 sm:p-5 flex flex-col gap-3">
              {contactItems.map((item) => {
                const Tag = item.href ? 'a' : 'div'
                const props = item.href
                  ? { href: item.href, target: item.href.startsWith('ms-outlook') ? '_self' : '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Tag
                    key={item.label}
                    {...props}
                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-border transition-all"
                    style={{
                      backgroundColor: 'var(--bg)',
                      cursor: item.href ? 'pointer' : 'default',
                      opacity: item.href ? 1 : 0.5,
                    }}
                    onMouseEnter={(e) => {
                      if (!item.href) return
                      e.currentTarget.style.borderColor = item.color
                      e.currentTarget.style.backgroundColor = item.bg
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.backgroundColor = 'var(--bg)'
                    }}
                  >
                    <div className="flex-shrink-0" style={{ color: item.color }}>{item.icon}</div>
                    <div className="text-start min-w-0">
                      <p className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-fore text-sm sm:text-base font-medium truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <div className="ms-auto text-muted"><IconExternalLink /></div>
                    )}
                  </Tag>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
