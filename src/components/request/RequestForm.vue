<template>
  <section>
    <h2><a name="request" />Testen und Aufnahme beantragen</h2>
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
        class="my-5"
      >
        <b-input-group>
          <b-form-input
            v-model="testingFeed"
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
    <b-row v-if="requestData.Feed">
      <b-col>
        <h4>Antrag</h4>
        <b-form @submit.prevent="submitRequest">
          <b-form-group
            label="Export Link-Adresse"
          >
            <b-form-input
              v-model="requestData.Feed"
              type="url"
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
              type="text"
              required
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
            description="5-stellige Pin die den Zugang schützt. Könnte z.B. identisch mit Perfon-Pin sein."
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
          <p>Die Kontaktinformationen erscheinen für die Zuschauer:innen auf der Pin-geschützten Livestream-Seite.</p>
          <b-form-group
            label="Vorname"
          >
            <b-form-input
              v-model="requestData.Firstname"
              type="text"
              autocomplete="fname"
              required
            />
          </b-form-group>
          <b-form-group
            label="Nachname"
          >
            <b-form-input
              v-model="requestData.Lastname"
              type="text"
              autocomplete="lname"
              required
            />
          </b-form-group>
          <b-form-group
            label="E-Mail"
          >
            <b-form-input
              v-model="requestData.Mail"
              type="email"
              autocomplete="email"
              required
            />
            <b-form-group
              label="Telefon"
              description="Hier bietet sich eine Mobil-Nummer an, um auch kurzfristig erreichbar zu sein."
            >
              <b-form-input
                v-model="requestData.Fon"
                type="tel"
                autocomplete="tel"
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
      </b-col>
      <b-col>
        <h2>Vorschau</h2>
        <b-card
          v-if="requestData"
        >
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
</template>

<script>
import congregationService from '@/services/congregation.service'
import EventList from '@/components/EventList.vue'

export default {
  name: 'RequestForm',
  components: { EventList },
  data () {
    return {
      requestData: {
        Feed: null
      },
      testingFeed: null,
      testingUrlField: 'organizer'
    }
  },
  mounted () {
    this.requestData.pin = this.randomIntFromInterval(11111, 99999)
  },
  methods: {
    testFeed () {
      this.requestData.Feed = this.testingFeed
    },
    submitRequest () {
      congregationService.request(this.requestData)
        .then((result) => {
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

<style lang="scss" scoped>
@import '@/assets/scss/custom-vars.scss';
.browser-bar {
  background-color: env(--gray);
}
</style>
