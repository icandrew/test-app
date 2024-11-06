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
        className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
        style={{
          mask: 'radial-gradient(circle at center, white 60%, transparent 100%)',
          WebkitMask: 'radial-gradient(circle at center, white 60%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-fade" />
      </div>
      {children}
    </div>
  )
} 