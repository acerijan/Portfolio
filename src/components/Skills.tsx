import { useMode } from '../ModeContext'
import { SectionHeading } from './About'

/**
 * Skills — Clean grid of skill categories.
 * Night: dark glass cards with subtle glow.
 * Day: light cards with soft shadow.
 */

const categories = [
  { title: 'Languages', items: ['Java', 'Python', 'C', 'SQL'] },
  { title: 'Cloud (AWS)', items: ['EC2', 'S3', 'Lambda', 'IAM'] },
  { title: 'Tools', items: ['Git', 'Linux', 'Docker (basic)', 'VS Code'] },
  { title: 'DevOps', items: ['CI/CD', 'GitHub Actions', 'Automation', 'Shell Scripting'] },
]

export default function Skills() {
  const { isNight } = useMode()

  return (
    <section id="skills" className="py-20 md:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`
                p-5 rounded-xl transition-all duration-700
                ${isNight
                  ? 'bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.04)]'
                  : 'bg-white/80 border border-slate-200/80 hover:border-blue-300/50 hover:shadow-lg shadow-sm'
                }
              `}
            >
              <h3 className={`text-sm font-semibold mb-4 transition-colors duration-700 ${
                isNight ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className={`text-sm flex items-center gap-2.5 transition-colors duration-700 ${
                    isNight ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-700 ${
                      isNight ? 'bg-slate-600' : 'bg-slate-300'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
