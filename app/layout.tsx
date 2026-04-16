import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Orely Exotics — Rare & Exotic Pets",
  description: "Discover rare and exotic pets from ethical breeders at Orely Exotics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="font-body"><I18nProvider>{children}</I18nProvider></body>
    </html>
  );
}
