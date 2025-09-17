"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-muted/5 bg-gradient-to-br from-blue-50 via-primary/10 to-pink-50 dark:from-neutral-950 dark:via-gray-950/50 dark:to-black text-foreground px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We'd love to hear from you. Whether you're curious about features, a
            free trial, or even press—we're ready to answer any questions.
          </p>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              amaanahsoft@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              0330 390 4240
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              48-50 St. Augustines Street, Norwich, United Kingdom, NR3 3AD
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-1"
            >
              Full Name *
            </label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company / Trading Name *
            </label>
            <Input
              id="company"
              placeholder="XYZ Ltd TA XYZ"
              required
              className="w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+44 number as example"
                required
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address1"
              className="block text-sm font-medium mb-1"
            >
              Address Line 1 *
            </label>
            <Input
              id="address1"
              type="text"
              placeholder="House/Road no."
              required
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="address2"
              className="block text-sm font-medium mb-1"
            >
              Address Line 2
            </label>
            <Input
              id="address2"
              type="text"
              placeholder=""
              className="w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                City *
              </label>
              <Input
                id="city"
                type="text"
                placeholder="Enter City"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="postcode" className="block text-sm font-medium mb-1">
                Postcode *
              </label>
              <Input
                id="postcode"
                type="text"
                placeholder="AB1 2CD"
                required
                className="w-full"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full md:w-auto">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
