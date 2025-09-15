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
<template>
  <div class="event-list">
    <BPlaceholderWrapper v-if="isLoading">
      <div v-for="i in 3" :key="i" class="mb-3">
        <BPlaceholder width="85%" height="24px" class="mb-1"></BPlaceholder>
        <BPlaceholder width="60%" height="16px" class="mb-1"></BPlaceholder>
        <BPlaceholder width="40%" height="16px"></BPlaceholder>
      </div>
    </BPlaceholderWrapper>
    <div v-else-if="events.length === 0" class="no-events">
      <p>Aktuell sind keine Livestreams geplant.</p>
    </div>
    <div v-else>
      <EventItem
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
import EventItem from './EventItem.vue'
import buuiltCalendarService from '@/services/buuiltCalendar.service'

export default {
  name: 'EventList',
  components: {
    EventItem
  },
  props: {
    feedUrl: {
      type: String,
      required: true
    },
    urlField: {
      type: String,
      default: 'organizer'
    },
    filter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      events: [],
      isLoading: true
    }
  },
  mounted() {
    this.loadEvents()
  },
  methods: {
    loadEvents() {
      this.isLoading = true
      buuiltCalendarService.getList(this.feedUrl, this.urlField, this.filter)
        .then(events => {
          this.events = events
        })
        .catch(error => {
          console.error('Error loading events:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
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
