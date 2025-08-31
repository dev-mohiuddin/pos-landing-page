// app/components/why-choose-us.tsx
"use client";

import { motion } from "framer-motion";
import {
  LucideSmile,
  LucideShieldCheck,
  LucideSettings2,
  LucideBarChart,
} from "lucide-react";

const benefits = [
  {
    title: "Easy to Use",
    description:
      "No learning curve – our simple UX works for everyone on your team.",
    icon: LucideSmile,
  },
  {
    title: "Secure & Reliable",
    description:
      "Cloud-based infrastructure ensures speed, safety, and uptime you can trust.",
    icon: LucideShieldCheck,
  },
  {
    title: "Fully Customizable",
    description:
      "Adapt the system to your restaurant's exact needs and branding.",
    icon: LucideSettings2,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Real-time reports, alerts, and dashboards to help you grow smarter.",
    icon: LucideBarChart,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full py-10 bg-background text-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground">
            Discover how our hospitality management system helps you save time,
            cut costs, and delight your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/10 dark:bg-muted/5 shadow-sm hover:shadow-md transition"
              >
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
