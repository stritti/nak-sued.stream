<template>
  <div class="streams">
    <template v-if="isLoading">
      <div
        style="max-width: 20rem;"
        class="my-5 mx-auto align-items-center loading"
      >
        <b-spinner /> Lade Daten &hellip;
      </div>
    </template>
    <template v-if="congregation">
      <h1>Livestreams</h1>
      <h2 v-text="congregation.Name" />
      <p>
        Folgende Livestreams sind aktuell geplant:
      </p>
      <b-row>
        <b-col
          md="8"
          sm="12"
        >
          <event-list
            v-if="congregation"
            :feed-url="congregation.Feed"
            :url-field="congregation.Field"
            :filter="congregation.Filter"
          />
          <p class="my-5">
            Bitte beachten Sie, dass bei dem Besuch der Livestreams
            Ihre personenbezogenen Daten von der Streamingplattform (z. B. YouTube)
            verarbeitet werden.
          </p>
        </b-col>
        <b-col
          md="4"
          sm="12"
        >
          <streaming-notes
            :notes="congregation.Notes"
            class="my-3"
          />

          <streaming-contact
            :congregation="congregation"
            class="my-5"
          />
        </b-col>
      </b-row>
    </template>
    <template v-else-if="isPinRequired">
      <b-card
        v-if="!isLoading"
        title="Pin-Code"
        style="max-width: 350px;"
        class="mx-auto my-5 align-items-center"
      >
        <b-card-text>
          <code-input
            class="input"
            :fields="5"
            auto-focus
            @complete="onPinComplete"
          />
        </b-card-text>
        <b-card-text class="text-muted">
          Bitte Pin-Code eingeben.
        </b-card-text>
        <hr>
        <b-card-text class="text-muted">
          Die Zugangsdaten können bei der/dem Verantwortlichen angefragt werden:
          <b-button
            size="sm"
            variant="outline-primary"
            @click="$bvModal.show('bv-modal-pinrequest')"
          >
            Pin-Anfrage
          </b-button>
          <pin-request-form :slug="$route.params.url" />
        </b-card-text>
        <b-card-text class="text-muted">
          Wir freuen uns über alle Zuschauer:innen
        </b-card-text>
      </b-card>
    </template>
  </div>
</template>

<script>
import congregationService from '@/services/congregation.service'
import CodeInput from 'vue-verification-code-input'
import EventList from '@/components/EventList.vue'
import StreamingContact from '@/components/StreamingContact.vue'
import StreamingNotes from '@/components/StreamingNotes.vue'
import PinRequestForm from '@/components/contact/PinRequestForm.vue'

export default {
  name: 'Stream',
  components: { CodeInput, EventList, StreamingContact, StreamingNotes, PinRequestForm },
  metaInfo: {
    title: 'Stream'
  },
  data () {
    return {
      congregation: null,
      isLoading: false,
      isPinRequired: null
    }
  },
  mounted () {
    this.loadIsPinRequired(this.$route.params.url)
  },
  methods: {
    onPinComplete (pin) {
      this.loadCongregation(this.$route.params.url, pin)
    },
    loadIsPinRequired (slug) {
      congregationService.isPinRequired(slug)
        .then(result => {
          this.isPinRequired = result
          if (!this.isPinRequired) {
            this.loadCongregationNoPin(slug)
          }
        })
        .catch(ex => {
          this.redirectNotFound(slug)
        })
    },
    loadCongregation (slug, pin) {
      this.isLoading = true
      congregationService.get(slug, pin)
        .then(result => {
          if (result) {
            this.congregation = result
          }
        })
        .catch(ex => {
          this.redirectNotFound(slug)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    loadCongregationNoPin (slug) {
      this.isLoading = true
      congregationService.getWithoutPin(slug)
        .then(result => {
          if (result) {
            this.congregation = result
          }
        })
        .catch(ex => {
          this.redirectNotFound(slug)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    redirectNotFound (slug) {
      console.error('No stream found for slug ' + slug)
      this.$router.push({ name: 'Directory', params: { notFound: true } })
    }
  }
}
</script>

<style lang="scss">
.react-code-input {
  > input {
    font-family: var(--font-family-monospace) !important
  }
}
</style>
