"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-forest-900 px-6 py-20 text-center shadow-card sm:px-12 lg:py-28"
        >
          {/* background image */}
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-900/90 to-forest-700/80" />
          <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
              <Sparkles className="h-4 w-4" /> Start today
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl">
              Your healthiest lifestyle starts with your{" "}
              <span className="text-gradient-gold">next meal.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/75">
              Join 10,000+ people eating better, feeling stronger and loving
              every bite. Your future self will thank you.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="gold" asChild>
                <a href="#ebooks">
                  Shop E-books <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-cream hover:bg-white hover:text-forest-700"
                asChild
              >
                <a href="#lead-magnet">Get Free Recipes</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-cream/60">
              <ShieldCheck className="h-5 w-5 text-gold-light" />
              30-day money-back guarantee · Instant download
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
