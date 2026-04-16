"use client";
import { useI18n } from "@/lib/i18n";

export default function Stories() {
  const { t } = useI18n();
  const aligns: Array<"left" | "right"> = ["right", "left", "right"];
  return (
    <>
      {t.stories.map((s, i) => {
        const align = aligns[i];
        return (
          <section key={i} className={`px-5 md:px-14 py-16 md:py-28 flex justify-center ${align === "right" ? "md:justify-end" : "md:justify-start"}`}>
            <article className="paper w-full max-w-md p-7 md:p-10 pt-8 md:pt-11">
              <span className="text-[10px] tracking-[3px] font-bold text-orangeDark">{s.kicker}</span>
              <h2 className="font-display font-bold text-ink text-2xl md:text-[34px] leading-[1.05] mt-2 mb-4">
                {s.t1}<br />{s.t2}
              </h2>
              <p className="text-[13px] leading-[1.7] text-[#5a4a36]">{s.body}</p>
            </article>
          </section>
        );
      })}
    </>
  );
}
