import { ArrowUpRight, Check } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Pricing() {
  return (
    <section
      className="access-section section-space page-width"
      id="pricing"
      aria-labelledby="access-heading"
    >
      <div className="access-intro">
        <p className="eyebrow">OPEN TO EXPLORE</p>
        <h2 id="access-heading">
          A small preview.<br />
          No big commitment.
        </h2>
        <p>
          MAKEIT is a product concept, built as a portfolio demonstration. Get a feel
          for the idea right here, without an account or a credit card.
        </p>
        <a className="text-link" href={siteConfig.repository}>
          Take a look under the hood <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="access-card">
        <div className="access-card-heading">
          <span className="pill">THE HANDS-ON VERSION</span>
          <span className="access-price">Free to explore</span>
        </div>
        <h3>Your next step starts here.</h3>
        <ul>
          <li>
            <Check size={17} aria-hidden="true" /> Explore a sample project and its brief
          </li>
          <li>
            <Check size={17} aria-hidden="true" /> Check off tasks and see your progress
          </li>
          <li>
            <Check size={17} aria-hidden="true" /> Reset the board and try it again
          </li>
        </ul>
        <a className="button" href="#demo">
          Give MAKEIT a try <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <p className="access-note">Browser demo only. No saved projects or paid plans.</p>
      </div>
    </section>
  )
}
