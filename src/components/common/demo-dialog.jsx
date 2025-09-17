"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function DemoDialog({ getQuote, open, onOpenChange }) {
  return (
    <Dialog className="" open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!w-[800px] !max-w-5xl p-8">
        {/* <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-base">
            Tell us about your business and book your demo.
          </DialogDescription>
        </DialogHeader> */}

        <div className="space-y-5">
          {/* Size */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              What type of business are you running?
            </Label>
            <DialogTitle></DialogTitle>
            <Label className="text-sm font-medium mt-8">Size</Label>
            <RadioGroup defaultValue="small" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chain" id="chain" />
                <Label htmlFor="chain">Chain</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Service */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Service</Label>
            <RadioGroup defaultValue="restaurant" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="restaurant" id="restaurant" />
                <Label htmlFor="restaurant">Restaurant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="takeaway" id="takeaway" />
                <Label htmlFor="takeaway">Takeaway</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">Both</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Form */}
          <div className="space-y-6 mt-9">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+880-123-456789"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-1"
              >
                Company / Trading Name *
              </label>
              <Input
                id="company"
                placeholder="Your company or trading name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="preferredDays"
                className="block text-sm font-medium mb-1"
              >
                Any Special Notes
              </label>
              <Textarea
                id="preferredDays"
                placeholder="e.g., I have two outlets... "
                className="w-full h-24"
              />
            </div>

            <div>
              <label
                htmlFor="datetime"
                className="block text-sm font-medium mb-1"
              >
                {getQuote ? "Best time to call" : "Date and Time"}
              </label>
              <Input
                name={"datetime"}
                id="datetime"
                type="datetime-local"
                className="bg-white"
              />
            </div>
          </div>
          <Button className="w-full text-base py-6">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
