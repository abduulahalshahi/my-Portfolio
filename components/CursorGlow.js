'use client'
import { useEffect, useRef, useState } from 'react'

// توهج يتبع الماوس — مخفي على الجوال (لا يوجد ماوس)
export default function CursorGlow() {
  const glowRef    = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    // تفعيل التوهج فقط عند أول حركة للماوس
    const activate = () => setShow(true)

    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }

    window.addEventListener('mousemove', activate, { once: true })
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', activate)
      window.removeEventListener('mousemove', move)
    }
  }, [])

  // حجم التوهج يتناسب مع الشاشة — أصغر على اللابتوب وأكبر على الديسكتوب
  return (
    <div
      ref={glowRef}
      style={{
        position:      'fixed',
        pointerEvents: 'none',
        zIndex:        9999,
        width:         'clamp(200px, 25vw, 380px)',
        height:        'clamp(200px, 25vw, 380px)',
        borderRadius:  '50%',
        transform:     'translate(-50%, -50%)',
        background:    'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
        mixBlendMode:  'screen',
        transition:    'left 0.08s ease, top 0.08s ease',
        left:          '-999px',
        top:           '-999px',
        opacity:       show ? 1 : 0,
        // إخفاء على الأجهزة التي لا تدعم الماوس (جوال/تابلت)
        display:       'var(--cursor-display, block)',
      }}
    />
  )
}
