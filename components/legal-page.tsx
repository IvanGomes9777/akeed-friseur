import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "./footer"

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      <div className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold transition"
          >
            <ArrowLeft size={14} /> Zurück zur Startseite
          </Link>
          <div className="mt-8 text-xs tracking-[0.2em] uppercase text-gold">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl mt-3 leading-tight">{title}</h1>
          <p className="mt-3 text-sm text-ink-dim">Stand: {updated}</p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-14 legal-prose">
        {children}
      </article>

      <Footer />
    </main>
  )
}
