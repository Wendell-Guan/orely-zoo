const reviews = [
  { name: "Purwanti Dongki", role: "Zookeeper",     text: "One of the best experiences our family has had. The staff were kind and the animals looked healthy and happy. We cannot wait to come back soon!" },
  { name: "Tejo Intan",      role: "Blogger",       text: "The kids were thrilled, and the food was delicious. The zoo is well laid-out, and every staff member we met was wonderfully friendly." },
  { name: "Jack Morwogin",   role: "Vlogger",       text: "Incredibly organized and clean, with plenty of fun learning opportunities. My family and I had a very enjoyable visit from start to finish." },
  { name: "Bibit Wismore",   role: "Content Creator", text: "Amazing experience all around. They made a trip to the zoo enjoyable for guests of all ages. Highly recommended for a weekend out!" },
];

export default function Reviews() {
  return (
    <section className="px-5 md:px-14 py-20 text-center text-white">
      <h2 className="font-display text-4xl tracking-wide">PEOPLE ARE LOVING US!</h2>
      <p className="mt-2 text-[13px] text-sand">
        We keep striving to provide top quality services and hearing from satisfied customers.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="paper tape-top p-6 text-left text-ink">
            <div className="text-orange tracking-[2px] text-sm">★★★★★</div>
            <p className="text-xs leading-[1.7] my-2.5 text-[#5a4a36]">“{r.text}”</p>
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
