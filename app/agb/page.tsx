import { LegalPage } from "@/components/legal-page"
import { business } from "@/lib/data"

export const metadata = {
  title: "AGB — Akeed Friseur",
  description:
    "Allgemeine Geschäftsbedingungen für Friseurleistungen bei Akeed Friseur.",
}

export default function AGBPage() {
  return (
    <LegalPage
      eyebrow="Allgemeine Bedingungen"
      title="AGB"
      updated="Mai 2026"
    >
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche
        Friseurleistungen bei {business.name} ({business.address.street},{" "}
        {business.address.zip} {business.address.city}). Mit der Vereinbarung
        eines Termins — telefonisch, per E-Mail oder vor Ort — akzeptierst du
        diese Bedingungen.
      </p>

      <h2>§ 2 Vertragsschluss</h2>
      <p>
        Eine Terminanfrage über das Kontaktformular oder per E-Mail stellt
        zunächst eine unverbindliche Anfrage dar. Der Vertrag kommt erst
        zustande, wenn wir den Termin gegenüber dir verbindlich bestätigen —
        per E-Mail, telefonisch oder persönlich.
      </p>

      <h2>§ 3 Leistungen und Preise</h2>
      <p>
        Die auf der Website angegebenen Preise sind Richtwerte und verstehen
        sich inkl. gesetzlicher MwSt. Der Endpreis kann je nach Haarlänge,
        Aufwand und gewählten Zusatzleistungen variieren. Auf Wunsch nennen wir
        vor Beginn des Termins einen konkreten Preis.
      </p>

      <h2>§ 4 Bezahlung</h2>
      <p>
        Die Bezahlung erfolgt nach erbrachter Leistung direkt im Salon — bar
        oder mit gängigen Karten (EC, Kreditkarte).
      </p>

      <h2>§ 5 Stornierung und Umbuchung</h2>
      <p>
        Bitte sage uns möglichst frühzeitig Bescheid, wenn du einen vereinbarten
        Termin nicht wahrnehmen kannst — telefonisch unter{" "}
        <a href={business.phoneLink}>{business.phone}</a> oder per E-Mail an{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. So können wir
        den Slot anderen Kunden anbieten.
      </p>

      <h2>§ 6 Pünktlichkeit</h2>
      <p>
        Bitte erscheine pünktlich zum vereinbarten Termin. Bei Verspätungen von
        mehr als 15&nbsp;Minuten behalten wir uns vor, den Termin zu kürzen oder
        abzusagen, um Folgetermine nicht zu beeinträchtigen.
      </p>

      <h2>§ 7 Beratung und Gewährleistung</h2>
      <p>
        Wir beraten dich vor und während des Termins. Sollte das Ergebnis nicht
        deinen Erwartungen entsprechen, teile uns dies bitte umgehend mit. Wir
        nehmen Korrekturen im Rahmen einer fairen kulanten Lösung gerne vor. Im
        Übrigen gelten die gesetzlichen Gewährleistungsregeln.
      </p>

      <h2>§ 8 Datenschutz</h2>
      <p>
        Die Verarbeitung deiner personenbezogenen Daten erfolgt nach Maßgabe
        unserer{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>

      <h2>§ 9 Haftung</h2>
      <p>
        Für Schäden haften wir nur bei Vorsatz und grober Fahrlässigkeit sowie
        bei Verletzung wesentlicher Vertragspflichten. Bei einfacher
        Fahrlässigkeit ist die Haftung auf den vertragstypisch vorhersehbaren
        Schaden begrenzt. Schadensersatzansprüche aus der Verletzung von Leben,
        Körper und Gesundheit sowie nach dem Produkthaftungsgesetz bleiben
        unberührt.
      </p>

      <h2>§ 10 Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB
        unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
        Bestimmungen davon unberührt.
      </p>

      <hr />
      <blockquote>
        Hinweis: Diese AGB sind eine Vorlage. Bitte lass sie vor produktiver
        Nutzung von einem Anwalt deines Vertrauens prüfen.
      </blockquote>
    </LegalPage>
  )
}
