"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Flame,
  Beef,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Macro({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center px-2 text-center">
      <Icon className="h-4 w-4 text-gold-dark" />
      <span className="mt-1 font-display text-xl font-bold leading-none text-forest-900">
        {value}
      </span>
      <span className="mt-1 text-[11px] uppercase tracking-wider text-ink/50">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream bg-grain pt-28 pb-24 lg:pt-32 lg:pb-28"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-forest-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      {/* Asymmetric editorial grid: 5 / 7 split */}
      <div className="container grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left */}
        <div className="relative z-10 lg:col-span-5">
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
            className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-md text-lg leading-relaxed text-ink/70"
          >
            Premium recipe e-books for busy people who want to eat healthier,
            lose weight and hit their protein goals, without giving up flavor.
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

        {/* Right — editorial composition */}
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[30rem] lg:ml-auto lg:mr-2"
          >
            {/* offset outlined frame for editorial depth */}
            <div
              aria-hidden
              className="absolute -right-4 -top-5 h-full w-full rounded-[2.75rem] border border-gold/40"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-float ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80"
                alt="Honey garlic salmon bowl, plated"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-transparent to-transparent" />
            </div>

            {/* Customers proof card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-3 top-8 rounded-3xl glass px-5 py-4 shadow-card sm:-right-6"
            >
              <div className="font-display text-2xl font-bold text-gradient-forest">
                5000+
              </div>
              <div className="text-xs font-medium text-ink/60">
                Happy customers
              </div>
            </motion.div>

            {/* Signature: editorial nutrition spec for the plated dish */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="absolute -bottom-8 left-1/2 w-[86%] max-w-sm -translate-x-1/2 rounded-2xl glass px-5 py-4 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-forest-900">
                  Honey Garlic Salmon Bowl
                </span>
                <span className="text-[11px] uppercase tracking-wider text-ink/45">
                  Per serving
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 divide-x divide-forest-700/10">
                <Macro icon={Flame} value="480" label="kcal" />
                <Macro icon={Beef} value="42g" label="protein" />
                <Macro icon={Clock} value="25" label="min" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
