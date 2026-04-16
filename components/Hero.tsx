export default function Hero() {
  return (
    <section className="relative z-[5] px-5 pt-10 md:pt-16 text-center">
      <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-none text-shadow-hero">
        EXPLORE THE<br />WILD WITH US!
      </h1>
      <p className="mt-4 text-sand text-sm">
        Let&apos;s help you plan your visit to us here at Orely Zoological Park.
      </p>

      <div className="mt-9 mx-auto max-w-3xl bg-white rounded-full md:rounded-full shadow-2xl flex flex-wrap md:flex-nowrap items-center gap-1.5 p-2.5">
        <Field label="Choose Zoo" value="Orely Zoo" />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <Field label="Visit Date" value="March 8, 2026" />
        <span className="hidden md:block w-px self-stretch bg-neutral-200 my-1.5" />
        <Field label="Ticket" value="Adult 2, Child 1" />
        <button className="ml-auto bg-orange text-white font-display font-bold tracking-wide px-7 py-3.5 rounded-full shadow-[0_4px_0_#c98418] hover:brightness-105 text-sm">
          Buy Ticket
        </button>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 px-4 py-1 text-left min-w-[120px]">
      <div className="text-[10px] tracking-[1px] uppercase text-neutral-500">{label}</div>
      <div className="text-sm font-semibold text-ink mt-0.5">{value} ▾</div>
    </div>
  );
}
