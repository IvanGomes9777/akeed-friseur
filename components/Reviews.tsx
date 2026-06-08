import { Quote, Star } from "lucide-react";

const REVIEWS = [
  { name: "Markus", initial: "M", when: "vor 5 Monaten", stars: 5, text: "Super Friseur, schnelle Bedienung, freundliches Personal, gute Beratung." },
  { name: "Luis", initial: "L", when: "vor 6 Monaten", stars: 5, text: "Sehr nettes Personal. Außerdem ein sehr schöner Laden und sehr gute Haarschnitte." },
  { name: "Ibrahim Belnd", initial: "IB", when: "vor 4 Monaten", stars: 5, text: "Sehr sauberer Laden und gutes Personal. Ich empfehle sie." },
  { name: "Sabine K.", initial: "SK", when: "vor 2 Monaten", stars: 5, text: "Ich gehe seit Jahren hin — der beste Schnitt in ganz Roxel. Akeed nimmt sich Zeit und hört wirklich zu." },
  { name: "Tobias", initial: "T", when: "vor 3 Wochen", stars: 5, text: "Toller Service, fairer Preis, schickes Ambiente. Klare Empfehlung für Herrenschnitte mit Bart." },
  { name: "Mehmet Ö.", initial: "MÖ", when: "vor 1 Monat", stars: 5, text: "Sehr professionell und freundlich. Mein Sohn wollte zuerst nicht zum Friseur — jetzt freut er sich jedes Mal." },
  { name: "Julia W.", initial: "JW", when: "vor 7 Monaten", stars: 4, text: "Sehr gute Färbung, das Ergebnis hat genau zu meinem Wunsch gepasst. Termin war pünktlich." },
  { name: "Ahmed", initial: "A", when: "vor 2 Wochen", stars: 5, text: "Bester Friseur in Münster! Übergänge sind immer sauber, Atmosphäre entspannt." },
  { name: "Lisa M.", initial: "LM", when: "vor 4 Wochen", stars: 5, text: "Habe mich nach einer Dauerwelle hier rundum wohlgefühlt. Sehr ehrliche Beratung vorab." },
  { name: "Daniel R.", initial: "DR", when: "vor 6 Wochen", stars: 5, text: "Komme aus Münster-Mitte hier her — der Weg lohnt sich. Top Beratung, kein Verkaufsdruck." },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
              <span className="h-px w-10 bg-gold-dim" />
              Stimmen unserer Gäste
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
              Was unsere Kunden sagen.
            </h2>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">Google</div>
              <div className="font-display text-3xl text-gold mt-1">
                4.7<span className="text-ink-dim text-xl">/5</span>
              </div>
              <div className="text-xs text-ink-dim">181 Rezensionen</div>
            </div>
            <div className="h-12 w-px bg-line" />
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">Infobel</div>
              <div className="font-display text-3xl text-gold mt-1">
                4.8<span className="text-ink-dim text-xl">/5</span>
              </div>
              <div className="text-xs text-ink-dim">172 Rezensionen</div>
            </div>
          </div>
        </div>
        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10"
          />
          <div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6 lg:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {REVIEWS.map((r, i) => (
              <figure
                key={i}
                className="snap-start shrink-0 w-[85vw] sm:w-[420px] relative p-7 rounded-xl border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors"
              >
                <Quote size={20} className="text-gold/40 absolute top-5 right-5" />
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 text-ink-soft leading-relaxed min-h-[5.5rem]">
                  „{r.text}&quot;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-line flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gold/10 border border-gold-dim text-gold flex items-center justify-center text-xs font-medium">
                      {r.initial}
                    </div>
                    <span className="text-ink font-medium">{r.name}</span>
                  </div>
                  <span className="text-ink-dim">{r.when}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
