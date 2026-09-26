import type { Metadata, Viewport } from "next";
import { Klee_One, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});
// Klee One mimics textbook handwriting, so learners see the true written form of each character.
const klee = Klee_One({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-klee", display: "swap", preload: false });

export const metadata: Metadata = {
  title: { default: "NihonGo — Learn to write Japanese", template: "%s · NihonGo" },
  description: "Learn hiragana, katakana and kanji with native audio and stroke-by-stroke writing practice.",
};

export const viewport: Viewport = {
  themeColor: "#f8f4ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${notoJp.variable} ${klee.variable}`}>
      <body className="min-h-dvh paper-grain">
        <SiteHeader />
        <main className="pb-12">{children}</main>
      </body>
    </html>
  );
}
