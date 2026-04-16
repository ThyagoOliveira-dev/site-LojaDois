"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Truck, ShieldCheck, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FeaturedProducts } from "@/components/featured-products"
import { getProductById } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addItem } = useCart()
  
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-2xl text-foreground mb-4">Produto não encontrado</h1>
          <Link href="/loja" className="text-accent hover:underline">
            Voltar para a loja
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return
    addItem(product, selectedSize, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const whatsappMessage = `Olá! Tenho interesse no produto: ${product.name} - ${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Voltar para a loja</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden animate-in fade-in slide-in-from-left-4 duration-700">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {discount && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-sm tracking-wider uppercase">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-2xl text-foreground">
                  {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm tracking-wider uppercase text-foreground mb-3">
                  Tamanho
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-sm transition-colors ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <p className="text-sm tracking-wider uppercase text-foreground mb-3">
                  Cor
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-sm transition-colors ${
                        selectedColor === color
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || !product.inStock}
                  className={`w-full py-4 text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
                    added
                      ? "bg-green-600 text-white"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      Adicionado ao carrinho
                    </>
                  ) : !product.inStock ? (
                    "Produto Esgotado"
                  ) : (
                    "Adicionar ao Carrinho"
                  )}
                </button>

                <Link
                  href={`https://wa.me/5562994335402?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-border text-foreground text-sm tracking-wider uppercase hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Comprar pelo WhatsApp
                </Link>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-8 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5" />
                  <span>Frete grátis para compras acima de R$ 299</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Troca e devolução em até 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <FeaturedProducts />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
