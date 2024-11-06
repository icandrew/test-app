'use client'

import React from "react"
import { motion } from "framer-motion"
import {
  Cloud,
  DollarSign,
  Heart,
  HelpCircle,
  Image,
  Pen,
  Share2,
  Wand2,
} from "lucide-react"

export function FeaturesGrid() {
  const features = [
    {
      icon: Image,
      title: "Built for developers",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
    },
    {
      icon: Wand2,
      title: "Ease of use",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
    },
    {
      icon: DollarSign,
      title: "Pricing like no other",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
    },
    {
      icon: Cloud,
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
    },
    {
      icon: Share2,
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
    },
    {
      icon: HelpCircle,
      title: "24/7 Customer Support",
      description: "We are available a 100% of the time. Atleast our AI Agents are.",
    },
    {
      icon: Pen,
      title: "Money back guarantee",
      description: "If you donot like EveryAI, we will convince you to like us.",
    },
    {
      icon: Heart,
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
    },
  ]

  const rows = [features.slice(0, 4), features.slice(4)]

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-0 xl:px-0 mb-8">
      <div className="grid grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-x">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((feature, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: (rowIndex * 4 + colIndex) * 0.1,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
                className={`
                  relative flex flex-col space-y-2 p-6 group
                  ${colIndex < row.length - 1 ? 'border-r' : ''}
                  ${rowIndex < rows.length - 1 ? 'border-b' : ''}
                `}
              >
                <div className="absolute left-0 top-[3.5rem] h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
                <feature.icon className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold relative">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}