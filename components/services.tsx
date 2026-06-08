'use client'

import { useRef } from "react"
import { ArrowUpRight, Scissors, Palette, Sparkles, Smile, Wand2 } from "lucide-react"
import { services, type ServiceId } from "@/lib/data"
import { gsap, useGSAP } from "@/lib/gsap"
import { useSmoothNav } from "./page-transition"

const icons = [Scissors, Wand2, Smile, Palette, Sparkles]

export function Services() {
  const root = useRef<HTMLElement>(null)
  const { navigate } = useSmoothNav()

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 78%",
        },
      })
    },
    { scope: root }
  )

  function pickService(id: ServiceId) {
    window.dispatchEvent(
      new CustomEvent<ServiceId>("akeed:select-service", { detail: id })
    )
    navigate("#booking")
  }

  return (
    <section id="services" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Leistungen"
          title="Was wir für dich tun"
          subtitle="Klassische Schnitte, lebendige Farben und Pflege — handwerklich präzise, persönlich beraten."
        />

        <div className="services-grid mt-16 grid gap-px bg-line lg:grid-cols-2 rounded-lg overflow-hidden border border-line">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => pickService(s.id)}
                aria-label={`Termin für ${s.title} buchen`}
                className="service-card group relative bg-bg p-8 lg:p-10 hover:bg-bg-soft transition-colors will-change-transform text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-gold">
                      <Icon size={18} strokeWidth={1.5} />
                      {"badge" in s && s.badge && (
                        <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 border border-gold-dim rounded-full text-gold-soft">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-3xl mt-4">{s.title}</h3>
                    <p className="mt-3 text-ink-soft leading-relaxed max-w-md">
                      {s.description}
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-sm text-ink-dim">
                      <span>{s.duration}</span>
                      <span className="h-3 w-px bg-line" />
                      <span className="text-gold font-medium">{s.price}</span>
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm text-gold-soft opacity-60 group-hover:opacity-100 transition">
                      <span className="font-display italic">Termin buchen</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  <div
                    className="hidden md:block text-7xl font-display text-ink-dim/30 select-none leading-none"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
              </button>
            )
          })}
        </div>

        <p className="mt-10 text-sm text-ink-dim text-center">
          Preise als Richtwerte. Endpreis je nach Haarlänge und Aufwand —
          gerne beraten wir dich vor Ort.
        </p>
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        defaults: { ease: "expo.out" },
      })
      tl.from(".sh-eyebrow", { opacity: 0, x: -20, duration: 0.6 })
        .from(".sh-title", { opacity: 0, y: 30, duration: 0.9 }, "-=0.3")
      if (ref.current?.querySelector(".sh-sub")) {
        tl.from(".sh-sub", { opacity: 0, y: 16, duration: 0.7 }, "-=0.5")
      }
    },
    { scope: ref }
  )

  return (
    <div
      ref={ref}
      className={center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <div className="sh-eyebrow flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
        <span className="h-px w-10 bg-gold-dim" />
        {eyebrow}
      </div>
      <h2 className="sh-title font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="sh-sub mt-5 text-ink-soft text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
