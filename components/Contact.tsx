"use client";
import { useState } from "react";
import { MapPin, Phone, Instagram, Facebook, ArrowUpRight, Globe } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Akeed+Friseur,+Annette-von-Droste-Hülshoff-Straße+6,+48161+Münster";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Annette-von-Droste-Hülshoff-Straße+6,+48161+Münster&output=embed";

export function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
            <span className="h-px w-10 bg-gold-dim" />
            Kontakt & Anfahrt
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            Komm vorbei. Wir freuen uns auf dich.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Termin per Telefon — schnell, persönlich und unkompliziert.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <div className="group relative p-6 rounded-lg border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors">
              <div className="flex items-start gap-5">
                <div className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">Adresse</div>
                  <div className="mt-1 font-display text-xl text-ink">
                    Annette-von-Droste-Hülshoff-Straße 6
                  </div>
                  <div className="text-sm text-ink-soft">48161 Münster, Roxel</div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-soft transition-colors"
                  >
                    Route planen <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative p-6 rounded-lg border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors">
              <div className="flex items-start gap-5">
                <div className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">Telefon</div>
                  <div className="mt-1 font-display text-xl text-ink">02534 5392626</div>
                  <div className="text-sm text-ink-soft">Mo–Fr 9–19 Uhr · Sa 9–16 Uhr</div>
                  <a
                    href="tel:+4925345392626"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-soft transition-colors"
                  >
                    Anrufen <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative p-6 rounded-lg border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors">
              <div className="flex items-start gap-5">
                <div className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-gold shrink-0">
                  <Globe size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">Online</div>
                  <div className="mt-1 font-display text-xl text-ink">Folge uns für Inspiration</div>
                  <div className="text-sm text-ink-soft">Facebook · Instagram</div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      <Facebook size={15} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      <Instagram size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-line aspect-[4/3] lg:aspect-auto lg:min-h-[500px] relative">
            {mapLoaded ? (
              <iframe
                src={MAPS_EMBED}
                title="Karte – Akeed Friseur"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-12 bg-bg-soft/60">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(201,161,106,0.15), transparent 60%)",
                  }}
                />
                <div className="relative h-14 w-14 rounded-full border border-gold-dim flex items-center justify-center text-gold mb-5">
                  <MapPin size={22} />
                </div>
                <h3 className="relative font-display text-2xl">Karte anzeigen</h3>
                <p className="relative mt-3 max-w-md text-sm text-ink-soft leading-relaxed">
                  Beim Laden der Karte werden Daten an{" "}
                  <strong className="text-ink">Google Maps</strong> übermittelt (u. a. deine
                  IP-Adresse). Mit deiner Einwilligung laden wir die Karte.
                </p>
                <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="btn-gold text-sm"
                  >
                    <MapPin size={14} /> Karte laden
                  </button>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                    Auf Google Maps öffnen <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
