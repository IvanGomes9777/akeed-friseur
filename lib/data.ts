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

export const hours = [
  { day: "Montag", open: "09:00", close: "19:00" },
  { day: "Dienstag", open: "09:00", close: "19:00" },
  { day: "Mittwoch", open: "09:00", close: "19:00" },
  { day: "Donnerstag", open: "09:00", close: "19:00" },
  { day: "Freitag", open: "09:00", close: "19:00" },
  { day: "Samstag", open: "09:00", close: "16:00" },
  { day: "Sonntag", open: null, close: null },
] as const

export const services = [
  {
    id: "herrenschnitt",
    title: "Herrenschnitt",
    description:
      "Präziser Schnitt mit Übergang, Konturen und Bartlinie. Inklusive Beratung und Styling.",
    price: "ab 18 €",
    duration: "30 Min",
    durationMinutes: 30,
    badge: "Beliebt",
  },
  {
    id: "damenschnitt",
    title: "Damenschnitt",
    description:
      "Persönlicher Schnitt nach Beratung — waschen, schneiden, föhnen, stylen.",
    price: "ab 21 €",
    duration: "45 Min",
    durationMinutes: 45,
  },
  {
    id: "kinderschnitt",
    title: "Kinderschnitt",
    description:
      "Kindgerechter Schnitt in entspannter Atmosphäre — geduldig und sorgfältig.",
    price: "ab 12 €",
    duration: "25 Min",
    durationMinutes: 25,
  },
  {
    id: "haarfarbe",
    title: "Haarfarbe",
    description:
      "Individuelle Coloration: Tönung, Strähnen, oder klassisches Färben. Pflegende Produkte.",
    price: "ab 45 €",
    duration: "60–120 Min",
    durationMinutes: 90,
  },
  {
    id: "dauerwelle",
    title: "Dauerwelle",
    description:
      "Lebendige Locken und Wellen — moderne Techniken für ein natürliches Ergebnis.",
    price: "ab 55 €",
    duration: "90 Min",
    durationMinutes: 90,
  },
] as const

export type ServiceId = (typeof services)[number]["id"]

export const reviews = [
  {
    name: "Markus",
    rating: 5,
    when: "vor 5 Monaten",
    text: "Super Friseur, schnelle Bedienung, freundliches Personal, gute Beratung.",
  },
  {
    name: "Luis",
    rating: 5,
    when: "vor 6 Monaten",
    text: "Sehr nettes Personal. Außerdem ein sehr schöner Laden und sehr gute Haarschnitte.",
  },
  {
    name: "Ibrahim Belnd",
    rating: 5,
    when: "vor 4 Monaten",
    text: "Sehr sauberer Laden und gutes Personal. Ich empfehle sie.",
  },
  {
    name: "Sabine K.",
    rating: 5,
    when: "vor 2 Monaten",
    text: "Ich gehe seit Jahren hin — der beste Schnitt in ganz Roxel. Akeed nimmt sich Zeit und hört wirklich zu.",
  },
  {
    name: "Tobias",
    rating: 5,
    when: "vor 3 Wochen",
    text: "Toller Service, fairer Preis, schickes Ambiente. Klare Empfehlung für Herrenschnitte mit Bart.",
  },
  {
    name: "Mehmet Ö.",
    rating: 5,
    when: "vor 1 Monat",
    text: "Sehr professionell und freundlich. Mein Sohn wollte zuerst nicht zum Friseur — jetzt freut er sich jedes Mal.",
  },
  {
    name: "Julia W.",
    rating: 4,
    when: "vor 7 Monaten",
    text: "Sehr gute Färbung, das Ergebnis hat genau zu meinem Wunsch gepasst. Termin war pünktlich.",
  },
  {
    name: "Ahmed",
    rating: 5,
    when: "vor 2 Wochen",
    text: "Bester Friseur in Münster! Übergänge sind immer sauber, Atmosphäre entspannt.",
  },
  {
    name: "Lisa M.",
    rating: 5,
    when: "vor 4 Wochen",
    text: "Habe mich nach einer Dauerwelle hier rundum wohlgefühlt. Sehr ehrliche Beratung vorab.",
  },
  {
    name: "Daniel R.",
    rating: 5,
    when: "vor 6 Wochen",
    text: "Komme aus Münster-Mitte hier her — der Weg lohnt sich. Top Beratung, kein Verkaufsdruck.",
  },
] as const

export const galleryImages = [
  {
    src: "/images/gallery/bartpflege.jpg",
    alt: "Bartpflege und Konturen",
    span: "row-span-2",
  },
  {
    src: "/images/gallery/salon-atmosphaere.jpg",
    alt: "Salon-Atmosphäre",
    span: "",
  },
  {
    src: "/images/gallery/werkzeuge.jpg",
    alt: "Werkzeuge des Handwerks",
    span: "col-span-2",
  },
  {
    src: "/images/gallery/damenschnitt-bob.jpg",
    alt: "Damenschnitt — moderner Bob",
    span: "row-span-2",
  },
  {
    src: "/images/gallery/styling-detail.jpg",
    alt: "Styling-Detail",
    span: "",
  },
] as const
