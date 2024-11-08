"'use client'"

import Image from "next/image"
import Logo from "@/app/imgs/logo-1.png"
import Logo2 from "@/app/imgs/logo-2.png"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from '@/contexts/cart-context'
import { useEffect, useRef, useState } from 'react'
import styles from './product-grid.module.css'
import VideoPlayer from './VideoPlayer'

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
}

export function ProductGrid() {
  const { toast } = useToast()
  const { addToCart } = useCart()

  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 25.00,
      originalPrice: 45.00,
      image: "https://i.imgur.com/OT7AMKL.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 52.00,
      originalPrice: 79.00,
      image: "https://i.imgur.com/fwSzTyN.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 24.00,
      originalPrice: 29.00,
      image: "https://i.imgur.com/Afklleq.png",
    },
    {
      id: 4,
      name: "Product 4",
      price: 11.00,
      originalPrice: 19.00,
      image: "https://i.imgur.com/6BlT9Zu.png",
    },
    {
      id: 5,
      name: "Product 5",
      price: 89.00,
      originalPrice: 120.00,
      image: "https://i.imgur.com/ayFicLD.png",
    },
    {
      id: 6,
      name: "Product 6",
      price: 65.00,
      originalPrice: 85.00,
      image: "https://i.imgur.com/5lANg13.png",
    },
    {
      id: 7,
      name: "Forklift miniature",
      price: 45.00,
      originalPrice: 60.00,
      image: "https://i.imgur.com/OT7AMKL.png",
    },
    {
      id: 8,
      name: "Dump truck toy",
      price: 35.00,
      originalPrice: 50.00,
      image: "https://i.imgur.com/fwSzTyN.png",
    }
  ]

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
      duration: 2000,
    })
  }

  return (
    <div className="mx-auto w-full max-w-7xl mb-8">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col h-full">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-md font-normal">
                {(() => {
                  switch (product.id % 6) {
                    case 1:
                      return "Dingli"
                    case 2:
                      return "Genie"
                    case 3:
                      return "Globe Power"
                    case 4:
                      return "Merlo"
                    case 5:
                      return "Zoomlion"
                    case 0:
                      return "Haulotte"
                    default:
                      return "Haulotte"
                  }
                })()}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4 flex-grow">
              <div className="relative aspect-square group">
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                  alt={product.name}
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <VideoPlayer className="w-full h-full rounded-md overflow-hidden" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p className="text-sm text-muted-foreground">15ft (4.57m) Electric Scissor Lift</p>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  ${product.price.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">Excl. GST</div>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full px-2 h-9 sm:px-4"
                  onClick={() => handleAddToWishlist(product)}
                >
                  View details
                </Button>
                <Button 
                  variant="default"
                  className="w-full px-2 h-9 sm:px-4"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}