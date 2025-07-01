"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="py-12 px-4 md:px-8 lg:px-16 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">
          Have questions? We’ve got answers.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is this suitable for multi-outlet businesses?</AccordionTrigger>
          <AccordionContent>
            Absolutely. Our system is designed to handle both single and multi-outlet operations. You can manage multiple branches under one centralized dashboard with separate reporting, inventory, and staff management for each outlet.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I use this software offline?</AccordionTrigger>
          <AccordionContent>
            While our software is cloud-based and optimized for online use, certain functions such as order taking and billing can work offline. Once internet is restored, data automatically syncs with the server.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do you provide training and onboarding?</AccordionTrigger>
          <AccordionContent>
            Yes! We offer detailed onboarding sessions, video tutorials, and one-on-one training to ensure your team is comfortable using the platform. Dedicated support is also available during the onboarding period.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach us via live chat, email, or phone 24/7. Our support team is always ready to help you resolve any issues quickly and efficiently.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Can I customize the system for my restaurant?</AccordionTrigger>
          <AccordionContent>
            Of course! Our system is highly customizable. From menu layout to access roles and outlet-specific configurations — you have full control to tailor it to your business needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
