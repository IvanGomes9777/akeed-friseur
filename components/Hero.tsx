import { Phone, ArrowDown, Star } from "lucide-react";
import { ScissorBackground } from "./Scissor";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen pt-24 overflow-hidden">
      <ScissorBackground />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-6rem)]">
        <div className="lg:col-span-7 max-w-2xl fade-up">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
            <span className="h-px w-10 bg-gold-dim" />
            Salon in Münster-Roxel
          </div>
          <h1 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tight">
            <span className="block">Mit Leidenschaft</span>
            <span className="block">
              für <span className="italic text-gold-soft">deine</span>{" "}
              <span className="italic">Haare.</span>
            </span>
          </h1>
          <p className="mt-7 text-lg text-ink-soft max-w-xl leading-relaxed">
            Unser gemütlicher Salon im Herzen von Roxel lädt ein zum Verwöhnen und Entspannen.
            Individuelle Haarschnitte, lebendige Farben und ehrliche Beratung — ganz auf dich
            abgestimmt.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#booking" className="btn-gold">
              Termin anfragen
            </a>
            <a href="tel:+4925345392626" className="btn-ghost">
              <Phone size={15} /> 02534 5392626
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <div className="text-ink-soft">
              <span className="text-ink font-medium">4.7/5</span> · 181 Rezensionen auf Google
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-dim text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
