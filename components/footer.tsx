import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="aos-fade-up sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src="/images/logo.png" alt="Brownland Coffee" className="h-10 sm:h-12 w-auto object-contain" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">Brownland</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bad Day? Coffee. Good Day? Coffee. Your perfect companion for every mood and moment.
            </p>
          </div>

          {/* Hours */}
          <div className="aos-fade-up" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Hours
            </h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <p>Monday - Saturday</p>
              <p className="text-primary font-medium">9:00 AM - 10:00 PM</p>
              <p className="mt-3 sm:mt-4">Sunday</p>
              <p className="text-primary font-medium">10:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div className="aos-fade-up" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Get in Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>Find us on Google Maps</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>@brownlandcoffee</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Brownland Coffee. All rights reserved. Made with love.
          </p>
        </div>
      </div>
    </footer>
  )
}
