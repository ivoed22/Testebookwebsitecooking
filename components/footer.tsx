"use client";

import { useState } from "react";
import { Leaf, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { footerLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-forest-500/20 blur-3xl" />
      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* brand + newsletter */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">
                The Food Vybes
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              Premium recipe e-books for a healthier, high-protein,
              weight-loss-friendly lifestyle. Healthy recipes. Real results. Good
              vibes.
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-cream">
                Join our newsletter
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setDone(true);
                }}
                className="mt-3 flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="h-11 w-full rounded-full border border-white/15 bg-white/10 px-4 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button type="submit" variant="gold" size="icon" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              {done && (
                <p className="mt-2 text-xs text-gold-light">
                  Thanks for subscribing! 🎉
                </p>
              )}
            </div>
          </div>

          {/* link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-light">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/65 transition-colors hover:text-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream/55">
            © {new Date().getFullYear()} The Food Vybes. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-cream transition-all duration-300 hover:bg-gold hover:text-ink hover:-translate-y-0.5"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
