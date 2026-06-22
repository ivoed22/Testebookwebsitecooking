"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Shop", href: "#ebooks" },
  { label: "Why Us", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Recipes", href: "#recipes" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={cn(
          "container flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled
            ? "glass shadow-soft"
            : "bg-transparent border border-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-700 text-cream shadow-soft">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-forest-900">
            The Food Vybes
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-forest-700/5 hover:text-forest-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#lead-magnet">Free Recipes</a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="#ebooks">Shop E-books</a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full text-forest-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container mt-2 overflow-hidden rounded-3xl glass p-4 shadow-card lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-forest-700/5 hover:text-forest-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <Button variant="outline" asChild onClick={() => setOpen(false)}>
                <a href="#lead-magnet">Get Free Recipes</a>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <a href="#ebooks">Shop E-books</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
