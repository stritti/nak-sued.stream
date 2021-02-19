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
      <h1>Live Streams</h1>
      <h2 v-text="congregation.Name" />
      <p>
        Folgende Livestreams sind geplant:
      </p>
      <event-list
        v-if="congregation"
        :feed-url="congregation.Feed"
      />
    </template>
    <template v-else>
      <b-card
        v-if="!isLoading"
        title="Pin-Code"
        style="max-width: 20rem;"
        class="mx-auto my-5 align-items-center"
      >
        <b-card-text>
          <code-input
            class="input"
            :fields="5"
            @complete="onPinComplete"
          />
        </b-card-text>
        <b-card-text class="text-muted">
          Bitte Pin-Code eingeben.
        </b-card-text>
      </b-card>
    </template>
  </div>
</template>

<script>
import congregationService from '@/services/congregation.service'
import CodeInput from 'vue-verification-code-input'
import EventList from '@/components/EventList.vue'

export default {
  name: 'Stream',
  components: { CodeInput, EventList },
  metaInfo: {
    title: 'Stream'
  },
  data () {
    return {
      congregation: null,
      isLoading: false
    }
  },
  methods: {
    onPinComplete (pin) {
      this.loadCongregation(this.$route.params.url, pin)
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
          console.error('error', ex)
          this.$router.push('/')
        })
        .finally(() => {
          this.isLoading = false
        })
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
