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
      Hier kann die Anfrage zur Aufnahme gestellt werden.
    </p>
    <requirements />

    <preparation />

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
          <request-form :request="requestData" />
        </b-col>
        <b-col>
          <b-card>
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
import Requirements from '../components/request/Requirements.vue'
import Preparation from '../components/request/Preparation.vue'
import RequestForm from '../components/request/RequestForm.vue'
import EventList from '../components/EventList.vue'

export default {
  name: 'Request',
  components: { Requirements, Preparation, RequestForm, EventList },
  metaInfo: {
    title: 'Anfrage'
  },
  data () {
    return {
      requestData: {
        // Feed: 'https://www.nak-tuttlingen.de/api/tree/38/A86DCC6A-7E88-11EB-9566-BA2F0201BD0E/export'
      },
      // testingFeed: null,
      testingFeed: 'https://www.nak-tuttlingen.de/api/tree/38/A86DCC6A-7E88-11EB-9566-BA2F0201BD0E/export',
      testingUrlField: 'organizer'
    }
  },
  methods: {
    testFeed () {
      console.log('testFeed')
      this.requestData.Feed = this.testingFeed
    }
  }
}
</script>
