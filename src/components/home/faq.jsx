"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-12 px-4 md:px-8 lg:px-16 bg-background text-foreground"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Have questions? We’ve got answers.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto space-y-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do I need a Wi-Fi connection to run the system?
          </AccordionTrigger>
          <AccordionContent className={"text-muted-foreground"}>
            Our EPOS is cloud-based. Meaning a Wi-Fi connection is all you need
            to ensure smoother operation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What if my EPOS malfunctions?</AccordionTrigger>
          <AccordionContent className={"text-muted-foreground"}>
            You have full confidence with a minimum 12-month warranty on our
            hardware. What’s more, our team are always on the helpline for any
            hardware or software concerns.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How do I set up my EPOS?</AccordionTrigger>
          <AccordionContent className={"text-muted-foreground"}>
            Leave the set-up to us. We’ll also make sure you know exactly how to
            navigate your new system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            How long is the wait until the first transaction?{" "}
          </AccordionTrigger>
          <AccordionContent className={"text-muted-foreground"}>
            No wait at all. We set up your system and you run your shop with all
            the incredible features we offer.
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="item-5">
          <AccordionTrigger>
            How long is the wait until the first transaction?{" "}
          </AccordionTrigger>
          <AccordionContent className={"text-muted-foreground"}>
            No wait at all. We set up your system and you run your shop with all
            the incredible features we offer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </section>
  );
}
