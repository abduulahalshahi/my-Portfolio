'use client'

import { useCallback, useEffect, useState } from 'react'

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [visits, setVisits] = useState([])
  const [total, setTotal] = useState(0)
  const [configured, setConfigured] = useState(true)

  const loadVisits = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/visits', { cache: 'no-store' })
    if (res.status === 401) {
      setAuthed(false)
      setLoading(false)
      return
    }
    const data = await res.json()
    setVisits(data.visits || [])
    setTotal(data.total || 0)
    setConfigured(data.configured !== false)
    setAuthed(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadVisits()
  }, [loadVisits])

  async function login(e) {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (!res.ok) {
      setError('كلمة المرور غير صحيحة')
      return
    }
    setPassword('')
    loadVisits()
  }

  async function logout() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    setAuthed(false)
    setVisits([])
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <form
          onSubmit={login}
          className="w-full max-w-sm space-y-4 rounded-xl border border-white/10 p-6"
        >
          <h1 className="text-lg font-semibold">لوحة الزوّار</h1>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            className="w-full rounded-lg bg-white/5 px-3 py-2 outline-none"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"
          >
            دخول
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          الزوّار{' '}
          <span className="text-sm opacity-60">
            (إجمالي {total} · {new Set(visits.map((v) => v.ip)).size} زائر مختلف)
          </span>
        </h1>
        <div className="flex gap-2">
          <button
            onClick={loadVisits}
            className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
          >
            تحديث
          </button>
          <button
            onClick={logout}
            className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
          >
            خروج
          </button>
        </div>
      </div>

      {!configured && (
        <p className="text-sm text-amber-400">
          متغيّرات Upstash غير مضبوطة — لن تُسجَّل الزيارات حتى تضيفها في Vercel.
        </p>
      )}

      {loading ? (
        <p className="opacity-60">جارِ التحميل…</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left">
              <tr>
                <th className="px-3 py-2">الوقت</th>
                <th className="px-3 py-2">الموقع</th>
                <th className="px-3 py-2">IP</th>
                <th className="px-3 py-2">الصفحة</th>
                <th className="px-3 py-2">المصدر</th>
                <th className="px-3 py-2">الجهاز</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((v, i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="px-3 py-2 whitespace-nowrap" title={v.time}>
                    {timeAgo(v.time)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {[v.city, v.region, v.country].filter(Boolean).join(', ') ||
                      '—'}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{v.ip || '—'}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{v.path || '—'}</td>
                  <td
                    className="px-3 py-2 max-w-[16rem] truncate"
                    title={v.referrer}
                  >
                    {v.referrer || 'مباشر'}
                  </td>
                  <td
                    className="px-3 py-2 max-w-[18rem] truncate"
                    title={v.ua}
                  >
                    {v.ua || '—'}
                  </td>
                </tr>
              ))}
              {visits.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center opacity-60">
                    لا توجد زيارات بعد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
