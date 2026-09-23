'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Check, FileText, LayoutGrid, RotateCcw, Sun } from 'lucide-react'

const initialTasks = [
  { id: 'idea', title: 'Define the idea', phase: 'shape', tag: 'The starting point', done: true },
  { id: 'inspiration', title: 'Collect inspiration', phase: 'shape', tag: 'A little exploration', done: true },
  { id: 'design', title: 'Design the homepage', phase: 'build', tag: 'Find the feeling', done: false },
  { id: 'build', title: 'Build the first version', phase: 'build', tag: 'One piece at a time', done: false },
  { id: 'feedback', title: 'Share with a friend', phase: 'share', tag: 'A fresh perspective', done: false },
  { id: 'launch', title: 'Make it live', phase: 'share', tag: 'Made is better than perfect', done: false },
]

const phases = [
  { id: 'shape', title: 'Shape it', number: '01' },
  { id: 'build', title: 'Build it', number: '02' },
  { id: 'share', title: 'Share it', number: '03' },
]

export default function ProductDemo() {
  const [tasks, setTasks] = useState(initialTasks)
  const [view, setView] = useState<'board' | 'brief'>('board')
  const [announcement, setAnnouncement] = useState('')
  const boardButtonRef = useRef<HTMLButtonElement>(null)
  const completed = tasks.filter((task) => task.done).length
  const percent = Math.round((completed / tasks.length) * 100)

  function toggleTask(id: string) {
    const task = tasks.find((item) => item.id === id)!
    setTasks((current) => current.map((item) => item.id === id ? { ...item, done: !item.done } : item))
    setAnnouncement(`${task.title} marked ${task.done ? 'incomplete' : 'complete'}.`)
  }

  function resetDemo() {
    setTasks(initialTasks)
    setView('board')
    setAnnouncement('Demo reset. 2 of 6 tasks complete.')
  }

  return (
    <div className="product-demo" id="demo" role="region" aria-label="Interactive project demo" tabIndex={-1}>
      <div className="workspace-bar"><span><span className="workspace-mark" aria-hidden="true">m.</span> My workspace <span className="workspace-slash">/</span> Projects</span><span className="demo-badge"><span /> Live preview</span></div>
      <div className="project-heading">
        <span className="project-icon"><Sun size={24} strokeWidth={1.6} aria-hidden="true" /></span>
        <div><p className="project-kicker">THE NEXT CHAPTER</p><h2>Sunday Studio</h2></div>
        <span className="project-monogram" aria-label="Sample project owner: You">Y</span>
      </div>
      <p className="project-description">A small creative studio. A big first step.</p>
      <div className="demo-toolbar">
        <div className="view-switch" role="group" aria-label="Project view">
          <button ref={boardButtonRef} type="button" aria-pressed={view === 'board'} aria-controls="demo-content" onClick={() => setView('board')}><LayoutGrid size={14} aria-hidden="true" /> Board</button>
          <button type="button" aria-pressed={view === 'brief'} aria-controls="demo-content" onClick={() => setView('brief')}><FileText size={14} aria-hidden="true" /> Project brief</button>
        </div>
        <button type="button" className="reset-button" onClick={resetDemo}><RotateCcw size={14} aria-hidden="true" /><span>Reset</span><span className="sr-only"> demo</span></button>
      </div>
      <div id="demo-content" className="demo-content">
        {view === 'board' ? (
          <div className="project-board">
            {phases.map((phase) => (
              <fieldset className="board-column" key={phase.id}>
                <legend><span className={`phase-dot phase-${phase.id}`} aria-hidden="true" /><span>{phase.title}</span><span className="phase-count">{phase.number}</span></legend>
                {tasks.filter((task) => task.phase === phase.id).map((task) => (
                  <label key={task.id} className={`task-card${task.done ? ' is-complete' : ''}`}>
                    {task.id === 'design' && <span className="design-thumbnail" aria-hidden="true"><Sun size={31} strokeWidth={1} /><span>sunday<br /><em>studio.</em></span></span>}
                    <span className="task-title"><input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} /><span className="task-check" aria-hidden="true">{task.done && <Check size={11} strokeWidth={3} />}</span><span>{task.title}</span></span>
                    <span className="task-tag">{task.tag}</span>
                  </label>
                ))}
              </fieldset>
            ))}
          </div>
        ) : (
          <div className="project-brief">
            <span className="brief-label">THE IDEA, IN A FEW WORDS</span>
            <h3>A home for things made with care.</h3>
            <p>Launch a small design studio with a simple website: a few favorite projects, a little about the process, and a way to get in touch.</p>
            <div className="brief-details"><div><span>THE FOCUS</span><strong>Start small. Make it yours.</strong></div><div><span>DONE LOOKS LIKE</span><strong>A first version, out in the world.</strong></div></div>
            <button type="button" className="text-link" onClick={() => { setView('board'); boardButtonRef.current?.focus() }}>Back to the small steps <ArrowUpRight size={15} aria-hidden="true" /></button>
          </div>
        )}
      </div>
      <div className="demo-progress">
        <div className="progress-label"><span>{completed === tasks.length ? 'You made it. Nice work!' : 'Small steps add up.'}</span><strong>{completed} of {tasks.length} complete</strong></div>
        <progress value={completed} max={tasks.length} aria-label="Project completion">{percent}%</progress>
      </div>
      <div className="demo-disclaimer">Sample project · Changes reset when you refresh</div>
      <p className="sr-only" role="status">{announcement}</p>
    </div>
  )
}
