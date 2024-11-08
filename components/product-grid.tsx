"'use client'"

import Image from "next/image"
import Logo from "@/app/imgs/logo-1.png"
import Logo2 from "@/app/imgs/logo-2.png"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from '@/contexts/cart-context'

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
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="min-w-[280px] snap-center">
            <CardContent className="p-4">
              <div className="relative aspect-square mb-3 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={product.id === 1}
                  className="object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
                />
                <div className="absolute top-0 left-0 h-10 w-16 z-10 px-2 py-2 border border-gray-300 rounded-sm bg-secondary">
                  <Image 
                    src={[2, 4, 6].includes(product.id) ? Logo2 : Logo}
                    alt="Logo" 
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-10 w-10"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Add {product.name} to cart</span>
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <Eye className="h-5 w-5" />
                    <span className="sr-only">Quick view {product.name}</span>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-10 w-10"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add {product.name} to wishlist</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start justify-between h-[72px]">
                  <div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-neutral-500 line-through dark:text-neutral-400">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}