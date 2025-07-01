"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full  py-20 bg-muted/5 bg-gradient-to-br from-blue-50 via-primary/10 to-pink-50 dark:from-neutral-950 dark:via-gray-950/50 dark:to-black text-foreground px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We'd love to hear from you. Whether you're curious about features, a
            free trial, or even press—we're ready to answer any and all
            questions.
          </p>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              hello@amaanah.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              +880-123-456789
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              123 Amaanah Street, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <Input id="name" placeholder="Enter your name" className="w-full" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full h-32"
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
