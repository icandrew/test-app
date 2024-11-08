'use client'

import Link from "next/link"
import { Facebook, Youtube, Linkedin, Instagram, MapPin, Phone } from "lucide-react"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
  },
]

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 sm:px-6 xl:px-0">
        {/* Logo and Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              <span>FORKLIFT</span>
            </h2>
            <p className="font-medium text-foreground">Forklift and Access Solutions</p>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            United is your one stop shop for all your forklift and access equipment needs.
          </p>

          <div className="space-y-4">
            <Link href="tel:131607" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Phone className="h-5 w-5" />
              131 607
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <EnvelopeClosedIcon className="h-5 w-5" />
              Email the United Equipment Team
            </Link>
            <Link href="/locations" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <MapPin className="h-5 w-5" />
              Find a branch
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Link href={social.href}>
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Find a Branch Column */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">FIND A BRANCH</h3>
            <ul className="space-y-2">
              {["Perth, WA", "Bunbury, WA", "Darwin, NT", "Adelaide, SA", "Brisbane, QLD", "Rockhampton, QLD", "Mackay, QLD", "Sydney, NSW", "Melbourne, VIC", "Ballarat, VIC", "Burnie, TAS", "Devonport, TAS"].map((location) => (
                <li key={location}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {["Service & Repairs", "Equipment Finance", "Fleet Management"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Column */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">HIRE</h3>
            <ul className="space-y-2">
              {[
                "Forklift hire",
                "Access equipment hire",
                "Scissor Lift hire",
                "Cherry Picker Hire Australia",
                "Telehandler hire"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              {[
                "Our Brands",
                "Health & Safety",
                "Customer Care",
                "Careers",
                "Privacy Policy"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}