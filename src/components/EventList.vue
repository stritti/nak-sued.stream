<template>
  <div>
    <div
      v-if="error"
      v-text="error"
    />
    <b-skeleton-wrapper
      :loading="isLoading"
      style="width:100%"
    >
      <template #loading>
        <b-card class="event my-3">
          <template #header>
            <b-skeleton width="100%" />
          </template>
          <b-skeleton width="85%" />
          <b-skeleton width="55%" />
          <b-skeleton width="70%" />
        </b-card>
        <b-card class="event my-3">
          <template #header>
            <b-skeleton width="100%" />
          </template>
          <b-skeleton width="85%" />
          <b-skeleton width="55%" />
          <b-skeleton width="70%" />
        </b-card>
      </template>
      <template v-if="hasEvents">
        <event-item
          v-for="event in eventList"
          :key="event.id"
          :event="event"
          class="my-3"
        />
      </template>
      <template v-else>
        <b-alert
          show
          class="my-5"
        >
          Aktuell sind keine Livestreams geplant.
        </b-alert>
      </template>
    </b-skeleton-wrapper>
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
        today.setMinutes(0)
        const start = new Date(today)
        start.setHours(start.getHours() + OFFSET_HOURS_START)

        const end = new Date(today)
        end.setHours(end.getHours() + OFFSET_HOURS_END)

        if (start <= event.start && event.start <= end) {
          const delayInMilliseconds = 3000 // 3 seconds
          setTimeout(() => {
            window.location.href = event.url
          }, delayInMilliseconds)
        }
      }
    }
  }
}
</script>
