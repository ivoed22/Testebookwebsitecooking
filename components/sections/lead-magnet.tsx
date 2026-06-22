"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Gift, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  "10 chef-tested healthy recipes",
  "Full macros & calorie breakdown",
  "Printable shopping list included",
];

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="lead-magnet" className="bg-cream py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-900 via-forest-700 to-forest-500 shadow-card"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            {/* copy + form */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
                <Gift className="h-4 w-4" /> Free download
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                Get 10 Free <span className="text-gradient-gold">Healthy Recipes</span>
              </h2>
              <p className="mt-4 max-w-md text-lg text-cream/75">
                Join 5,000+ members and get a taste of premium. Delicious,
                high-protein recipes delivered straight to your inbox.
              </p>

              <ul className="mt-6 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-cream/90">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink">
                      <Check className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex items-center gap-3 rounded-2xl bg-white/15 p-5 text-cream backdrop-blur"
                >
                  <Sparkles className="h-6 w-6 text-gold-light" />
                  <div>
                    <p className="font-semibold">You&apos;re in! Check your inbox.</p>
                    <p className="text-sm text-cream/70">
                      Your free recipes are on the way.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-forest-700/50" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="h-14 w-full rounded-full border border-white/20 bg-white pl-12 pr-5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg">
                    Send My Recipes
                  </Button>
                </form>
              )}
              <p className="mt-3 text-xs text-cream/50">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>

            {/* visual mockup */}
            <div className="relative z-10 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, rotate: -6, y: 20 }}
                whileInView={{ opacity: 1, rotate: -4, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto aspect-[3/4] w-72 overflow-hidden rounded-[2rem] shadow-float ring-1 ring-white/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80"
                  alt="Free recipe e-book preview"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-700">
                    Free Starter Pack
                  </p>
                  <p className="font-display text-lg font-bold text-forest-900">
                    10 Healthy Recipes
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-2 top-6 rounded-2xl bg-white px-4 py-3 shadow-card"
              >
                <p className="font-display text-xl font-bold text-forest-700">€0</p>
                <p className="text-xs text-ink/50">Worth €19</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
