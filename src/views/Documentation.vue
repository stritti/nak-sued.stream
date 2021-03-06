import buuiltCalendar from '@/services/buuiltCalendar.service';
<template>
  <div class="documentation">
    <h1>Dokumentation</h1>
    <section>
      <h3>Voraussetzungen</h3>
      <p>
        Dieser Service ist für die Gemeinden und Kirchenbezirke kostenlos.
      </p>
      <p>
        Folgende Voraussetzungen müssen derzeit erfüllt sein, damit die
        Livestreams über diese Seite angeboten werden können.<br>
        Für Erweitungen oder Anpassungen, bitte mit dem
        <router-link to="/kontakt">
          Entwicker kontakt aufnehmen
        </router-link>.
      </p>
      <ol>
        <li>
          Die Termine der Gottesdienste werden im CMS (Buuilt) gepflegt.
          Die Kirchenbezirke und fast alle Gemeinden der Gebietskirche NAK Süddeutschland nutzen dieses System.
        </li>
        <li>
          Es muss ein <strong>Export</strong> für den ensprechenden Kalender angelegt werden können.
          Hier muss ggfs. der Webmaster des Kirchenbezirks oder des Apostelbereichs unterstützen.
        </li>
      </ol>
    </section>
    <section>
      <h3>Vorbereitung</h3>
      <ol>
        <li>Zunächst müssen die Termine im CMS gepflegt sein.</li>
        <li>
          Für die YouTube-Links verwendet das System das meist ungenutzte Feld <em>Veranstalter</em>:
          Hier den Link zu dem jeweils geplanten Live-Stream eintragen. Auf der Übersicht werden
          nur Termine mit einem Link erscheinen.
        </li>
        <li>
          Für den Kalender einen <strong>Export</strong> anlegen. Dabei müssen folgende Parameter gewählt werden:
          <ul>
            <li>Name: am besten mit dem Gemeindenamen, z.B. <em>Termine - Gemeinde Stockach</em></li>
            <li>Format: <em>JSON</em></li>
            <li>Zeitzone: <em>Europa/Berlin</em></li>
            <li>Status: <em>Nur freigeschaltete</em></li>
          </ul>
          Wird dieser Export gespeichert, so erhält man in der Übersichtsliste die Möglichkeit
          den Abruf-Link in der Spalte <em>Interner Link</em> aufzurufen. Im Browser müsste sich
          ein unformatierter Text mit vielen geschweiften Klammern ("{" und "}") öffnen.<br>
          Diesen Link bitte für die Beantragung im Folgenden speichern!
        </li>
      </ol>
    </section>
    <section>
      <h2>Testen und Aufnahme beantragen</h2>
      <p>
        Hier kann zum Testen der Link vom Kalender-Export eingegeben werden.
        Ist er korrekt, so sollte eine Vorschau des Kalenders rechts angezeigt werden.
      </p>
      <p>
        Danach sind noch ein paar Angeben notwendig.
      </p>
      <b-form @submit.prevent="testFeed">
        <b-form-group
          label="Feed-URL"
        >
          <b-input-group>
            <b-form-input
              v-model="requestData.Feed"
              placeholder="Feed-URL"
              type="url"
              required
            />
            <b-input-group-append>
              <b-button
                variant="primary"
                type="submit"
              >
                Testen
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-form>
      <b-row>
        <b-col>
          <div v-if="testingFeed">
            <h4>Antrag</h4>
            <b-form @submit.prevent="submitRequest">
              <b-form-group
                label="Feed-URL"
              >
                <b-form-input
                  v-model="requestData.Feed"
                  required
                  disabled
                />
              </b-form-group>
              <b-form-group
                label="Seiten-Titel"
                description="z.B. 'Gemeinde Stockach'"
              >
                <b-form-input
                  v-model="requestData.Name"
                  placeholder="Gemeinde XYZ"
                  required
                />
              </b-form-group>
              <b-form-group
                label="Zugangs-Pin"
                description="5-stellige Pin die den Zugang schützt. Könnte identisch mit Perfon sein."
              >
                <b-form-input
                  v-model="requestData.pin"
                  placeholder="12345"
                  type="number"
                  max="99999"
                  min="10000"
                  step="1"
                  :formatter="pinFormatter"
                  required
                />
              </b-form-group>
              <h5>Hinweis</h5>
              <b-form-group
                label="Hinweis"
                description="Allgemeiner Hinweis für die Teilnehmer, der auf der Seite veröffentlicht werden soll."
              >
                <b-form-textarea
                  v-model="requestData.Notes"
                  type="text"
                  rows="3"
                  max-rows="6"
                />
              </b-form-group>
              <hr>
              <h5>Ansprechpartner:in</h5>
              <p>Die Kontaktinformationen erscheinen auf der PIN-geschützten Livestream-Seite.</p>
              <b-form-group
                label="Vorname"
              >
                <b-form-input
                  v-model="requestData.Firstname"
                  type="text"
                  required
                />
              </b-form-group>
              <b-form-group
                label="Nachname"
              >
                <b-form-input
                  v-model="requestData.Lastname"
                  type="text"
                  required
                />
              </b-form-group>
              <b-form-group
                label="E-Mail"
              >
                <b-form-input
                  v-model="requestData.Mail"
                  type="email"
                  required
                />
                <b-form-group
                  label="Telefon"
                >
                  <b-form-input
                    v-model="requestData.Fon"
                    type="tel"
                    required
                  />
                </b-form-group>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
              >
                Beantragen
              </b-button>
            </b-form>
          </div>
          <div
            v-else
            class="my-5"
          />
        </b-col>
        <b-col>
          <b-card v-if="testingFeed">
            <h2>Vorschau</h2>
            <hr>
            <h2>Livestreams</h2>
            <h3
              v-text="requestData.Name"
            />
            <event-list
              :feed-url="testingFeed"
              :url-field="testingUrlField"
            />
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import EventList from '../components/EventList.vue'
import congregationService from '@/services/congregation.service'

export default {
  name: 'Documentation',
  components: { EventList },
  metaInfo: {
    title: 'Dokumentation'
  },
  data () {
    return {
      requestData: {
        // Feed: 'https://www.nak-tuttlingen.de/api/tree/38/A86DCC6A-7E88-11EB-9566-BA2F0201BD0E/export'
      },
      testingFeed: null,
      testingUrlField: 'organizer'
    }
  },
  methods: {
    testFeed () {
      if (this.requestData.Feed) {
        this.testingFeed = this.requestData.Feed
      }
    },
    submitRequest () {
      console.log(this.requestData)
      congregationService.request(this.requestData)
        .then((result) => {
          console.log(result)
          this.$router.push({ name: 'Requested' })
        })
    },
    pinFormatter (e) {
      return String(e).substring(0, 5)
    }
  }
}
</script>
