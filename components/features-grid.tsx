'use client'

import React from "react"
// import { motion } from "framer-motion"
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
import { AnimatedGridBackground } from "@/components/animated-grid-background"

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

  // const rows = [features.slice(0, 4), features.slice(4)]

  return (
    <AnimatedGridBackground className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-full lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AnimatedGridBackground>
  )
}