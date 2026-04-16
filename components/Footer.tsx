import { Logo, Socials } from "./Navbar";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.3fr] gap-8 px-5 md:px-14 pt-12 md:pt-16 pb-5 text-white">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="text-xs text-sand mt-4 leading-[1.7] max-w-[260px]">
            Rare and exotic pets, ethically sourced and supported for life — that is our mission.
          </p>
          <div className="mt-4"><Socials /></div>
        </div>
        <Col title="Shop" links={["New Arrivals", "Reptiles", "Parrots", "Small Mammals"]} />
        <Col title="Company" links={["About Us", "Breeders", "Ethics Policy"]} />
        <div>
          <h5 className="font-display text-sm tracking-wider mb-3 text-orange">Contact</h5>
          <a className="block text-xs text-sand mb-2">135 Pento Ulm, 9A 20 KAL, Sulawesi 90245 ID</a>
          <a className="block text-xs text-sand mb-2">hello@orelyexotics.com</a>
          <button className="mt-2 bg-orange text-white font-display font-bold px-5 py-2 rounded-full text-xs shadow-[0_3px_0_#c98418]">
            Contact Us
          </button>
        </div>
      </footer>
      <div className="text-center text-[11px] text-[#8fb29a] py-5">© 2026 Orely Exotics. All rights reserved.</div>
    </>
  );
}

function Col({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="font-display text-sm tracking-wider mb-3 text-orange">{title}</h5>
      {links.map((l) => (
        <a key={l} className="block text-xs text-sand mb-2 cursor-pointer hover:text-white">{l}</a>
      ))}
    </div>
  );
}
