"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { label: "High Protein", className: "top-6 -left-4 sm:left-2", delay: 0.2 },
  {
    label: "30 Min Meals",
    className: "top-1/3 -right-3 sm:-right-6",
    delay: 0.4,
  },
  {
    label: "Weight Loss Friendly",
    className: "bottom-24 -left-5 sm:-left-8",
    delay: 0.6,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream bg-grain pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-forest-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-700/15 bg-white/60 px-4 py-2 text-sm font-medium text-forest-700 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Loved by 5,000+ healthy eaters
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Healthy recipes.
            <br />
            <span className="text-gradient-forest">Real results.</span>
            <br />
            Good vibes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-ink/70"
          >
            Discover premium recipe e-books designed for busy people who want to
            eat healthier, lose weight, increase protein intake and enjoy
            delicious meals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" variant="default" asChild>
              <a href="#ebooks">
                Shop E-books <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#lead-magnet">Get Free Recipes</a>
            </Button>
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-float ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80"
                alt="Premium healthy meal bowl"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            {badges.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: b.delay + 0.5 }}
                className={`absolute ${b.className} animate-float`}
                style={{ animationDelay: `${b.delay}s` }}
              >
                <div className="flex items-center gap-2 rounded-2xl glass px-4 py-2.5 shadow-card">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-forest-700 text-cream">
                    <Zap className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-forest-900">
                    {b.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Customers count card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-6 right-2 rounded-3xl glass px-5 py-4 shadow-card sm:right-6"
            >
              <div className="font-display text-2xl font-bold text-gradient-forest">
                5000+
              </div>
              <div className="text-xs font-medium text-ink/60">
                Happy Customers
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
