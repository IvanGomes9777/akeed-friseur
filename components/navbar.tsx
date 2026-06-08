'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { business } from "@/lib/data"
import { cn } from "@/lib/cn"
import { SmoothLink } from "./page-transition"

const nav = [
  { href: "#services", label: "Leistungen" },
  { href: "#gallery", label: "Galerie" },
  { href: "#about", label: "Über uns" },
  { href: "#hours", label: "Öffnungszeiten" },
  { href: "#reviews", label: "Stimmen" },
  { href: "#contact", label: "Kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center gap-10">
        <SmoothLink href="#top" className="flex items-center gap-2.5 group shrink-0">
          <Logo />
          <span className="font-display text-2xl leading-none tracking-tight">
            Akeed{" "}
            <span className="text-gold font-light not-italic">·</span>{" "}
            <span className="italic font-light">Friseur</span>
          </span>
        </SmoothLink>

        <nav className="hidden min-[1200px]:flex items-center gap-7 xl:gap-8">
          {nav.map((n) => (
            <SmoothLink
              key={n.href}
              href={n.href}
              className="font-display italic text-[1.0625rem] tracking-wide text-ink-soft hover:text-gold transition-colors relative group/link"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-left group-hover/link:scale-x-100 transition-transform duration-300" />
            </SmoothLink>
          ))}
        </nav>

        <div className="hidden min-[1200px]:flex items-center gap-3 ml-auto shrink-0">
          <a href={business.phoneLink} className="btn-ghost text-sm">
            <Phone size={15} /> {business.phone}
          </a>
          <SmoothLink href="#booking" className="btn-gold text-sm">
            Termin
          </SmoothLink>
        </div>

        <button
          aria-label="Menü"
          aria-expanded={open}
          className="min-[1200px]:hidden ml-auto p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-[1200px]:hidden border-t border-line bg-bg/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <SmoothLink
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-lg text-ink-soft hover:text-gold py-1"
              >
                {n.label}
              </SmoothLink>
            ))}
            <div className="h-px bg-line my-2" />
            <SmoothLink
              href="#booking"
              onClick={() => setOpen(false)}
              className="btn-gold justify-center"
            >
              Termin anfragen
            </SmoothLink>
            <a
              href={business.phoneLink}
              className="btn-ghost justify-center text-sm"
            >
              <Phone size={15} /> {business.phone}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      className="text-gold"
    >
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeOpacity="0.4" />
      <path
        d="M10 22V13.5C10 11.5 11.5 10 13.5 10S17 11.5 17 13.5V22M10 17H17M19 10L22 22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
