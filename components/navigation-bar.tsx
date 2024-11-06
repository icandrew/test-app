'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, ShoppingCart } from "lucide-react"
import { MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function NavigationBar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 lg:gap-8 pl-4 md:pl-6 lg:pl-8">
            {/* Logo and Hamburger */}
            <div className="flex items-center gap-3 md:gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="lg:hidden"
                  >
                    <MenuIcon className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <nav className="flex flex-col mt-8">
                    <Link 
                      href="/" 
                      className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/products" 
                      className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
                    >
                      Products
                    </Link>
                    <Link 
                      href="/credit" 
                      className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
                    >
                      Credit Application
                    </Link>
                    <Link 
                      href="/about" 
                      className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/contact" 
                      className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
                    >
                      Contact Us
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Link href="/" className="flex items-center">
                <span className="font-semibold text-lg md:text-xl">Your Logo</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
              <Link 
                href="/credit" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Credit Application
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-2 md:gap-4 pr-4 md:pr-6 lg:pr-8">
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:inline-flex"
            >
              Call 13 4000
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-transparent"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-transparent"
            >
              <PersonIcon className="w-5 h-5 text-gray-500" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-transparent"
            >
              <ShoppingCart className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 