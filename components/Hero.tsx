"use client";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  const [category, setCategory] = useState(t.hero.categoryOptions[0]);
  const [region, setRegion] = useState(t.hero.regionOptions[0]);
  const [budget, setBudget] = useState(t.hero.budgetOptions[3]);
  const [toast, setToast] = useState<string | null>(null);

  // reset to first option when language changes
  useEffect(() => {
    setCategory(t.hero.categoryOptions[0]);
    setRegion(t.hero.regionOptions[0]);
    setBudget(t.hero.budgetOptions[3]);
  }, [t]);

  const handleSearch = () => {
    const n = 3 + Math.floor(Math.random() * 20);
    setToast(`${t.hero.searching}: ${category} · ${region} · ${budget} — ${n} ${t.hero.resultsFor}`);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <section className="relative z-[5] px-5 pt-8 md:pt-16 text-center">
      <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-shadow-hero">
        {t.hero.title1}<br />{t.hero.title2}
      </h1>
      <p className="mt-4 text-sand text-xs md:text-sm px-2">{t.hero.sub}</p>

      <div className="mt-8 md:mt-9 mx-auto max-w-3xl bg-white rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-1.5 p-3 md:p-2.5">
        <SelectField label={t.hero.category} value={category} options={t.hero.categoryOptions} onChange={setCategory} />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <span className="md:hidden h-px self-stretch bg-neutral-200" />
        <SelectField label={t.hero.region} value={region} options={t.hero.regionOptions} onChange={setRegion} />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <span className="md:hidden h-px self-stretch bg-neutral-200" />
        <SelectField label={t.hero.budget} value={budget} options={t.hero.budgetOptions} onChange={setBudget} />
        <button
          onClick={handleSearch}
          className="mt-2 md:mt-0 md:ml-auto bg-orange text-white font-display font-bold tracking-wide px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-[0_4px_0_#c98418] hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#c98418] transition text-sm"
        >
          {t.hero.cta}
        </button>
      </div>

      {toast && (
        <div className="mt-4 inline-block bg-ink/90 text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
}

function SelectField({
  label, value, options, onChange,
}: {
  label: string; value: string; options: readonly string[]; onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-4 py-1 text-left rounded-2xl hover:bg-neutral-50 transition"
      >
        <div className="text-[10px] tracking-[1px] uppercase text-neutral-500">{label}</div>
        <div className="text-sm font-semibold text-ink mt-0.5 truncate flex items-center justify-between gap-2">
          <span className="truncate">{value}</span>
          <span className={`text-orange transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
        </div>
      </button>
      {open && (
        <ul className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-neutral-100 z-50 overflow-hidden">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-orange/10 ${opt === value ? "text-orange font-semibold" : "text-ink"}`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
