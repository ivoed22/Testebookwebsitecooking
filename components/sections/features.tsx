"use client";

import { motion } from "framer-motion";
import {
  Apple,
  ChefHat,
  Timer,
  TrendingDown,
  Dumbbell,
  ShoppingBasket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { features } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Apple,
  ChefHat,
  Timer,
  TrendingDown,
  Dumbbell,
  ShoppingBasket,
};

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-cream-dark py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Why The Food Vybes"
          title={
            <>
              Everything you need to{" "}
              <span className="text-forest-700">eat well, effortlessly</span>
            </>
          }
          subtitle="We obsess over the details so healthy eating finally fits into your real life."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-7 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-forest-700/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-forest-700 to-forest-500 p-3.5 text-cream shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
