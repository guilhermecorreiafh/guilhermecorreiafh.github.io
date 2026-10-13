import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Certifications } from './components/Certifications'
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'

const sections = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
]

function App() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="hidden font-mono text-sm font-semibold sm:block">
            guilhermecorreiafh@portfolio
          </a>
          <ul className="flex gap-4 text-sm text-muted-foreground sm:gap-6">
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="transition-colors hover:text-green-400">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Terminal className="h-auto w-full max-w-none">
            <TypingAnimation className="text-green-400">{'SQL> COMMIT;'}</TypingAnimation>
            <AnimatedSpan className="text-muted-foreground">Commit complete.</AnimatedSpan>
            <TypingAnimation className="text-green-400">{'SQL> EXIT;'}</TypingAnimation>
            <AnimatedSpan>Desconectado de guilhermecorreiafh@portfolio.</AnimatedSpan>
            <AnimatedSpan>Obrigado pela visita!</AnimatedSpan>
          </Terminal>

          <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
            © 2026 Guilherme Correia
          </p>
        </div>
      </footer>
      
    </div>
  )
}

export default App