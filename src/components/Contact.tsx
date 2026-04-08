import { useState } from 'react'
import { useMode } from '../ModeContext'
import { SectionHeading } from './About'

/**
 * Contact — Form + social links with emotional mode adaptation.
 * Night: dark inputs, blue accent glow.
 * Day: light inputs, soft blue highlight.
 */

const socials = [
  {
    label: 'mhrjnrijan@gmail.com',
    href: 'mailto:mhrjnrijan@gmail.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'github.com/acerijan',
    href: 'https://github.com/acerijan',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'linkedin.com/in/rijan-maharjan03',
    href: 'https://linkedin.com/in/rijan-maharjan03',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { isNight } = useMode()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSent(true)
    }
  }

  // Shared input classes based on mode
  const inputClass = `
    w-full px-3.5 py-2.5 rounded-lg text-sm transition-all duration-700
    ${isNight
      ? 'bg-white/[0.03] border border-white/[0.06] text-white placeholder-slate-600 focus:border-blue-500/40'
      : 'bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-400'
    }
  `

  return (
    <section id="contact" className="py-20 md:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Form */}
          <div>
            {sent ? (
              <div className={`p-6 rounded-xl text-center transition-all duration-700 ${
                isNight
                  ? 'bg-white/[0.03] border border-white/[0.06]'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}>
                <p className={`font-medium mb-2 ${isNight ? 'text-blue-400' : 'text-blue-600'}`}>
                  Message sent!
                </p>
                <p className={`text-sm mb-4 ${isNight ? 'text-slate-400' : 'text-slate-500'}`}>
                  Thanks for reaching out. I'll reply soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className={`text-sm hover:underline ${isNight ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm mb-1.5 transition-colors duration-700 ${
                    isNight ? 'text-slate-400' : 'text-slate-600'
                  }`}>Name</label>
                  <input
                    type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={`${inputClass} ${errors.name ? '!border-red-500/50' : ''}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label className={`block text-sm mb-1.5 transition-colors duration-700 ${
                    isNight ? 'text-slate-400' : 'text-slate-600'
                  }`}>Email</label>
                  <input
                    type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={`${inputClass} ${errors.email ? '!border-red-500/50' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label className={`block text-sm mb-1.5 transition-colors duration-700 ${
                    isNight ? 'text-slate-400' : 'text-slate-600'
                  }`}>Message</label>
                  <textarea
                    rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    className={`${inputClass} resize-none ${errors.message ? '!border-red-500/50' : ''}`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className={`
                    px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-500
                    ${isNight
                      ? 'border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]'
                      : 'border border-blue-500/40 text-blue-600 hover:bg-blue-50 hover:shadow-md'
                    }
                  `}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <p className={`text-sm mb-4 transition-colors duration-700 ${
              isNight ? 'text-slate-500' : 'text-slate-500'
            }`}>
              Or reach me directly:
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-3 p-3.5 rounded-xl text-sm transition-all duration-700
                  ${isNight
                    ? 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-blue-400 hover:border-blue-500/15'
                    : 'bg-white/80 border border-slate-200/80 text-slate-500 hover:text-blue-600 hover:border-blue-300/40 hover:shadow-md shadow-sm'
                  }
                `}
              >
                {s.icon}
                <span className="truncate">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
