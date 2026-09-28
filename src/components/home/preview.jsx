"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { PlayCircle, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ammanah1, ammanah2, ammanah3 } from "@/assets";
import { useState, useEffect } from "react";

const screenshots = [
  {
    src: ammanah1,
    title: "Dashboard Overview",
    desc: "Real-time analytics, revenue summary, active orders, and outlet monitoring in one unified hub.",
  },
  {
    src: ammanah2,
    title: "POS Order Management",
    desc: "Lightning fast order punching, table assignment, pre-orders, and split payments.",
  },
  {
    src: ammanah3,
    title: "Staff & Operations Control",
    desc: "Role-based staff permissions, shift logs, performance tracking, and clock-in/out records.",
  },
];

export default function Preview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleSelect = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section id="demo" className="w-full py-20 bg-background text-foreground relative overflow-hidden">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            See It In Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Explore how our platform works in real-time. Watch a quick walkthrough or browse dashboard previews below.
          </p>

          <Button asChild size="lg" className="mb-12 cursor-pointer shadow-md">
            <a
              href="#book-demo"
              className="flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Book a Live Demo
            </a>
          </Button>
        </motion.div>

        {/* Interactive Feature Slider Component */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Slide Display with Controls */}
          <div className="relative rounded-2xl md:rounded-3xl border-2 border-border/80 bg-neutral-950 shadow-2xl p-2 sm:p-4 overflow-hidden">
            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground backdrop-blur-md shadow-2xl border border-border/80 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Slide Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-900 flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -100) {
                      handleNext();
                    } else if (swipe > 100) {
                      handlePrev();
                    }
                  }}
                  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none"
                >
                  <Image
                    src={screenshots[currentIndex].src}
                    alt={screenshots[currentIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="object-contain w-full h-full"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground backdrop-blur-md shadow-2xl border border-border/80 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Active Slide Info */}
          <div className="mt-5 text-center px-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-1">
              {screenshots[currentIndex].desc}
            </p>
          </div>

          {/* Interactive Navigation Thumbnails & Dots */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-2">
              {screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    currentIndex === idx
                      ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                      : "bg-background/80 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-white" : "bg-muted-foreground"}`} />
                  <span>{shot.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Book Demo Section */}
      <div id="book-demo" className="container px-4 mx-auto pt-24">
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
                <RadioGroupItem value="small" id="demo-size-small" />
                <Label htmlFor="demo-size-small" className="cursor-pointer">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="demo-size-medium" />
                <Label htmlFor="demo-size-medium" className="cursor-pointer">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chain" id="demo-size-chain" />
                <Label htmlFor="demo-size-chain" className="cursor-pointer">Chain</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Service */}
          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium text-muted-foreground">Service</Label>
            <RadioGroup defaultValue="restaurant" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restaurant" id="demo-service-restaurant" />
                <Label htmlFor="demo-service-restaurant" className="cursor-pointer">Restaurant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="takeaway" id="demo-service-takeaway" />
                <Label htmlFor="demo-service-takeaway" className="cursor-pointer">Takeaway</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="demo-service-both" />
                <Label htmlFor="demo-service-both" className="cursor-pointer">Both</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Form */}
          <div className="space-y-6 pt-2">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="demoFullName">Full Name *</Label>
                <Input id="demoFullName" placeholder="Enter Full Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demoEmail">Email Address *</Label>
                <Input
                  id="demoEmail"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demoPhone">Phone Number *</Label>
                <Input
                  id="demoPhone"
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
                htmlFor="demoCompany"
                className="block text-sm font-medium mb-1"
              >
                Company / Trading Name *
              </label>
              <Input
                id="demoCompany"
                placeholder="XYZ Ltd TA XYZ"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="demoNotes"
                className="block text-sm font-medium mb-1"
              >
                Any Special Notes
              </label>
              <Textarea
                id="demoNotes"
                placeholder="e.g., I have two outlets... "
                className="w-full h-24"
              />
            </div>

            <div>
              <label
                htmlFor="demoDatetime"
                className="block text-sm font-medium mb-1"
              >
                Date and Time
              </label>
              <Input
                name={"datetime"}
                id="demoDatetime"
                type="datetime-local"
                className="bg-background"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <Button className="text-base px-8 py-5 cursor-pointer font-semibold shadow-md">Submit Request</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
