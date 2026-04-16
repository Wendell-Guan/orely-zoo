"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const links = [t.nav.home, t.nav.about, t.nav.shop, t.nav.species, t.nav.contact];
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 px-5 md:px-14 py-5 md:py-6">
      <div className="flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-7">
          {links.map((l, i) => (
            <a key={l} href="#" className={`text-sm font-medium ${i === 0 ? "text-orange" : "text-white/85 hover:text-white"}`}>
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <Socials />
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 grid place-items-center rounded-full bg-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-4 h-[2px] bg-white relative before:content-[''] before:absolute before:left-0 before:-top-[6px] before:w-4 before:h-[2px] before:bg-white after:content-[''] after:absolute after:left-0 after:top-[6px] after:w-4 after:h-[2px] after:bg-white" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-3 bg-black/40 backdrop-blur rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l, i) => (
            <a key={l} href="#" className={`text-sm ${i === 0 ? "text-orange" : "text-white/90"}`}>
              {l}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <Socials />
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: "en" | "zh"; setLang: (l: "en" | "zh") => void }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-semibold hover:bg-white/10"
      aria-label="Switch language"
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}

export function Logo() {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid place-items-center w-10 h-10 rounded-full bg-orange border-[3px] border-white text-white font-display font-bold text-xl">
        O
      </div>
      <div>
        <div className="text-white font-display font-bold tracking-widest text-sm">{t.brand}</div>
        <div className="text-sand text-[10px] tracking-[2px]">{t.tagline}</div>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="w-3.5 h-3.5 rounded-full bg-white/70 border-2 border-orange" />
      ))}
    </div>
  );
}
