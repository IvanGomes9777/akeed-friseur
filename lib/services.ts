export type Service = {
  id: string;
  name: string;
  desc: string;
  duration: string;
  priceFrom: string;
};

export const SERVICES: Service[] = [
  {
    id: "herren",
    name: "Herrenschnitt",
    desc: "Klassisch oder modern — präziser Schnitt inklusive Beratung und Styling.",
    duration: "30 Min",
    priceFrom: "ab 18 €",
  },
  {
    id: "damen",
    name: "Damenschnitt",
    desc: "Individueller Schnitt mit Waschen, Föhnen und persönlicher Beratung.",
    duration: "45 Min",
    priceFrom: "ab 21 €",
  },
  {
    id: "kinder",
    name: "Kinderschnitt",
    desc: "Kindgerechter Schnitt in entspannter Atmosphäre — geduldig und sorgfältig.",
    duration: "25 Min",
    priceFrom: "ab 12 €",
  },
  {
    id: "farbe",
    name: "Haarfarbe",
    desc: "Individuelle Coloration: Tönung, Strähnen, oder klassisches Färben. Pflegende Produkte.",
    duration: "60–120 Min",
    priceFrom: "ab 45 €",
  },
  {
    id: "dauerwelle",
    name: "Dauerwelle",
    desc: "Lebendige Locken und Wellen — moderne Techniken für ein natürliches Ergebnis.",
    duration: "90 Min",
    priceFrom: "ab 55 €",
  },
];
