import { ArrowDown, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import ProductDemo from './product-demo'

export default function Hero() {
  return (
    <section className="hero page-width" id="top" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" /> FOR THE IDEAS YOU KEEP COMING BACK TO
        </p>
        <h1 id="hero-heading">
          Big ideas.<br />
          Small steps.<br />
          <span className="editorial">Make it happen.</span>
        </h1>
        <p className="hero-description">
          A calmer place to move your projects forward. Bring your ideas, tasks, and next
          steps together—and make room for the work you love.
        </p>
        <div className="hero-actions">
          <a className="button" href="#demo">
            Explore the demo <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link" href="#how-it-works">
            How it works <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-note">
          <Check size={14} aria-hidden="true" /> A hands-on preview. No account needed.
        </p>
      </div>
      <div className="hero-visual">
        <div className="visual-caption" aria-hidden="true">
          <Sparkles size={18} /> A little structure. A lot of possibility.
        </div>
        <ProductDemo />
        <div className="visual-footnote">
          <span className="hand-drawn-arrow" aria-hidden="true">↳</span> Go on, check something off.
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          Less busywork.<br />
          <strong>More of your best work.</strong>
        </p>
        <span>A side project</span>
        <span>A creative launch</span>
        <span>Your next big thing</span>
      </div>
    </section>
  )
}
