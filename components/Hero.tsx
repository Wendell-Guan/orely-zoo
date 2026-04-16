export default function Hero() {
  return (
    <section className="relative z-[5] px-5 pt-8 md:pt-16 text-center">
      <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-shadow-hero">
        FIND YOUR<br />EXOTIC COMPANION!
      </h1>
      <p className="mt-4 text-sand text-xs md:text-sm px-2">
        Browse rare and ethically-sourced exotic pets, delivered with full care guidance.
      </p>

      <div className="mt-8 md:mt-9 mx-auto max-w-3xl bg-white rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-1.5 p-3 md:p-2.5">
        <Field label="Category" value="Reptiles" />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <span className="md:hidden h-px self-stretch bg-neutral-200" />
        <Field label="Region" value="Shipping: US" />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <span className="md:hidden h-px self-stretch bg-neutral-200" />
        <Field label="Budget" value="$200 – $1,000" />
        <button className="mt-2 md:mt-0 md:ml-auto bg-orange text-white font-display font-bold tracking-wide px-6 md:px-7 py-3 md:py-3.5 rounded-full shadow-[0_4px_0_#c98418] hover:brightness-105 text-sm">
          Shop Now
        </button>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 px-4 py-1 text-left min-w-0">
      <div className="text-[10px] tracking-[1px] uppercase text-neutral-500">{label}</div>
      <div className="text-sm font-semibold text-ink mt-0.5 truncate">{value} ▾</div>
    </div>
  );
}
