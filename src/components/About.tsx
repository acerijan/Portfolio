import { useMode } from '../ModeContext'

/**
 * SectionHeading — Reusable heading for all sections.
 * Adapts accent color to current mode.
 */
export function SectionHeading({ title }: { title: string }) {
  const { isNight } = useMode()

  return (
    <div className="flex items-center gap-3 mb-10">
      <h2 className={`text-2xl font-bold transition-colors duration-700 ${
        isNight ? 'text-white' : 'text-slate-800'
      }`}>
        {title}
      </h2>
      <div className={`flex-1 h-px max-w-[200px] transition-colors duration-700 ${
        isNight ? 'bg-white/5' : 'bg-slate-200'
      }`} />
    </div>
  )
}

/**
 * About — Concise bio. Calm at night, clear by day.
 */
export default function About() {
  const { isNight } = useMode()

  return (
    <section id="about" className="py-20 md:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" />

        <div className={`max-w-2xl space-y-4 leading-relaxed transition-colors duration-700 ${
          isNight ? 'text-slate-400' : 'text-slate-600'
        }`}>
          <p>
            I'm a DevOps Trainee with a strong interest in cloud computing,
            Linux systems, and automation. I'm currently building my skills
            in the AWS ecosystem and CI/CD pipelines.
          </p>
          <p>
            I enjoy understanding how systems work under the hood and finding
            ways to make them more efficient and reliable. I believe in
            learning by building — every project is a chance to solve real
            problems.
          </p>
          <p>
            When I'm not coding, you'll find me participating in hackathons,
            contributing to tech communities, and exploring new tools in the
            DevOps space.
          </p>
        </div>
      </div>
    </section>
  )
}
