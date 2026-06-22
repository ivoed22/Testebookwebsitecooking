# The Food Vybes — Premium Recipe E-book Landing Page

> Healthy recipes. Real results. Good vibes.

A production-ready, conversion-focused landing page for a premium digital
recipe brand selling healthy / high-protein / weight-loss recipe e-books.
Designed to feel like a high-end SaaS / luxury wellness product — not a
standard recipe blog.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS** (custom premium design tokens)
- **shadcn/ui** primitives (Button, Accordion)
- **Framer Motion** (scroll, hover & micro-interactions)
- **Lucide Icons**

## Sections

1. **Hero** — split layout, floating glass badges, trust indicators
2. **Social Proof** — animated count-up stats
3. **Featured E-books** — premium draggable horizontal carousel
4. **Why Food Vybes** — animated feature grid
5. **Free Recipe Lead Magnet** — newsletter capture with mockup
6. **Customer Transformations** — testimonial carousel
7. **Recipe Preview** — macro-rich recipe cards
8. **Community** — Instagram-style masonry
9. **FAQ** — animated accordion
10. **Final CTA** — full-bleed conversion section + footer

## Design System

| Role      | Colors                |
| --------- | --------------------- |
| Primary   | `#0F5132` `#1E6B4D`   |
| Secondary | `#F7F3EC` `#EDE7DD`   |
| Accent    | `#D4AF37` (gold)      |
| Text      | `#111111`             |

Typography pairs **Fraunces** (display serif) with **Inter** (UI sans).

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Images are premium photography placeholders served from Unsplash
(configured in `next.config.mjs`). Swap them for your own assets in
`lib/data.ts` and the section components.
