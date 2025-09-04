import Link from "next/link"
import { Flame, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <div className="bg-primary/10 p-2 rounded-lg mr-3">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                LetaGas
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-pretty">
              Kenya's leading gas delivery service bringing convenience and reliability to your doorstep. Fast, safe, and professional service when you need it most.
            </p>
            
            {/* App Download Buttons */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-200">Get our app</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 rounded-lg">
                  <Download className="h-4 w-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 rounded-lg">
                  <Download className="h-4 w-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-gray-100">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary transition-colors block py-1">
                  Delivery Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-gray-400 block">+254 704 444810</span>
                  <span className="text-gray-500 text-sm">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-0.5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-gray-400 block">info@letagaske.com</span>
                  <span className="text-gray-500 text-sm">We respond quickly</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-gray-400 block">Nationwide Coverage</span>
                  <span className="text-gray-500 text-sm">Across Kenya</span>
                </div>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-gray-200">Stay updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="rounded-l-none rounded-r-lg px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} LetaGas. All rights reserved. | Flame on Demand.
          </p>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}