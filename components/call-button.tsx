'use client'

import { Phone } from "lucide-react"
import { business } from "@/lib/data"

export function CallButton() {
  return (
    <a
      href={business.phoneLink}
      aria-label={`Anrufen: ${business.phone}`}
      className="call-fab fixed bottom-6 right-6 z-40 group"
    >
      {/* Outer ripple ring — pulses outward */}
      <span
        aria-hidden
        className="call-ripple absolute inset-0 rounded-full border border-gold/60"
      />
      {/* Soft glow halo */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-gold/25 blur-xl scale-110 opacity-70 group-hover:opacity-100 transition-opacity"
      />
      {/* Button core */}
      <span className="call-core relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gold text-bg shadow-[0_10px_30px_-8px_rgba(201,161,106,0.55)] ring-1 ring-gold-soft/40 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <Phone size={22} strokeWidth={2.2} className="call-icon" />
      </span>
      {/* Tooltip label (desktop) */}
      <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden md:flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-bg/90 backdrop-blur px-4 py-2 text-sm text-ink shadow-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <span className="text-ink-dim text-xs tracking-wider uppercase">Jetzt anrufen</span>
        <span className="tabular-nums text-gold font-medium">{business.phone}</span>
      </span>

      <style jsx>{`
        .call-fab {
          /* Entry animation */
          animation: call-fab-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
        }

        .call-ripple {
          animation: call-ripple 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .call-core {
          animation: call-breathe 2.8s ease-in-out infinite;
        }

        .call-icon {
          animation: call-shake 2.8s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes call-fab-in {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.6);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes call-ripple {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          80% {
            transform: scale(1.7);
            opacity: 0;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes call-breathe {
          0%, 100% {
            box-shadow:
              0 10px 30px -8px rgba(201, 161, 106, 0.55),
              0 0 0 0 rgba(201, 161, 106, 0.45);
          }
          50% {
            box-shadow:
              0 14px 34px -8px rgba(201, 161, 106, 0.7),
              0 0 0 10px rgba(201, 161, 106, 0);
          }
        }

        @keyframes call-shake {
          0%, 60%, 100% {
            transform: rotate(0deg);
          }
          5% { transform: rotate(-14deg); }
          10% { transform: rotate(14deg); }
          15% { transform: rotate(-10deg); }
          20% { transform: rotate(10deg); }
          25% { transform: rotate(-6deg); }
          30% { transform: rotate(6deg); }
          35% { transform: rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .call-fab,
          .call-ripple,
          .call-core,
          .call-icon {
            animation: none !important;
          }
        }
      `}</style>
    </a>
  )
}
