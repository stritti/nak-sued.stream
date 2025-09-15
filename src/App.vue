<template>
  <BApp id="app">
    <nav-bar />
    <main class="container content">
      <notification-list />
      <router-view />
    </main>
    <footer-bar />
  </BApp>
</template>

<script>
import BApp from 'bootstrap-vue-next'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import NotificationList from '@/components/notification/NotificationList.vue'

export default {
  components: { NavBar, FooterBar, NotificationList },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'NAK-Sued.stream',
    // all titles will be injected into this template
    titleTemplate: '%s | NAK-Sued.stream'
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
body {
  height: 100%;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.content {
  flex-grow: 1;
  min-height: calc(100vh - 225px);
  height: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.navbar, .content, footer {
  flex-shrink: 0;
}
</style>
