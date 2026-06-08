import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import { PageTransitionProvider } from "@/components/page-transition"
import { ConsentBanner } from "@/components/consent-banner"

// Self-hosted via next/font — files are downloaded at build time
// and served from this domain. Zero runtime requests to Google.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Beispiel Friseur — Salon in zentraler Lage",
  description:
    "Beispiel Friseur — moderner Salon mit Herrenschnitt, Damenschnitt, Kinderschnitt, Haarfarbe und Dauerwelle. Musterstraße 1, 12345 Musterstadt. Termin: 0123 4567890.",
  openGraph: {
    title: "Beispiel Friseur — Salon in zentraler Lage",
    description:
      "Mit Leidenschaft und Fachkenntnis für deine Haare. Moderner Salon mit Top-Bewertungen.",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable} bg-bg`}
    >
      <body className="noise antialiased">
        <PageTransitionProvider>{children}</PageTransitionProvider>
        <ConsentBanner />
      </body>
    </html>
  )
}
