import { useState, useEffect } from 'react'
import { useMode } from '../ModeContext'

/**
 * Navbar — Adapts glass/surface to Night or Day mode.
 */

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { isNight } = useMode()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled
          ? isNight
            ? 'bg-[#0b0f1a]/85 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`text-lg font-semibold transition-colors duration-700 ${
            isNight ? 'text-white hover:text-blue-400' : 'text-slate-800 hover:text-blue-600'
          }`}
        >
          RM<span className={isNight ? 'text-blue-400' : 'text-blue-500'}>.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => navigate(l.href)}
              className={`text-sm transition-colors duration-500 ${
                isNight
                  ? 'text-slate-400 hover:text-blue-400'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-500 ${
            isNight ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-5 pb-4 space-y-1 transition-colors duration-700 ${
          isNight
            ? 'bg-[#111827]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50'
        }`}>
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => navigate(l.href)}
              className={`block w-full text-left py-2.5 text-sm transition-colors duration-500 ${
                isNight
                  ? 'text-slate-400 hover:text-blue-400'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
