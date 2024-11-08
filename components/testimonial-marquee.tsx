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
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[400px] max-h-[70vh] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 - Normal speed */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="flex flex-col gap-4"
              >
                {testimonials.map((testimonial, i) => (
                  <Card
                    key={i}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
                {testimonials.map((testimonial, i) => (
                  <Card
                    key={`duplicate-${i}`}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Column 2 - Slower speed */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="flex flex-col gap-4"
              >
                {[...testimonials].reverse().map((testimonial, i) => (
                  <Card
                    key={i}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
                {[...testimonials].reverse().map((testimonial, i) => (
                  <Card
                    key={`duplicate-${i}`}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Column 3 - Faster speed */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="flex flex-col gap-4"
              >
                {testimonials.slice().reverse().map((testimonial, i) => (
                  <Card
                    key={i}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
                {testimonials.slice().reverse().map((testimonial, i) => (
                  <Card
                    key={`duplicate-${i}`}
                    className="rounded-xl p-6 bg-card/50 backdrop-blur border-border"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}