'use client'

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Toggle } from "@/components/ui/toggle"

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/products" className="text-sm font-medium">
                    Products
                  </Link>
                  <Link href="/credit" className="text-sm font-medium">
                    Credit Application
                  </Link>
                  <Link href="/about" className="text-sm font-medium">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-sm font-medium">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-lg">Your Logo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-lg">Your Logo</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                Products
              </Link>
              <Link 
                href="/credit" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                Credit Application
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Toggle />
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}