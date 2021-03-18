import buuiltCalendar from '@/services/buuiltCalendar.service';
<template>
  <div class="request">
    <h1>Anfrage stellen</h1>
    <b-alert show>
      <b-icon-info-circle
        class="h2 mr-1"
      />
      Dieser Service ist für die Gemeinden und Kirchenbezirke der Neuapostolischen Kirche kostenlos.
    </b-alert>
    <p>
      Hier kann eine Anfrage auf Aufnahme gestellt werden.
    </p>
    <section>
      <h3>Voraussetzungen</h3>
      <p>
        Folgende Voraussetzungen müssen erfüllt sein, damit die
        Livestreams über diese Seite angeboten werden können.<br>
        Für Erweitungen oder Anpassungen, die über die folgenden Anforderungen hinaus gehen, bitte mit dem
        <router-link
          to="/kontakt"
        >
          Entwickler Kontakt aufnehmen
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
    <section>
      <h2>Testen und Aufnahme beantragen</h2>
      <p>
        Hier kann zum Testen der Link vom Kalender-Export eingegeben werden.
        Ist er korrekt, so sollte eine Vorschau des Kalenders rechts angezeigt werden.
      </p>
      <p>
        Danach sind noch ein paar Angaben notwendig.
      </p>
      <b-form @submit.prevent="testFeed">
        <b-form-group
          label="Export Link-Adresse"
        >
          <b-input-group>
            <b-form-input
              v-model="requestData.Feed"
              placeholder="Export Link"
              description="Der Export-Link aus dem CMS"
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
                label="Export Link-Adresse"
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
                label="Webseite"
                description="Link-Adresse zur Seite der Gemeinde/des Bezirks"
              >
                <b-form-input
                  v-model="requestData.Website"
                  placeholder="http://www.nak-gemeinde.de"
                  type="url"
                />
              </b-form-group>
              <b-form-group
                label="gewünschter Link"
                description="Gewünschter Link für den Stream. Muss eindeutig sein und wird deshalb ggfs. angepasst."
              >
                <b-input-group
                  prepend="https://www.nak-sued.stream/"
                >
                  <b-form-input
                    v-model="requestData.slug"
                    placeholder="gemeinde"
                    :formatter="slugFormatter"
                    required
                  />
                </b-input-group>
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
  name: 'Request',
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
        this.requestData.pin = this.randomIntFromInterval(11111, 99999)
      }
    },
    submitRequest () {
      congregationService.request(this.requestData)
        .then((result) => {
          console.log(result)
          this.$router.push({ name: 'Requested' })
        })
    },
    pinFormatter (value) {
      return String(value).substring(0, 5)
    },
    slugFormatter (value) {
      value = value.toLowerCase()
      value = value.replace(/([^a-z0-9]+)/gi, '-')
      value = value.startsWith('-') ? value.slice(1, value.length) : value
      return value
    },
    randomIntFromInterval (min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>
