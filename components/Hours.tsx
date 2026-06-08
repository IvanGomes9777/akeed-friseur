"use client";
import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";

const HOURS = [
  { day: "Montag", open: "09:00 – 19:00", dow: 1 },
  { day: "Dienstag", open: "09:00 – 19:00", dow: 2 },
  { day: "Mittwoch", open: "09:00 – 19:00", dow: 3 },
  { day: "Donnerstag", open: "09:00 – 19:00", dow: 4 },
  { day: "Freitag", open: "09:00 – 19:00", dow: 5 },
  { day: "Samstag", open: "09:00 – 16:00", dow: 6 },
  { day: "Sonntag", open: "Geschlossen", dow: 0 },
];

function isOpenNow(dow: number, range: string): boolean {
  if (!range.includes("–")) return false;
  const now = new Date();
  if (now.getDay() !== dow) return false;
  const [from, to] = range.split("–").map((s) => s.trim());
  const [fh, fm] = from.split(":").map(Number);
  const [th, tm] = to.split(":").map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= fh * 60 + fm && mins < th * 60 + tm;
}

export function Hours() {
  const [today, setToday] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const d = new Date().getDay();
    setToday(d);
    const row = HOURS.find((h) => h.dow === d);
    setOpen(row ? isOpenNow(d, row.open) : false);
  }, []);

  return (
    <section id="hours" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
              <span className="h-px w-10 bg-gold-dim" />
              Öffnungszeiten
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
              Wir sind für dich da.
            </h2>
            <p className="mt-5 text-ink-soft text-lg leading-relaxed">
              Komm vorbei oder ruf uns einfach an — wir freuen uns auf dich.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-line bg-bg-soft/60">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  open ? "bg-green-500 animate-ping" : "bg-ink-dim"
                }`}
              />
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  open ? "bg-green-500" : "bg-ink-dim"
                }`}
              />
            </span>
            <span className="text-sm text-ink-soft">
              {open ? "Aktuell geöffnet" : "Aktuell geschlossen"}
            </span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-lg border border-line overflow-hidden bg-bg-soft/40">
            {HOURS.map((h, i) => {
              const isToday = today === h.dow;
              return (
                <div
                  key={h.day}
                  className={`flex items-center justify-between px-6 lg:px-8 py-4 ${
                    i < HOURS.length - 1 ? "border-b border-line" : ""
                  } ${isToday ? "bg-gold/5" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    {isToday && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold px-2 py-0.5 border border-gold-dim rounded-full">
                        Heute
                      </span>
                    )}
                    <span
                      className={`font-display text-xl ${isToday ? "text-ink" : "text-ink-soft"}`}
                    >
                      {h.day}
                    </span>
                  </div>
                  <div
                    className={`tabular-nums ${
                      isToday ? "text-gold" : h.open === "Geschlossen" ? "text-ink-dim" : "text-ink-soft"
                    }`}
                  >
                    {h.open}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs text-ink-dim">
            <Globe2 size={12} /> Zeitzone: Europe/Berlin
          </div>
        </div>
      </div>
    </section>
  );
}
