"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const TAG_STYLES: Record<string, string> = {
  hot:      "bg-red-500 text-white",
  new:      "bg-emerald-500 text-white",
  rare:     "bg-purple-500 text-white",
  flagship: "bg-orange text-white",
};

// deterministic emoji per species keyword so no images needed
function emojiFor(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("frog") || n.includes("蛙")) return "🐸";
  if (n.includes("gecko") || n.includes("守宫")) return "🦎";
  if (n.includes("python") || n.includes("snake") || n.includes("蟒")) return "🐍";
  if (n.includes("skink") || n.includes("石龙子")) return "🦎";
  if (n.includes("axolotl") || n.includes("六角龙")) return "🐠";
  if (n.includes("ringneck") || n.includes("鹦鹉")) return "🦜";
  if (n.includes("scorpion") || n.includes("蝎")) return "🦂";
  if (n.includes("tree python") || n.includes("树蟒")) return "🐍";
  if (n.includes("glider") || n.includes("蜜袋")) return "🐿️";
  if (n.includes("hedgehog") || n.includes("刺猬")) return "🦔";
  if (n.includes("dart") || n.includes("箭毒")) return "🐸";
  return "🐾";
}

export default function Catalog() {
  const { t } = useI18n();
  const [reserved, setReserved] = useState<Set<number>>(new Set());

  const toggle = (i: number, stock: string) => {
    if (stock === "sold") return;
    setReserved((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  };

  return (
    <section className="px-5 md:px-14 pt-20 md:pt-24 pb-16 md:pb-20 text-center">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide text-white">{t.catalog.title}</h2>
      <p className="mt-2 text-xs md:text-[13px] text-sand max-w-2xl mx-auto px-2">{t.catalog.sub}</p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {t.catalog.items.map((it, i) => {
          const isReserved = reserved.has(i);
          const sold = it.stock === "sold";
          return (
            <article
              key={i}
              className="relative bg-white/95 rounded-2xl shadow-lg overflow-hidden text-left flex flex-col hover:-translate-y-1 transition-transform"
            >
              {it.tag && (
                <span className={`absolute top-2.5 left-2.5 z-10 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full ${TAG_STYLES[it.tag]}`}>
                  {t.catalog.tags[it.tag as keyof typeof t.catalog.tags]}
                </span>
              )}
              <div className="aspect-square bg-gradient-to-br from-paper to-paperDark grid place-items-center text-6xl md:text-7xl">
                {emojiFor(it.name)}
              </div>
              <div className="p-3 md:p-4 flex flex-col gap-1 flex-1">
                <h3 className="font-display text-sm md:text-base text-ink leading-tight line-clamp-2">{it.name}</h3>
                <p className="text-[10px] md:text-[11px] text-neutral-500 italic">{it.species}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="font-display text-base md:text-lg text-orange">
                    ${it.price.toLocaleString()}
                  </span>
                  <span className={`text-[10px] font-semibold ${sold ? "text-neutral-400" : it.stock === "low" ? "text-red-500" : "text-emerald-600"}`}>
                    {sold ? t.catalog.sold : it.stock === "low" ? t.catalog.lowStock : t.catalog.inStock}
                  </span>
                </div>
                <button
                  disabled={sold}
                  onClick={() => toggle(i, it.stock)}
                  className={`mt-2 w-full py-2 rounded-full text-xs font-bold tracking-wide transition ${
                    sold
                      ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                      : isReserved
                      ? "bg-emerald-500 text-white"
                      : "bg-orange text-white hover:brightness-105 active:translate-y-[1px]"
                  }`}
                >
                  {sold ? t.catalog.sold : isReserved ? "✓" : t.catalog.reserve}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
