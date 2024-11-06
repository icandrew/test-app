"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ToggleSelectionProps {
  value: "buy" | "hire"
  onChange: (value: "buy" | "hire") => void
}

export function ToggleSelection({ value, onChange }: ToggleSelectionProps) {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-1 flex flex-col">
      <button
        onClick={() => onChange("buy")}
        className={cn(
          "w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
          value === "buy" 
            ? "bg-white text-gray-900 shadow" 
            : "text-gray-500 hover:text-gray-900"
        )}
      >
        To Buy
      </button>
      <button
        onClick={() => onChange("hire")}
        className={cn(
          "w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
          value === "hire" 
            ? "bg-white text-gray-900 shadow" 
            : "text-gray-500 hover:text-gray-900"
        )}
      >
        To Hire
      </button>
    </div>
  )
} 