import { Phone } from "lucide-react";

export function CallFab() {
  return (
    <a
      href="tel:+4925345392626"
      aria-label="Anrufen: 02534 5392626"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span aria-hidden="true" className="call-ripple absolute inset-0 rounded-full border border-gold/60" />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gold/25 blur-xl scale-110 opacity-70 group-hover:opacity-100 transition-opacity"
      />
      <span className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gold text-bg shadow-[0_10px_30px_-8px_rgba(201,161,106,0.55)] ring-1 ring-gold-soft/40 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <Phone size={22} />
      </span>
    </a>
  );
}
