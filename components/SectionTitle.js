// عنوان القسم — مشترك بين جميع الأقسام

export default function SectionTitle({ children, center = false }) {
  return (
    <h2 className={`text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-4 text-[#9d97ff] ${center ? 'justify-center' : ''}`}>
      {center && <span className="flex-1 h-px bg-border" />}
      {children}
      <span className="flex-1 h-px bg-border" />
    </h2>
  )
}
