const ITEMS = [
  "Herrenschnitt",
  "Damenschnitt",
  "Kinderschnitt",
  "Haarfarbe",
  "Dauerwelle",
  "Bart & Konturen",
  "Styling",
  "Tönung",
  "Strähnen",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-line py-6 overflow-hidden bg-bg-soft/40">
      <div className="flex gap-12 whitespace-nowrap marquee-track">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-display text-3xl md:text-4xl text-ink-soft shrink-0"
          >
            <span>{item}</span>
            <span className="text-gold">✶</span>
          </div>
        ))}
      </div>
    </section>
  );
}
