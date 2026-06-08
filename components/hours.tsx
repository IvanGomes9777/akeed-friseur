'use client'

import { useRef } from "react"
import { Clock } from "lucide-react"
import { hours } from "@/lib/data"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"

function getTodayIndex() {
  const d = new Date().getDay()
  // JS: 0=Sun .. 6=Sat. Our array: 0=Mon .. 6=Sun
  return d === 0 ? 6 : d - 1
}

function isOpenNow(): { open: boolean; label: string } {
  const idx = getTodayIndex()
  const today = hours[idx]
  if (!today.open || !today.close) return { open: false, label: "Heute geschlossen" }
  const now = new Date()
  const [oh, om] = today.open.split(":").map(Number)
  const [ch, cm] = today.close.split(":").map(Number)
  const cur = now.getHours() * 60 + now.getMinutes()
  const o = oh * 60 + om
  const c = ch * 60 + cm
  if (cur >= o && cur < c) return { open: true, label: `Geöffnet bis ${today.close}` }
  if (cur < o) return { open: false, label: `Öffnet um ${today.open}` }
  return { open: false, label: "Heute geschlossen" }
}

export function Hours() {
  const todayIdx = getTodayIndex()
  const status = isOpenNow()
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from(".hours-row", {
        x: -24,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".hours-list", start: "top 78%" },
      })
    },
    { scope: root }
  )

  return (
    <section id="hours" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Öffnungszeiten"
            title="Wir sind für dich da."
            subtitle="Komm vorbei oder ruf uns einfach an — wir freuen uns auf dich."
          />

          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-line bg-bg-soft/60">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  status.open ? "animate-ping bg-emerald-400" : "bg-ink-dim"
                }`}
              />
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  status.open ? "bg-emerald-400" : "bg-ink-dim"
                }`}
              />
            </span>
            <span className="text-sm text-ink-soft">
              {status.open ? "Jetzt geöffnet" : "Aktuell geschlossen"} ·{" "}
              <span className="text-ink">{status.label}</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="hours-list rounded-lg border border-line overflow-hidden bg-bg-soft/40">
            {hours.map((h, i) => {
              const closed = !h.open
              const isToday = i === todayIdx
              return (
                <div
                  key={h.day}
                  className={`hours-row flex items-center justify-between px-6 lg:px-8 py-4 border-b border-line last:border-b-0 ${
                    isToday ? "bg-gold/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {isToday && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold px-2 py-0.5 border border-gold-dim rounded-full">
                        Heute
                      </span>
                    )}
                    <span
                      className={`font-display text-xl ${
                        isToday ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {h.day}
                    </span>
                  </div>
                  <div
                    className={`tabular-nums ${
                      closed
                        ? "text-ink-dim"
                        : isToday
                        ? "text-gold"
                        : "text-ink-soft"
                    }`}
                  >
                    {closed ? "Geschlossen" : `${h.open} – ${h.close}`}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-ink-dim">
            <Clock size={13} />
            Zeitzone: Europe/Berlin
          </div>
        </div>
      </div>
    </section>
  )
}
