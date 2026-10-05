"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-muted/5 bg-gradient-to-br from-blue-50 via-primary/10 to-pink-50 dark:from-neutral-950 dark:via-gray-950/50 dark:to-black text-foreground px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info - Custom 3-channel layout inspired by helpdesk structure */}
        <div className="space-y-8 lg:col-span-5">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              Have questions or need assistance with your POS system? Reach out
              through any of the channels below and our team will be delighted to help.
            </p>
          </div>

          <div className="space-y-5">
            {/* Channel 1 - Call Us */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-card/60 dark:bg-muted/10 backdrop-blur-xs transition-all hover:border-primary/50 shadow-xs">
              <div className="flex flex-col items-center justify-center min-w-[70px] pt-1">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-1.5">
                  <Phone className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-foreground">Call us</span>
              </div>
              <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground border-l border-border/60 pl-4 py-0.5">
                <p>
                  <span className="font-semibold text-foreground">• Direct Line:</span>{" "}
                  <a
                    href="tel:03303904240"
                    className="text-primary hover:underline font-bold"
                  >
                    0330 390 4240
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Availability:</span> Mon – Fri, 9:00 AM – 6:00 PM (GMT)
                  <span className="block text-xs text-muted-foreground/80 pl-2">
                    (Includes Bank Holidays)
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Best suited for:</span> Urgent technical queries & immediate setup consultation
                </p>
              </div>
            </div>

            {/* Channel 2 - Email Us */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-card/60 dark:bg-muted/10 backdrop-blur-xs transition-all hover:border-primary/50 shadow-xs">
              <div className="flex flex-col items-center justify-center min-w-[70px] pt-1">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-1.5">
                  <Mail className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-foreground">Email us</span>
              </div>
              <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground border-l border-border/60 pl-4 py-0.5">
                <p>
                  <span className="font-semibold text-foreground">• Support Inbox:</span>{" "}
                  <a
                    href="mailto:amaanahsoft@gmail.com"
                    className="text-primary hover:underline font-bold break-all"
                  >
                    amaanahsoft@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Response Window:</span> Within 24 hours (often in under 2 hours)
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Best suited for:</span> Custom package quotes, feature inquiries & enterprise demos
                </p>
              </div>
            </div>

            {/* Channel 3 - Visit Us / Headquarters */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-card/60 dark:bg-muted/10 backdrop-blur-xs transition-all hover:border-primary/50 shadow-xs">
              <div className="flex flex-col items-center justify-center min-w-[70px] pt-1">
                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-1.5">
                  <MapPin className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-foreground">Visit us</span>
              </div>
              <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground border-l border-border/60 pl-4 py-0.5">
                <p>
                  <span className="font-semibold text-foreground">• Headquarters:</span>{" "}
                  <span className="font-medium text-foreground">
                    48-50 St. Augustines Street, Norwich, United Kingdom, NR3 3AD
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Operating Hours:</span> Mon – Fri, 9:00 AM – 5:30 PM (GMT)
                  <span className="block text-xs text-muted-foreground/80 pl-2">
                    (Includes Bank Holidays)
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-foreground">• Best suited for:</span> In-person hardware demos, terminal tests & consultation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EPOS / Business Details Form */}
        <div className="lg:col-span-7 bg-card/80 dark:bg-muted/10 border border-border/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              All set to try out our EPOS and make it yours?
            </h3>
            <p className="text-primary font-medium text-sm md:text-base mt-1">
              First tell us about your business:
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Size */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                What type of business are you running?
              </Label>
              <Label className="text-xs text-muted-foreground block">Size</Label>
              <RadioGroup defaultValue="small" className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="contact-size-small" />
                  <Label htmlFor="contact-size-small">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="contact-size-medium" />
                  <Label htmlFor="contact-size-medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="chain" id="contact-size-chain" />
                  <Label htmlFor="contact-size-chain">Chain</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Service */}
            <div className="space-y-3">
              <Label className="text-xs text-muted-foreground block">Service</Label>
              <RadioGroup defaultValue="restaurant" className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="restaurant" id="contact-service-restaurant" />
                  <Label htmlFor="contact-service-restaurant">Restaurant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="takeaway" id="contact-service-takeaway" />
                  <Label htmlFor="contact-service-takeaway">Takeaway</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="contact-service-both" />
                  <Label htmlFor="contact-service-both">Both</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-fullName">Full Name *</Label>
                <Input id="contact-fullName" placeholder="Enter Full Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Address *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Phone Number *</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+447XXX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-company">
                  Company / Trading Name *
                </Label>
                <Input
                  id="contact-company"
                  placeholder="XYZ Ltd TA XYZ"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-preferredDays">
                  Any Special Notes
                </Label>
                <Textarea
                  id="contact-preferredDays"
                  placeholder="e.g., I have two outlets..."
                  className="w-full h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-datetime">
                  Date and Time
                </Label>
                <Input
                  name="datetime"
                  id="contact-datetime"
                  type="datetime-local"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-start pt-2">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
