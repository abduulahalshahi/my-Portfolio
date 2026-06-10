'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'

export default function Projects() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.projects}</SectionTitle>

      {p.projects.map((project, i) => (
        <div key={i} className="card bg-surface border border-border rounded-xl p-5 sm:p-7 mb-4">
          <p className="font-bold text-lg sm:text-xl mb-1 text-fore">{project.name}</p>
          {project.stack && <p className="text-[#9d97ff] text-xs sm:text-sm mb-4">{project.stack}</p>}
          <ul className="list-disc list-inside text-muted text-sm sm:text-base space-y-2 mb-4">
            {project.points.map((point, j) => <li key={j}>{point}</li>)}
          </ul>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 rounded-lg bg-[#9d97ff] text-white text-sm font-semibold hover:bg-[#7b74f5] transition-colors"
            >
              {lang === 'ar' ? 'دخول' : 'Visit Project'}
            </a>
          )}
        </div>
      ))}
    </section>
  )
}
