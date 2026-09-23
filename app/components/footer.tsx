import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import Brand from './brand'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div>
            <Brand />
            <p>A clearer path from idea to done.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Demo access</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>MAKEIT — a portfolio demonstration.</p>
          <a href={siteConfig.repository}>
            View source on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
