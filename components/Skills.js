'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'

// قسم "المهارات"
export default function Skills() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.skills}</SectionTitle>

      {Object.entries(p.skills).map(([group, tags]) => (
        <div key={group} className="mb-7">
          {/* اسم المجموعة */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-muted mb-3">{group}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="skill-tag px-3 sm:px-4 py-1.5 sm:py-2 bg-surface border border-border rounded-md text-sm sm:text-base cursor-default text-fore">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
