"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="bg-cream-dark py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Questions?{" "}
                  <span className="text-gradient-forest">Answered.</span>
                </>
              }
              subtitle="Everything you need to know before you start. Still curious? We're a message away."
            />
            <div className="mt-8 hidden rounded-3xl bg-forest-900 p-7 text-cream shadow-card lg:block">
              <MessageCircleQuestion className="h-8 w-8 text-gold" />
              <p className="mt-4 font-display text-xl font-semibold">
                Still have a question?
              </p>
              <p className="mt-2 text-sm text-cream/70">
                Our team replies within 24 hours, every day of the week.
              </p>
              <Button variant="gold" className="mt-5">
                Contact Support
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
