"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { UserPlus, Shield, Clock, DollarSign, Bike } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [registrationType, setRegistrationType] = useState<"vendor" | "delivery">("vendor")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!agreedToTerms || !agreedToPrivacy) {
      toast({
        title: "Agreement Required",
        description: "Please agree to both the Terms and Conditions and Privacy Policy to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Registration Submitted!",
      description: "We'll review your application and contact you within 2-3 business days.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
    setAgreedToTerms(false)
    setAgreedToPrivacy(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                {registrationType === "vendor" ? (
                  <UserPlus className="h-12 w-12 text-primary" />
                ) : (
                  <Bike className="h-12 w-12 text-primary" />
                )}
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {registrationType === "vendor" ? (
                <>
                  Become a <span className="text-primary">Vendor</span>
                </>
              ) : (
                <>
                  Join Our <span className="text-primary">Delivery Team</span>
                </>
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              {registrationType === "vendor"
                ? "Join our trusted network of gas delivery professionals and grow your business with LetaGas. Start earning with flexible schedules and competitive rates."
                : "Become a delivery rider and earn money with flexible hours. Perfect for motorbike owners looking for additional income opportunities."}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join hundreds of successful {registrationType === "vendor" ? "vendors" : "delivery riders"} who are
              growing their income with LetaGas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Competitive Earnings</CardTitle>
                <CardDescription>
                  Earn competitive rates with bonuses for excellent service and customer ratings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
                <CardDescription>
                  Work on your own schedule with the freedom to choose your delivery hours
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Full Support</CardTitle>
                <CardDescription>
                  Complete training, insurance coverage, and 24/7 support for all partners
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-2xl text-center">Registration Application</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below to start your application process.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Registration Type</h3>
                    <RadioGroup
                      value={registrationType}
                      onValueChange={(value) => setRegistrationType(value as "vendor" | "delivery")}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="vendor" id="vendor" />
                        <Label htmlFor="vendor" className="flex items-center space-x-2 cursor-pointer">
                          <UserPlus className="h-4 w-4" />
                          <span>Gas Vendor</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex items-center space-x-2 cursor-pointer">
                          <Bike className="h-4 w-4" />
                          <span>Delivery Rider</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Personal Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="border-2 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium">
                        Full Address *
                      </Label>
                      <Textarea
                        id="address"
                        name="address"
                        rows={3}
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Business/Vehicle Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                      {registrationType === "vendor" ? "Business Information" : "Vehicle Information"}
                    </h3>

                    {registrationType === "vendor" && (
                      <div className="space-y-2">
                        <Label htmlFor="businessName" className="text-sm font-medium">
                          Business Name
                        </Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="Leave blank if individual"
                          className="border-2 focus:border-primary transition-colors"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-sm font-medium">
                        Years of Experience *
                      </Label>
                      <Select name="experience" required>
                        <SelectTrigger className="border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-5">2-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceArea" className="text-sm font-medium">
                        Preferred Service Area *
                      </Label>
                      <Input
                        id="serviceArea"
                        name="serviceArea"
                        placeholder="City, State or ZIP codes"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vehicleInfo" className="text-sm font-medium">
                        {registrationType === "vendor" ? "Vehicle Information *" : "Motorbike Information *"}
                      </Label>
                      <Textarea
                        id="vehicleInfo"
                        name="vehicleInfo"
                        rows={3}
                        placeholder={
                          registrationType === "vendor"
                            ? "Describe your delivery vehicle (make, model, year, capacity)"
                            : "Describe your motorbike (make, model, year, engine capacity)"
                        }
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Certifications & Licenses</h3>

                    <div className="space-y-2">
                      <Label htmlFor="driverLicense" className="text-sm font-medium">
                        Driver's License Number *
                      </Label>
                      <Input
                        id="driverLicense"
                        name="driverLicense"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insurance" className="text-sm font-medium">
                        Insurance Information *
                      </Label>
                      <Textarea
                        id="insurance"
                        name="insurance"
                        rows={3}
                        placeholder="Insurance company, policy number, coverage details"
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    {registrationType === "vendor" && (
                      <div className="space-y-2">
                        <Label htmlFor="certifications" className="text-sm font-medium">
                          Gas Handling Certifications
                        </Label>
                        <Textarea
                          id="certifications"
                          name="certifications"
                          rows={3}
                          placeholder="List any relevant certifications (we can help you get certified if needed)"
                          className="border-2 focus:border-primary transition-colors resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b pb-2">Additional Information</h3>

                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-sm font-medium">
                        Availability *
                      </Label>
                      <Textarea
                        id="availability"
                        name="availability"
                        rows={3}
                        placeholder="Describe your preferred working hours and days"
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whyJoin" className="text-sm font-medium">
                        Why do you want to join LetaGas? *
                      </Label>
                      <Textarea
                        id="whyJoin"
                        name="whyJoin"
                        rows={4}
                        placeholder="Tell us about your motivation and goals"
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="space-y-6 p-6 bg-muted/30 rounded-lg border-2">
                    <h3 className="text-lg font-semibold text-foreground">Legal Agreements</h3>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        className="mt-1 h-5 w-5"
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer flex-1">
                        I agree to the{" "}
                        <span className="text-primary hover:underline cursor-pointer font-medium">
                          Terms and Conditions
                        </span>
                        . I understand the service requirements, payment terms, and operational guidelines for LetaGas
                        partners.
                      </Label>
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border">
                      <Checkbox
                        id="privacy"
                        checked={agreedToPrivacy}
                        onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                        className="mt-1 h-5 w-5"
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer flex-1">
                        I agree to the{" "}
                        <span className="text-primary hover:underline cursor-pointer font-medium">Privacy Policy</span>.
                        I consent to the collection and processing of my personal data as described in the privacy
                        policy.
                      </Label>
                    </div>

                    {/* Additional Agreement */}
                    <div className="text-xs text-muted-foreground bg-background p-3 rounded border">
                      <p>
                        By submitting this application, I acknowledge that my information will be reviewed and I may be
                        contacted for additional information or an interview. I understand that approval is not
                        guaranteed and depends on meeting LetaGas partnership requirements.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        {registrationType === "vendor" ? (
                          <UserPlus className="h-4 w-4 mr-2" />
                        ) : (
                          <Bike className="h-4 w-4 mr-2" />
                        )}
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
