import { useEffect, useRef, useCallback } from 'react'
import { useMode } from '../ModeContext'

/**
 * BinaryCursor — Custom cursor with binary digits (0/1) trailing.
 * Night: more visible, blue digital rain feel.
 * Day: much lighter, subtle warm particles.
 */

interface Particle {
  x: number
  y: number
  char: string
  opacity: number
  vx: number
  vy: number
  size: number
  life: number
}

export default function BinaryCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isNight } = useMode()
  const modeRef = useRef(isNight)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -100, y: -100 })
  const animationId = useRef(0)
  const lastSpawn = useRef(0)

  // Keep mode ref in sync
  useEffect(() => { modeRef.current = isNight }, [isNight])

  const spawnParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 1.2 + 0.3
    particles.current.push({
      x: x + (Math.random() - 0.5) * 24,
      y: y + (Math.random() - 0.5) * 24,
      char: Math.random() > 0.5 ? '1' : '0',
      opacity: modeRef.current ? 0.7 : 0.3,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.4,
      size: 10 + Math.random() * 3,
      life: 1,
    })
  }, [])

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window && navigator.maxTouchPoints > 0) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      const now = Date.now()
      if (now - lastSpawn.current > 60) {
        spawnParticle(e.clientX, e.clientY)
        lastSpawn.current = now
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const night = modeRef.current

      // Cursor dot
      const dotColor = night ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.5)'
      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, 3, 0, Math.PI * 2)
      ctx.fillStyle = dotColor
      ctx.fill()

      // Cursor ring
      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, 16, 0, Math.PI * 2)
      ctx.strokeStyle = night ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.12)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Particles
      particles.current = particles.current.filter((p) => {
        p.life -= 0.018
        p.x += p.vx
        p.y += p.vy
        p.opacity = p.life * (night ? 0.6 : 0.2)
        if (p.life <= 0) return false

        const color = night ? `rgba(147, 197, 253, ${p.opacity})` : `rgba(59, 130, 246, ${p.opacity})`
        ctx.font = `${p.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = color
        if (night) {
          ctx.shadowColor = 'rgba(59, 130, 246, 0.15)'
          ctx.shadowBlur = 6
        }
        ctx.fillText(p.char, p.x, p.y)
        ctx.shadowBlur = 0
        return true
      })

      if (particles.current.length > 40) {
        particles.current = particles.current.slice(-40)
      }

      animationId.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId.current)
    }
  }, [spawnParticle])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window && navigator.maxTouchPoints > 0) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  )
}
