import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMode } from '../ModeContext'

/**
 * CurtainToggle — A vertical "curtain string" on the top-right.
 * Click/pull to transition between Night ↔ Day.
 * The interaction should feel like pulling open a curtain to let light in.
 */

interface Props {
  onToggle: () => void
}

export default function CurtainToggle({ onToggle }: Props) {
  const { isNight } = useMode()
  const [pulling, setPulling] = useState(false)

  const handlePull = () => {
    setPulling(true)
    // Delay the mode switch to let the pull animation play
    setTimeout(() => {
      onToggle()
      setPulling(false)
    }, 500)
  }

  return (
    <div className="fixed top-0 right-5 sm:right-7 z-50 flex flex-col items-center">
      {/* String line */}
      <motion.div
        className="w-px"
        style={{
          background: isNight
            ? 'linear-gradient(to bottom, transparent, rgba(148,163,184,0.2), rgba(148,163,184,0.4))'
            : 'linear-gradient(to bottom, transparent, rgba(100,116,139,0.15), rgba(100,116,139,0.3))',
        }}
        animate={{ height: pulling ? 72 : 44 }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      />

      {/* Pull knob */}
      <motion.button
        onClick={handlePull}
        className="relative group"
        whileHover={{ y: 3 }}
        whileTap={{ y: 14 }}
        animate={{ y: pulling ? 18 : 0 }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        aria-label={isNight ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      >
        {/* Knob circle */}
        <div
          className={`
            w-7 h-7 rounded-full flex items-center justify-center text-xs
            transition-all duration-700 ease-out
            ${isNight
              ? 'bg-surface border border-border shadow-[0_0_12px_rgba(59,130,246,0.1)]'
              : 'bg-white border border-slate-200 shadow-md'
            }
          `}
        >
          <motion.span
            key={isNight ? 'moon' : 'sun'}
            initial={{ scale: 0, rotate: -60 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 60 }}
            transition={{ duration: 0.4 }}
          >
            {isNight ? '🌧️' : '🌤'}
          </motion.span>
        </div>

        {/* Tooltip */}
        <span
          className={`
            absolute right-full mr-3 top-1/2 -translate-y-1/2
            px-2.5 py-1 rounded text-[11px] whitespace-nowrap
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            pointer-events-none
            ${isNight
              ? 'bg-surface text-text-muted border border-border'
              : 'bg-white text-slate-500 border border-slate-200 shadow-sm'
            }
          `}
        >
          {isNight ? 'Pull me' : 'Pull me'}
        </span>
      </motion.button>
    </div>
  )
}
