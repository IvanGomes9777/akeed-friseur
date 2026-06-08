"use client";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const NAV = [
  { href: "#services", label: "Leistungen" },
  { href: "#gallery", label: "Galerie" },
  { href: "#about", label: "Über uns" },
  { href: "#hours", label: "Öffnungszeiten" },
  { href: "#reviews", label: "Stimmen" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center gap-10">
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-gold">
            <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeOpacity="0.4" />
            <path
              d="M10 22V13.5C10 11.5 11.5 10 13.5 10S17 11.5 17 13.5V22M10 17H17M19 10L22 22"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-2xl leading-none tracking-tight">
            Akeed <span className="text-gold font-light not-italic">·</span>{" "}
            <span className="italic font-light">Friseur</span>
          </span>
        </a>
        <nav className="hidden min-[1200px]:flex items-center gap-7 xl:gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-display italic text-[1.0625rem] tracking-wide text-ink-soft hover:text-gold transition-colors relative group/link"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-left group-hover/link:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <div className="hidden min-[1200px]:flex items-center gap-3 ml-auto shrink-0">
          <a href="tel:+4925345392626" className="btn-ghost text-sm">
            <Phone size={15} /> 02534 5392626
          </a>
          <a href="#booking" className="btn-gold text-sm">
            Termin
          </a>
        </div>
        <button
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="min-[1200px]:hidden ml-auto p-2 -mr-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="min-[1200px]:hidden bg-bg/95 backdrop-blur border-t border-line">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-2xl text-ink-soft hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a href="tel:+4925345392626" className="btn-ghost text-sm">
                <Phone size={15} /> Anrufen
              </a>
              <a href="#booking" onClick={() => setOpen(false)} className="btn-gold text-sm">
                Termin
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
