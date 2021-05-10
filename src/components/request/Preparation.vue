<template>
  <section>
    <h3><a name="preparation" />Vorbereitung</h3>
    <ol>
      <li>
        Um den Teilnehmern eine schnelle Möglichkeit der Kontaktaufnahme zu bieten,
        werden beim Einrichten <strong>Name</strong>, <strong>Mobil-Nummer</strong> und
        <strong>E-Mail</strong> abgefragt. Diese Daten erscheinen auch auf der Übersicht
        der Livestream-Termine.<br>
        Zusätzlich wird eine <strong>5-stelligen Pin</strong> abgefragt.
        Hier bietet sich an, die Pin z.B. von Perfon zu übernehmen.<br>
        Dese Daten für die Beantragung bitte bereit halten.
      </li>
      <li>
        <p>
          Zunächst müssen die Termine im CMS gepflegt sein.
        </p>
        <p>
          Für die YouTube-Links verwendet das System das meist ungenutzte Feld <em>Veranstalter</em>:
          Hier den Link zu dem jeweils geplanten Live-Stream eintragen. <strong>Auf der Übersicht werden
            nur Termine mit einem Link erscheinen.</strong>
        </p>
        <b-card
          style="max-width:450px"
          class="my-5"
          img-src="@/assets/hilfe/termin-eintrag.png"
          img-alt="Termin Eintrag mit Link"
          img-top
        >
          <b-card-text>
            <em>Termin Eintrag mit Link</em>
          </b-card-text>
        </b-card>
      </li>
      <li>
        Für den Kalender einen <strong>Export</strong> anlegen. Dabei müssen folgende Parameter gewählt werden:
        <ul>
          <li>Name: am besten mit dem Gemeindenamen, z.B. <em>Livestreams - Gemeinde Stockach</em></li>
          <li>Format: <strong>JSON</strong></li>
          <li>Zeitzone: <strong>Europa/Berlin</strong></li>
          <li>Status: <strong>Nur freigeschaltete</strong></li>
        </ul>
        <b-card
          style="max-width:580px"
          class="my-5"
          img-src="@/assets/hilfe/config-export.png"
          img-alt="Einstellungen für den Export"
          img-top
        >
          <b-card-text>
            <em>Einstellungen für den Export</em>
          </b-card-text>
        </b-card>
        <p>
          Wird dieser Export gespeichert, so erhält man in der Übersichtsliste die Möglichkeit
          den Abruf-Link in der Spalte <strong>Interner Link</strong> aufzurufen.
          <strong>Diesen Link bitte für die Beantragung im Folgenden speichern!</strong>
        </p>
        <b-card
          class="my-5"
          img-src="@/assets/hilfe/export-link.png"
          img-alt="Einstellungen für den Export"
          img-top
        >
          <b-card-text>
            <em>Einstellungen für den Export</em>
          </b-card-text>
        </b-card>
        <p>
          Nicht erschrecken, im Browser müsste sich ein unformatierter Text mit vielen
          Klammern (<code>[</code>, <code>]</code>, <code>{</code> und <code>{</code>) öffnen:

          <b-card
            style="max-width:580px"
            class="my-5"
            img-src="@/assets/hilfe/json-export.png"
            img-alt="Beispiel eines Exports"
            img-top
          >
            <b-card-text>
              <em>Beispiel eines Exports</em>
            </b-card-text>
          </b-card>
        </p>
      </li>
    </ol>
  </section>
</template>
