"use client";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
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
  })

  return (
    <section id="demo" className="w-full py-20 bg-background text-foreground">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">See It In Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore how our platform works in real-time. Watch a quick walkthrough or browse dashboard previews below.
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
              <div className="p-4 text-sm text-muted-foreground">{shot.alt}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}