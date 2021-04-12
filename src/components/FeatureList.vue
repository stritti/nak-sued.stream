<template>
  <table class="table">
    <thead>
      <tr>
        <th>Funktion</th>
        <th>nak-sued.stream</th>
        <th>redirect</th>
        <th>URL-Shortener (z.B. bit.ly)</th>
      </tr>
    </thead>
    <tr>
      <th scope="row">
        Ein Link für alle Livestreams
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon icon="question-square" /><br>
        <small>(nicht alle URL-Shortener erlauben das Ändern des hinterlegten Links)</small>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Automatischer Start des aktuellen Streams
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
    </tr>
    <tr>
      <th scope="row">
        Schutz mit Passwort/Pin
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        /><br>
        <small>(5-stellige Pin)</small>
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        /><br>
        <small>(je nach Server z.B. über .htaccess)</small>
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        />
      </td>
    </tr>
    <tr>
      <th scope="row">
        Freie Auswahl des Links
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        /><br>
        <small>(sofern nicht schon vergeben)</small>
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        /><br>
        <small>(meist nur in Pro-Versionen möglich)</small>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Vorplanung der Livestreams
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        /><br>
        <small>(nahtlose Integration in den öffentlichen Terminkalender der Gemeinde)</small>
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        />
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        />
      </td>
    </tr>
    <tr>
      <th scope="row">
        Aufbereitete Übersicht der Livestreams mit Kontaktinformationen
      </th>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        />
      </td>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        />
      </td>
    </tr>
    <tr>
      <th scope="row">
        Analytics (Zugriffsstatistik)
      </th>
      <td>
        <b-icon
          icon="square"
          variant="danger"
        /><br>
        <small>(Derzeit nicht geplant, da die Statistik z.B. von YouTube aussagekräftiger ist.)</small>
      </td>
      <td>
        <b-icon
          icon="question-square"
        /><br>
        <small>Muss auf dem Server eigerichtet werden. Z.B. über Server-Logs)</small>
      </td>
      <td>
        <b-icon
          icon="check-square"
          variant="primary"
        />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'FeatureList'

}
</script>
