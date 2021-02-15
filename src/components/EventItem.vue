<template>
  <b-card class="event">
    <template #header>
      <h4 v-text="event.name" />
    </template>
    <b-card-text>
      <span v-if="event.start">
        {{ startDate }}
      </span>
      &dash;
      <span v-if="event.end">
        {{ endDate }}
      </span>
    </b-card-text>
    <!-- b-card-text v-if="videoId">
      <youtube :video-id="videoId" />
    </!-->
    <b-card-text>
      <a
        v-if="event.location"
        :href="event.location"
      >
        <b-img
          class="d-inline-block align-top"
          src="@/assets/logo.png"
          height="20"
        /> {{ event.location }}
      </a>
    </b-card-text>
    <b-card-text v-text="event.description" />
  </b-card>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
export default {
  name: 'EventItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    startDate () {
      if (this.event.start) {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }
        return this.event.start.toLocaleString('de-DE', options)
      }
      return ''
    },
    endDate () {
      if (this.event.end) {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }
        return this.event.end.toLocaleString('de-DE', options)
      }
      return ''
    },
    videoId () {
      return getIdFromURL(this.event.location)
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  min-width: 340px;
}
</style>
