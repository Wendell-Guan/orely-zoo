import type { ReactNode } from "react";

export default function StoryCard({
  align,
  title,
  body,
}: {
  align: "left" | "right";
  title: ReactNode;
  body: string;
}) {
  return (
    <section className={`px-5 md:px-14 py-16 md:py-28 flex justify-center ${align === "right" ? "md:justify-end" : "md:justify-start"}`}>
      <article className="paper w-full max-w-md p-7 md:p-10 pt-8 md:pt-11">
        <span className="text-[10px] tracking-[3px] font-bold text-orangeDark">ORELY EXOTICS</span>
        <h2 className="font-display font-bold text-ink text-2xl md:text-[34px] leading-[1.05] mt-2 mb-4">
          {title}
        </h2>
        <p className="text-[13px] leading-[1.7] text-[#5a4a36]">{body}</p>
      </article>
    </section>
  );
}
