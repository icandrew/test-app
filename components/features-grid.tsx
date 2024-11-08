'use client'

import React from "react"
import {
  Cloud,
  DollarSign,
  HelpCircle,
  Image,
  Share2,
  Wand2,
} from "lucide-react"
import { AnimatedGridBackground } from "@/components/animated-grid-background"
import { motion } from "framer-motion"

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
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeaturesGrid() {
  return (
    <AnimatedGridBackground className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mx-auto max-w-xl mt-6 text-lg leading-8 text-muted-foreground">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="flex flex-col"
                variants={item}
                transition={{ duration: 0.3 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon 
                    className="h-5 w-5 flex-none text-primary" 
                    aria-hidden="true" 
                  />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a 
                      href="#" 
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </AnimatedGridBackground>
  )
}