"use client";
import { useI18n } from "@/lib/i18n";

export default function ThingsToDo() {
  const { t } = useI18n();
  return (
    <section className="px-5 md:px-14 pt-20 md:pt-24 pb-16 md:pb-20 text-center text-white">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide">{t.how.title}</h2>
      <p className="mt-2 text-xs md:text-[13px] text-sand max-w-xl mx-auto px-2">{t.how.sub}</p>

      <div className="mt-10 max-w-2xl md:ml-auto flex flex-col gap-5">
        {t.how.items.map((i, idx) => (
          <div key={idx} className="paper tape-top flex gap-4 md:gap-5 p-5 md:p-6 text-left text-ink">
            <span className="font-display text-3xl text-orange shrink-0">{String(idx + 1).padStart(2, "0")}</span>
            <div>
              <h4 className="font-display text-base tracking-wide mb-1">{i.t}</h4>
              <p className="text-xs leading-[1.65] text-[#5a4a36]">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
