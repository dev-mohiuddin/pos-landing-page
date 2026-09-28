"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ammanah1, ammanah2, ammanah3 } from "@/assets";
import { useState, useEffect } from "react";

const screenshots = [
  { src: ammanah1, alt: "Dashboard Overview" },
  { src: ammanah2, alt: "Create System" },
  { src: ammanah3, alt: "Staff Profile" },
];

export default function Preview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.15,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 1.8,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2.2,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section id="demo" className="w-full py-20 bg-background text-foreground relative">
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

        {/* Carousel Slider with Navigation Arrows */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-10">
          {/* Left Arrow Button */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground backdrop-blur-md shadow-xl border border-border cursor-pointer transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Keen Slider Container */}
          <div ref={sliderRef} className="keen-slider py-4">
            {screenshots.map((shot, i) => (
              <div
                key={i}
                className="keen-slider__slide bg-muted/10 dark:bg-muted/20 border border-border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 select-none cursor-grab active:cursor-grabbing"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-900/10 dark:bg-neutral-900/50">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                    priority={i === 0}
                  />
                </div>
                <div className="p-4 text-center text-sm font-semibold text-foreground/90 border-t border-border/50 bg-background/80">
                  {shot.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="absolute -right-2 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground backdrop-blur-md shadow-xl border border-border cursor-pointer transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dot Pagination */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center items-center gap-2.5 mt-6">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-8 bg-primary shadow-sm"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

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
        <div className="space-y-5 max-w-3xl mx-auto border p-6 sm:p-8 rounded-2xl bg-card shadow-sm">
          {/* Size */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              What type of business are you running?
            </Label>
            <Label className="text-sm font-medium mt-4 block text-muted-foreground">Size</Label>
            <RadioGroup defaultValue="small" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small" className="cursor-pointer">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chain" id="chain" />
                <Label htmlFor="chain" className="cursor-pointer">Chain</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Service */}
          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium text-muted-foreground">Service</Label>
            <RadioGroup defaultValue="restaurant" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restaurant" id="restaurant" />
                <Label htmlFor="restaurant" className="cursor-pointer">Restaurant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="takeaway" id="takeaway" />
                <Label htmlFor="takeaway" className="cursor-pointer">Takeaway</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both" className="cursor-pointer">Both</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Form */}
          <div className="space-y-6 pt-2">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="Enter Full Name" required />
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
                  placeholder="+447XXX XXX XXX"
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
                placeholder="XYZ Ltd TA XYZ"
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
                className="bg-background"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <Button className="text-base px-8 py-5 cursor-pointer font-semibold shadow-md">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
