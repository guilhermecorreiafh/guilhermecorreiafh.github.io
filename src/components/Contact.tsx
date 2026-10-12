import { ArrowUpRight, Code2, Download, Mail, UserRound } from 'lucide-react'
import { links } from '@/data'

const contacts = [
  { label: 'E-mail', detail: links.email, href: `mailto:${links.email}`, icon: Mail, action: ArrowUpRight, download: false },
  { label: 'LinkedIn', detail: 'guilherme-correia', href: links.linkedin, icon: UserRound, action: ArrowUpRight, download: false },
  { label: 'GitHub', detail: 'guilhermecorreiafh', href: links.github, icon: Code2, action: ArrowUpRight, download: false },
  { label: 'Currículo', detail: 'PDF', href: '/curriculo.pdf', icon: Download, action: Download, download: true },
]

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-16">
            <p className="font-mono text-xs text-green-400">-- 05 · contato</p>
      <h2 className="mt-2 text-2xl font-semibold">Contato</h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Estou sempre aberto a conversar e fazer networking.
        <br />
        O jeito mais rápido de falar comigo é por e-mail ou pelo LinkedIn.
      </p>

      <div className="mt-8 grid gap-3">
        {contacts.map(({ label, detail, href, icon: Icon, action: Action, download }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            download={download ? 'Curriculo_Guilherme_Correia.pdf' : undefined}
            className="group flex items-center gap-4 border bg-card p-4 transition-colors hover:border-green-400/50 hover:bg-muted/50"
          >
            <span className="flex size-10 shrink-0 items-center justify-center border bg-muted">
              <Icon className="size-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">{label}</span>
              <span className="block truncate text-xs text-muted-foreground">{detail}</span>
            </span>
            <Action className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  )
}
