"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { PlayCircle, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ammanah1, ammanah2, ammanah3 } from "@/assets";

const screenshots = [
  { src: ammanah1, alt: "Dashboard Overview" },
  { src: ammanah2, alt: "Create System" },
  { src: ammanah3, alt: "Staff Profile" },
];

export default function Preview() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 24,
        },
      },
    },
  });

  return (
    <section id="demo" className="w-full py-20 bg-background text-foreground">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            See It In Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore how our platform works in real-time. Watch a quick
            walkthrough or browse dashboard previews below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" /> Watch How It Works
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#book-demo" className="flex items-center gap-2">
                <MessageSquareQuote className="w-5 h-5 text-primary" /> Interested
              </a>
            </Button>
          </div>
        </motion.div>

        <div ref={sliderRef} className="keen-slider">
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              className="keen-slider__slide bg-muted/10 dark:bg-muted/20 border border-border rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={600}
                height={350}
                className="object-cover w-full h-auto"
              />
              <div className="p-4 text-sm text-muted-foreground">
                {shot.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Restored All set to try out our EPOS section */}
      <div id="book-demo" className="container px-4 mx-auto pt-20">
        <div className="flex justify-center items-center mb-6">
          <span className="text-center max-w-xl text-muted-foreground text-xl font-bold">
            <span className="text-2xl text-foreground">
              All set to try out our EPOS and make it yours?
            </span>{" "}
            <br />
            <span className="text-primary">
              First tell us about your business:
            </span>
          </span>
        </div>
        <div className="space-y-5 max-w-3xl mx-auto border border-border p-6 rounded-md bg-card/60 dark:bg-muted/10 shadow-xs">
          {/* Size */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              What type of business are you running?
            </Label>
            <Label className="text-xs text-muted-foreground block mt-4">Size</Label>
            <RadioGroup defaultValue="small" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="preview-small" />
                <Label htmlFor="preview-small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="preview-medium" />
                <Label htmlFor="preview-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chain" id="preview-chain" />
                <Label htmlFor="preview-chain">Chain</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Service */}
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground block">Service</Label>
            <RadioGroup defaultValue="restaurant" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restaurant" id="preview-restaurant" />
                <Label htmlFor="preview-restaurant">Restaurant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="takeaway" id="preview-takeaway" />
                <Label htmlFor="preview-takeaway">Takeaway</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="preview-both" />
                <Label htmlFor="preview-both">Both</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="preview-fullName">Full Name *</Label>
                <Input id="preview-fullName" placeholder="Enter Full Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-email">Email Address *</Label>
                <Input
                  id="preview-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-phone">Phone Number *</Label>
                <Input
                  id="preview-phone"
                  type="tel"
                  placeholder="+447XXX XXX XXX"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="preview-company"
                className="block text-sm font-medium mb-1"
              >
                Company / Trading Name *
              </label>
              <Input
                id="preview-company"
                placeholder="XYZ Ltd TA XYZ"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="preview-preferredDays"
                className="block text-sm font-medium mb-1"
              >
                Any Special Notes
              </label>
              <Textarea
                id="preview-preferredDays"
                placeholder="e.g., I have two outlets... "
                className="w-full h-24"
              />
            </div>

            <div>
              <label
                htmlFor="preview-datetime"
                className="block text-sm font-medium mb-1"
              >
                Date and Time
              </label>
              <Input
                name={"datetime"}
                id="preview-datetime"
                type="datetime-local"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <Button className="text-base">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
