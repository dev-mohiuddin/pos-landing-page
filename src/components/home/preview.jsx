"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
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

          <Button asChild size="lg" className="mb-12">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Watch How It Works
            </a>
          </Button>
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
      <div className="container px-4 mx-auto mt-20">
        <div className="flex justify-center items-center mb-6">
          <span className="text-center max-w-xl text-muted-foreground text-xl font-bold ">
            <span className="text-2xl text-white">
              All set to try out our EPOS and make it yours?
            </span>{" "}
            <br />
            <span className="text-primary">
              First tell us about your business:
            </span>
          </span>
        </div>
        <div className="space-y-5 max-w-3xl mx-auto  border p-6 rounded-md">
          {/* Size */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              What type of business are you running?
            </Label>
            <Label className="text-sm font-medium mt-8">Size</Label>
            <RadioGroup defaultValue="small" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chain" id="chain" />
                <Label htmlFor="chain">Chain</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Service */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Service</Label>
            <RadioGroup defaultValue="restaurant" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restaurant" id="restaurant" />
                <Label htmlFor="restaurant">Restaurant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="takeaway" id="takeaway" />
                <Label htmlFor="takeaway">Takeaway</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">Both</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+880-123-456789"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-1"
              >
                Company / Trading Name *
              </label>
              <Input
                id="company"
                placeholder="Your company or trading name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="preferredDays"
                className="block text-sm font-medium mb-1"
              >
                Any Special Notes
              </label>
              <Textarea
                id="preferredDays"
                placeholder="e.g., I have two outlets... "
                className="w-full h-24"
              />
            </div>

            <div>
              <label
                htmlFor="nextAvailable"
                className="block text-sm font-medium mb-1"
              >
                Date and Time
              </label>
              <Input
                name={"datetime"}
                id="datetime"
                type="datetime-local"
                className="bg-white"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <Button className=" text-base ">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
