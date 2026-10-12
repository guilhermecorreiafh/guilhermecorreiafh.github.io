import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'
import { links } from '@/data'

const rows = [
  ['ROLE', 'Estagiário @ Santos Brasil'],
  ['STACK', 'C#, .NET, React, Oracle SQL'],
  ['FOCUS', 'Back-end .NET -> Full Stack'],
  ['LOCATION', 'São Paulo, SP'],
]

export function Hero() {
  return (
    <section id="inicio" className="grid items-center gap-10 py-20 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-4">
          <img
            src="/foto.jpg"
            alt="Foto de Guilherme Correia"
            className="size-16 border object-cover"
          />
          <h1 className="text-3xl font-semibold">Guilherme Correia</h1>
        </div>
        <p className="mt-3 text-lg text-muted-foreground">Desenvolvedor .NET e React</p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Estagiário de TI na Santos Brasil, onde trabalho nos sistemas que ligam a operação do
          terminal portuário. Antes da TI trabalhei com logística, então gosto de
          software que resolve problema de operação de verdade.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>

      <Terminal className="h-auto w-full max-w-none overflow-x-auto">
        <TypingAnimation>{'SQL> SELECT * FROM profile;'}</TypingAnimation>
        {rows.map(([key, value]) => (
          <AnimatedSpan key={key} className="whitespace-pre">
            {`${key.padEnd(10)}${value}`}
          </AnimatedSpan>
        ))}
        <AnimatedSpan className="text-muted-foreground">4 rows selected.</AnimatedSpan>
      </Terminal>
    </section>
  )
}