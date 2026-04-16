"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    text: "A Loja Dois é simplesmente incrível! Sempre encontro peças únicas que me fazem sentir especial. O atendimento é impecável e personalizado.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fernanda Costa",
    text: "Cliente há mais de 10 anos. A qualidade das peças é incomparável e as vendedoras conhecem perfeitamente o meu estilo. Recomendo demais!",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Mendes",
    text: "Melhor loja de moda feminina de Goiânia! Peças exclusivas, tendências atuais e um ambiente acolhedor. Amo fazer compras aqui.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            <span className="text-balance">O que nossas clientes dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.8</span>
            <span className="text-muted-foreground">• +360 avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 lg:p-10 relative animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block font-medium text-foreground">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">Cliente verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
