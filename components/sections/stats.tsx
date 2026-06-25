"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import { stats } from "@/lib/data";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.floor(latest).toLocaleString("en-US")
        );
      },
    });
    return controls.stop;
  }, [inView, value, count, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-2 bg-cream py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-forest-700/10 shadow-card lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-gradient-to-b from-forest-700 to-forest-900 px-6 py-10 text-center transition-colors lg:py-12"
            >
              <div className="font-display text-4xl font-bold text-cream sm:text-5xl">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gold-light">
                {s.label}
              </div>
              <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-gold/50 transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        {/* Trust strip (relocated out of the hero per single-message hero rule) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[47, 12, 32, 24].map((i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={`https://i.pravatar.cc/80?img=${i}`}
                  alt="Customer"
                  className="h-8 w-8 rounded-full border-2 border-cream object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-ink/60">4.9/5 from 5,000+ reviews</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink/60">
            <ShieldCheck className="h-5 w-5 text-forest-500" />
            30-day money-back guarantee
          </div>
        </motion.div>
      </div>
    </section>
  );
}
