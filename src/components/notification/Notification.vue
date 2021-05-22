<template>
  <div
    v-if="hasNotifications"
    id="global-notification"
  >
    <div
      v-for="item in notificationList"
      :key="item.id"
    >
      <b-alert
        show
        :variant="item.Level"
      >
        <h3>{{ item.Titel }}</h3>
        <vue-simple-markdown :source="item.Message.replaceAll('\\', '')" />
      </b-alert>
    </div>
  </div>
</template>

<script>
import globalNotification from '@/services/globalNotification.service'
export default {
  name: 'Notification',
  data () {
    return {
      notificationList: []
    }
  },
  computed: {
    hasNotifications () {
      if (this.notificationList === null || this.notificationList.length === 0) {
        return true
      }
      return true
    }
  },
  mounted () {
    globalNotification.getList()
      .then((result) => {
        this.notificationList = result
      })
  }

}
</script>

<style>

</style>
