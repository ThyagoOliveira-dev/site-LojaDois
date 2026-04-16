import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Moda feminina premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Moda Feminina Premium
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-balance">Há 25 anos vestindo mulheres com estilo</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Descubra peças exclusivas que realçam sua elegância e personalidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link
              href="/loja"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Comprar Agora
            </Link>
            <Link
              href="https://wa.me/5562994335402"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Fale no WhatsApp
            </Link>
          </div>

          <div className="flex items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-foreground">+39mil</span>
              <span className="text-sm text-muted-foreground">Seguidoras</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-serif text-3xl font-semibold text-foreground">4.8</span>
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <span className="text-sm text-muted-foreground">+360 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
