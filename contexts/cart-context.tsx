"use client"

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react"
import { CartItem, CartContextType, Product } from "@/lib/types"

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((product: Product, size: string, color: string) => {
    setItems(currentItems => {
      const existingIndex = currentItems.findIndex(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      )

      if (existingIndex > -1) {
        const updated = [...currentItems]
        updated[existingIndex].quantity += 1
        return updated
      }

      return [...currentItems, { product, quantity: 1, selectedSize: size, selectedColor: color }]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: string, color: string) => {
    setItems(currentItems =>
      currentItems.filter(
        item => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
      )
    )
  }, [])

  const updateQuantity = useCallback((productId: string, size: string, color: string, quantity: number) => {
    if (quantity < 1) return
    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  
  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
