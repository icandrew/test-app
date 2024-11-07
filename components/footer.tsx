'use client'

import Link from "next/link"
import { Facebook, Youtube, Linkedin, Instagram, MapPin, Phone } from "lucide-react"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-50 py-12">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 sm:px-6 2xl:px-6">
        {/* Logo and Company Info Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              <span className="text-neutral-50">U</span>
              <span className="text-neutral-400">N</span>
              <span className="text-neutral-50">ITED</span>
            </h2>
            <p className="font-medium">Forklift and Access Solutions</p>
          </div>
          
          <p className="text-neutral-400 max-w-md">
            United is your one stop shop for all your forklift and access equipment needs including sales, hire, service, repairs, parts, training and finance. Contact United today.
          </p>

          <div className="space-y-4">
            <Link href="tel:131607" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-50">
              <Phone className="h-5 w-5 text-primary" />
              131 607
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-50">
              <EnvelopeClosedIcon className="h-5 w-5 text-primary" />
              Email the United Equipment Team
            </Link>
            <Link href="/locations" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-50">
              <MapPin className="h-5 w-5 text-primary" />
              Find a branch
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="p-2 rounded-full border border-neutral-800 hover:border-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="p-2 rounded-full border border-neutral-800 hover:border-primary transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="p-2 rounded-full border border-neutral-800 hover:border-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="p-2 rounded-full border border-neutral-800 hover:border-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Find a Branch Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">FIND A BRANCH</h3>
            <ul className="space-y-2">
              {["Perth, WA", "Bunbury, WA", "Darwin, NT", "Adelaide, SA", "Brisbane, QLD", "Rockhampton, QLD", "Mackay, QLD", "Sydney, NSW", "Melbourne, VIC", "Ballarat, VIC", "Burnie, TAS", "Devonport, TAS"].map((location) => (
                <li key={location}>
                  <Link href="#" className="text-neutral-400 hover:text-neutral-50">
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {["Service & Repairs", "Equipment Finance", "Fleet Management"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-neutral-400 hover:text-neutral-50">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">HIRE</h3>
            <ul className="space-y-2">
              {[
                "Forklift hire",
                "Access equipment hire",
                "Scissor Lift hire",
                "Cherry Picker Hire Australia",
                "Telehandler hire"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-neutral-50">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              {[
                "Our Brands",
                "Health & Safety",
                "Customer Care",
                "Careers",
                "Privacy Policy"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-neutral-50">
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