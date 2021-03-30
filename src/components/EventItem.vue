<template>
  <b-card class="event">
    <template #header>
      <h4 v-text="event.name" />
    </template>
    <b-card-text>
      <strong v-if="event.start">
        {{ startDate }} Uhr
      </strong>
      <strong v-if="event.location">
        aus {{ event.location }}
      </strong>
    </b-card-text>
    <b-card-text>
      <a
        v-if="event.url"
        :href="event.url"
      >
        <b-img
          class="d-inline-block align-top"
          src="@/assets/logo.png"
          height="20"
        />&nbsp;{{ event.url }}
      </a>
    </b-card-text>
    <vue-simple-markdown :source="event.description" />
  </b-card>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'

const DATE_FORMAT = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
}

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
        return this.event.start.toLocaleString('de-DE', DATE_FORMAT)
      }
      return ''
    },
    endDate () {
      if (this.event.end) {
        return this.event.end.toLocaleString('de-DE', DATE_FORMAT)
      }
      return ''
    },
    videoId () {
      return getIdFromURL(this.event.url)
    }
  }
}
</script>
