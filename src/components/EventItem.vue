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
        @click="track"
      >
        <b-img
          class="d-inline-block align-top"
          src="/assets/logo.png"
          alt="Livestream"
          height="20"
        />&nbsp;{{ event.url }}
      </a>
    </b-card-text>
    <vue-simple-markdown :source="event.description" />
  </b-card>
</template>

<script>
// Temporarily remove YouTube embed functionality

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
      // Temporarily removed YouTube embed functionality
      return null
    }
  },
  methods: {
    track () {
      this.$gtag.event('stream_click', {
        event_category: 'engagement',
        event_label: 'Click to stream'
      })
    }
  }
}
</script>
