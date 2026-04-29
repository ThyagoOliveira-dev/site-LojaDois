"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getProdutos } from "@/lib/products"
import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const [products, setProducts] = useState([])

useEffect(() => {
  getProdutos().then((data) => {
    const formatted = data.map((p: any) => ({
      id: p.id,
      name: p.nome,
      price: p.preco,
      originalPrice: null, // ou p.precoOriginal se tiver
      image: p.imagem || "/placeholder.jpg",
      category: p.categoria,
      inStock: p.estoque > 0
    }))

    setProducts(formatted)
  })
}, [])

  return (
    <section id="produtos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Destaques
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            <span className="text-balance">Peças em destaque</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300"
          >
            Ver todos os produtos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}