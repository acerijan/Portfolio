import { motion } from 'framer-motion'
import { useMode } from '../ModeContext'
import { SectionHeading } from './About'

/**
 * Experience — Activity cards with gentle scroll-in.
 * Night: dark surface, quiet glow hover.
 * Day: light surface, soft shadow hover.
 */

const items = [
  {
    role: 'Member — AWS Cloud Club',
    period: '2024 — Present',
    description: 'Participating in cloud workshops, hands-on labs, and collaborative projects focused on AWS services.',
  },
  {
    role: 'Participant — Code for Change',
    period: '2024',
    description: 'Contributed to social-impact coding initiatives, building technology solutions for community challenges.',
  },
  {
    role: 'Hackathon Participant',
    period: '2024 — Present',
    description: 'Developed innovative solutions in multiple hackathons spanning AI, web development, and automation.',
  },
  {
    role: 'College Representative',
    period: '2023 — Present',
    description: 'Bridging communication between students and administration, organizing events and advocating for student interests.',
  },
  {
    role: 'Event Coordinator & Tech Support',
    period: '2023 — Present',
    description: 'Coordinated technical aspects of college events including AV setup and workshop support.',
  },
]

export default function Experience() {
  const { isNight } = useMode()

  return (
    <section id="experience" className="py-20 md:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience & Activities" />

        <div className="space-y-4 max-w-2xl">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`
                group p-5 rounded-xl transition-all duration-700
                ${isNight
                  ? 'bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.03)]'
                  : 'bg-white/80 border border-slate-200/80 hover:border-blue-300/40 hover:shadow-lg shadow-sm'
                }
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className={`text-sm font-semibold transition-colors duration-500 ${isNight
                  ? 'text-white group-hover:text-blue-400'
                  : 'text-slate-800 group-hover:text-blue-600'
                  }`}>
                  {item.role}
                </h3>
                <span className={`text-xs font-mono transition-colors duration-700 ${isNight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                  {item.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed transition-colors duration-700 ${isNight ? 'text-slate-500' : 'text-slate-500'
                }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
