"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  return (
    <Link
      href={`/produto/${product.id}`}
      className="group block animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs tracking-wider uppercase">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="text-white text-sm tracking-wider uppercase">Esgotado</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-medium text-foreground">
            {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
