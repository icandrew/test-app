'use client'

import { cn } from "@/lib/utils"

export function AnimatedGridBackground({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("relative", className)}>
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/.15)_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/.05)_1px,transparent_1px)]"
        style={{
          mask: 'radial-gradient(circle at center, white 80%, transparent 100%)',
          WebkitMask: 'radial-gradient(circle at center, white 80%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent dark:via-muted/20 animate-grid-fade" />
      </div>
      {children}
    </div>
  )
} 