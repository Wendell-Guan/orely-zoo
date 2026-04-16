const items = [
  { n: "01", t: "BROWSE & RESERVE", d: "Explore our live catalog of rare reptiles, parrots, and small mammals. Reserve your pet with a deposit and we'll hold it until your habitat is ready." },
  { n: "02", t: "HABITAT CONSULTATION", d: "Our specialists help you set up the perfect enclosure — lighting, heating, diet, and enrichment tailored to each species." },
  { n: "03", t: "SAFE DELIVERY", d: "Overnight climate-controlled shipping with live-arrival guarantee, or pick up in-store and meet your new companion in person." },
];

export default function ThingsToDo() {
  return (
    <section className="px-5 md:px-14 pt-20 md:pt-24 pb-16 md:pb-20 text-center text-white">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide">HOW IT WORKS</h2>
      <p className="mt-2 text-xs md:text-[13px] text-sand max-w-xl mx-auto px-2">
        From first click to happy pet — a transparent process designed for first-time owners and seasoned collectors alike.
      </p>

      <div className="mt-10 max-w-2xl md:ml-auto flex flex-col gap-5">
        {items.map((i) => (
          <div key={i.n} className="paper tape-top flex gap-4 md:gap-5 p-5 md:p-6 text-left text-ink">
            <span className="font-display text-3xl text-orange shrink-0">{i.n}</span>
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
