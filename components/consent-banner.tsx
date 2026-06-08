'use client'

import { useEffect, useState } from "react"
import { X } from "lucide-react"

const STORAGE_KEY = "akeed:consent-v1"

export function ConsentBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // small delay so it doesn't slam in immediately on first paint
        const t = setTimeout(() => setShow(true), 800)
        return () => clearTimeout(t)
      }
    } catch {
      /* SSR / private mode */
    }
  }, [])

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ acceptedAt: Date.now() }))
    } catch {}
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Datenschutz-Hinweis"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-[120] max-w-md rounded-xl border border-line bg-bg-soft/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-5 animate-[fadeUp_0.5s_ease-out]"
      style={{
        // simple inline keyframe via opacity transition
        opacity: 1,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="text-xs tracking-[0.2em] uppercase text-gold">
            Datenschutz
          </div>
          <h3 className="font-display text-lg mt-1.5 leading-snug">
            Diese Website nutzt nur notwendige Cookies.
          </h3>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            Externe Inhalte wie Google Maps werden erst nach deiner
            Einwilligung geladen. Mehr Infos in der{" "}
            <a
              href="/datenschutz"
              className="text-gold hover:text-gold-soft underline underline-offset-2"
            >
              Datenschutz­erklärung
            </a>
            .
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={dismiss} className="btn-gold text-sm">
              Verstanden
            </button>
            <a href="/datenschutz" className="btn-ghost text-sm">
              Mehr erfahren
            </a>
          </div>
        </div>
        <button
          onClick={dismiss}
          aria-label="Hinweis schließen"
          className="text-ink-dim hover:text-gold transition shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
