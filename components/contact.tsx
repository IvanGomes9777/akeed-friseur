'use client'

import { useRef, useState } from "react"
import { MapPin, Phone, Mail, ExternalLink, Facebook, Instagram, MapPinned, ShieldCheck } from "lucide-react"
import { business } from "@/lib/data"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"

export function Contact() {
  const root = useRef<HTMLElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`
  const mapsEmbed = `https://www.google.com/maps?q=${business.mapsQuery}&output=embed`

  useGSAP(
    () => {
      gsap.from(".contact-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".contact-grid", start: "top 75%" },
      })
      gsap.from(".contact-map", {
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".contact-map", start: "top 80%" },
      })
    },
    { scope: root }
  )

  return (
    <section id="contact" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Kontakt & Anfahrt"
          title="Komm vorbei. Wir freuen uns auf dich."
          subtitle="Termin per Telefon — schnell, persönlich und unkompliziert."
          center
        />

        <div className="contact-grid mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <ContactCard
              icon={<MapPin size={18} />}
              label="Adresse"
              primary={business.address.street}
              secondary={`${business.address.zip} ${business.address.city}, ${business.address.district}`}
              action={{ label: "Route planen", href: mapsUrl }}
            />
            <ContactCard
              icon={<Phone size={18} />}
              label="Telefon"
              primary={business.phone}
              secondary="Mo–Fr 9–19 Uhr · Sa 9–16 Uhr"
              action={{ label: "Anrufen", href: business.phoneLink }}
            />
            {(business.socials.facebook || business.socials.instagram) && (
              <ContactCard
                icon={<Mail size={18} />}
                label="Online"
                primary="Folge uns für Inspiration"
                secondary="Facebook · Instagram"
                socials={[
                  business.socials.facebook && {
                    icon: <Facebook size={16} />,
                    href: business.socials.facebook,
                  },
                  business.socials.instagram && {
                    icon: <Instagram size={16} />,
                    href: business.socials.instagram,
                  },
                ].filter(Boolean) as { icon: React.ReactNode; href: string }[]}
              />
            )}
          </div>

          <div className="contact-map lg:col-span-7 rounded-lg overflow-hidden border border-line aspect-[4/3] lg:aspect-auto lg:min-h-[500px] relative">
            {mapLoaded ? (
              <>
                <iframe
                  src={mapsEmbed}
                  className="w-full h-full grayscale-[0.8] contrast-110 brightness-[0.7]"
                  style={{
                    border: 0,
                    filter: "invert(0.9) hue-rotate(180deg) saturate(0.7)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akeed Friseur — Karte"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-line" />
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-12 bg-bg-soft/60">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(201,161,106,0.15), transparent 60%)",
                  }}
                />
                <div className="relative h-14 w-14 rounded-full border border-gold-dim flex items-center justify-center text-gold mb-5">
                  <MapPinned size={22} />
                </div>
                <h3 className="relative font-display text-2xl">
                  Karte anzeigen
                </h3>
                <p className="relative mt-3 max-w-md text-sm text-ink-soft leading-relaxed">
                  Beim Laden der Karte werden Daten an{" "}
                  <strong className="text-ink">Google Maps</strong> übermittelt
                  (u. a. deine IP-Adresse). Mit deiner Einwilligung laden wir
                  die Karte. Mehr Infos in unserer{" "}
                  <a
                    href="/datenschutz"
                    className="text-gold hover:text-gold-soft underline underline-offset-2"
                  >
                    Datenschutz­erklärung
                  </a>
                  .
                </p>
                <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="btn-gold text-sm"
                  >
                    <ShieldCheck size={15} /> Karte laden
                  </button>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-sm"
                  >
                    Auf Google Maps öffnen
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  primary,
  secondary,
  action,
  socials,
}: {
  icon: React.ReactNode
  label: string
  primary: string
  secondary: string
  action?: { label: string; href: string }
  socials?: { icon: React.ReactNode; href: string }[]
}) {
  return (
    <div className="contact-card group relative p-6 rounded-lg border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors will-change-transform">
      <div className="flex items-start gap-5">
        <div className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-gold shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">
            {label}
          </div>
          <div className="mt-1 font-display text-xl text-ink">{primary}</div>
          <div className="text-sm text-ink-soft">{secondary}</div>

          {action && (
            <a
              href={action.href}
              target={action.href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-soft transition-colors"
            >
              {action.label} <ExternalLink size={13} />
            </a>
          )}
          {socials && (
            <div className="mt-4 flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
