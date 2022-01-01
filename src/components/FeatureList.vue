<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th width="25%">
            Funktion
          </th>
          <th width="25%">
            nak-sued.stream
          </th>
          <th width="25%">
            Server Weiterleitung
          </th>
          <th width="25%">
            URL-Shortener
          </th>
        </tr>
      </thead>
      <tbody>
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
            <small>
              Nicht alle URL-Shortener erlauben das Ändern des hinterlegten
              Links für einen neuen Stream.
            </small>
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
            <small>
              Ist der kommende Livestream innerhalb der nächsten Stunde, so wird
              dieser automatisch gestartet.
            </small>
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
            <small>
              5-stellige Pin, kann auf Anfrage deaktiviert werden.
            </small>
          </td>
          <td>
            <b-icon
              icon="check-square-fill"
              variant="primary"
            /><br>
            <small>
              Je nach Server z.B. über
              <a
                href="https://netgrade.de/301-weiterleitung-generator/"
              >.htaccess</a>.
            </small>
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
            <small>Meist nur in kostenpflichtigen Pro-Versionen möglich.</small>
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
            <small>Nahtlose Integration in den öffentlichen Terminkalender der
              Gemeinde.</small>
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
            <small>Derzeit nicht geplant, da die Statistik z.B. von YouTube
              aussagekräftiger ist.</small>
          </td>
          <td>
            <b-icon icon="question-square" /><br>
            <small>Muss auf dem Server eingerichtet werden, z.B. über
              Server-Logs.</small>
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
            Austausch/Community
          </th>
          <td>
            <b-icon
              icon="check-square-fill"
              variant="primary"
            /><br>
            <small>Slack Workspace</small>
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
            Kosten
          </th>
          <td>
            <b-icon
              icon="check-square-fill"
              variant="primary"
            /><br>
            gratis
          </td>
          <td>
            <b-icon
              icon="check-square-fill"
              variant="primary"
            /><br>
            gratis
          </td>
          <td><small>Je nach Service und Ausbaustufe der Lizenz.</small></td>
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
            Über Server-Hosting (siehe z.B.:
            <a
              href="https://netgrade.de/301-weiterleitung-generator/"
            >Weiterleitung</a>)
          </td>
          <td>
            Passenden URL-Shortener suchen:
            <a
              href="https://meingd.de/"
              target="_blank"
            >meingd.de</a>,
            <a
              href="https://www.rebrandly.com/"
              target="_blank"
            >Rebrandly</a>,
            <a
              href="https://bitly.com/"
              target="_blank"
            >bit.ly</a>
            , &hellip;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FeatureList'
}
</script>
