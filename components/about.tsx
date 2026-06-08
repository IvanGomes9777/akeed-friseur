'use client'

import { useRef } from "react"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "4.7★", label: "Google Bewertung" },
  { value: "181", label: "Rezensionen" },
  { value: "1000+", label: "zufriedene Kunden" },
]

export function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Stats stagger
      gsap.from(".about-stat", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".about-stats", start: "top 80%" },
      })

      // Decorative card parallax + slight scale
      gsap.fromTo(
        ".about-card-inner",
        { yPercent: 8 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-card",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // Body copy fade
      gsap.from(".about-copy > *", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".about-copy", start: "top 78%" },
      })
    },
    { scope: root }
  )

  return (
    <section id="about" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Über uns"
            title="Ein Salon, in dem du dich wohlfühlst."
          />
          <div className="about-copy mt-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Willkommen bei <span className="text-ink">Akeed Friseur</span>.
              Unser gemütlicher Salon im Herzen von Roxel ist ein Ort, an dem
              Handwerk auf Herzlichkeit trifft.
            </p>
            <p>
              Mit Leidenschaft und Fachkenntnis kümmern wir uns um deine
              Haarbedürfnisse — sei es ein individueller Haarschnitt, eine
              lebendige Färbung oder eine sanfte Dauerwelle. Wir nehmen uns
              Zeit, hören zu und beraten ehrlich.
            </p>
          </div>

          <div className="about-stats mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="about-stat bg-bg p-5">
                <div className="font-display text-3xl text-gold">{s.value}</div>
                <div className="mt-1 text-xs text-ink-dim tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card lg:col-span-6 relative aspect-[4/5] rounded-lg overflow-hidden border border-line">
          <div className="about-card-inner absolute inset-[-8%] will-change-transform">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1c1813 0%, #14110d 50%, #0a0907 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(201,161,106,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(224,192,138,0.18), transparent 55%)",
              }}
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full text-gold/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            >
              <circle cx="200" cy="180" r="140" />
              <circle cx="200" cy="180" r="110" />
              <circle cx="200" cy="180" r="80" />
              <path d="M120 350 L200 240 L280 350" />
              <path d="M150 400 L200 320 L250 400" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-end p-8 lg:p-10">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                Inhaber
              </div>
              <div className="font-display text-3xl">
                „Wir machen nicht nur Frisuren — wir machen den Tag schöner."
              </div>
              <div className="mt-4 text-ink-dim text-sm">
                Akeed Friseur · seit 2015 in Roxel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
