import { MapPin, Clock, Phone, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contato
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6">
              <span className="text-balance">Venha nos visitar</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Estamos ansiosas para recebê-la em nossa loja e ajudá-la a encontrar 
              peças perfeitas para seu estilo. Entre em contato pelo WhatsApp ou 
              venha nos fazer uma visita.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <span className="block font-medium text-foreground mb-1">Endereço</span>
                  <span className="text-muted-foreground">
                    Alameda Dom Emanuel Gomes, 320<br />
                    Setor Marista, Goiânia - GO
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <span className="block font-medium text-foreground mb-1">Horário de Funcionamento</span>
                  <span className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 14h
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <span className="block font-medium text-foreground mb-1">WhatsApp</span>
                  <Link 
                    href="https://wa.me/5562994335402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (62) 99433-5402
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <span className="block font-medium text-foreground mb-1">Instagram</span>
                  <Link 
                    href="https://www.instagram.com/lojadois"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @lojadois
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="https://wa.me/5562994335402"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Falar no WhatsApp
              </Link>
              <Link
                href="https://linktr.ee/lojadois"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span>Linktree</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="aspect-square lg:aspect-[4/5] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8679!2d-49.2562!3d-16.7074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef13c8c1c0001%3A0x1234567890abcdef!2sAlameda%20Dom%20Emanuel%20Gomes%2C%20320%20-%20Setor%20Marista%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Loja Dois"
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
