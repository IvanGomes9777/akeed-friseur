'use client'

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { reviews, business } from "@/lib/data"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/cn"

export function Reviews() {
  const root = useRef<HTMLElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  useGSAP(
    () => {
      gsap.from(".review-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".reviews-scroller", start: "top 78%" },
      })
    },
    { scope: root }
  )

  function updateArrows() {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < max - 4)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateArrows()
    el.addEventListener("scroll", updateArrows, { passive: true })
    window.addEventListener("resize", updateArrows)
    return () => {
      el.removeEventListener("scroll", updateArrows)
      window.removeEventListener("resize", updateArrows)
    }
  }, [])

  function scrollByCards(dir: -1 | 1) {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector(".review-card") as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section id="reviews" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Stimmen unserer Gäste"
            title="Was unsere Kunden sagen."
          />

          <div className="flex items-center gap-6 flex-wrap">
            <RatingBlock
              source="Google"
              score={business.rating.score}
              count={business.rating.count}
            />
            <div className="h-12 w-px bg-line" />
            <RatingBlock
              source="Infobel"
              score={business.ratingInfobel.score}
              count={business.ratingInfobel.count}
            />

            <div className="hidden sm:flex items-center gap-2 ml-2">
              <ArrowBtn
                dir="prev"
                disabled={!canPrev}
                onClick={() => scrollByCards(-1)}
              />
              <ArrowBtn
                dir="next"
                disabled={!canNext}
                onClick={() => scrollByCards(1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 relative">
        {/* edge fades */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10"
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10"
        />

        <div
          ref={scrollerRef}
          className="reviews-scroller flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6 lg:px-10 scroll-px-6 lg:scroll-px-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="review-card snap-start shrink-0 w-[85vw] sm:w-[420px] relative p-7 rounded-xl border border-line bg-bg-soft/40 hover:border-gold-dim transition-colors will-change-transform"
            >
              <Quote className="absolute top-5 right-5 text-gold/20" size={32} />
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-ink-soft leading-relaxed min-h-[5.5rem]">
                „{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-line flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <Avatar name={r.name} />
                  <span className="text-ink font-medium">{r.name}</span>
                </div>
                <span className="text-ink-dim">{r.when}</span>
              </figcaption>
            </figure>
          ))}

          {/* trailing spacer */}
          <div className="shrink-0 w-6 lg:w-10" aria-hidden />
        </div>
      </div>
    </section>
  )
}

function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next"
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Vorherige Rezensionen" : "Nächste Rezensionen"}
      className={cn(
        "h-10 w-10 rounded-full border border-line flex items-center justify-center transition",
        disabled
          ? "text-ink-dim/40 cursor-not-allowed"
          : "text-ink-soft hover:border-gold hover:text-gold"
      )}
    >
      {dir === "prev" ? (
        <ChevronLeft size={16} />
      ) : (
        <ChevronRight size={16} />
      )}
    </button>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="h-9 w-9 rounded-full bg-gold/10 border border-gold-dim text-gold flex items-center justify-center text-xs font-medium">
      {initials}
    </div>
  )
}

function RatingBlock({
  source,
  score,
  count,
}: {
  source: string
  score: number
  count: number
}) {
  return (
    <div>
      <div className="text-xs tracking-[0.2em] uppercase text-ink-dim">
        {source}
      </div>
      <div className="font-display text-3xl text-gold mt-1">
        {score}
        <span className="text-ink-dim text-xl">/5</span>
      </div>
      <div className="text-xs text-ink-dim">{count} Rezensionen</div>
    </div>
  )
}
