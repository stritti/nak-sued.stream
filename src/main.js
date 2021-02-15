import './plugins/bootstrap-vue'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)

Vue.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
