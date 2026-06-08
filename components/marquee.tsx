'use client'

import { useRef } from "react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

const items = [
  "Herrenschnitt",
  "Kinderschnitt",
  "Haarfarbe",
  "Dauerwelle",
  "Bart & Konturen",
  "Styling",
  "Tönung",
  "Strähnen",
]

export function Marquee() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = track.current
      if (!el) return

      // Base marquee loop
      const baseTween = gsap.to(el, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      })

      // Scroll velocity boosts the timeScale, then it eases back to 1
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity()
          const boost = gsap.utils.clamp(0.5, 5, 1 + Math.abs(v) / 800)
          // Reverse direction when scrolling up
          gsap.to(baseTween, {
            timeScale: v < 0 ? -boost : boost,
            duration: 0.4,
            overwrite: true,
          })
          // Ease back to 1
          gsap.to(baseTween, {
            timeScale: v < 0 ? -1 : 1,
            duration: 1.2,
            delay: 0.3,
            overwrite: false,
          })
        },
      })

      return () => st.kill()
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      className="border-y border-line py-6 overflow-hidden bg-bg-soft/40"
    >
      <div
        ref={track}
        className="flex gap-12 whitespace-nowrap will-change-transform"
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-display text-3xl md:text-4xl text-ink-soft"
          >
            <span>{it}</span>
            <span className="text-gold">✶</span>
          </div>
        ))}
      </div>
    </section>
  )
}
