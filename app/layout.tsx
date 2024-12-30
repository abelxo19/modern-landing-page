import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Landing Page',
  description: 'Transform Your Ideas into Reality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

