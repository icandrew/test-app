"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={props.attribute}
      defaultTheme={props.defaultTheme}
      enableSystem={props.enableSystem}
      disableTransitionOnChange={props.disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  )
}
