<template>
  <div class="streams">
    <h1>Live Streams</h1>
    <p>
      Folgende Livestreams sind geplant:
    </p>
    <event-list :url="$route.params.url" />
  </div>
</template>

<script>
import EventList from '@/components/EventList.vue'

export default {
  name: 'Stream',
  components: { EventList }
}
</script>
