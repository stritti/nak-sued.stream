import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import VueGtag from 'vue-gtag'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(createMetaManager())
app.use(VueSimpleMarkdown)
app.use(BootstrapVue)
app.use(IconsPlugin)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)

app.mount('#app')
