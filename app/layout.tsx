import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

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
  twitter: {
    card: "summary",
    title: "Akeed Friseur — Salon in Münster-Roxel",
    description:
      "Mit Leidenschaft und Fachkenntnis für deine Haare. Salon in Roxel, 4,7★ bei 181 Rezensionen.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="noise antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
