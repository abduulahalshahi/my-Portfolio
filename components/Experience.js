'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'

// قسم "الخبرة"
export default function Experience() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="experience" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.experience}</SectionTitle>

      {p.experience.map((job, i) => (
        <div key={i} className="card bg-surface border border-border rounded-xl p-5 sm:p-7 mb-4">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
            <p className="font-bold text-lg sm:text-xl text-fore">{job.role}</p>
            <span className="text-xs sm:text-sm text-muted bg-bg border border-border px-2.5 py-1 rounded-full">
              {job.meta}
            </span>
          </div>
          <p className="text-[#9d97ff] text-base sm:text-lg mb-4">{job.company}</p>
          <ul className="list-disc list-inside text-muted text-sm sm:text-base space-y-2">
            {job.points.map((point, j) => <li key={j}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
