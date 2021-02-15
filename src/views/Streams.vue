<template>
  <div class="streams">
    <template v-if="isLoading">
      <div
        class="d-flex align-items-center loading"
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
      <div class="input-wrapper">
        <code-input
          class="input"
          :fields="5"
          title="Pin-Code"
          @complete="onPinComplete"
        />
      </div>
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
          } else {
            this.$router.go()
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
