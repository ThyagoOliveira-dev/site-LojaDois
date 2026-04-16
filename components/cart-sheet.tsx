"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function CartSheet() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 text-foreground hover:text-accent transition-colors">
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Carrinho de compras</span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Seu Carrinho</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-6">Seu carrinho está vazio</p>
            <SheetTrigger asChild>
              <Link
                href="/loja"
                className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Explorar Loja
              </Link>
            </SheetTrigger>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-4 pb-4 border-b border-border"
                >
                  <div className="relative w-20 h-24 flex-shrink-0 bg-secondary">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.selectedSize} / {item.selectedColor}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-2">
                      {item.product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                        className="p-1 border border-border hover:bg-secondary disabled:opacity-50 transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="p-1 border border-border hover:bg-secondary transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="p-1 ml-auto text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">
                  {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Frete calculado no checkout
              </p>
              <SheetTrigger asChild>
                <Link
                  href="/checkout"
                  className="block w-full bg-primary text-primary-foreground text-center py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
                >
                  Finalizar Compra
                </Link>
              </SheetTrigger>
              <Link
                href="https://wa.me/5562994335402?text=Olá! Gostaria de tirar uma dúvida sobre meu pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-border text-foreground text-center py-4 text-sm tracking-wider uppercase hover:bg-secondary transition-colors"
              >
                Dúvidas? Fale no WhatsApp
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
