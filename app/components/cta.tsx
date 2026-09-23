import { ArrowUpRight, Asterisk } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function CTA() {
  return (
    <section
      className="contact-section page-width"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel">
        <div>
          <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
          <h2 id="contact-heading">
            An idea? A thought?<br />
            <span className="editorial">Let’s hear it.</span>
          </h2>
          <p>
            Have feedback on MAKEIT or want to talk about the project?
            <br className="desktop-break" />{' '}
            There’s a real person on the other end.
          </p>
          <a
            className="button button-light"
            href={`mailto:${siteConfig.email}?subject=Let%27s%20talk%20about%20MAKEIT`}
          >
            Say hello <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <span className="contact-email">{siteConfig.email}</span>
        </div>
        <div className="contact-art" aria-hidden="true">
          <Asterisk strokeWidth={0.55} />
          <span>
            Great things<br />
            start small.
          </span>
        </div>
      </div>
    </section>
  )
}
