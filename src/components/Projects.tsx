import { motion } from 'framer-motion'
import { useMode } from '../ModeContext'
import { SectionHeading } from './About'

/**
 * Projects — Two project cards with emotional adaptation.
 * Night: dark glass, subtle blue glow on hover.
 * Day: white cards, soft shadow on hover.
 */

const projects = [
  {
    title: 'LearnMate',
    description:
      'An AI-powered learning assistant that helps students understand complex topics through intelligent document processing and question-answering.',
    tech: ['Python', 'Streamlit', 'NLP', 'HuggingFace'],
    features: ['PDF upload & parsing', 'Text summarization', 'Q&A system'],
    github: 'https://github.com/acerijan',
    status: null,
  },
  {
    title: 'DevOps Pipeline',
    description:
      'End-to-end CI/CD pipeline using GitHub Actions for automated testing, building, and deploying applications to AWS EC2.',
    tech: ['GitHub Actions', 'AWS EC2', 'Docker', 'Shell Scripting'],
    features: ['Automated testing', 'EC2 deployment', 'Infrastructure automation'],
    github: 'https://github.com/acerijan',
    status: 'In Progress',
  },
]

export default function Projects() {
  const { isNight } = useMode()

  return (
    <section id="projects" className="py-20 md:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              className={`
                group p-6 rounded-xl transition-all duration-700
                ${isNight
                  ? 'bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]'
                  : 'bg-white/80 border border-slate-200/80 hover:border-blue-300/50 hover:shadow-xl shadow-sm'
                }
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-lg font-semibold transition-colors duration-500 ${isNight
                  ? 'text-white group-hover:text-blue-400'
                  : 'text-slate-800 group-hover:text-blue-600'
                  }`}>
                  {project.title}
                </h3>
                {project.status && (
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-700 ${isNight
                    ? 'text-amber-300 bg-amber-400/10'
                    : 'text-amber-600 bg-amber-100'
                    }`}>
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 transition-colors duration-700 ${isNight ? 'text-slate-400' : 'text-slate-500'
                }`}>
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {project.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 transition-colors duration-700 ${isNight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                    <span className={isNight ? 'text-blue-400' : 'text-blue-500'}>▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs font-mono px-2.5 py-1 rounded transition-colors duration-700 ${isNight
                      ? 'text-slate-500 bg-white/[0.03]'
                      : 'text-slate-500 bg-slate-100'
                      }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className={`pt-4 border-t transition-colors duration-700 ${isNight ? 'border-white/[0.05]' : 'border-slate-100'
                }`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm flex items-center gap-1.5 transition-colors duration-500 ${isNight ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
                    }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
