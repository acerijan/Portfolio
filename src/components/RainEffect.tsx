import { useEffect, useRef } from 'react'
import { useMode } from '../ModeContext'

/**
 * RainEffect — Canvas-based rain that only plays in night mode.
 * Fades out gradually when switching to day.
 * Thin vertical streaks, low opacity, slight blur feel.
 */

interface Drop {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
}

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isNight } = useMode()
  const targetOpacity = useRef(1)
  const currentOpacity = useRef(1)
  const animationId = useRef(0)
  const drops = useRef<Drop[]>([])
  const initialized = useRef(false)

  useEffect(() => {
    // Cinematic fade: gradually move toward target
    targetOpacity.current = isNight ? 1 : 0
  }, [isNight])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (!initialized.current) {
        initDrops(canvas.width, canvas.height)
        initialized.current = true
      }
    }

    const initDrops = (w: number, h: number) => {
      const count = Math.floor((w * h) / 12000)
      drops.current = Array.from({ length: Math.min(count, 120) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        length: 2.5 + Math.random() * 25,
        speed: 1.5 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.08,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      if (!canvas || !ctx) return

      // Smoothly interpolate opacity (cinematic pace)
      const diff = targetOpacity.current - currentOpacity.current
      currentOpacity.current += diff * 0.02 // very slow fade

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (currentOpacity.current > 0.005) {
        drops.current.forEach((drop) => {
          drop.y += drop.speed
          if (drop.y > canvas.height) {
            drop.y = -drop.length
            drop.x = Math.random() * canvas.width
          }

          ctx.beginPath()
          ctx.moveTo(drop.x, drop.y)
          ctx.lineTo(drop.x, drop.y + drop.length)
          ctx.strokeStyle = `rgba(148, 163, 184, ${drop.opacity * currentOpacity.current})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        })
      }

      animationId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  )
}
