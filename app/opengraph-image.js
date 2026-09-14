import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Abdullah Alshahi — Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b0b16 0%, #1a1730 60%, #2a2450 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, color: '#9d97ff', marginBottom: 24, letterSpacing: 2 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>Abdullah Alshahi</div>
        <div style={{ fontSize: 40, color: '#c9c6e6', marginTop: 20 }}>
          Frontend Developer · React.js · Next.js
        </div>
        <div style={{ fontSize: 28, color: '#8b88a8', marginTop: 40 }}>
          abdullah-al-shahi-portfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
