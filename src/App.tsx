import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'

const sections = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-mono text-sm font-semibold">
            guilherme@portfolio
          </a>
          <ul className="flex gap-6 text-sm text-muted-foreground">
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:text-foreground">
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

        <section id="contato" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold">Contato</h2>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        Feito com React e Tailwind
      </footer>
    </div>
  )
}

export default App