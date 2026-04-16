"use client";
import { useI18n } from "@/lib/i18n";

export default function Pricing() {
  const { t } = useI18n();
  return (
    <section className="px-5 md:px-14 pt-20 md:pt-24 pb-16 md:pb-20 text-center relative z-[2]">
      <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide">{t.pricing.title}</h2>
      <p className="mt-2 text-xs md:text-[13px] text-[#5a4a36] px-2">{t.pricing.sub}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.pricing.plans.map((p, idx) => (
          <div
            key={p.name}
            className={`paper tape-top p-6 md:p-7 text-left ${idx === 1 ? "md:-translate-y-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]" : ""}`}
          >
            <div className="text-center border-b-2 border-dashed border-[#d9c89a] pb-4 mb-4">
              <h3 className="font-display text-2xl text-ink">{p.name}</h3>
              <div className="font-display text-3xl text-orange mt-1">
                ${p.price}<span className="text-xs text-neutral-500 font-body font-medium">{t.pricing.perBundle}</span>
              </div>
              <div className="text-[10px] tracking-[3px] text-neutral-500 mt-1">0 &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4</div>
            </div>
            <ul>
              {p.items.map((it) => (
                <li key={it} className="py-2 text-[13px] text-[#4a3a26] border-b border-dashed border-[#eadfb9]">
                  ✓ {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
