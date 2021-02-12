<template>
  <b-card class="event">
    <template #header>
      <h4 v-text="event.name" />
    </template>
    <b-card-text>
      <div>
        <span v-if="event.start">
          {{ startDate }}
        </span>
        &dash;
        <span v-if="event.end">
          {{ endDate }}
        </span>
      </div>
      <a
        v-if="event.location"
        :href="event.location"
      >
        {{ event.location }}
      </a>
    </b-card-text>
  </b-card>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  min-width: 340px;
}
</style>
