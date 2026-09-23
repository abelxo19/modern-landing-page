'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './brand'

const navigation = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Demo access' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnOutsidePointer(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const desktop = window.matchMedia('(min-width: 760px)')
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          event.preventDefault()
          setMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <div className="page-width header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a className="button button-small header-cta" href="#demo">
          Explore demo <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav page-width"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {[...navigation, { href: '#contact', label: 'Contact' }].map(({ href, label }) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="button button-small" href="#demo" onClick={() => setMenuOpen(false)}>
          Explore demo <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
