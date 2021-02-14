<template>
  <div>
    <b-card-group
      v-if="eventList"
    >
      <event-item
        v-for="event in eventList"
        :key="event.id"
        :event="event"
      />
    </b-card-group>
    <div
      v-else
      class="d-flex align-items-center loading"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
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
    }
  },
  data () {
    return {
      eventList: null,
      isLoading: true
    }
  },
  created () {
    buuiltCalendar.getList(this.feedUrl)
      .then(result => {
        this.eventList = result
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  min-height: 200px;
  .spinner-border {
    margin-right: 0.5rem;
  }
}
</style>
