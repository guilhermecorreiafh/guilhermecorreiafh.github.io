import { FileText } from 'lucide-react'
import { certifications } from '@/data'

export function Certifications() {
  return (
    <section id="certificacoes" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-green-400">-- 03 · certificações</p>
      <h2 className="mt-2 text-2xl font-semibold">Certificações</h2>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map(cert => {
          const content = (
            <>
              <div className="flex items-start justify-between gap-2">
                <p className="font-mono text-2xl font-semibold">
                  {cert.hours.toLocaleString('pt-BR')}h
                </p>
                {cert.file && <FileText className="size-4 text-muted-foreground" />}
              </div>
              <p className="mt-2 text-sm font-semibold">{cert.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {cert.issuer} · {cert.year}
              </p>
            </>
          )

          return cert.file ? (
            <a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="border bg-card p-4 transition-colors hover:border-green-400/50 hover:bg-muted/50"
            >
              {content}
            </a>
          ) : (
            <div key={cert.name} className="border bg-card p-4">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}