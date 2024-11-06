"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: "Tina Brooks",
    role: "Process Analyst",
    content: "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
  },
  {
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content: "What a fantastic AI Every AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
  },
  {
    name: "Bob Smith",
    role: "Industry Analyst",
    content: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity.",
  },
  {
    name: "Olivia Scott",
    role: "Quality Assurance Manager",
    content: "It consistently exceeds our expectations. Its adaptability and precision make it indispensable for our daily operations.",
  },
  {
    name: "Rachel Black",
    role: "Client Support Coordinator",
    content: "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
  },
  {
    name: "David Wright",
    role: "Research Scientist",
    content: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
  },
  {
    name: "Jack Brown",
    role: "Performance Manager",
    content: "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
  },
]

export function TestimonialMarquee() {
  const renderColumn = (testimonials: Testimonial[], index: number) => (
    <motion.div 
      className="flex-1 h-[700px] overflow-hidden"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index === 1 ? 0.05 : index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
    >
      <div 
        className="space-y-6 animate-marquee"
        style={{ 
          '--marquee-duration': index === 1 ? '25000ms' : '15800ms',
          animation: `marquee var(--marquee-duration) linear infinite ${index === 1 ? '50ms' : '0ms'}`,
        } as React.CSSProperties}
      >
        {/* Original set */}
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card 
            key={`original-${index}`} 
            className="p-6 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
          >
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="font-semibold text-sm">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              {testimonial.content}
            </blockquote>
          </Card>
        ))}
        {/* Duplicate set */}
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card 
            key={`duplicate-${index}`} 
            className="p-6 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
          >
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="font-semibold text-sm">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              {testimonial.content}
            </blockquote>
          </Card>
        ))}
      </div>
    </motion.div>
  )

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-0 xl:px-0 py-12">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
      
      <div className="grid grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 gap-6" aria-label="Customer testimonials">
        {[0, 1, 2].map((index) => (
          <div key={index}>
            {renderColumn(testimonials, index)}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  )
}