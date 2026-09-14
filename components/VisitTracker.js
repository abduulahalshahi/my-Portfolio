'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VisitTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith('/admin')) return

    const payload = {
      path: pathname,
      referrer: document.referrer || '',
      lang: navigator.language || '',
    }

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {})
  }, [pathname])

  return null
}
