'use client'

import { useEffect, useRef, useState } from "react"
import { Check, Loader2, Mail } from "lucide-react"
import { business, services, type ServiceId } from "@/lib/data"
import { SectionHeader } from "./services"
import { gsap, useGSAP } from "@/lib/gsap"

export function Booking() {
  const root = useRef<HTMLElement>(null)
  const [serviceId, setServiceId] = useState<ServiceId>("herrenschnitt")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [wish, setWish] = useState("")
  const [note, setNote] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<ServiceId>).detail
      if (id) {
        setServiceId(id)
        setDone(false)
      }
    }
    window.addEventListener("akeed:select-service", handler)
    return () => window.removeEventListener("akeed:select-service", handler)
  }, [])

  useGSAP(
    () => {
      gsap.from(".booking-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: ".booking-card", start: "top 80%" },
      })
    },
    { scope: root }
  )

  const canSubmit = /^\S+@\S+\.\S+$/.test(email)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return

    const service = services.find((s) => s.id === serviceId)!
    const subject = `Terminanfrage — ${service.title}`
    const bodyLines = [
      `Hallo Akeed Friseur,`,
      ``,
      `ich hätte gern einen Termin für: ${service.title} (${service.duration}, ${service.price}).`,
      ``,
      wish ? `Wunschtermin: ${wish}` : null,
      ``,
      `Meine Kontaktdaten:`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone} (gern auch telefonisch zurückrufen)` : null,
      ``,
      note ? `Anmerkung: ${note}` : null,
      ``,
      `Viele Grüße`,
    ]
      .filter((l) => l !== null)
      .join("\n")

    const href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines)}`

    window.location.href = href
    setDone(true)
  }

  function resetForm() {
    setEmail("")
    setPhone("")
    setWish("")
    setNote("")
    setDone(false)
  }

  return (
    <section id="booking" ref={root} className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Termin anfragen"
          title="Schreib uns kurz — wir melden uns zurück."
          subtitle="Wähle deine Leistung und hinterlass uns deine E-Mail. Wenn du magst, rufen wir dich auch gern an."
          center
        />

        <div className="booking-card mt-14 mx-auto max-w-2xl rounded-xl border border-line bg-bg-soft/40 overflow-hidden">
          {done ? (
            <SuccessView
              service={services.find((s) => s.id === serviceId)!.title}
              onReset={resetForm}
            />
          ) : (
            <form onSubmit={submit} className="p-7 lg:p-10 space-y-8">
              <div>
                <Label index="01" text="Leistung" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceId(s.id)}
                      className={`text-left p-3.5 rounded-lg border transition ${
                        serviceId === s.id
                          ? "border-gold bg-gold/5"
                          : "border-line hover:border-gold-dim"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg">{s.title}</span>
                        {serviceId === s.id && (
                          <Check size={14} className="text-gold" />
                        )}
                      </div>
                      <div className="text-xs text-ink-dim mt-1">
                        {s.duration} · {s.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label index="02" text="Deine Kontaktdaten" />
                <div className="mt-4 space-y-3">
                  <Input
                    label="E-Mail"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                    placeholder="max@example.de"
                  />
                  <Input
                    label="Telefon (optional — falls du einen Rückruf möchtest)"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    placeholder="0151 …"
                  />
                </div>
              </div>

              <div>
                <Label index="03" text="Wunschtermin (optional)" />
                <input
                  type="text"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  placeholder="z. B. Samstag Vormittag oder nächste Woche"
                  className="mt-4 w-full rounded-lg bg-bg/60 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <Label index="04" text="Anmerkung (optional)" />
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
                className="btn-gold w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                <Mail size={16} /> Anfrage per E-Mail senden
              </button>
              <p className="text-xs text-ink-dim text-center leading-relaxed">
                Beim Klick öffnet sich dein E-Mail-Programm mit einer
                vorbereiteten Nachricht an{" "}
                <span className="text-ink-soft">{business.email}</span>. Du
                kannst den Text vor dem Senden noch anpassen.
                <br />
                Lieber telefonisch?{" "}
                <a
                  href={business.phoneLink}
                  className="text-gold hover:text-gold-soft underline underline-offset-2"
                >
                  {business.phone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Label({ index, text }: { index: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-2xl text-gold">{index}</span>
      <span className="text-xs tracking-[0.2em] uppercase text-ink-dim">
        {text}
      </span>
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  type?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="text-xs text-ink-dim">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg bg-bg/60 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-gold transition"
      />
    </label>
  )
}

function SuccessView({
  service,
  onReset,
}: {
  service: string
  onReset: () => void
}) {
  return (
    <div className="p-10 lg:p-16 text-center max-w-xl mx-auto">
      <div className="mx-auto h-16 w-16 rounded-full border border-gold flex items-center justify-center text-gold">
        <Check size={28} />
      </div>
      <h3 className="font-display text-4xl mt-6">Fast geschafft.</h3>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dein E-Mail-Programm sollte sich geöffnet haben — mit einer fertigen
        Nachricht für deine Anfrage zu{" "}
        <span className="text-ink">{service}</span>. Sende die Mail einfach ab,
        wir melden uns zeitnah zurück.
      </p>
      <p className="mt-3 text-xs text-ink-dim">
        Hat sich nichts geöffnet? Schreib uns direkt an{" "}
        <a
          href={`mailto:${business.email}`}
          className="text-gold hover:text-gold-soft underline underline-offset-2"
        >
          {business.email}
        </a>
        .
      </p>
      <button onClick={onReset} className="btn-ghost mt-8">
        Neue Anfrage
      </button>
    </div>
  )
}
