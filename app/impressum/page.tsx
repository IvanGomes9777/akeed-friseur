import { LegalPage } from "@/components/legal-page"
import { business } from "@/lib/data"

export const metadata = {
  title: "Impressum — Beispiel Friseur",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
}

export default function ImpressumPage() {
  return (
    <LegalPage eyebrow="Anbieterkennzeichnung" title="Impressum" updated="Mai 2026">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>{business.name}</strong>
        <br />
        Inhaber: [Vorname Nachname des Inhabers]
        <br />
        {business.address.street}
        <br />
        {business.address.zip} {business.address.city}, Deutschland
      </p>

      <p>
        <em>
          Hinweis: Diese Seite wird derzeit mit Platzhalterdaten betrieben.
          Die hier angezeigten Angaben sind Beispieldaten und entsprechen
          keinem real existierenden Unternehmen.
        </em>
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href={business.phoneLink}>{business.phone}</a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        <em>[USt-ID hier eintragen, falls vorhanden]</em>
      </p>

      <h2>Berufsbezeichnung</h2>
      <p>
        Berufsbezeichnung: Friseurmeister*in
        <br />
        Verliehen in: Deutschland
        <br />
        Zuständige Kammer: [zuständige Handwerkskammer eintragen]
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        [Vorname Nachname des Inhabers]
        <br />
        {business.address.street}
        <br />
        {business.address.zip} {business.address.city}
      </p>

      <h2>Verbraucher­streit­beilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 7 bis
        10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
        auch keine Gewähr übernehmen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht.
      </p>

      <hr />
      <blockquote>
        Hinweis: Dieses Impressum ist eine Vorlage. Bitte ergänze noch
        Nachname, ggf. USt-ID und prüfe alle Angaben mit einem Rechtsbeistand vor
        Live-Schaltung.
      </blockquote>
    </LegalPage>
  )
}
