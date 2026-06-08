'use client'

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { galleryImages } from "@/lib/data"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"
import { useSmoothNav } from "./page-transition"
import { cn } from "@/lib/cn"

export function Gallery() {
  const root = useRef<HTMLElement>(null)
  const { navigate } = useSmoothNav()

  useGSAP(
    () => {
      gsap.from(".gallery-cell", {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1,
        ease: "expo.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" },
      })
    },
    { scope: root }
  )

  return (
    <section id="gallery" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Unsere Arbeit"
            title="Handwerk, das man sieht."
            subtitle="Ein kleiner Einblick in den Salon und unsere Kundenarbeiten."
          />
          <button
            onClick={() => navigate("#booking")}
            className="inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold transition self-start lg:self-end"
          >
            <span className="font-display italic">
              Jetzt deinen Termin sichern
            </span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="gallery-grid mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[220px] gap-3 lg:gap-4">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={cn(
                "gallery-cell group relative overflow-hidden rounded-lg border border-line bg-bg-soft will-change-transform",
                img.span
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-line group-hover:ring-gold/40 transition" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 flex items-end justify-between gap-3">
                <span className="font-display text-sm lg:text-base text-ink leading-tight">
                  {img.alt}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-gold opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                />
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-dim text-center">
          Beispielbilder — echte Salon-Fotos werden in Kürze ergänzt.
        </p>
      </div>
    </section>
  )
}
