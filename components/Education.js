'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'

// قسم "التعليم والشهادات"
export default function Education() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="education" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.education}</SectionTitle>

      {p.education.map((item, i) => (
        <div key={i} className="card bg-surface border border-border rounded-xl px-5 sm:px-7 py-4 sm:py-5 mb-4 flex justify-between items-center flex-wrap gap-3">
          <div>
            <p className="font-semibold text-base sm:text-lg text-fore">{item.degree}</p>
            <p className="text-[#9d97ff] text-sm sm:text-base mt-0.5">{item.school}</p>
          </div>
          <span className="text-muted text-sm sm:text-base">{item.year}</span>
        </div>
      ))}
    </section>
  )
}
