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
        <Suspense>
<Markdown :value="item.Message.replaceAll('\\', '')" /></Suspense>
      </b-alert>
    </div>
  </div>
</template>

<script >
import globalNotification from '@/services/globalNotification.service'
import { Markdown } from '@comark/vue'

export default {
  name: 'NotificationList',
  data () {
    return {
      notificationList: []
    }
  },
  computed: {
    hasNotifications () {
      if (this.notificationList === null || this.notificationList.length === 0) {
        return false
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
