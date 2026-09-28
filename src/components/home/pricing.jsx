"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import DemoDialog from "../common/demo-dialog";
import { useState } from "react";

export default function Pricing() {
  const [dialog, setDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("essential");

  const handleOpenDialog = (pkgName) => {
    setSelectedPackage(pkgName);
    setDialog(true);
  };

  const packages = [
    {
      id: "essential",
      name: "Essential",
      price: "£39.99",
      period: "/outlet/mo",
      isPopular: false,
      modules: [
        "Call Log",
        "Take Orders",
        "Back office",
        "Client Panel",
        "Orders History",
        "Dashboard",
        "Reporting",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      price: "£59.99",
      period: "/outlet/mo",
      isPopular: false,
      modules: [
        "Call Log",
        "Take Orders",
        "Reservation",
        "Back office",
        "Client Panel",
        "Orders History",
        "Table",
        "Dashboard",
        "Reporting",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "£79.99",
      period: "/outlet/mo",
      isPopular: true,
      modules: [
        "Call Log",
        "Take Orders",
        "Reservation",
        "CBD",
        "Back office",
        "Client Panel",
        "Orders History",
        "Table",
        "Loyalty Offer",
        "Dashboard",
        "Reporting",
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "£99.99",
      period: "/outlet/mo",
      isPopular: false,
      modules: [
        "Call Log",
        "Take Orders",
        "Reservation",
        "CBD",
        "Dashboard",
        "Reporting",
        "Orders History",
        "Table",
        "Loyalty Offer",
        "Micro View",
        "Back office",
        "Client Panel",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-24 bg-gradient-to-br from-blue-50 via-primary/10 to-pink-50 dark:from-neutral-950 dark:via-gray-950/50 dark:to-black text-foreground"
    >
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Choose the plan that fits your restaurant.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between text-left relative ${
                pkg.isPopular
                  ? "border-2 border-primary bg-background shadow-2xl scale-[1.03] z-10 dark:custom-gradient"
                  : "border bg-background shadow-lg dark:custom-gradient"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {pkg.isPopular && (
                <Badge className="absolute top-4 right-4" variant="secondary">
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  {pkg.price}
                  <span className="text-sm font-medium text-muted-foreground">
                    {pkg.period}
                  </span>
                </p>

                <div className="mb-4">
                  <p className="font-medium text-sm text-foreground">
                    Software Modules:
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm">
                  {pkg.modules.map((mod, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✔</span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => handleOpenDialog(pkg.id)}
                className="mt-8 w-full cursor-pointer"
                variant={pkg.isPopular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <DemoDialog
          getQuote={true}
          open={dialog}
          onOpenChange={setDialog}
          defaultPackage={selectedPackage}
        />
      </div>
    </section>
  );
}
