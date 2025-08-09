"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LucideUtensils,
  LucideUsers,
  LucideClipboardList,
  LucidePieChart,
} from "lucide-react";

const features = [
  {
    title: "Order Management",
    icon: <LucideUtensils className="w-6 h-6 text-primary" />,
    items: [
      {
        name: "Take Orders",
        desc: "Quick order input for dine-in, takeout, or delivery.",
      },
      {
        name: "Table-Side Ordering",
        desc: "Effortless digital ordering at the table.",
      },
      {
        name: "Online Orders",
        desc: "Receive and manage online orders from one dashboard.",
      },
      {
        name: "Reservation System",
        desc: "Smart booking system for smooth operations.",
      },
    ],
  },
  {
    title: "Staff Management",
    icon: <LucideUsers className="w-6 h-6 text-primary" />,
    items: [
      {
        name: "Payroll, Shifts, Time Sheet",
        desc: "Automated staff scheduling & payroll tracking.",
      },
      {
        name: "Role Access & Staff Reports",
        desc: "Define roles and get performance insights.",
      },
    ],
  },
  {
    title: "Business Control",
    icon: <LucidePieChart className="w-6 h-6 text-primary" />,
    items: [
      {
        name: "Cost Projection",
        desc: "Forecast and manage operating costs smartly.",
      },
      {
        name: "Analytics",
        desc: "Powerful real-time data for better decisions.",
      },
      {
        name: "Stock & Inventory",
        desc: "Track ingredients and supplies efficiently.",
      },
    ],
  },
  {
    title: "Menu Management",
    icon: <LucideClipboardList className="w-6 h-6 text-primary" />,
    items: [
      {
        name: "Editable Dynamic Menu",
        desc: "Update your menu in real-time across outlets.",
      },
      {
        name: "Combo Offers, Special Menu, Drinks",
        desc: "Create promotions that sell more.",
      },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-muted/10 dark:bg-muted/5">
      <div id="unique-features" className="w-full py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Unique Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond the basics – discover the innovations that make Amaanah
              EPOS stand out in the restaurant industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {[
              {
                title: "Booking Management",
                desc: "Viewing booking names and times through your EPOS is old news. What about when you need to manage multiple tables until your group booking arrives? Amaanah EPOS adapts your table viewing to easily guide your staff as to which are available by combining tables under a single booking closer to the time of arrival. ",
              },
              {
                title: "Outlet Management",
                desc: "Amaanah’s controls are not limited to the installation site. However many outlets you may have, you can view them all together in great detail right where you are. Update menu items across all outlets or adapt a single outlet’s menus according to their stock and more – with Amaanah, opportunities are endless. ",
              },
              {
                title: "Table Swapping",
                desc: "No more distracting back of house staff with sticky notes. Whether your booking needs a different number of seats than initially requested or a new customer needs to be seated where an advance booking has been placed, even complicated table swaps can be completed with a single tap. Now all staff can be updated on where which order is expected.",
              },
              {
                title: "Staff Management",
                desc: "Change of schedule or change of site/outlet, permanent or temporary, your entire team can be organised with the click of a button. The best part is that Amaanah also provides various analytics to help you judge where your most talented staff are actually needed.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-muted/5 border border-border shadow-sm hover:shadow-lg transition duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Core Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your restaurant operation and
            scale with confidence.
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
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
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
  );
}
