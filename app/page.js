'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import StarBackground from '@/components/StarBackground'
import Hero       from '@/components/Hero'
import About      from '@/components/About'
import Skills     from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects   from '@/components/Projects'
import Education  from '@/components/Education'
import Contact    from '@/components/Contact'
import { IconWhatsApp } from '@/components/Icons'

// الصفحة الرئيسية — تجمع جميع الأقسام
export default function Home() {
  const { lang } = useApp()

  return (
    <main className="min-h-screen bg-bg">

      {/* خلفية النجوم المتحركة — خلف كل المحتوى */}
      <StarBackground />

      {/* المحتوى الرئيسي */}
      <div className="relative z-10">
        <Hero />

        {/* محتوى الأقسام — عرض محدود للوضوح */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>

        {/* الفوتر */}
        <footer className="border-t border-border text-center py-6 sm:py-8 text-muted text-sm sm:text-base">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* زر واتساب */}
            <a
              href="https://wa.me/966536658476"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-border hover:border-[#25D366] hover:text-[#25D366] transition-all text-sm sm:text-base"
            >
              <IconWhatsApp />
              WhatsApp
            </a>
          </div>
          {data[lang].ui.footer}
        </footer>
      </div>
    </main>
  )
}
