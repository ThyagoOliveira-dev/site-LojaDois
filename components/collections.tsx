"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: 1,
    title: "Vestidos",
    description: "Elegância para todas as ocasiões",
    image: "/images/collection-1.jpg",
  },
  {
    id: 2,
    title: "Conjuntos",
    description: "Sofisticação e praticidade",
    image: "/images/collection-2.jpg",
  },
  {
    id: 3,
    title: "Looks Casuais",
    description: "Conforto com estilo",
    image: "/images/collection-3.jpg",
  },
  {
    id: 4,
    title: "Moda Premium",
    description: "Peças exclusivas e atemporais",
    image: "/images/collection-4.jpg",
  },
]

export function Collections() {
  return (
    <section id="colecoes" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nossas Coleções
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            <span className="text-balance">Descubra seu estilo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href="https://wa.me/5562994335402"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-2 text-white text-sm tracking-wider uppercase group-hover:gap-4 transition-all duration-300">
                  Ver coleção
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.instagram.com/lojadois"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            Ver mais no Instagram
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
