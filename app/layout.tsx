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
  title: "Akeed Friseur — Salon in Münster-Roxel",
  description:
    "Akeed Friseur in Münster-Roxel. Herrenschnitt, Damenschnitt, Kinderschnitt, Haarfarbe, Dauerwelle. Annette-von-Droste-Hülshoff-Straße 6, 48161 Münster. Termin: 02534 5392626.",
  openGraph: {
    title: "Akeed Friseur — Salon in Münster-Roxel",
    description:
      "Mit Leidenschaft und Fachkenntnis für deine Haare. Salon in Roxel, 4,7★ bei 181 Rezensionen.",
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
