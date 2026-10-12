import { experience } from '@/data'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-green-400">-- 02 · experiência</p>
      <h2 className="mt-2 text-2xl font-semibold">Experiência</h2>

      <div className="mt-8 grid gap-4">
        {experience.map(item => (
          <article
            key={item.role}
            className="flex gap-4 border bg-card p-5 transition-colors hover:border-green-400/50"
          >
            <img
              src={item.logo}
              alt={item.place}
              className="size-14 shrink-0 border bg-white object-contain p-1.5"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{item.role}</h3>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.place}</p>

              {item.items.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.items.map(text => (
                    <li key={text}>- {text}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}