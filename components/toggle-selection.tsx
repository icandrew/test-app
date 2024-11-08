"use client"

import { cn } from "@/lib/utils"

interface ToggleSelectionProps {
  value: "buy" | "hire"
  onChange: (value: "buy" | "hire") => void
}

export function ToggleSelection({ value, onChange }: ToggleSelectionProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="block text-sm font-medium text-foreground mb-1.5">
        Type
      </label>
      <div className="relative flex flex-col bg-muted rounded-lg p-1 gap-1">
        <button
          onClick={() => onChange("hire")}
          className={cn(
            "w-full text-sm font-medium rounded-md py-2.5 transition-colors",
            value === "hire" ? 
              "bg-background text-foreground shadow-sm" : 
              "text-muted-foreground hover:text-foreground"
          )}
        >
          Hire
        </button>
        <button
          onClick={() => onChange("buy")}
          className={cn(
            "w-full text-sm font-medium rounded-md py-2.5 transition-colors",
            value === "buy" ? 
              "bg-background text-foreground shadow-sm" : 
              "text-muted-foreground hover:text-foreground"
          )}
        >
          Buy
        </button>
      </div>
    </div>
  )
} 