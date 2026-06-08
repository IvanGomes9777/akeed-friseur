import { Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { business } from "@/lib/data"

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
              {business.tagline}. Mit Leidenschaft und Fachkenntnis für deine
              Haare — Roxel, Münster.
            </p>
            {(business.socials.instagram || business.socials.facebook) && (
              <div className="mt-6 flex items-center gap-2">
                {business.socials.instagram && (
                  <a
                    href={business.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                )}
                {business.socials.facebook && (
                  <a
                    href={business.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">
              Salon
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 text-ink-soft hover:text-gold transition group"
            >
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                {business.address.street}
                <br />
                {business.address.zip} {business.address.city}
              </span>
            </a>
            <a
              href={business.phoneLink}
              className="mt-4 flex items-center gap-2 text-ink-soft hover:text-gold transition"
            >
              <Phone size={16} /> {business.phone}
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">
              Salon
            </div>
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
            <div className="text-xs tracking-[0.2em] uppercase text-ink-dim mb-4">
              Rechtliches
            </div>
            <ul className="space-y-2 text-ink-soft text-sm">
              <li>
                <a href="/impressum" className="hover:text-gold transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-gold transition">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="hover:text-gold transition">
                  AGB
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
  )
}
