import { ArrowUpRight, Asterisk } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Start with a spark.',
    description: 'What do you want to make, and why does it matter? Give the idea a name and a little direction.',
  },
  {
    number: '02',
    title: 'Make a little room.',
    description: 'Choose the next few things you can actually do. Small enough to start. Meaningful enough to move you forward.',
  },
  {
    number: '03',
    title: 'Keep making.',
    description: 'Finish a task, take a breath, and see what’s next. Progress doesn’t have to be loud to count.',
  },
]

export default function Workflow() {
  return (
    <section
      className="workflow-section section-space"
      id="how-it-works"
      aria-labelledby="workflow-heading"
    >
      <div className="page-width workflow-layout">
        <div className="workflow-intro">
          <p className="eyebrow">FROM SOMEDAY TO STARTED</p>
          <h2 id="workflow-heading">
            Your ambition.<br />
            A simpler <span className="editorial">rhythm.</span>
          </h2>
          <p>
            You don’t need a complicated system.
            <br className="desktop-break" />{' '}
            Just a clear place to begin.
          </p>
          <a className="text-link" href="#demo">
            See it in the demo <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <Asterisk
            className="workflow-asterisk"
            size={110}
            strokeWidth={0.8}
            aria-hidden="true"
          />
        </div>
        <ol className="workflow-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
