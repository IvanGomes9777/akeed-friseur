import { LegalPage } from "@/components/legal-page"
import { business } from "@/lib/data"

export const metadata = {
  title: "Datenschutz — Beispiel Friseur",
  description: "Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
}

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="DSGVO"
      title="Datenschutz­erklärung"
      updated="Mai 2026"
    >
      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO):
        <br />
        <strong>{business.name}</strong>
        <br />
        Inhaber: [Vorname Nachname des Inhabers]
        <br />
        {business.address.street}
        <br />
        {business.address.zip} {business.address.city}
        <br />
        Telefon: <a href={business.phoneLink}>{business.phone}</a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur
        Bereitstellung einer funktionsfähigen Website sowie für die
        Bearbeitung deiner Anfragen erforderlich ist. Rechtsgrundlagen sind
        insbesondere Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen /
        Vertragsanbahnung) sowie lit. f DSGVO (berechtigtes Interesse am
        sicheren Betrieb der Website).
      </p>

      <h2>3. Hosting (Vercel) und Server-Logfiles</h2>
      <p>
        Diese Webseite wird gehostet bei{" "}
        <strong>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
        </strong>
        . Beim Aufruf der Seite werden technische Daten als Server-Logs
        verarbeitet:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>User-Agent (Browser, Betriebssystem)</li>
        <li>Referrer (Herkunfts-URL)</li>
        <li>Aufgerufene URL</li>
        <li>HTTP-Status</li>
      </ul>
      <p>
        <strong>Zweck:</strong> sicherer Betrieb, Erkennung von Angriffen,
        Fehleranalyse. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse am sicheren Betrieb).{" "}
        <strong>Speicherdauer:</strong> bis zu 30 Tage durch Vercel; eine
        weitergehende Speicherung erfolgt durch uns nicht.
      </p>
      <p>
        <strong>Drittlandsübermittlung:</strong> Die Daten werden in die USA
        übermittelt. Rechtsgrundlage hierfür sind Standardvertragsklauseln nach
        Art. 46 DSGVO sowie das EU-US Data Privacy Framework — Vercel Inc. ist
        nach DPF zertifiziert. Datenschutzerklärung von Vercel:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          vercel.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>4. Terminanfrage über das Kontaktformular</h2>
      <p>
        Auf unserer Website findest du ein Formular für Terminanfragen. Dieses
        Formular speichert <strong>keine</strong> Daten auf unseren Servern und
        überträgt auch keine Daten an uns oder Dritte, solange du nichts
        absendest. Wenn du auf „Anfrage per E-Mail senden" klickst, öffnet sich
        das auf deinem Gerät installierte E-Mail-Programm mit einer
        vorbereiteten Nachricht an{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. Die
        eigentliche E-Mail-Übermittlung erfolgt erst, wenn du sie aus deinem
        Mail-Programm heraus selbst absendest, und läuft über deinen
        E-Mail-Anbieter — nicht über uns.
      </p>

      <h2>5. E-Mail-Korrespondenz</h2>
      <p>
        Wenn du uns eine E-Mail schickst (sei es über das Formular, sei es
        direkt), verarbeiten wir die übermittelten Daten — typischerweise deine
        E-Mail-Adresse, deinen Namen, ggf. Telefonnummer, deine
        Terminwünsche und den Inhalt deiner Nachricht — ausschließlich zur
        Bearbeitung deiner Anfrage.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen / Vertragsanbahnung) sowie Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
        Anfragen).{" "}
        <strong>E-Mail-Anbieter:</strong> Unsere geschäftliche E-Mail wird
        über Google (Gmail; Google Ireland Ltd., Irland) abgewickelt.
        Datenschutzerklärung von Google:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          policies.google.com/privacy
        </a>
        .{" "}
        <strong>Speicherdauer:</strong> E-Mails werden gelöscht, sobald die
        Bearbeitung deiner Anfrage abgeschlossen ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Aus Rechnungen oder
        Korrespondenz mit Rechnungsbezug ergeben sich ggf. Aufbewahrungsfristen
        nach § 147 AO (bis zu 10 Jahre).
      </p>

      <h2>6. Google Maps</h2>
      <p>
        Wir binden auf der Kontaktseite eine Karte von <strong>Google Maps</strong>{" "}
        (Google Ireland Ltd., Irland) ein. Die Karte wird erst nach
        ausdrücklicher Bestätigung durch dich geladen
        („Karte anzeigen"-Button). Erst dann werden Verbindungsdaten (u. a. deine
        IP-Adresse) an Google übermittelt.{" "}
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
        (Einwilligung). Mehr Infos:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>7. Schriftarten</h2>
      <p>
        Wir verwenden die Schriftarten <em>Cormorant Garamond</em> und{" "}
        <em>Inter</em>. Diese werden{" "}
        <strong>ausschließlich von unserem eigenen Server</strong>{" "}
        ausgeliefert. Es findet keinerlei Verbindung zu Google-Servern statt,
        deine IP-Adresse wird nicht an Dritte übermittelt.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Unsere Seite setzt <strong>keine</strong> eigenen Cookies. Die Auswahl
        bezüglich der optionalen Google-Maps-Einbettung wird ausschließlich
        lokal in deinem Browser (Local Storage) gespeichert, damit du nicht bei
        jedem Besuch erneut entscheiden musst. Diese Speicherung ist technisch
        notwendig für die Einwilligungsverwaltung (§ 25 Abs. 2 Nr. 2 TDDDG).
      </p>

      <h2>9. Deine Rechte</h2>
      <p>Du hast nach DSGVO folgende Rechte:</p>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch (Art. 21 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
        <li>
          Beschwerde bei einer Aufsichtsbehörde — zuständig in Nordrhein-Westfalen:
          <br />
          Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen,{" "}
          <a
            href="https://www.ldi.nrw.de"
            target="_blank"
            rel="noreferrer"
          >
            ldi.nrw.de
          </a>
        </li>
      </ul>
      <p>
        Zur Wahrnehmung deiner Rechte genügt eine formlose Nachricht an{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>.
      </p>

      <h2>10. SSL/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
      </p>

      <hr />
      <blockquote>
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage. Vor Live-Schaltung
        bitte mit einem Rechtsbeistand prüfen und ggf. um konkrete Drittanbieter
        (z. B. Analytics, Hosting) ergänzen.
      </blockquote>
    </LegalPage>
  )
}
