# Original Unternehmensdaten — Backup

> Diese Datei dient als Backup der ursprünglichen Unternehmensdaten von Akeed Friseur.
> Sie wurde angelegt, weil die Seite vorübergehend mit Platzhalterdaten betrieben wird,
> solange der Käufer die Übernahme noch nicht final bestätigt hat.
>
> **Vor Live-Schaltung mit dem echten Käufer:** Diese Daten zurück in `lib/data.ts` und
> die rechtlichen Seiten einsetzen. Anschließend diese Datei löschen (bzw. nicht in den
> öffentlichen Stand übernehmen).

## Stammdaten (`lib/data.ts` → `business`)

| Feld | Originalwert |
|---|---|
| name | `Akeed Friseur` |
| tagline | `Salon im Herzen von Roxel` |
| address.street | `Annette-von-Droste-Hülshoff-Straße 6` |
| address.zip | `48161` |
| address.city | `Münster` |
| address.district | `Roxel` |
| phone | `02534 5392626` |
| phoneLink | `tel:+4925345392626` |
| email | `akeedsam@gmail.com` |
| rating.score | `4.7` |
| rating.count | `181` |
| rating.source | `Google` |
| ratingInfobel.score | `4.8` |
| ratingInfobel.count | `172` |
| ratingInfobel.source | `Infobel` |
| mapsQuery | `Akeed+Friseur,+Annette-von-Droste-Hülshoff-Straße+6,+48161+Münster` |

## Original-TypeScript-Block

```ts
export const business = {
  name: "Akeed Friseur",
  tagline: "Salon im Herzen von Roxel",
  address: {
    street: "Annette-von-Droste-Hülshoff-Straße 6",
    zip: "48161",
    city: "Münster",
    district: "Roxel",
  },
  phone: "02534 5392626",
  phoneLink: "tel:+4925345392626",
  email: "akeedsam@gmail.com",
  rating: { score: 4.7, count: 181, source: "Google" },
  ratingInfobel: { score: 4.8, count: 172, source: "Infobel" },
  socials: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  mapsQuery:
    "Akeed+Friseur,+Annette-von-Droste-Hülshoff-Straße+6,+48161+Münster",
}
```

## Sonstige Vorkommen von „Akeed" / „Roxel" / „Münster" (Klartext-Strings)

Diese Stellen referenzieren nicht `business.*`, sondern haben den Namen/Ort fest im Code.
Beim Zurückwechseln auf die Originaldaten dort ebenfalls zurücksetzen:

### `app/layout.tsx` (Metadata)
```ts
title: "Akeed Friseur — Salon in Münster-Roxel",
description:
  "Akeed Friseur in Münster-Roxel. Herrenschnitt, Damenschnitt, Kinderschnitt, Haarfarbe, Dauerwelle. Annette-von-Droste-Hülshoff-Straße 6, 48161 Münster. Termin: 02534 5392626.",
openGraph: {
  title: "Akeed Friseur — Salon in Münster-Roxel",
  description:
    "Mit Leidenschaft und Fachkenntnis für deine Haare. Salon in Roxel, 4,7★ bei 181 Rezensionen.",
  ...
},
```

### `components/navbar.tsx` (Logo-Text)
```tsx
Akeed{" "}
<span className="text-gold font-light not-italic">·</span>{" "}
<span className="italic font-light">Friseur</span>
```

### `components/footer.tsx`
- Logo: `Akeed · Friseur`
- Tagline: `... Haare — Roxel, Münster.`
- Copyright: `© {year} Akeed Friseur. Alle Rechte vorbehalten.`

### `components/hero.tsx`
- Eyebrow: `Salon in Münster-Roxel`
- Lede: `Unser gemütlicher Salon im Herzen von Roxel lädt ein zum Verwöhnen ...`

### `components/about.tsx`
- `Willkommen bei Akeed Friseur. Unser gemütlicher Salon im Herzen von Roxel ...`
- `Akeed Friseur · seit 2015 in Roxel`
- Stats: `10+ Jahre Erfahrung`, `4.7★`, `181 Rezensionen`, `1000+ zufriedene Kunden`

### `components/contact.tsx`
- iframe title: `Akeed Friseur — Karte`

### `components/booking.tsx`
- E-Mail-Anrede: `Hallo Akeed Friseur,`

### `components/page-transition.tsx`
- Splash: `Akeed · Friseur`

### `.env.example`
- Header-Kommentar: `# Akeed Friseur — Environment Variables Template`

## Rechtliche Seiten

### `app/impressum/page.tsx`
- Metadata title: `Impressum — Akeed Friseur`
- Inhaber: `Akeed [Nachname ergänzen]` (Nachname war noch nie eingetragen)
- Zuständige Kammer: `Handwerkskammer Münster, Bismarckallee 1, 48151 Münster`

### `app/datenschutz/page.tsx`
- Metadata title: `Datenschutz — Akeed Friseur`
- Inhaber: `Akeed [Nachname ergänzen]`

### `app/agb/page.tsx`
- Metadata title: `AGB — Akeed Friseur`

## Reviews mit Klarbezügen (`lib/data.ts` → `reviews`)

```
Sabine K.: „... der beste Schnitt in ganz Roxel. Akeed nimmt sich Zeit ..."
Ahmed:    „Bester Friseur in Münster! ..."
Daniel R.: „Komme aus Münster-Mitte hier her — der Weg lohnt sich. ..."
```

---

**Stand:** 2026-06-08 — Branch `claude/wonderful-volta-csa0lm`
