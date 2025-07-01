
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideUtensils, LucideUsers, LucideClipboardList, LucidePieChart } from "lucide-react"

const features = [
  {
    title: "Order Management",
    icon: <LucideUtensils className="w-6 h-6 text-primary" />,
    items: [
      { name: "Take Orders", desc: "Quick order input for dine-in, takeout, or delivery." },
      { name: "Table-Side Ordering", desc: "Effortless digital ordering at the table." },
      { name: "Online Orders", desc: "Receive and manage online orders from one dashboard." },
      { name: "Reservation System", desc: "Smart booking system for smooth operations." },
    ],
  },
  {
    title: "Staff Management",
    icon: <LucideUsers className="w-6 h-6 text-primary" />,
    items: [
      { name: "Payroll, Shifts, Time Sheet", desc: "Automated staff scheduling & payroll tracking." },
      { name: "Role Access & Staff Reports", desc: "Define roles and get performance insights." },
    ],
  },
  {
    title: "Business Control",
    icon: <LucidePieChart className="w-6 h-6 text-primary" />,
    items: [
      { name: "Cost Projection", desc: "Forecast and manage operating costs smartly." },
      { name: "Analytics", desc: "Powerful real-time data for better decisions." },
      { name: "Stock & Inventory", desc: "Track ingredients and supplies efficiently." },
    ],
  },
  {
    title: "Menu Management",
    icon: <LucideClipboardList className="w-6 h-6 text-primary" />,
    items: [
      { name: "Editable Dynamic Menu", desc: "Update your menu in real-time across outlets." },
      { name: "Combo Offers, Special Menu, Drinks", desc: "Create promotions that sell more." },
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-muted/10 dark:bg-muted/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your restaurant operation and scale with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border border-border shadow-md hover:shadow-lg transition duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i}>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="#demo">Book a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
