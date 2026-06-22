"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Beef, Clock, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { recipes } from "@/lib/data";

export function Recipes() {
  return (
    <section id="recipes" className="bg-cream-dark py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="A Taste Of Inside"
          title={
            <>
              Recipes that look as good as they{" "}
              <span className="text-gradient-forest">make you feel</span>
            </>
          }
          subtitle="Every recipe is photographed, macro-counted and ready in minutes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-3 top-3 rounded-full bg-forest-700/90 px-3 py-1 text-xs font-semibold text-cream backdrop-blur">
                  {r.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {r.name}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Stat icon={<Flame className="h-4 w-4" />} label="Calories" value={`${r.calories}`} />
                  <Stat icon={<Beef className="h-4 w-4" />} label="Protein" value={`${r.protein}g`} />
                  <Stat icon={<Clock className="h-4 w-4" />} label="Time" value={`${r.time} min`} />
                  <Stat icon={<BarChart3 className="h-4 w-4" />} label="Level" value={r.difficulty} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-cream px-3 py-2">
      <span className="text-forest-500">{icon}</span>
      <div className="leading-tight">
        <div className="font-semibold text-ink">{value}</div>
        <div className="text-[11px] uppercase tracking-wide text-ink/45">
          {label}
        </div>
      </div>
    </div>
  );
}
