const reviews = [
  { name: "Purwanti Dongki", role: "Reptile Keeper",   text: "My crested gecko arrived active, healthy, and beautifully patterned. The care sheet was detailed and the team answered every follow-up question within hours." },
  { name: "Tejo Intan",      role: "Hobby Breeder",    text: "I have bought from many exotic sellers, and Orely's documentation and breeder transparency is best-in-class. Lineage records were a huge plus." },
  { name: "Jack Morwogin",   role: "Parrot Owner",     text: "Our Indian ringneck shipped overnight and was calm on arrival. The habitat consultation before purchase saved us weeks of trial and error." },
  { name: "Bibit Wismore",   role: "First-Time Owner", text: "As a complete beginner I felt supported the whole way. They recommended a starter species that matched my lifestyle, not just the most expensive one." },
];

export default function Reviews() {
  return (
    <section className="px-5 md:px-14 py-16 md:py-20 text-center text-white">
      <h2 className="font-display text-3xl md:text-4xl tracking-wide">TRUSTED BY KEEPERS WORLDWIDE</h2>
      <p className="mt-2 text-xs md:text-[13px] text-sand px-2">
        Real reviews from buyers who brought home a companion through Orely Exotics.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="paper tape-top p-5 md:p-6 text-left text-ink">
            <div className="text-orange tracking-[2px] text-sm">★★★★★</div>
            <p className="text-xs leading-[1.7] my-2.5 text-[#5a4a36]">&ldquo;{r.text}&rdquo;</p>
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
