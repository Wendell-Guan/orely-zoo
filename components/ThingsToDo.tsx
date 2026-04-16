const items = [
  { n: "01", t: "GUIDED TOURS", d: "Go on an exciting guided safari tour with our expert zookeepers, who share fascinating stories about our amazing animals." },
  { n: "02", t: "EDUCATIONAL PROGRAMS", d: "We offer educational programs for visitors of all ages, including animal feedings, live demos, and behind-the-scenes tours." },
  { n: "03", t: "FOOD & BEVERAGES", d: "Our zoo restaurants and cafes provide a wide range of delicious meals, snacks, and beverages made with fresh ingredients." },
];

export default function ThingsToDo() {
  return (
    <section className="px-5 md:px-14 pt-24 pb-20 text-center text-white">
      <h2 className="font-display text-4xl tracking-wide">THINGS TO DO</h2>
      <p className="mt-2 text-[13px] text-sand max-w-xl mx-auto">
        Step into a world of adventure and wonder at our zoo! Enjoy a variety of thrilling and educational experiences for visitors of all ages.
      </p>

      <div className="mt-10 max-w-2xl ml-auto flex flex-col gap-5">
        {items.map((i) => (
          <div key={i.n} className="paper tape-top flex gap-5 p-6 text-left text-ink">
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
