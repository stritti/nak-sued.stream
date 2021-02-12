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
import congregationService from '@/services/congregation.service'
import EventItem from './EventItem.vue'
export default {
  name: 'SupporterList',
  components: { EventItem },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      eventList: null
    }
  },
  created () {
    congregationService.get(this.url)
      .then(result => {
        this.congregation = result
        console.log(this.congregation)
        buuiltCalendar.getList(this.congregation[0].Feed)
          .then(result => {
            this.eventList = result
          })
      })
      .catch(ex => {
        console.log('error', ex)
        this.$router.push('/')
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
