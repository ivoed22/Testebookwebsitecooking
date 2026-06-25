"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Apple,
  ChefHat,
  Timer,
  TrendingDown,
  Dumbbell,
  ShoppingBasket,
  Check,
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

// Feature lookup by title so the bento cells stay readable.
const byTitle = (t: string) => features.find((f) => f.title === t)!;

const cellMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

function PlainCell({ title, delay = 0 }: { title: string; delay?: number }) {
  const f = byTitle(title);
  const Icon = icons[f.icon];
  return (
    <motion.div
      {...cellMotion}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
    >
      <div className="inline-flex w-fit rounded-2xl bg-forest-700/10 p-3 text-forest-700 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {f.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{f.desc}</p>
    </motion.div>
  );
}

export function Features() {
  const protein = byTitle("High Protein Meals");
  const nutrition = byTitle("Nutrition Focused");
  const shopping = byTitle("Shopping Lists Included");

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

        {/* Bento: 1 large image cell + 1 brand cell + plain cells + 1 wide gold cell */}
        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
          {/* A — tall image hero cell */}
          <motion.article
            {...cellMotion}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl shadow-card md:row-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="High protein meal plated for results"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />
            <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6">
              <div className="inline-flex w-fit rounded-2xl bg-gold p-3 text-ink">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                {protein.title}
              </h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-cream/80">
                {protein.desc}
              </p>
            </div>
          </motion.article>

          {/* B — brand gradient cell */}
          <motion.article
            {...cellMotion}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-700 to-forest-900 p-6 text-cream shadow-card"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/20 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="inline-flex rounded-2xl bg-white/15 p-3 transition-transform duration-500 group-hover:scale-110">
                <Apple className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {nutrition.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/75">
                {nutrition.desc}
              </p>
            </div>
          </motion.article>

          {/* C, D, E — plain cells */}
          <PlainCell title="Fast Preparation" delay={0.1} />
          <PlainCell title="Weight Loss Support" delay={0.15} />
          <PlainCell title="Easy Recipes" delay={0.2} />

          {/* F — wide gold cell with checklist visual */}
          <motion.article
            {...cellMotion}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between gap-5 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 to-cream p-6 shadow-soft sm:flex-row sm:items-center md:col-span-3"
          >
            <div className="max-w-md">
              <div className="inline-flex rounded-2xl bg-gold p-3 text-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <ShoppingBasket className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {shopping.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {shopping.desc}
              </p>
            </div>
            <ul className="grid w-full max-w-xs shrink-0 gap-2">
              {["Chicken & greens", "Greek yogurt", "Sweet potato", "Olive oil"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-2.5 text-sm font-medium text-ink shadow-sm"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-forest-700 text-cream">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
