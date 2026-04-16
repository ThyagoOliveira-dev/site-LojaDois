import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide mb-4 inline-block">
              LOJA DOIS
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Há 25 anos vestindo mulheres com estilo. Moda feminina premium em Goiânia.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase mb-4">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#inicio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sobre
              </Link>
              <Link href="#colecoes" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Coleções
              </Link>
              <Link href="#depoimentos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Depoimentos
              </Link>
              <Link href="#contato" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase mb-4">Siga-nos</h3>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://www.instagram.com/lojadois"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <Link
              href="https://wa.me/5562994335402"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              (62) 99433-5402
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Loja Dois. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Alameda Dom Emanuel Gomes, 320 - Setor Marista, Goiânia - GO
          </p>
        </div>
      </div>
    </footer>
  )
}
