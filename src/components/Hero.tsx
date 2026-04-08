import { motion } from 'framer-motion'
import { useMode } from '../ModeContext'

/**
 * Hero — Emotional landing.
 * Night: quiet, introspective, soft glow.
 * Day: warm, hopeful, clear.
 */
export default function Hero() {
  const { isNight } = useMode()

  return (
    <section className="relative min-h-screen flex items-center px-5 pt-16 overflow-hidden">
      {/* Ambient glow */}
      <div
        className={`absolute rounded-full blur-[120px] pointer-events-none transition-all duration-[2s] ${isNight
            ? 'top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/5'
            : 'top-1/4 left-1/3 w-[400px] h-[400px] bg-amber-300/10'
          }`}
      />

      <div className="max-w-5xl mx-auto w-full py-20 md:py-32 relative z-10">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-sm font-mono mb-4 transition-colors duration-700 ${isNight ? 'text-blue-400' : 'text-blue-600'
            }`}
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-colors duration-700 ${isNight ? 'text-white' : 'text-slate-800'
            }`}
        >
          Rijan Maharjan.
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight transition-colors duration-700 ${isNight ? 'text-slate-500' : 'text-slate-400'
            }`}
        >
          DevOps Trainee.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`max-w-xl mt-6 text-base sm:text-lg leading-relaxed transition-colors duration-700 ${isNight ? 'text-slate-400' : 'text-slate-500'
            }`}
        >
          Focused on AWS, automation, and building real-world systems.
          I love solving problems with clean, reliable infrastructure.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={`
              inline-block mt-10 px-7 py-3 rounded text-sm font-medium
              transition-all duration-500
              ${isNight
                ? 'border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]'
                : 'border border-blue-500/40 text-blue-600 hover:bg-blue-50 hover:shadow-md'
              }
            `}
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
