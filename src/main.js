import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import Markdown from 'vue3-markdown-it'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.component('VueMarkdown', Markdown)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
