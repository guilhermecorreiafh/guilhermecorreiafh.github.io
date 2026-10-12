import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { links } from '@/data'

export function Contact() {
    return (
        <section id="contato" className="scroll-mt-20 py-16">
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Estou sempre aberto a conversar e fazer networking.
                <br />
                O jeito mais rápido de
                falar comigo é por e-mail ou pelo LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                    <a href={`mailto:${links.email}`}>
                        <Mail /> {links.email}
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn <ArrowUpRight />
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub <ArrowUpRight />
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <a href="/curriculo.pdf" download="Curriculo_Guilherme_Correia.pdf">
                        <Download /> Currículo (PDF)
                    </a>
                </Button>
            </div>
        </section>
    )
}