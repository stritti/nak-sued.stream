<template>
  <div>
    <div
      v-if="error"
      v-text="error"
    />
    <BPlaceholderWrapper
      :loading="isLoading"
      style="width:100%"
    >
      <template #loading>
        <BCard class="event my-3">
          <template #header>
            <BPlaceholder width="100%" />
          </template>
          <BPlaceholder width="85%" />
          <BPlaceholder width="55%" />
          <BPlaceholder width="70%" />
        </BCard>
        <BCard class="event my-3">
          <template #header>
            <BPlaceholder width="100%" />
          </template>
          <BPlaceholder width="85%" />
          <BPlaceholder width="55%" />
          <BPlaceholder width="70%" />
        </BCard>
      </template>
      <div v-if="hasEvents">
        <event-item
          v-for="event in eventList"
          :key="event.id"
          :event="event"
          class="my-3"
        />
      </div>
      <BAlert
        v-else
        show
        class="my-5"
      >
        Aktuell sind keine Livestreams geplant.<br>
        Weitere Gemeinden mit Livestreams finden sich im
        <router-link
          to="/verzeichnis"
        >
          <strong>Verzeichnis.</strong>
        </router-link>
      </BAlert>
    </BPlaceholderWrapper>
  </div>
</template>

<script>
import buuiltCalendar from '@/services/buuiltCalendar.service'
import EventItem from './EventItem.vue'

export default {
  name: 'EventList',
  components: { EventItem },
  props: {
    feedUrl: {
      type: String,
      required: true
    },
    urlField: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: false,
      default: null
    }
  },
  data () {
    return {
      eventList: null,
      isLoading: null,
      error: null
    }
  },
  computed: {
    hasEvents () {
      return (!this.isLoading && (this.eventList !== null) && (this.eventList.length > 0))
    }
  },
  watch: {
    feedUrl (newVal, oldVal) {
      this.loadCalendar()
    }
  },
  created () {
    this.loadCalendar()
  },
  methods: {
    loadCalendar () {
      this.isLoading = true
      this.eventList = []
      buuiltCalendar.getList(this.feedUrl, this.urlField, this.filter)
        .then(result => {
          this.eventList = result
          this.redirectTodayEvent()
          this.error = false
        })
        .catch(ex => {
          this.error = ex
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    redirectTodayEvent () {
      const OFFSET_HOURS_START = -1
      const OFFSET_HOURS_END = 2
      if (this.eventList && this.eventList.length > 0) {
        const event = this.eventList[0]
        const today = new Date()
        const start = new Date(today)
        start.setHours(start.getHours() + OFFSET_HOURS_START)

        const end = new Date(today)
        end.setHours(end.getHours() + OFFSET_HOURS_END)

        if (start <= event.start && event.start <= end) {
          this.$gtag.event('stream_redirect', {
            event_category: 'engagement',
            event_label: 'Redirect to stream'
          })
          setTimeout(() => {
            window.location.href = event.url
          }, 1500)
        }
      }
    }
  }
}
</script>

<style scoped>
.event-list {
  margin-bottom: 1.5rem;
}
.no-events {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  text-align: center;
}
</style>
