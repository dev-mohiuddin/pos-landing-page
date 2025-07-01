// "use client";

// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ammanah1, ammanah2, ammanah3 } from "@/assets";

// const images = [ammanah1, ammanah2, ammanah3];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 4s
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="w-full py-16 md:py-24 bg-background text-foreground"
//     >
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Side - Text */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
//             Manage Your Entire Restaurant –{" "}
//             <span className="text-primary">Smarter, Faster, Simpler.</span>
//           </h1>
//           <p className="text-lg text-muted-foreground mb-8 max-w-xl">
//             All-in-one restaurant management software for seamless operations,
//             real-time insights, and better customer service.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Button asChild size="lg">
//               <Link href="#demo">Get Started</Link>
//             </Button>
//             <Button asChild size="lg" variant="outline">
//               <Link href="#features">Explore Features</Link>
//             </Button>
//           </div>
//         </motion.div>

//         {/* Right Side - Image Slider */}
//         <motion.div
//           className="w-full md:w-1/2 relative h-[300px] sm:h-[400px]"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={images[current]}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.6 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={images[current]}
//                 alt={`Slide ${current + 1}`}
//                 width={600}
//                 height={400}
//                 className="object-contain rounded-xl shadow-lg border"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
            Manage Your Entire Restaurant –{" "}
            <span className="text-primary">Smarter, Faster, Simpler.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            All-in-one restaurant management software for seamless operations,
            real-time insights, and better customer service.
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
