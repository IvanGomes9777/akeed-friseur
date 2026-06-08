import { Scissors } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
              <span className="h-px w-10 bg-gold-dim" />
              Über uns
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
              Ein Salon, in dem du dich wohlfühlst.
            </h2>
          </div>
          <div className="mt-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Willkommen bei <span className="text-ink">Akeed Friseur</span>. Unser gemütlicher
              Salon im Herzen von Roxel ist ein Ort, an dem Handwerk auf Herzlichkeit trifft.
            </p>
            <p>
              Mit Leidenschaft und Fachkenntnis kümmern wir uns um deine Haarbedürfnisse — sei es
              ein individueller Haarschnitt, eine lebendige Färbung oder eine sanfte Dauerwelle.
              Wir nehmen uns Zeit, hören zu und beraten ehrlich.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
            {[
              { v: "10+", k: "Jahre Erfahrung" },
              { v: "4.7★", k: "Google Bewertung" },
              { v: "181", k: "Rezensionen" },
              { v: "1000+", k: "zufriedene Kunden" },
            ].map((s) => (
              <div key={s.k} className="bg-bg p-5">
                <div className="font-display text-3xl text-gold">{s.v}</div>
                <div className="mt-1 text-xs text-ink-dim tracking-wider uppercase">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative aspect-[4/5] rounded-lg overflow-hidden border border-line">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(135deg, #1c1813 0%, #14110d 50%, #0a0907 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(201,161,106,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(224,192,138,0.18), transparent 55%)",
            }}
          />
          <div className="absolute right-6 top-6 text-gold/30">
            <Scissors size={120} />
          </div>
          <div className="absolute inset-0 flex items-end p-8 lg:p-10">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Inhaber</div>
              <div className="font-display text-3xl">
                „Wir machen nicht nur Frisuren — wir machen den Tag schöner.&quot;
              </div>
              <div className="mt-4 text-ink-dim text-sm">Akeed Friseur · seit 2015 in Roxel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
