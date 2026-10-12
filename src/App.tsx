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
        <section id="inicio" className="py-24">
          <h1 className="text-4xl font-semibold">Guilherme Correia</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Desenvolvedor .NET e React · Estagiário de TI na Santos Brasil
          </p>
        </section>

        <section id="projetos" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold">Projetos</h2>
        </section>

        <section id="experiencia" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold">Experiência</h2>
        </section>

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