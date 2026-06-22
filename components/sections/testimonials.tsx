"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const paginate = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-forest-900 py-20 text-cream lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-forest-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative">
        <SectionHeading
          dark
          eyebrow="Real Transformations"
          title={
            <>
              Results worth <span className="text-gradient-gold">talking about</span>
            </>
          }
          subtitle="Thousands of people have transformed how they eat, look and feel."
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] glass-dark p-8 shadow-card sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/20" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex flex-col items-center text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-24 w-24 rounded-full border-4 border-gold/40 object-cover shadow-glow"
                  />
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-ink">
                    <TrendingUp className="h-4 w-4" />
                    {t.metric}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-xl font-medium leading-relaxed text-cream sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5">
                    <p className="font-semibold text-cream">{t.name}</p>
                    <p className="text-sm text-gold-light">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="border-white/20 bg-white/10 text-cream hover:bg-white/20 hover:text-cream"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="border-white/20 bg-white/10 text-cream hover:bg-white/20 hover:text-cream"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
