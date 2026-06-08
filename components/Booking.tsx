"use client";
import { useMemo, useState } from "react";
import { Check, Send } from "lucide-react";
import { SERVICES } from "@/lib/services";

export function Booking() {
  const [selected, setSelected] = useState<string[]>([SERVICES[0].id]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wish, setWish] = useState("");
  const [note, setNote] = useState("");

  const toggle = (id: string) => {
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id]
    );
  };

  const mailto = useMemo(() => {
    const services = SERVICES.filter((s) => selected.includes(s.id))
      .map((s) => `- ${s.name} (${s.priceFrom}, ${s.duration})`)
      .join("\n");
    const body = [
      "Hallo Akeed Friseur,",
      "",
      "ich möchte einen Termin anfragen.",
      "",
      `Leistung(en):\n${services || "—"}`,
      "",
      `Wunschtermin: ${wish || "—"}`,
      phone ? `Telefon (Rückruf): ${phone}` : "",
      "",
      note ? `Anmerkung:\n${note}` : "",
      "",
      "Vielen Dank!",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = "Terminanfrage – Akeed Friseur";
    return `mailto:akeedsam@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [selected, phone, wish, note]);

  const canSubmit = email.trim().length > 3 && selected.length > 0;

  return (
    <section id="booking" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
            <span className="h-px w-10 bg-gold-dim" />
            Termin anfragen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            Schreib uns kurz — wir melden uns zurück.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Wähle deine Leistung und hinterlass uns deine E-Mail. Wenn du magst, rufen wir dich auch
            gern an.
          </p>
        </div>
        <div className="mt-14 mx-auto max-w-2xl rounded-xl border border-line bg-bg-soft/40 overflow-hidden">
          <form
            className="p-7 lg:p-10 space-y-8"
            onSubmit={(e) => {
              if (!canSubmit) {
                e.preventDefault();
                return;
              }
              window.location.href = mailto;
              e.preventDefault();
            }}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-gold">01</span>
                <span className="text-xs tracking-[0.2em] uppercase text-ink-dim">Leistung</span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((s) => {
                  const on = selected.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggle(s.id)}
                      className={`text-left p-3.5 rounded-lg border transition ${
                        on
                          ? "border-gold bg-gold/5"
                          : "border-line hover:border-gold-dim"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg">{s.name}</span>
                        {on && <Check size={16} className="text-gold" />}
                      </div>
                      <div className="text-xs text-ink-dim mt-1">
                        {s.duration} · {s.priceFrom}
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-ink-dim">Mehrfachauswahl möglich.</p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-gold">02</span>
                <span className="text-xs tracking-[0.2em] uppercase text-ink-dim">
                  Deine Kontaktdaten
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <label className="block">
                  <span className="text-xs text-ink-dim">
                    E-Mail <span className="text-gold">*</span>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="max@example.de"
                    className="mt-1.5 w-full rounded-lg bg-bg/60 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-ink-dim">
                    Telefon (optional — falls du einen Rückruf möchtest)
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0151 …"
                    className="mt-1.5 w-full rounded-lg bg-bg/60 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
                  />
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-gold">03</span>
                <span className="text-xs tracking-[0.2em] uppercase text-ink-dim">
                  Wunschtermin (optional)
                </span>
              </div>
              <input
                type="text"
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="z. B. Samstag Vormittag oder nächste Woche"
                className="mt-4 w-full rounded-lg bg-bg/60 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
              />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-gold">04</span>
                <span className="text-xs tracking-[0.2em] uppercase text-ink-dim">
                  Anmerkung (optional)
                </span>
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Wünsche, gewünschter Stylist, sonstige Hinweise …"
                rows={4}
                className="mt-4 w-full rounded-lg bg-bg/60 border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="btn-gold w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} /> Anfrage per E-Mail senden
            </button>
            <p className="text-xs text-ink-dim text-center leading-relaxed">
              Beim Klick öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an{" "}
              <span className="text-ink-soft">akeedsam@gmail.com</span>. Du kannst den Text vor
              dem Senden noch anpassen.
              <br />
              Lieber telefonisch?{" "}
              <a
                href="tel:+4925345392626"
                className="text-gold hover:text-gold-soft underline underline-offset-2"
              >
                02534 5392626
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
