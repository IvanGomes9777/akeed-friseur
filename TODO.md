# TODO — vor Live-Schaltung von akeed-friseur.de

Stand: Juni 2026. Die Seite läuft als rein statische Next.js-App ohne Backend,
ohne Datenbank und ohne E-Mail-Versand-Service. Das Kontaktformular nutzt
`mailto:` — die Anfrage landet im Mail-Programm des Besuchers und wird von dort
direkt an `akeedsam@gmail.com` geschickt.

---

## 🔴 BLOCKER — ohne das geht die Seite nicht live

### Rechtliches / Inhalt

- [ ] **Impressum** ([app/impressum/page.tsx](app/impressum/page.tsx)): Nachname von Akeed eintragen („Akeed [Nachname ergänzen]" → echte Nachname)
- [ ] **Impressum**: USt-ID eintragen oder Absatz entfernen falls Kleinunternehmer (§ 19 UStG)
- [ ] **Datenschutz** ([app/datenschutz/page.tsx](app/datenschutz/page.tsx)): Nachname unter „Verantwortliche Stelle" ergänzen
- [ ] **Rechtsanwalt-Review** der drei Legal-Pages (Impressum, Datenschutz, AGB) — die Hinweis-Blöcke in den Pages stehen drin als Erinnerung

---

## 🟡 WICHTIG — soll bald passieren

### Inhalt / Bilder

- [ ] **Galerie**: echte Salon-Fotos statt Unsplash-Platzhalter ([lib/data.ts](lib/data.ts) → `galleryImages`)
  - Aktuell 5 Bilder im Bento-Grid, lokal in [public/images/gallery/](public/images/gallery/) (kein Drittland-Transfer mehr)
  - 2 Unsplash-IDs (Herrenschnitt + Coloration) waren serverseitig 404 — wurden aus der Galerie entfernt
  - Empfohlene Auflösung: mind. 900×1200 px, 80% JPEG-Qualität
  - Beim Tausch: Datei in `/public/images/gallery/` ablegen, dann Pfad in `lib/data.ts` updaten
- [ ] **About-Section** ([components/about.tsx](components/about.tsx)):
  - Inhaber-Zitat („Wir machen nicht nur Frisuren…") prüfen — passt das, oder eigenes Zitat?
  - „seit 2015 in Roxel" — Gründungsjahr verifizieren
  - Stats: „10+ Jahre Erfahrung", „1000+ zufriedene Kunden" — verifizieren oder anpassen
- [ ] **Social-Media-Links** ([lib/data.ts](lib/data.ts) → `business.socials`):
  - Aktuell `null` — Icons werden in Footer + Kontakt-Section automatisch ausgeblendet
  - Sobald echte Profile vorhanden: URL eintragen (z.B. `"https://instagram.com/akeed.friseur"`), Icons erscheinen wieder
- [ ] **Reviews** ([lib/data.ts](lib/data.ts) → `reviews`): aktuell 10 Bewertungen, davon 3 echte (Markus, Luis, Ibrahim) und 7 fiktive. Entscheiden: bei den echten Google-Reviews bleiben (Liste kürzen) oder fiktive durch echte ersetzen.

### Domain

- [ ] **akeed-friseur.de** als Custom Domain in Vercel verbinden
  - DNS-Records (A + CNAME) beim Registrar setzen
  - HTTPS-Zertifikat kommt automatisch via Vercel/Let's Encrypt

---

## 🟢 NICE-TO-HAVE — Polish, kann warten

### SEO / Discoverability

- [ ] **Open Graph Image** erstellen — Bild was beim Teilen auf WhatsApp / Facebook / Twitter erscheint (1200×630 px, /public/og-image.jpg)
- [ ] **robots.txt** unter `app/robots.ts`
- [ ] **sitemap.xml** unter `app/sitemap.ts` für bessere Google-Indexierung
- [ ] **schema.org JSON-LD** für `LocalBusiness` einbauen (Adresse, Öffnungszeiten, Reviews) → Rich Results in Google

### UX

- [ ] **404-Seite** custom designen (`app/not-found.tsx`)

### Performance

- [ ] **Lighthouse-Audit** nach Deploy laufen lassen (Ziel: alle ≥90)
- [ ] **Images** der Galerie als WebP optimieren mit `<Image>` (next/image) statt `<img>`
- [ ] **Three.js Bundle-Size**: aktuell ~600 KB. Prüfen ob für die kleine Schere ein leichteres Setup reicht.

---

## ✓ Bereits erledigt

- ✓ Hero mit drehender 3D-Schere
- ✓ Smooth-Page-Transitions (Gold-Wipe) zwischen Sections
- ✓ Kontaktformular (Leistung + E-Mail + optional Telefon/Wunschtermin/Anmerkung → öffnet Mail-Programm)
- ✓ DSGVO-konform: Google-Maps-Consent, Self-hosted Fonts, keine Cookies, keine Server-Datenverarbeitung
- ✓ Impressum + Datenschutz + AGB (Templates, vor Live Anwalt-Check!)
- ✓ Favicon (SVG + Apple-Touch-Icon)
- ✓ Responsive Navbar mit Dropdown ab <1200px
- ✓ Horizontal scrollbare Reviews
- ✓ Galerie-Section (Bento-Grid, Platzhalter-Fotos)
- ✓ Admin-Bereich + Datenbank + Resend entfernt (Juni 2026) — Seite läuft jetzt komplett statisch
- ✓ Rechts-Audit Juni 2026 (siehe `memory/german-legal-skills.md`): keine Tracking-Tools, kein Drittlandstransfer mehr (Unsplash lokal gemirrort, Google-Maps Consent-Gate aktiv)
- ✓ Tote Social-Links entfernt (Icons werden bedingt gerendert)

---

**Letzter Check vor Deploy:** Lokal `npm run build` ausführen — wenn das ohne Fehler durchläuft, ist der Code production-ready.
