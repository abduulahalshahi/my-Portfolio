import { NextResponse } from 'next/server'
import { visitsCollection, mongoConfigured } from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req) {
  if (!mongoConfigured) return NextResponse.json({ ok: false })

  let body = {}
  try {
    body = await req.json()
  } catch {}

  const path = String(body.path || '')
  // Don't log visits to the admin dashboard itself.
  if (path.startsWith('/admin')) return NextResponse.json({ ok: true })

  const h = req.headers
  const decode = (v) => {
    try {
      return v ? decodeURIComponent(v) : ''
    } catch {
      return v || ''
    }
  }

  const entry = {
    time: new Date(),
    ip:
      h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      h.get('x-real-ip') ||
      'unknown',
    country: h.get('x-vercel-ip-country') || '',
    region: h.get('x-vercel-ip-country-region') || '',
    city: decode(h.get('x-vercel-ip-city')),
    ua: h.get('user-agent') || '',
    referrer: String(body.referrer || h.get('referer') || ''),
    path,
    lang: String(body.lang || '') || h.get('accept-language')?.split(',')[0] || '',
  }

  try {
    const col = await visitsCollection()
    await col.insertOne(entry)
  } catch {
    return NextResponse.json({ ok: false })
  }

  return NextResponse.json({ ok: true })
}
