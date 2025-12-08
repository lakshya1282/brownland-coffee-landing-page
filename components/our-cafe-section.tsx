"use client"

export function OurCafeSection() {
  const cafeImages = [
    {
      src: "/images/img-6405.jpeg",
      alt: "Brownland Night Ambiance",
      caption: "Night Vibes",
    },
    {
      src: "/images/img-6409.jpeg",
      alt: "Brownland Cafe Exterior",
      caption: "Our Kiosk",
    },
    {
      src: "/images/img-6415.jpeg",
      alt: "Branded Coffee Cups Display",
      caption: "Signature Cups",
    },
    {
      src: "/images/img-6416.jpeg",
      alt: "Barista at Work",
      caption: "Crafted With Care",
    },
  ]

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      {/* Header */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="text-center aos-fade-up">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Our Cafe</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Where every corner tells a story and every cup sparks joy
          </p>
        </div>
      </div>

      <div className="w-full aos-fade-up" style={{ transitionDelay: "0.2s" }}>
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide px-4">
          <div className="flex gap-3 pb-4" style={{ width: "max-content" }}>
            {cafeImages.map((image, index) => (
              <div key={index} className="relative flex-shrink-0 w-[280px] group">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-[350px] rounded-xl object-cover"
                />
                {/* Caption always visible on mobile */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl p-4">
                  <p className="text-white font-semibold text-base">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Original flex layout */}
        <div className="hidden md:flex h-[70vh] gap-1 px-4 justify-center">
          {cafeImages.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 h-full group">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-auto rounded-lg object-contain"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
