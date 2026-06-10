'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'

// قسم "نبذة عني"
export default function About() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.about}</SectionTitle>
      <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">{p.about}</p>
    </section>
  )
}
