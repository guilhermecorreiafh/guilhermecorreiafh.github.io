import { certifications, experience } from '@/data'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold">Experiência</h2>

      <ol className="mt-8 space-y-8 border-l pl-6">
        {experience.map(item => (
          <li key={item.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {item.role} <span className="text-muted-foreground">· {item.place}</span>
              </h3>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>

            {item.items.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.items.map(text => (
                  <li key={text}>- {text}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      {certifications.length > 0 && (
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-muted-foreground">Certificações</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {certifications.map(cert => (
              <li key={cert.name} className="flex flex-wrap justify-between gap-2">
                <span>{cert.name}</span>
                <span className="text-muted-foreground">
                  {cert.issuer} · {cert.hours}h · {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}