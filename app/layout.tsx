import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header'
import Footer from './components/footer'
import { siteConfig } from '@/lib/site'

const title = 'MAKEIT — A little structure. More making.'
const description =
  'Turn a project idea into a clear brief, manageable tasks, and a visible next step. Explore MAKEIT, a project-planning concept and interactive portfolio demonstration.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: siteConfig.name,
  openGraph: {
    title,
    description,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

