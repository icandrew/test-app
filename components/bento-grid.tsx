'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import bento1 from "@/app/imgs/bento1.jpg"
import bento2 from "@/app/imgs/bento2.jpg"
import bento3 from "@/app/imgs/bento3.jpg"
import bento4 from "@/app/imgs/bento4.jpg"
import bento5 from "@/app/imgs/bento5.jpg"

export function BentoGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
        {/* News Panel */}
        <Card className="lg:col-span-1 row-span-2 relative group overflow-hidden h-[800px]">
          <Image
            src={bento1}
            alt="News cover image"
            width={800}
            height={600}
            className="object-cover w-full h-full absolute inset-0"
            priority
          />
          <CardContent className="relative z-10 h-full bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-neutral-900 text-neutral-50 text-sm font-medium">
                Latest News
              </span>
              <h2 className="text-2xl font-bold text-white">
                Discover the latest innovations and updates in industrial equipment
              </h2>
              <Button variant="default" size="default" className="w-full">
                READ MORE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Equipment Block */}
        <div className="flex flex-col gap-4 h-[800px]">
          {/* Equipment Selector Panel */}
          <Card className="relative overflow-hidden h-[480px]">
            <Image
              src={bento2}
              alt="Equipment selection interface"
              width={800}
              height={600}
              className="object-cover w-full h-full absolute inset-0"
            />
            <CardContent className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-between bg-gradient-to-t from-black/60 to-black/0">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-neutral-50 text-neutral-900 text-sm font-medium">
                  Equipment Guide
                </span>
                <h2 className="text-xl font-bold text-white">
                  Find the perfect equipment for your specific needs
                </h2>
              </div>
              <Button 
                variant="secondary" 
                size="default" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                START SELECTION
              </Button>
            </CardContent>
          </Card>

          {/* Equipment Manuals Panel */}
          <Card className="relative overflow-hidden h-[320px]">
            <Image
              src={bento4}
              alt="Equipment manuals"
              width={800}
              height={600}
              className="object-cover w-full h-full absolute inset-0"
            />
            <CardContent className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-between bg-gradient-to-t from-black/60 to-black/0">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-neutral-50 text-neutral-900 text-sm font-medium">
                  Documentation
                </span>
                <h2 className="text-xl font-bold text-white">
                  Access comprehensive equipment documentation and guides
                </h2>
              </div>
              <Button 
                variant="secondary" 
                size="default" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                VIEW LIBRARY
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety and Resources Block */}
        <div className="flex flex-col gap-4 h-[800px]">
          {/* Safety Panel */}
          <Card className="relative overflow-hidden h-[320px]">
            <Image
              src={bento5}
              alt="Safety guidelines"
              width={800}
              height={600}
              className="object-cover w-full h-full absolute inset-0"
            />
            <CardContent className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-between bg-gradient-to-t from-black/60 to-black/0">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-neutral-50 text-neutral-900 text-sm font-medium">
                  Safety First
                </span>
                <h2 className="text-xl font-bold text-white">
                  Essential safety guidelines and certification resources
                </h2>
              </div>
              <Button 
                variant="secondary" 
                size="default" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                EXPLORE SAFETY
              </Button>
            </CardContent>
          </Card>

          {/* Resources Panel */}
          <Card className="relative overflow-hidden h-[480px]">
            <Image
              src={bento3}
              alt="Resource center cover"
              width={800}
              height={600}
              className="object-cover w-full h-full absolute inset-0"
            />
            <CardContent className="relative z-10 p-6 bg-gradient-to-t from-black/60 to-black/0 h-full flex flex-col justify-end">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-neutral-900 text-neutral-50 text-sm font-medium">
                  Resources
                </span>
                <h2 className="text-xl font-bold text-white">
                  Comprehensive industry insights and technical resources
                </h2>
                <Button variant="default" size="default" className="w-full">
                  ACCESS NOW
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}