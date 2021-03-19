<template>
  <section>
    <h3>Vorbereitung</h3>
    <ol>
      <li>Zunächst müssen die Termine im CMS gepflegt sein.</li>
      <li>
        Für die YouTube-Links verwendet das System das meist ungenutzte Feld <em>Veranstalter</em>:
        Hier den Link zu dem jeweils geplanten Live-Stream eintragen. Auf der Übersicht werden
        nur Termine mit einem Link erscheinen.
        <b-img
          src="@/assets/hilfe/termin-eintrag.png"
          width="320"
          class="m-3"
          alt="Termin Eintrag mit Link"
        />
      </li>
      <li>
        <b-img
          src="@/assets/hilfe/config-export.png"
          width="420"
          class="m-3"
          right
          alt="Einstellungen für den Export"
        />
        Für den Kalender einen <strong>Export</strong> anlegen. Dabei müssen folgende Parameter gewählt werden:
        <ul>
          <li>Name: am besten mit dem Gemeindenamen, z.B. <em>Termine - Gemeinde Stockach</em></li>
          <li>Format: <em>JSON</em></li>
          <li>Zeitzone: <em>Europa/Berlin</em></li>
          <li>Status: <em>Nur freigeschaltete</em></li>
        </ul>
        <p>
          Wird dieser Export gespeichert, so erhält man in der Übersichtsliste die Möglichkeit
          den Abruf-Link in der Spalte <em>Interner Link</em> aufzurufen. Im Browser müsste sich
          ein unformatierter Text mit vielen geschweiften Klammern ("{" und "}") öffnen.<br>
          Diesen Link bitte für die Beantragung im Folgenden speichern!
        </p>
        <b-img
          src="@/assets/hilfe/export-link.png"
          class="m-3"
          fluid
          alt="Einstellungen für den Export"
        />
      </li>
    </ol>
  </section>
</template>
