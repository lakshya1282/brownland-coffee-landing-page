"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const foodImages = [
  "/images/img-6403.jpeg",
  "/images/img-6398.jpeg",
  "/images/img-6400.jpeg",
  "/images/img-6410.jpeg",
  "/images/img-6411.jpeg",
  "/images/img-6402.jpeg",
  "/images/img-6414.jpeg",
  "/images/img-6412.jpeg",
]

const menuData = {
  sandwiches: [
    { name: "Butter Toast", price: 40 },
    { name: "Cheese Sandwich", price: 70 },
    { name: "Veg Cheese Sandwich", price: 90, tag: "Jain" },
    { name: "Chocolate Sandwich", price: 90, bestseller: true },
    { name: "Bombay Masala Sandwich", price: 120, bestseller: true },
    { name: "Mexican Sandwich", price: 150 },
    { name: "Jain Cheese Corn Sandwich", price: 150 },
  ],
  icedBrews: [
    { name: "Iced Lemon Tea", price: 80 },
    { name: "Iced Americano", price: 90, tag: "No Sugar, No Milk" },
    { name: "Iced Peach Tea", price: 90 },
    { name: "Iced Mocha", price: 90 },
    { name: "Iced Chocolate", price: 90 },
    { name: "Browncoffee", price: 90 },
    { name: "Brownchino", price: 100, tag: "Ice Latte" },
    { name: "Brownlano", price: 100, bestseller: true, tag: "Cold Coffee" },
    { name: "Iced Lemon Americano", price: 100 },
    { name: "Iced Nutella Chocolate", price: 100 },
    { name: "Iced Nutella Coffee", price: 100 },
    { name: "Iced Biscoff Coffee", price: 120 },
    { name: "Orange Americano", price: 120 },
    { name: "Iced Nutella Biscoff Coffee", price: 140, bestseller: true },
  ],
  thickShakes: [
    { name: "Brownland Cold Coffee", price: 110, bestseller: true },
    { name: "Butterscotch Shake", price: 110 },
    { name: "Oreo Shake", price: 130 },
    { name: "Strawberry Shake", price: 130 },
    { name: "Blueberry Shake", price: 130 },
    { name: "Mocha Shake", price: 150 },
    { name: "Kit-Kat Shake", price: 150 },
    { name: "Brownie Shake", price: 150, bestseller: true },
    { name: "Chocolate Shake", price: 150 },
    { name: "Hazelnut Shake", price: 150 },
    { name: "Nutella Coffee Shake", price: 150 },
    { name: "Lotus Biscoff Shake", price: 180 },
    { name: "Nutella Biscoff Coffee Shake", price: 200, bestseller: true },
    { name: "Try Your Own", price: 200, bestseller: true },
  ],
  hotCoffee: [
    { name: "Black Coffee", price: 50 },
    { name: "Hot Latte", price: 60 },
    { name: "Hot Cappuccino", price: 60 },
    { name: "Signature Hot Coffee", price: 60, bestseller: true },
    { name: "Hot Chocolate", price: 70 },
    { name: "Hot Mocha", price: 70 },
    { name: "Hot Nutella Coffee", price: 90 },
  ],
  specials: [
    { name: "Korean Cream Cheese Bun", price: 120, bestseller: true },
    { name: "Masala Tea", price: 60, bestseller: true },
    { name: "Hibiscus Tea", price: 90, tag: "Sugar Free" },
    { name: "Instant Coffee Powder", price: 150, tag: "Take Home" },
  ],
}

function MenuItem({ item }: { item: { name: string; price: number; bestseller?: boolean; tag?: string } }) {
  return (
    <div className="flex items-start sm:items-center justify-between py-2.5 sm:py-3 border-b border-border/50 last:border-0 group hover:bg-secondary/30 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg transition-colors gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0 flex-1">
        <span className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
          {item.name}
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          {item.bestseller && (
            <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] sm:text-xs px-1.5 py-0">
              Best Seller
            </Badge>
          )}
          {item.tag && <span className="text-[10px] sm:text-xs text-muted-foreground">({item.tag})</span>}
        </div>
      </div>
      <span className="text-primary font-semibold text-sm sm:text-base whitespace-nowrap">₹{item.price}/-</span>
    </div>
  )
}

export function MenuSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % foodImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {foodImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 aos-fade-up">
          <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">
            Discover
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Our Menu</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            From signature cold coffees to thick creamy shakes, every sip is crafted with love
          </p>
        </div>

        <div className="aos-fade-up" style={{ transitionDelay: "0.2s" }}>
          <Tabs defaultValue="icedBrews" className="w-full">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8">
              <TabsList className="flex w-max sm:w-auto sm:flex-wrap justify-start sm:justify-center gap-2 bg-transparent h-auto">
                <TabsTrigger
                  value="icedBrews"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Iced Brews
                </TabsTrigger>
                <TabsTrigger
                  value="thickShakes"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Thick Shakes
                </TabsTrigger>
                <TabsTrigger
                  value="hotCoffee"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Hot Coffee
                </TabsTrigger>
                <TabsTrigger
                  value="sandwiches"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Sandwiches
                </TabsTrigger>
                <TabsTrigger
                  value="specials"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Specials
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-card/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
              <TabsContent value="icedBrews" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8">
                  {menuData.icedBrews.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="thickShakes" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8">
                  {menuData.thickShakes.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hotCoffee" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8">
                  {menuData.hotCoffee.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sandwiches" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8">
                  {menuData.sandwiches.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specials" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-4 sm:gap-x-8">
                  {menuData.specials.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div
          className="mt-8 sm:mt-12 bg-primary/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 aos-fade-up"
          style={{ transitionDelay: "0.3s" }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 text-center">Combo Deals</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-border">
              <p className="text-sm sm:text-base text-foreground font-medium mb-2">
                Signature Hot Coffee + Bombay Masala Sandwich
              </p>
              <p className="text-primary text-lg sm:text-xl font-bold">₹150/-</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-border">
              <p className="text-sm sm:text-base text-foreground font-medium mb-2">Cold Coffee + Veg Cheese Sandwich</p>
              <p className="text-primary text-lg sm:text-xl font-bold">₹170/-</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-border sm:col-span-2 md:col-span-1">
              <p className="text-sm sm:text-base text-foreground font-medium mb-2">
                Brownlano / Iced Mocha + Bombay Masala
              </p>
              <p className="text-primary text-lg sm:text-xl font-bold">₹180/-</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
