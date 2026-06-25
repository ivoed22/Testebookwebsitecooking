"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

// Honors prefers-reduced-motion across every Framer Motion component on the
// page: transform/layout animations collapse to instant, opacity is kept.
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
