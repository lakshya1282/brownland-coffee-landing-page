"use client"

import type React from "react"

import { useState } from "react"
import { FranchiseNavbar } from "@/components/franchise-navbar"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  TrendingUp,
  Users,
  GraduationCap,
  Zap,
  Clock,
  IndianRupee,
  MapPin,
  Building2,
  Phone,
  Mail,
  Instagram,
  CheckCircle2,
  ArrowRight,
  Coffee,
} from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Marketing Assistance",
    description: "Full marketing support to help you establish and grow your franchise in your local market.",
  },
  {
    icon: Users,
    title: "Complete Startup Guidance",
    description: "End-to-end support from location selection to grand opening and beyond.",
  },
  {
    icon: GraduationCap,
    title: "Free Staff Training",
    description: "Comprehensive training programs for you and your team at no additional cost.",
  },
  {
    icon: Zap,
    title: "Fast ROI",
    description: "Quick return on investment with our proven business model and operational efficiency.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Streamlined operations ensuring quick service and happy customers every time.",
  },
  {
    icon: IndianRupee,
    title: "Min. Investment, Max. Return",
    description: "Low entry investment with high profit potential in the growing coffee market.",
  },
  {
    icon: MapPin,
    title: "Fastest Growing in Your City",
    description: "Be part of the fastest-growing coffee brand with strong local presence.",
  },
  {
    icon: Building2,
    title: "Easily Operable from 150 sqft",
    description: "Compact business model that works in small spaces with minimal overhead.",
  },
]

export default function FranchisePage() {
  const [showSplash, setShowSplash] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main className="min-h-screen bg-background">
        <FranchiseNavbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/dark-coffee-beans-background-with-dramatic-lightin.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

          {/* Floating Coffee Beans Decoration */}
          <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-bounce">
            <Coffee className="w-full h-full text-primary" />
          </div>
          <div className="absolute bottom-40 right-10 w-12 h-12 opacity-20 animate-bounce delay-300">
            <Coffee className="w-full h-full text-primary" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              {/* Logo */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <img
                  src="/images/logo.png"
                  alt="Brownland Coffee"
                  className="h-20 sm:h-28 md:h-32 w-auto object-contain"
                />
              </div>

              {/* Tagline */}
              <p className="text-primary text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4 italic">
                More Than Coffee
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2 sm:mb-4 tracking-tight">
                BROWNLAND
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-8 sm:mb-12 italic">
                It&apos;s a <span className="text-primary font-semibold">Franchise Opportunity</span>
              </p>

              {/* 0% Royalty Highlight Card - No button inside */}
              <div className="inline-block bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 mb-8 sm:mb-10">
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-2">WHY US?</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 italic">0% ROYALTY!</h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80">
                  Become a Member of <span className="text-foreground font-semibold">BROWNLAND COFFEE</span> Family with{" "}
                  <span className="text-primary font-semibold">0% Royalty</span>
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => document.querySelector("#enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-6 rounded-full group shadow-lg shadow-primary/20"
                >
                  Join Us Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Partner With <span className="text-primary">Brownland?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the fastest-growing coffee brand and enjoy exceptional benefits designed for your success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-primary/5 border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">150</p>
                <p className="text-sm sm:text-base text-muted-foreground">Sq.ft Minimum</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">0%</p>
                <p className="text-sm sm:text-base text-muted-foreground">Royalty Fee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">Since 2000</p>
                <p className="text-sm sm:text-base text-muted-foreground">Established</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">100%</p>
                <p className="text-sm sm:text-base text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry-form" className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {/* Centered Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                  Start Your <span className="text-primary">Coffee Journey</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Fill out the form and our franchise team will get back to you within 24 hours to discuss this exciting
                  opportunity.
                </p>
              </div>

              {/* Centered Form */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Thank You!</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6">
                      Your franchise enquiry has been submitted successfully. Our team will contact you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Franchise Enquiry Form</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">Fill in your details to get started</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-foreground">
                          Preferred City *
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Your City"
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="investment" className="text-foreground">
                          Investment Budget
                        </Label>
                        <select
                          id="investment"
                          name="investment"
                          value={formData.investment}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select Budget</option>
                          <option value="5-10">5-10 Lakhs</option>
                          <option value="10-15">10-15 Lakhs</option>
                          <option value="15-20">15-20 Lakhs</option>
                          <option value="20+">20+ Lakhs</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your experience and why you want to join Brownland..."
                        rows={4}
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 sm:py-6 text-base sm:text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-8 sm:py-10 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Contact Us Today</h3>
              <p className="text-muted-foreground">Get in touch with our franchise team</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Call Us</p>
                <p className="text-foreground font-medium text-sm">+91 6265470873</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Email Us</p>
                <p className="text-foreground font-medium text-sm">brownlandcoffee@gmail.com</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Follow Us</p>
                <p className="text-foreground font-medium text-sm">@brownlandcoffee</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">Head Office</p>
                <p className="text-foreground font-medium text-xs">
                  Behind Zudio, Old Rajendra Nagar,
                  <br />
                  Shailendra Nagar, Raipur, CG 492001
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
