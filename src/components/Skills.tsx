import { Database, Monitor, Rocket, Server, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { skills } from '@/data'

const icons = {
  'Back-End': Server,
  'Front-End': Monitor,
  Dados: Database,
  'Qualidade e DevOps': Rocket,
  'IA no desenvolvimento': Sparkles,
}

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg`

const techIcons: Record<string, string> = {
  'C#': devicon('csharp'),
  '.NET': devicon('dotnetcore'),
  'ASP.NET Core': devicon('dotnetcore'),
  React: devicon('react'),
  TypeScript: devicon('typescript'),
  'Tailwind CSS': devicon('tailwindcss'),
  PostgreSQL: devicon('postgresql'),
  Git: devicon('git'),
  'GitHub Actions': devicon('githubactions'),
  Docker: devicon('docker'),
  Playwright: devicon('playwright'),
  OpenTelemetry: devicon('opentelemetry'),
  'GitHub Copilot': devicon('githubcopilot'),
  Claude: devicon('claude'),
}

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-green-400">-- 04 · stack</p>
      <h2 className="mt-2 text-2xl font-semibold">Tecnologias do dia a dia</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = icons[group.title as keyof typeof icons]
          const isLastAlone = index === skills.length - 1 && skills.length % 2 === 1

          return (
            <article
              key={group.title}
              className={`border bg-card p-5 transition-colors hover:border-green-400/50 ${isLastAlone ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center border bg-muted">
                  <Icon className="size-4" />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{group.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <Badge key={item} variant="secondary" className="gap-1.5">
                    {techIcons[item] && (
                      <img
                        src={techIcons[item]}
                        alt=""
                        loading="lazy"
                        className="size-3.5"
                        onError={e => (e.currentTarget.style.display = 'none')}
                      />
                    )}
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}