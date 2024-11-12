import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import VueGtag from 'vue-gtag'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(createMetaManager())
app.use(VueSimpleMarkdown)
app.use(BootstrapVue3)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)

app.mount('#app')
