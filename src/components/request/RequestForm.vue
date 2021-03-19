<template>
  <b-form @submit.prevent="submitRequest">
    <b-form-group
      label="Feed-URL"
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
          type="url"
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
</template>

<script>
import congregationService from '@/services/congregation.service'

export default {
  name: 'RequestForm',
  props: {
    request: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      requestData: {
        // Feed: 'https://www.nak-tuttlingen.de/api/tree/38/A86DCC6A-7E88-11EB-9566-BA2F0201BD0E/export'
      }
    }
  },
  mounted () {
    this.requestData.pin = this.randomIntFromInterval(11111, 99999)
  },
  methods: {
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
