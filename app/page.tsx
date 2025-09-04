import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Clock, Shield, Truck, Users, Star, Smartphone, Download } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                Gas Delivery Made <span className="text-primary">Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl text-pretty">
                LetaGas brings reliable gas delivery right to your doorstep. Fast, safe, and professional service when
                you need it most. Experience the convenience of on-demand gas delivery.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/register">Become a Vendor</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-secondary/80 hover:bg-secondary w-full sm:w-auto"
                >
                  <Link href="https://i.diawi.com/SyBi6L" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Download Our App
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/welcome-app.jpeg" alt="LetaGas Welcome Screen" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/order-app.jpeg" alt="Order Details Screen" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 sm:mt-8">
                  <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/home-app.jpeg" alt="LetaGas Home Screen" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/onboard-app.jpeg" alt="App Onboarding" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/trackgasorder.jpg"
                alt="Track your gas delivery in real-time"
                width={600}
                height={400}
                className="rounded-xl sm:rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 sm:mb-6 mx-auto lg:mx-0">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance text-center lg:text-left">
                Track Your Delivery in Real-Time
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-pretty text-center lg:text-left">
                Stay updated with live tracking, estimated delivery times, and direct communication with your delivery
                vendor through our mobile app.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="https://i.diawi.com/SyBi6L" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Get the App
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Why Choose LetaGas?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to providing the best gas delivery experience with our reliable network of vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Fast Delivery</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Quick response times with delivery within 30-60 minutes of your order
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Safe & Secure</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  All our vendors are certified and follow strict safety protocols for gas handling
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Reliable Service</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Professional vendors with proper equipment and insurance for peace of mind
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-8">
            <Image
              src="/images/gascylinder.jpg"
              alt="Various gas cylinders available for delivery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">All Types of Gas Cylinders</h3>
                <p className="text-sm sm:text-base lg:text-lg">
                  LPG, Industrial, and Commercial gas delivery available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="bg-accent/10 p-3 sm:p-4 rounded-full w-fit mb-4 sm:mb-6 mx-auto lg:mx-0">
                <Users className="h-8 w-8 sm:h-12 sm:w-12 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                Join Our Vendor Network
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
                Become a LetaGas vendor and grow your gas delivery business. Join our trusted network of professional
                gas delivery providers serving customers nationwide.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/quickdelivery.jpg"
                alt="Professional gas delivery service"
                width={600}
                height={400}
                className="rounded-xl sm:rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">500+</div>
              <div className="text-base sm:text-lg text-muted-foreground">Trusted Vendors</div>
            </div>
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">10K+</div>
              <div className="text-base sm:text-lg text-muted-foreground">Deliveries Completed</div>
            </div>
            <div className="p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">4.9</div>
              <div className="text-base sm:text-lg text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
