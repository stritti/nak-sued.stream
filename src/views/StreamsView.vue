<template>
  <div class="streams">
    <template v-if="isLoading">
      <div
        style="max-width: 20rem;"
        class="my-5 mx-auto align-items-center loading text-center"
      >
        <BSpinner variant="primary" /> Lade Daten &hellip;
      </div>
    </template>
    <template v-if="congregation">
      <h1>Livestreams</h1>
      <h2 v-text="congregation.Name" />

      <BRow>
        <BCol
          md="8"
          sm="12"
        >
          <IPTVComponent
            v-if="hasIPTVService"
            :register-url="congregation.IPTVRegisterURL"
          />
          <span v-if="hasYouTubeService">
            <p>
              Folgende Livestreams sind aktuell geplant:
            </p>
            <EventList
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
          </span>
        </BCol>
        <BCol
          md="4"
          sm="12"
        >
          <StreamingNotes
            :notes="congregation.Notes"
            class="my-3"
          />

          <StreamingContact
            :congregation="congregation"
            class="my-5"
          />
        </BCol>
      </BRow>
    </template>
    <template v-else-if="isPinRequired">
      <BCard
        v-if="!isLoading"
        title="Pin-Code"
        style="max-width: 350px;"
        class="mx-auto my-5 align-items-center"
      >
        <BCardText>
          <PinInput
            class="input"
            :length="5"
            :auto-focus="true"
            @complete="onPinComplete"
          />
        </BCardText>
        <BCardText class="text-muted">
          Bitte Pin-Code eingeben.
        </BCardText>
        <hr>
        <BCardText class="text-muted">
          Die Zugangsdaten können bei der/dem Verantwortlichen angefragt werden:
          <BButton
            size="sm"
            variant="outline-primary"
            @click="showPinRequestModal"
          >
            Pin-Anfrage
          </BButton>
          <PinRequestForm :slug="$route.params.url" />
        </BCardText>
        <BCardText class="text-muted">
          Wir freuen uns über alle Zuschauer:innen
        </BCardText>
      </BCard>
    </template>
  </div>
</template>

<script>
import congregationService from '@/services/congregation.service'
import EventList from '@/components/EventList.vue'
import StreamingContact from '@/components/StreamingContact.vue'
import StreamingNotes from '@/components/StreamingNotes.vue'
import PinRequestForm from '@/components/contact/PinRequestForm.vue'
import PinInput from '@/components/PinInput.vue'
import IPTVComponent from '@/components/iptv/IPTVComponent.vue'

export default {
  name: 'Stream',
  components: { PinInput, EventList, StreamingContact, StreamingNotes, PinRequestForm, IPTVComponent },
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
  computed: {
    hasYouTubeService() {
      if (!this.congregation || !this.congregation.Services) {
        return false;
      }
      // Prüfen, ob Services ein Array ist oder ein String
      if (Array.isArray(this.congregation.Services)) {
        return this.congregation.Services.includes('YouTube');
      } else {
        return this.congregation.Services === 'YouTube' ||
               this.congregation.Services.includes('YouTube');
      }
    },
    hasIPTVService() {
      if (!this.congregation || !this.congregation.Services) {
        return false;
      }
      // Prüfen, ob Services ein Array ist oder ein String
      if (Array.isArray(this.congregation.Services)) {
        return this.congregation.Services.includes('IPTV');
      } else {
        return this.congregation.Services === 'IPTV' ||
               this.congregation.Services.includes('IPTV');
      }
    }
  },
  mounted () {
    this.loadIsPinRequired(this.$route.params.url)
  },
  methods: {
    showPinRequestModal() {
      // Verwende den Modal-Composable von Bootstrap Vue Next
      const modal = document.querySelector('#bv-modal-pinrequest');
      if (modal) {
        // Füge die notwendigen Klassen und Stile hinzu, um das Modal anzuzeigen
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Erstelle den Backdrop, falls er nicht existiert
        let backdrop = document.querySelector('.modal-backdrop');
        if (!backdrop) {
          backdrop = document.createElement('div');
          backdrop.classList.add('modal-backdrop', 'fade', 'show');
          document.body.appendChild(backdrop);
        }
      }
    },
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
/* Custom styles for pin input can be added here if needed */
</style>
