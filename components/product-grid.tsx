"'use client'"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
}

export function ProductGrid() {
  const products: Product[] = [
    {
      id: 1,
      name: "Animal rescue truck",
      price: 25.00,
      originalPrice: 45.00,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Cottage playset",
      price: 52.00,
      originalPrice: 79.00,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Elephant soft toy",
      price: 24.00,
      originalPrice: 29.00,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "First pram",
      price: 11.00,
      originalPrice: 19.00,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Construction crane",
      price: 89.00,
      originalPrice: 120.00,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Excavator model",
      price: 65.00,
      originalPrice: 85.00,
      image: "/placeholder.svg"
    },
    {
      id: 7,
      name: "Forklift miniature",
      price: 45.00,
      originalPrice: 60.00,
      image: "/placeholder.svg"
    },
    {
      id: 8,
      name: "Dump truck toy",
      price: 35.00,
      originalPrice: 50.00,
      image: "/placeholder.svg"
    }
  ]

  return (
    <div className="mx-auto w-full max-w-7xl mb-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="min-w-[280px] snap-center">
            <CardContent className="p-4">
              <div className="relative aspect-square mb-3 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Add {product.name} to cart</span>
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <Eye className="h-5 w-5" />
                    <span className="sr-only">Quick view {product.name}</span>
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add {product.name} to wishlist</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-neutral-500 line-through dark:text-neutral-400">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}