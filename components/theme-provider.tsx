"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  attribute?: 'class' | 'data-theme' | 'data-mode',
  defaultTheme?: string,
  enableSystem?: boolean,
  disableTransitionOnChange?: boolean,
  children: React.ReactNode
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={props.attribute || 'class'}
      defaultTheme={props.defaultTheme}
      enableSystem={props.enableSystem}
      disableTransitionOnChange={props.disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  )
}
