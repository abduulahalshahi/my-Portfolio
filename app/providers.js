'use client'
// ملف وسيط — لأن layout.js server component ولا يمكنه استخدام context مباشرة
import { AppProvider } from '@/context/AppContext'

export default function Providers({ children }) {
  return <AppProvider>{children}</AppProvider>
}
