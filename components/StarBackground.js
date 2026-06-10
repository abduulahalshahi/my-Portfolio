'use client'
import { useState, useEffect } from 'react'
import { useApp } from '@/context/AppContext'

export default function StarBackground() {
  const { theme } = useApp()
  const [stars, setStars] = useState([])

  // توليد النجوم على الـ client فقط لتجنب hydration error
  useEffect(() => {
    setStars(
      Array.from({ length: 160 }, (_, i) => ({
        id: i,
        x:    (Math.random() * 100).toFixed(2),
        y:    (Math.random() * 100).toFixed(2),
        size: (Math.random() * 1.5 + 0.5).toFixed(2),
        twinkle: (Math.random() * 3 + 2).toFixed(1),
        drift:   (Math.random() * 12 + 18).toFixed(1),
        delay:   (Math.random() * 6).toFixed(1),
      }))
    )
  }, [])

  // النجوم تظهر فقط في الثيم الداكن
  if (theme === 'light') return null

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 25% 35%, #0a1e3d 0%, #04101f 45%, #010810 100%)',
      }}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left:      `${star.x}%`,
            top:       `${star.y}%`,
            width:     `${star.size}px`,
            height:    `${star.size}px`,
            animation: `twinkle ${star.twinkle}s ease-in-out ${star.delay}s infinite,
                        drift   ${star.drift}s  ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
