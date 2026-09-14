import { NextResponse } from 'next/server'
import { isAuthed } from '@/lib/auth'
import { visitsCollection, mongoConfigured } from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  if (!isAuthed()) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }
  if (!mongoConfigured) {
    return NextResponse.json({ ok: true, visits: [], total: 0, configured: false })
  }

  const col = await visitsCollection()
  const [docs, total] = await Promise.all([
    col.find({}).sort({ time: -1 }).limit(500).toArray(),
    col.countDocuments({}),
  ])

  const visits = docs.map((d) => ({
    time: d.time instanceof Date ? d.time.toISOString() : d.time,
    ip: d.ip || '',
    country: d.country || '',
    region: d.region || '',
    city: d.city || '',
    ua: d.ua || '',
    referrer: d.referrer || '',
    path: d.path || '',
    lang: d.lang || '',
  }))

  return NextResponse.json({ ok: true, visits, total, configured: true })
}
