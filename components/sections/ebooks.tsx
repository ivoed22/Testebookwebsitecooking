"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ebooks } from "@/lib/data";

export function Ebooks() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 360);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="ebooks" className="relative bg-cream py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="The Collection"
            title={
              <>
                Premium e-books, <span className="text-forest-700">crafted to convert</span> goals into results
              </>
            }
            subtitle="Beautifully designed, dietitian-informed recipe collections you'll actually use every week."
            className="max-w-xl"
          />
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollBy(1)}
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 mask-fade-x"
        >
          {ebooks.map((book, i) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-forest-700/10 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${book.accent} opacity-20 mix-blend-multiply`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                  {book.bestseller && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink shadow-glow">
                      <Crown className="h-3.5 w-3.5" />
                      Bestseller
                    </div>
                  )}

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full glass px-2.5 py-1 text-xs font-bold text-forest-900">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                    {book.rating}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button variant="light" size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/55">{book.subtitle}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-forest-700">
                        €{book.price}
                      </span>
                      <span className="text-sm text-ink/40 line-through">
                        €{book.oldPrice}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-ink/50">
                      {book.reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 flex justify-center sm:hidden">
          <p className="text-sm text-ink/50">← Swipe to explore →</p>
        </div>
      </div>
    </section>
  );
}
