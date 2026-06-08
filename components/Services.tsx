import { ArrowUpRight, Scissors } from "lucide-react";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
            <span className="h-px w-10 bg-gold-dim" />
            Leistungen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            Handwerk, das passt — zu dir.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Jede Leistung mit der gleichen Sorgfalt. Klick auf eine Karte, um den Termin direkt
            anzufragen.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {SERVICES.map((s, i) => (
            <a
              key={s.id}
              href={`#booking?service=${s.id}`}
              className="group relative bg-bg p-8 lg:p-10 hover:bg-bg-soft transition-colors text-left"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-gold">
                    <Scissors size={18} />
                  </div>
                  <h3 className="font-display text-3xl mt-4">{s.name}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed max-w-md">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-5 text-sm text-ink-dim">
                    <span>{s.duration}</span>
                    <span className="h-3 w-px bg-line" />
                    <span className="text-gold font-medium">{s.priceFrom}</span>
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 text-sm text-gold-soft opacity-60 group-hover:opacity-100 transition">
                    <span className="font-display italic">Termin buchen</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <div
                  className="hidden md:block text-7xl font-display text-ink-dim/30 select-none leading-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-dim text-center">
          Preise als Richtwerte. Endpreis je nach Haarlänge und Aufwand — gerne beraten wir dich vor
          Ort.
        </p>
      </div>
    </section>
  );
}
