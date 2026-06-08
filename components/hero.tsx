'use client'

import { useRef } from "react"
import { ArrowDown, Star, Phone } from "lucide-react"
import { Scissors3D } from "./scissors-3d"
import { SmoothLink } from "./page-transition"
import { business } from "@/lib/data"
import { gsap, useGSAP } from "@/lib/gsap"

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      // Background parallax — Spline scene drifts slower than scroll
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Foreground rises out of view a bit slower than scroll = subtle depth
      gsap.to(".hero-content", {
        yPercent: -12,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Word-by-word headline reveal
      const words = gsap.utils.toArray<HTMLElement>(".hero-word")
      gsap.set(words, { yPercent: 110, opacity: 0 })
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.15,
      })

      // Reveal sequence for everything else
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.5 })
      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 }, 0)
        .from(".hero-lede", { opacity: 0, y: 14, duration: 0.7 }, 0.1)
        .from(".hero-cta", { opacity: 0, y: 14, duration: 0.7, stagger: 0.08 }, 0.2)
        .from(".hero-rating", { opacity: 0, duration: 0.8 }, 0.35)
    },
    { scope: root }
  )

  const headline = ["Mit", "Leidenschaft", "für", "deine", "Haare."]

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate min-h-screen pt-24 overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 -z-10 will-change-transform">
        <Scissors3D className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/20 to-bg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent pointer-events-none" />
      </div>

      <div className="hero-content mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-6rem)] will-change-transform">
        <div className="lg:col-span-7 max-w-2xl">
          <div className="hero-eyebrow flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
            <span className="h-px w-10 bg-gold-dim" />
            Salon in zentraler Lage
          </div>

          <h1 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tight">
            <span className="block overflow-hidden pb-2">
              {headline.slice(0, 2).map((w, i) => (
                <span
                  key={i}
                  className="hero-word inline-block mr-[0.25em] will-change-transform"
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="block overflow-hidden pb-2">
              {headline.slice(2).map((w, i) => {
                const italic = i === 1 || i === 2
                const gold = i === 1
                return (
                  <span
                    key={i}
                    className={`hero-word inline-block mr-[0.25em] will-change-transform ${
                      italic ? "italic" : ""
                    } ${gold ? "text-gold-soft" : ""}`}
                  >
                    {w}
                  </span>
                )
              })}
            </span>
          </h1>

          <p className="hero-lede mt-7 text-lg text-ink-soft max-w-xl leading-relaxed">
            Unser gemütlicher Salon lädt ein zum Verwöhnen
            und Entspannen. Individuelle Haarschnitte, lebendige Farben und
            ehrliche Beratung — ganz auf dich abgestimmt.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SmoothLink href="#booking" className="hero-cta btn-gold">
              Termin anfragen
            </SmoothLink>
            <a href={business.phoneLink} className="hero-cta btn-ghost">
              <Phone size={15} /> {business.phone}
            </a>
          </div>

          <div className="hero-rating mt-10 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <div className="text-ink-soft">
              <span className="text-ink font-medium">
                {business.rating.score}/5
              </span>{" "}
              · {business.rating.count} Rezensionen auf {business.rating.source}
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-dim text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}
