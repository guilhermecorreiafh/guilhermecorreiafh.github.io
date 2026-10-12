import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data'

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-green-400">-- 01 · projetos</p>
      <h2 className="mt-2 text-2xl font-semibold">Projetos</h2>

      <div className="mt-8 grid gap-8">
        {projects.map(project => (
          <article
            key={project.name}
            className="group overflow-hidden border bg-card transition-colors hover:border-green-400/50"
          >
            <div className="overflow-hidden border-b">
              <img
                src={project.image}
                alt={`Tela do ${project.name}`}
                loading="lazy"
                className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              <Button asChild variant="outline" className="mt-6">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Ver código <ArrowUpRight />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}