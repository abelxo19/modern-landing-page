import { ArrowRight, Check, Circle, FileText, Flag, LayoutGrid } from 'lucide-react'

export default function Features() {
  return (
    <section
      className="features-section section-space"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A PLACE FOR YOUR PROCESS</p>
            <h2 id="features-heading">
              Everything you need.<br />
              <span className="muted-heading">Space to make it yours.</span>
            </h2>
          </div>
          <p>
            From the first messy thought to the final little detail. A simple way to
            see what matters and what comes next.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-visual brief-visual" aria-hidden="true">
              <div className="mini-note">
                <span><FileText size={14} /> THE BIG LITTLE IDEA</span>
                <strong>
                  It starts with<br />
                  <em>“what if?”</em>
                </strong>
                <div className="note-lines"><i /><i /></div>
                <span className="note-pin" />
              </div>
            </div>
            <div className="feature-copy">
              <span className="feature-number">01 / GET IT OUT OF YOUR HEAD</span>
              <h3>Give your idea a home.</h3>
              <p>
                Keep the purpose close. A short project brief turns a scattered thought
                into something you can work toward.
              </p>
              <a className="text-link" href="#demo">
                Meet your workspace <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-visual steps-visual" aria-hidden="true">
              <div className="mini-task">
                <Check size={15} />
                <span>Find the starting point</span>
              </div>
              <div className="mini-task current">
                <Circle size={15} />
                <span>Make a little progress</span>
                <LayoutGrid size={14} />
              </div>
              <div className="mini-task">
                <Circle size={15} />
                <span>Keep the good things going</span>
              </div>
            </div>
            <div className="feature-copy">
              <span className="feature-number">02 / FIND YOUR NEXT STEP</span>
              <h3>Make the big feel doable.</h3>
              <p>
                Break the project into clear, small tasks. Shape it, build it, share
                it—one manageable step at a time.
              </p>
              <a className="text-link" href="#how-it-works">
                Find your flow <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-visual progress-visual" aria-hidden="true">
              <div className="progress-orbit">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="49" />
                  <circle className="orbit-fill" cx="60" cy="60" r="49" />
                </svg>
                <span>
                  <Flag size={23} />
                  <strong>Getting there.</strong>
                </span>
              </div>
              <span className="progress-sticker">
                <Check size={12} /> Another step forward
              </span>
            </div>
            <div className="feature-copy">
              <span className="feature-number">03 / SEE HOW FAR YOU’VE COME</span>
              <h3>Notice the small wins.</h3>
              <p>
                Check things off and watch your progress grow. A little momentum goes
                a long way when you’re making something new.
              </p>
              <a className="text-link" href="#demo">
                Try checking a task <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
