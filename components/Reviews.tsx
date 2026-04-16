"use client";
import { useI18n } from "@/lib/i18n";

export default function Reviews() {
  const { t } = useI18n();
  return (
    <section className="px-5 md:px-14 py-16 md:py-20 text-center text-white">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide">{t.reviews.title}</h2>
      <p className="mt-2 text-xs md:text-[13px] text-sand px-2">{t.reviews.sub}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {t.reviews.list.map((r) => (
          <div key={r.name} className="paper tape-top p-5 md:p-6 text-left text-ink">
            <div className="text-orange tracking-[2px] text-sm">★★★★★</div>
            <p className="text-xs leading-[1.7] my-2.5 text-[#5a4a36]">&ldquo;{r.text}&rdquo;</p>
            <div className="flex items-center gap-2.5 mt-3">
              <div className="w-9 h-9 rounded-full bg-orange" />
              <div>
                <b className="block text-[13px]">{r.name}</b>
                <small className="text-neutral-500 text-[11px]">{r.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
