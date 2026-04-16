const plans = [
  {
    name: "REGULAR", price: 20, featured: false,
    items: ["Night Safari", "Elephant Bus Fun", "Lunch And Transfers", "Food & Retail Discount", "Free Zoo Parking"],
  },
  {
    name: "COMBO", price: 30, featured: true,
    items: ["Breakfast With Orang Utan", "Flamingo Beach Club", "Lunch And Transfers", "Food & Retail Discount", "Free Zoo Parking", "See 4-D Theater"],
  },
  {
    name: "STAY", price: 50, featured: false,
    items: ["Breakfast With Family", "1 Bedroom For Family", "Lunch And Transfers", "Food & Retail Discount", "Free Zoo Parking", "See 4-D Theater"],
  },
];

export default function Pricing() {
  return (
    <section className="px-5 md:px-14 pt-24 pb-20 text-center relative z-[2]">
      <h2 className="font-display text-4xl text-ink tracking-wide">ATTRACTIVE &amp; VARIED</h2>
      <p className="mt-2 text-[13px] text-[#5a4a36]">
        Make your zoo visit more memorable by booking an attractive experience with us.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`paper tape-top p-7 text-left ${p.featured ? "md:-translate-y-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]" : ""}`}
          >
            <div className="text-center border-b-2 border-dashed border-[#d9c89a] pb-4 mb-4">
              <h3 className="font-display text-2xl text-ink">{p.name}</h3>
              <div className="font-display text-3xl text-orange mt-1">
                ${p.price}<span className="text-xs text-neutral-500 font-body font-medium">/PAX</span>
              </div>
              <div className="text-[10px] tracking-[3px] text-neutral-500 mt-1">0 &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4</div>
            </div>
            <ul>
              {p.items.map((it) => (
                <li key={it} className="py-2 text-[13px] text-[#4a3a26] border-b border-dashed border-[#eadfb9]">
                  ✓ {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
