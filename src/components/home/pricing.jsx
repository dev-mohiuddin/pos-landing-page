"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
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
            Choose the plan that fits your restaurant. Custom plans are also
            available for enterprise setups.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <motion.div
            className="border dark:custom-gradient rounded-2xl shadow-lg p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Standard</h3>
              <p className="text-3xl font-bold mb-2">
                {" "}
                £59.99<span className="text-sm font-medium">/outlet/mo</span>
              </p>
              <p className="text-muted-foreground mb-6">
                Perfect for small restaurants & cafes.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>✔ Basic Order Management</li>
                <li>✔ Menu Management</li>
                <li>✔ Limited Staff Access</li>
                <li>✔ Basic Reports</li>
              </ul>
            </div>
            <Button className="mt-6 w-full">Get Started</Button>
          </motion.div>

          {/* Standard Plan - Most Popular */}
          <motion.div
            className="border-2 dark:custom-gradient  border-primary bg-background shadow-2xl p-8 rounded-2xl scale-[1.03] relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge className="absolute top-4 right-4" variant="secondary">
              Most Popular
            </Badge>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-2">
                £79.99<span className="text-sm font-medium">/outlet/mo</span>
              </p>
              <p className="text-muted-foreground mb-6">
                Ideal for growing restaurants with multiple outlets.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>✔ Everything in Starter</li>
                <li>✔ Staff Scheduling & Payroll</li>
                <li>✔ Advanced Reports & Analytics</li>
                <li>✔ Loyalty Programs & Vouchers</li>
                <li>✔ Cost & Stock Management</li>
              </ul>
            </div>
            <Button className="mt-6 w-full">Choose Premium</Button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="border dark:custom-gradient rounded-2xl bg-background shadow-lg p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ultimate</h3>
              <p className="text-3xl font-bold mb-2">
                £99.99<span className="text-sm font-medium">/outlet/mo</span>
              </p>
              <p className="text-muted-foreground mb-6">
                For franchises and enterprise restaurant chains.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>✔ All Standard Features</li>
                <li>✔ Dedicated Account Manager</li>
                <li>✔ White-label Branding</li>
                <li>✔ Multi-Outlet Dashboard</li>
                <li>✔ Custom API Integration</li>
              </ul>
            </div>
            <Button variant="outline" className="mt-6 w-full">
              Contact Sales
            </Button>
          </motion.div>

          {/* Bespoke Plan */}
          <motion.div
            className="border-2 dark:custom-gradient border-primary/50 rounded-2xl bg-background shadow-lg p-8 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-100/10 dark:from-primary/10 dark:to-transparent rounded-2xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-semibold mb-4">Bespoke</h3>
              <p className="text-3xl font-bold mb-2">
                Custom Combination of Features
              </p>
              {/* <p className="text-muted-foreground mb-6">
                Tailored solutions for your unique business needs. Perfect for
                large enterprises, franchises, or anyone needing something
                extra.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>✔ Fully Customised Features</li>
                <li>✔ Dedicated Support & Training</li>
                <li>✔ Custom API & Integrations</li>
                <li>✔ Enterprise-Level Security</li>
                <li>✔ Flexible Billing Options</li>
              </ul> */}
            </div>

            <Button variant="secondary" className="mt-6 w-full">
              Get Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
