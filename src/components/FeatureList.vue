<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th width="25%">
            Funktion
          </th>
          <th width="25%">
            nak-sued.stream
          </th>
          <th width="25%">
            redirect
          </th>
          <th width="25%">
            URL-Shortener (z.B. bit.ly)
          </th>
        </tr>
      </thead>
      <tr>
        <th scope="row">
          Ein fester Link für alle Livestreams
        </th>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          />
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          />
        </td>
        <td>
          <b-icon icon="question-square" /><br>
          <small>Nicht alle URL-Shortener erlauben das Ändern des hinterlegten Links.</small>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Automatischer Start des aktuellen Streams
        </th>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          /><br>
          <small>Ist der kommende Livestream innerhalb der nächsten Stunde, so wird dieser automatisch gestartet.</small>
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          />
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
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
            icon="check-square-fill"
            variant="primary"
          /><br>
          <small>5-stellige Pin (kann auf Anfrage deaktivier werden)</small>
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          /><br>
          <small>Je nach Server z.B. über .htaccess</small>
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
            icon="check-square-fill"
            variant="primary"
          /><br>
          <small>Sofern nicht schon vergeben.</small>
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          />
        </td>
        <td>
          <b-icon
            icon="square"
            variant="danger"
          /><br>
          <small>Meist nur in Pro-Versionen möglich.</small>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Vorplanung der Livestreams
        </th>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          /><br>
          <small>Nahtlose Integration in den öffentlichen Terminkalender der Gemeinde.</small>
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
          Aufbereitete Übersicht der geplanten Livestreams
        </th>
        <td>
          <b-icon
            icon="check-square-fill"
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
          Kontaktinformationen der Streaming-Verantwortlichen
        </th>
        <td>
          <b-icon
            icon="check-square-fill"
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
          <small>Derzeit nicht geplant, da die Statistik z.B. von YouTube aussagekräftiger ist.</small>
        </td>
        <td>
          <b-icon
            icon="question-square"
          /><br>
          <small>Muss auf dem Server eigerichtet werden, z.B. über Server-Logs.</small>
        </td>
        <td>
          <b-icon
            icon="check-square-fill"
            variant="primary"
          />
        </td>
      </tr>
      <tr>
        <th scope="row">
          Einrichten
        </th>
        <td>
          <b-button
            variant="primary"
            to="/anfrage"
          >
            Anfrage stellen &hellip;
          </b-button>
        </td>
        <td>
          Über eigenes Server-Hosting
        </td>
        <td>
          Passenden URL-Shortener suchen
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FeatureList'

}
</script>
