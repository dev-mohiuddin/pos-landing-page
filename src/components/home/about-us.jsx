"use client";

import { motion } from "framer-motion";
import { Target, Clock3, Users2, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full py-24 bg-background text-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Background decoration (optional blur) */}
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl z-0" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team is made of experts on small to large scale businesses,
              with thousands of customers in our client network built over the
              past fifteen years. Although our story started with payment
              processing, we could see the growing need for EPOS solutions
              amongst our loyal clients. That’s why we wanted to make sure that
              they get the most innovative and affordable EPOS system out there
              by creating it ourselves.{" "}
              <a href="/#pricing">
                {" "}
                <strong className="text-accent-foreground cursor-pointer hover:underline">
                  See our pricing plans here.
                </strong>
              </a>
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <AnimatedCard
              icon={<Target className="w-8 h-8 text-primary" />}
              title="Our Mission"
              desc="To see you thrive with a seamless system innovated to your business needs."
            />
            <AnimatedCard
              icon={<Clock3 className="w-8 h-8 text-primary" />}
              title="15+ Years Industry Experience"
              desc="Amaanah's EPOS is the result of years of careful observation."
            />
            <AnimatedCard
              icon={<Users2 className="w-8 h-8 text-primary" />}
              title="Unique Features"
              desc="Simple and just what you need, but not to be found anywhere else."
            />
            <AnimatedCard
              icon={<Award className="w-8 h-8 text-primary" />}
              title="Support On Demand"
              desc="A dedicated team to guide you through anytime. (If you’d even need that.)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({ icon, title, desc }) {
  return (
    <motion.div
      className="bg-muted/10 backdrop-blur-xl border border-border rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      //   viewport={{ once: true }}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-primary/10 rounded-full p-3">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
}
