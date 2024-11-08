import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/contexts/cart-context'

export const metadata = {
  title: 'United Equipment',
  description: 'Forklift and Access Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <CartProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  )
}
