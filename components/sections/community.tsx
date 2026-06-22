"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { community } from "@/lib/data";

export function Community() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="The Community"
          title={
            <>
              Join the{" "}
              <span className="text-gradient-forest">#FoodVybes</span> movement
            </>
          }
          subtitle="Real meals from a community of 50,000+ healthy eaters. Tag us to be featured."
        />

        <div className="mt-12 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {community.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={src}
                alt={`Community meal ${i + 1}`}
                width={600}
                height={i % 3 === 0 ? 800 : 600}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex items-center gap-2 p-4 text-cream">
                  <Heart className="h-5 w-5 fill-gold text-gold" />
                  <span className="text-sm font-semibold">
                    {(1.2 + i * 0.3).toFixed(1)}k
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="default" size="lg">
            <Instagram className="h-5 w-5" />
            Follow @thefoodvybes
          </Button>
        </div>
      </div>
    </section>
  );
}
