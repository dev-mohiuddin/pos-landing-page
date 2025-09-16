
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center px-4 py-20 bg-background text-foreground overflow-hidden"
    >
      <div>
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl top-[-100px] left-[-100px] opacity-50  dark:bg-purple-800/10 z-0"
          animate={{ x: [0, 70, -40, 0], y: [0, 70, -30, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/40 rounded-full blur-2xl bottom-[-200px] right-[-200px] opacity-35 dark:bg-blue-800/10 z-0"
          animate={{ x: [0, -70, 40, 0], y: [0, -40, 40, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            You asked for it. We coded it.{" "}
            <span className="text-primary" >Amaanah EPOS Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Restaurant management problems?<span className="text-primary font-bold"> Amaanah</span> is the solution to all
            your oddly specific nightmares.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#demo">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
