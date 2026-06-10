import './globals.css'
import Providers from './providers'
import Navbar from '@/components/Navbar'
import CursorGlow from '@/components/CursorGlow'

export const metadata = {
  title: 'Abdullah Alshahi — Frontend Developer',
  description: 'Frontend Developer specializing in React.js and Next.js',
  other: { 'format-detection': 'telephone=no' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fore font-sans">
        <Providers>
          <CursorGlow />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
