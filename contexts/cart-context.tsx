"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@/types/product'

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: Product) => void
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount: cartItems.length }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 