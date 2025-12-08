"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 aos-fade-up">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Have a question or want to share your experience? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border aos-fade-right">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 md:gap-8 aos-fade-left">
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-full">
                  <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Visit Us</h4>
                  <p className="text-muted-foreground text-xs sm:text-base hidden sm:block">Find us on Google Maps</p>
                  <a href="#" className="text-primary hover:underline text-xs sm:text-sm mt-1 inline-block">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-full">
                  <Clock className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Hours</h4>
                  <p className="text-muted-foreground text-xs sm:text-base">Mon-Sat: 9AM-10PM</p>
                  <p className="text-muted-foreground text-xs sm:text-base">Sun: 10AM-9PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-full">
                  <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Call Us</h4>
                  <p className="text-muted-foreground text-xs sm:text-base hidden sm:block">For orders and inquiries</p>
                  <a href="tel:+91" className="text-primary hover:underline text-xs sm:text-sm mt-1 inline-block">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-full">
                  <Instagram className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Follow Us</h4>
                  <p className="text-muted-foreground text-xs sm:text-base">@brownlandcoffee</p>
                  <a href="#" className="text-primary hover:underline text-xs sm:text-sm mt-1 inline-block">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
