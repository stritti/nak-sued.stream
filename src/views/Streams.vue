<template>
  <div class="streams">
    <h1>Live Streams</h1>
    <p>
      Folgende Livestreams sind geplant:
    </p>
    <event-list
      v-if="congregation"
      :feed-url="congregation.Feed"
    />
  </div>
</template>

<script>
import congregationService from '@/services/congregation.service'
import EventList from '@/components/EventList.vue'

export default {
  name: 'Stream',
  components: { EventList },
  data () {
    return {
      congregation: null

    }
  },
  created () {
    this.loadCongregation()
  },
  methods: {
    loadCongregation () {
      congregationService.get(this.$route.params.url)
        .then(result => {
          if (result) {
            this.congregation = result
          } else {
            this.$router.push('/')
          }
        })
        .catch(ex => {
          console.error('error', ex)
          this.$router.push('/')
        })
    }
  }
}
</script>
