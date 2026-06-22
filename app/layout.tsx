import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Food Vybes — Premium Healthy Recipe E-books",
  description:
    "Discover premium recipe e-books designed for busy people who want to eat healthier, lose weight, increase protein intake and enjoy delicious meals. Healthy recipes. Real results. Good vibes.",
  keywords: [
    "healthy recipes",
    "high protein recipes",
    "weight loss recipes",
    "meal prep",
    "recipe ebook",
    "healthy lifestyle",
  ],
  openGraph: {
    title: "The Food Vybes — Healthy recipes. Real results. Good vibes.",
    description:
      "Premium recipe e-books for healthy, high-protein, weight-loss friendly meals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream text-ink">{children}</body>
    </html>
  );
}
