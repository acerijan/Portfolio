import { useState, useEffect, useMemo } from 'react'
import { ModeProvider, type Mode } from './ModeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RainEffect from './components/RainEffect'
import BinaryCursor from './components/BinaryCursor'
import CurtainToggle from './components/CurtainToggle'

/**
 * App — Orchestrates the dual emotional modes (Night / Day).
 * The curtain toggle triggers a cinematic transition between worlds.
 */
export default function App() {
  const [mode, setMode] = useState<Mode>('night')

  // Apply body class for CSS transitions
  useEffect(() => {
    document.body.classList.remove('night', 'day')
    document.body.classList.add(mode)
  }, [mode])

  const modeValue = useMemo(
    () => ({ mode, isDay: mode === 'day', isNight: mode === 'night' }),
    [mode]
  )

  const toggleMode = () => setMode((m) => (m === 'night' ? 'day' : 'night'))

  return (
    <ModeProvider value={modeValue}>
      {/* Rain — only visible in night mode, fades out */}
      <RainEffect />

      {/* Binary cursor */}
      <BinaryCursor />

      {/* Curtain pull toggle */}
      <CurtainToggle onToggle={toggleMode} />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </ModeProvider>
  )
}
