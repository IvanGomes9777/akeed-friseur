'use client'

import { createContext, useCallback, useContext, useRef } from "react"
import { gsap } from "@/lib/gsap"

type Ctx = {
  navigate: (href: string) => void
}

const NavCtx = createContext<Ctx | null>(null)

export function useSmoothNav() {
  const ctx = useContext(NavCtx)
  if (!ctx) throw new Error("useSmoothNav must be used inside <PageTransitionProvider>")
  return ctx
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)

  const navigate = useCallback((href: string) => {
    if (lockRef.current) return
    const overlay = overlayRef.current
    const inner = innerRef.current
    if (!overlay || !inner) return

    lockRef.current = true

    const target = href.startsWith("#")
      ? document.querySelector(href)
      : null

    const tl = gsap.timeline({
      onComplete: () => {
        lockRef.current = false
      },
    })

    // Slide in from bottom — gold wipe
    tl.set(overlay, { display: "block" })
      .fromTo(
        overlay,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.55, ease: "expo.inOut" }
      )
      .fromTo(
        inner,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )

    // While covered, jump scroll position
    tl.call(() => {
      if (target) {
        gsap.set(window, { scrollTo: { y: target as Element, offsetY: 64 } })
      } else if (href === "#top") {
        gsap.set(window, { scrollTo: { y: 0 } })
      }
    })

    // Slide out upward, revealing destination
    tl.to(inner, { opacity: 0, duration: 0.2, ease: "power1.in" }, "+=0.15")
      .to(
        overlay,
        {
          yPercent: -100,
          duration: 0.7,
          ease: "expo.inOut",
        },
        "-=0.05"
      )
      .set(overlay, { display: "none", yPercent: 100 })
  }, [])

  return (
    <NavCtx.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden
        style={{ display: "none" }}
        className="fixed inset-0 z-[200] pointer-events-none will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0907 0%, #14110d 30%, #1c1813 50%, #14110d 70%, #0a0907 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          }}
        />
        <div
          ref={innerRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex items-center gap-4 text-gold">
            <span className="h-px w-12 bg-gold-dim" />
            <span className="font-display text-2xl tracking-wide">
              Beispiel <span className="text-gold-soft">·</span> Friseur
            </span>
            <span className="h-px w-12 bg-gold-dim" />
          </div>
        </div>
      </div>
    </NavCtx.Provider>
  )
}

export function SmoothLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const { navigate } = useSmoothNav()
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (href.startsWith("#")) {
          e.preventDefault()
          onClick?.()
          navigate(href)
        }
      }}
    >
      {children}
    </a>
  )
}
