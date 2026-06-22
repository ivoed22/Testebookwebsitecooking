import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
              dark
                ? "border-white/20 bg-white/10 text-gold-light"
                : "border-forest-700/15 bg-white/60 text-forest-700"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
            dark ? "text-cream" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              dark ? "text-cream/70" : "text-ink/65"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
