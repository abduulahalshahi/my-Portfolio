'use client'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import { IconExternalLink } from '@/components/Icons'

// تدرجات لونية مميزة لكل مشروع — تعطي كل بطاقة هوية بصرية مختلفة
const COVERS = [
  { gradient: 'linear-gradient(135deg, #6c63ff 0%, #2b2470 100%)', glyph: '⚛' },
  { gradient: 'linear-gradient(135deg, #16a3a3 0%, #0d3b4f 100%)', glyph: '🌍' },
  { gradient: 'linear-gradient(135deg, #f59e0b 0%, #7c2d12 100%)', glyph: '📚' },
  { gradient: 'linear-gradient(135deg, #ef4444 0%, #1e1b4b 100%)', glyph: '🚀' },
  { gradient: 'linear-gradient(135deg, #22c55e 0%, #0f2e1a 100%)', glyph: '💼' },
]

export default function Projects() {
  const { lang } = useApp()
  const p = data[lang]

  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionTitle>{p.ui.sections.projects}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {p.projects.map((project, i) => {
          const cover = COVERS[i % COVERS.length]
          const Wrapper = project.link ? 'a' : 'div'
          const wrapperProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Wrapper
              key={i}
              {...wrapperProps}
              className="card group block bg-surface border border-border rounded-xl overflow-hidden"
            >
              {/* صورة/غلاف المشروع */}
              <div
                className="relative aspect-video overflow-hidden flex items-center justify-center"
                style={{ background: cover.gradient }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <span className="text-5xl sm:text-6xl opacity-90 transition-transform duration-500 group-hover:scale-110">
                      {cover.glyph}
                    </span>

                    {/* شبكة نقطية خفيفة لإضافة عمق */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                  </>
                )}

                {/* طبقة تعتيم سفلية + اسم المشروع */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 sm:px-5 pt-10 pb-4">
                  <p className="font-bold text-base sm:text-lg text-white drop-shadow">{project.name}</p>
                </div>

                {/* طبقة hover مع دعوة للدخول */}
                {project.link && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9d97ff] text-white text-sm font-semibold shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {lang === 'ar' ? 'دخول للمشروع' : 'View Project'}
                      <IconExternalLink />
                    </span>
                  </div>
                )}
              </div>

              {/* محتوى البطاقة */}
              <div className="p-5 sm:p-6">
                {project.stack && (
                  <p className="text-[#9d97ff] text-xs sm:text-sm mb-3">{project.stack}</p>
                )}
                <ul className="list-disc list-inside text-muted text-sm sm:text-base space-y-2">
                  {project.points.map((point, j) => <li key={j}>{point}</li>)}
                </ul>

                {project.link && (
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#9d97ff] group-hover:text-[#7b74f5] transition-colors">
                    {lang === 'ar' ? 'دخول' : 'Visit Project'}
                    <IconExternalLink />
                  </span>
                )}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
