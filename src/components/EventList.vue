<template>
  <div>
    <template v-if="eventList">
      <event-item
        v-for="event in eventList"
        :key="event.id"
        :event="event"
        class="my-3"
      />
    </template>
    <div
      v-if="isLoading"
      style="max-width: 20rem;"
      class="mx-auto my-5 align-items-center"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
    <div
      v-if="error"
      v-text="error"
    />
  </div>
</template>

<script>
import buuiltCalendar from '@/services/buuiltCalendar.service'
import EventItem from './EventItem.vue'
export default {
  name: 'SupporterList',
  components: { EventItem },
  props: {
    feedUrl: {
      type: String,
      required: true
    },
    urlField: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      eventList: null,
      isLoading: true,
      error: null
    }
  },
  watch: {
    feedUrl (newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.loadCalendar()
    }
  },
  created () {
    this.loadCalendar()
  },
  methods: {
    loadCalendar () {
      this.eventList = []
      buuiltCalendar.getList(this.feedUrl, this.urlField)
        .then(result => {
          console.log(result)
          this.eventList = result
          this.error = false
        })
        .catch(ex => {
          this.error = ex
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
