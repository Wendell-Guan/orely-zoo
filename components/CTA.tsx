"use client";
import { useI18n } from "@/lib/i18n";

export default function CTA() {
  const { t } = useI18n();
  return (
    <section className="text-center px-5 md:px-14 pt-16 md:pt-20 pb-10 text-white">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide leading-tight">
        {t.cta.t1}<br />{t.cta.t2}
      </h2>
      <p className="mt-3 max-w-lg mx-auto text-xs md:text-[13px] text-sand px-2">{t.cta.sub}</p>
      <button className="mt-6 bg-orange text-white font-display font-bold tracking-wide px-7 py-3 rounded-full shadow-[0_4px_0_#c98418] hover:brightness-105 text-sm">
        {t.cta.btn}
      </button>
    </section>
  );
}
