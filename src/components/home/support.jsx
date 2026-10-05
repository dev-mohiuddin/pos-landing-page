"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Headphones, ShieldCheck, Clock, MessageSquare, LifeBuoy } from "lucide-react";

export default function Support() {
  return (
    <section
      id="support"
      className="w-full py-20 bg-background text-foreground px-4 md:px-8 border-t border-border/60"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Support Info */}
        <div className="space-y-6 lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <LifeBuoy className="w-3.5 h-3.5" /> 24/7 Dedicated Support
          </div>

          <h2 className="text-3xl font-bold tracking-tight">
            We're Here to Help Your Business Grow
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Have questions about system setup, troubleshooting, or billing? Submit a ticket and our technical team will assist you immediately.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-border/60 bg-muted/20">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Fast Response Guarantee</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Average response time under 15 minutes during business hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-border/60 bg-muted/20">
              <Headphones className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Dedicated Tech Support</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Direct assistance with EPOS terminals, kitchen displays, and printers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-border/60 bg-muted/20">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Continuous System Uptime</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  99.9% uptime with cloud backup and automatic offline failover.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Request Form */}
        <div className="lg:col-span-7 bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Request Support
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Fill in your details below and a support specialist will be in touch.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="support-fullName">Full Name *</Label>
              <Input
                id="support-fullName"
                placeholder="Enter Full Name"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-company">Company / Trading Name *</Label>
              <Input
                id="support-company"
                placeholder="XYZ Ltd TA XYZ"
                required
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="support-email">Email Address *</Label>
                <Input
                  id="support-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-phone">Phone Number *</Label>
                <Input
                  id="support-phone"
                  type="tel"
                  placeholder="+447XXX XXX XXX"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-address1">Address Line 1 *</Label>
              <Input
                id="support-address1"
                type="text"
                placeholder="House No., Street Name"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-address2">Address Line 2</Label>
              <Input
                id="support-address2"
                type="text"
                placeholder="Additional Details"
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="support-city">City *</Label>
                <Input
                  id="support-city"
                  type="text"
                  placeholder="Enter City"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-postcode">Postcode *</Label>
                <Input
                  id="support-postcode"
                  type="text"
                  placeholder="AB1 2CD"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs text-muted-foreground">* Required information</span>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Support Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
