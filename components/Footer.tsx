"use client";
import { Logo, Socials } from "./Navbar";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <>
      <footer className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.3fr] gap-8 px-5 md:px-14 pt-12 md:pt-16 pb-5 text-white">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="text-xs text-sand mt-4 leading-[1.7] max-w-[260px]">{t.footer.about}</p>
          <div className="mt-4"><Socials /></div>
        </div>
        <Col title={t.footer.shop} links={t.footer.shopLinks} />
        <Col title={t.footer.company} links={t.footer.companyLinks} />
        <div>
          <h5 className="font-display text-sm tracking-wider mb-3 text-orange">{t.footer.contact}</h5>
          <a className="block text-xs text-sand mb-2">{t.footer.address}</a>
          <a className="block text-xs text-sand mb-2">{t.footer.email}</a>
          <button className="mt-2 bg-orange text-white font-display font-bold px-5 py-2 rounded-full text-xs shadow-[0_3px_0_#c98418]">
            {t.footer.contactBtn}
          </button>
        </div>
      </footer>
      <div className="text-center text-[11px] text-[#8fb29a] py-5">{t.footer.copy}</div>
    </>
  );
}

function Col({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h5 className="font-display text-sm tracking-wider mb-3 text-orange">{title}</h5>
      {links.map((l) => (
        <a key={l} className="block text-xs text-sand mb-2 cursor-pointer hover:text-white">{l}</a>
      ))}
    </div>
  );
}
