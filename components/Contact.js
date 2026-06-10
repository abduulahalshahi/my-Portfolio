'use client'
import { useApp } from '@/context/AppContext'
import data from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import { IconWhatsApp } from '@/components/Icons'

// قسم "تواصل معي" — روابط التواصل في أسفل الصفحة
export default function Contact() {
  const { lang } = useApp()
  const p = data[lang]
  const { contact } = data

  // بناء قائمة الروابط — يُخفى الرابط إذا كان فارغاً
  const links = [
    { icon: '✉',             label: contact.email, href: `mailto:${contact.email}`,                          show: true },
    { icon: <IconWhatsApp />, label: 'WhatsApp',    href: `https://wa.me/${contact.phone.replace(/\D/g, '')}`, show: true },
    { icon: 'in',            label: 'LinkedIn',     href: contact.linkedin,                                   show: !!contact.linkedin },
    { icon: '⌥',             label: 'GitHub',       href: contact.github,                                     show: !!contact.github },
  ].filter((l) => l.show)

  return (
    <section id="contact" className="py-16 sm:py-20 text-center">
      <SectionTitle center>{p.ui.sections.contact}</SectionTitle>
      <p className="text-muted text-base sm:text-lg mb-8">{p.ui.contactSubtitle}</p>

      <div className="flex justify-center flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href?.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="card flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-surface border border-border rounded-lg text-sm sm:text-base text-fore hover:text-[#9d97ff] transition-colors"
          >
            <span className="flex items-center">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
