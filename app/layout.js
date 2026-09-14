import './globals.css'
import Providers from './providers'
import Navbar from '@/components/Navbar'
import CursorGlow from '@/components/CursorGlow'
import VisitTracker from '@/components/VisitTracker'

const SITE_URL = 'https://abdullah-al-shahi-portfolio.vercel.app'
const TITLE = 'Abdullah Alshahi'
const DESCRIPTION =
  'Personal portfolio of Abdullah Alshahi — Frontend Developer (React.js / Next.js). Projects, experience, skills, and contact.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Abdullah Alshahi', 'portfolio', 'Frontend Developer', 'React', 'Next.js', 'عبدالله الشهي'],
  authors: [{ name: 'Abdullah Alshahi' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Abdullah Alshahi',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  other: { 'format-detection': 'telephone=no' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fore font-sans">
        <Providers>
          <VisitTracker />
          <CursorGlow />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
