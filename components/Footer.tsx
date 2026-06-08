import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Akeed+Friseur,+Annette-von-Droste-Hülshoff-Straße+6,+48161+Münster";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl">
              Akeed <span className="text-gold">·</span> Friseur
            </div>
            <p className="mt-4 text-ink-soft max-w-md leading-relaxed">
              Salon im Herzen von Roxel. Mit Leidenschaft und Fachkenntnis für deine Haare —
              Roxel, Münster.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">Salon</div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 text-ink-soft hover:text-gold transition"
            >
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                Annette-von-Droste-Hülshoff-Straße 6<br />
                48161 Münster
              </span>
            </a>
            <a
              href="tel:+4925345392626"
              className="mt-4 flex items-center gap-2 text-ink-soft hover:text-gold transition"
            >
              <Phone size={16} /> 02534 5392626
            </a>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">Salon</div>
            <ul className="space-y-2 text-ink-soft text-sm">
              <li>
                <a href="#services" className="hover:text-gold transition">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-gold transition">
                  Öffnungszeiten
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold transition">
                  Stimmen
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">Rechtliches</div>
            <ul className="space-y-2 text-ink-soft text-sm">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-14" />
        <div className="mt-6 text-sm text-ink-dim">
          © {new Date().getFullYear()} Akeed Friseur. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
