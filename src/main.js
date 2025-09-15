import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'
import VueGtag from 'vue-gtag'
import Markdown from 'vue3-markdown-it'
import App from './App.vue'
import router from './router'
import BJumbotron from './components/BJumbotron.vue'

const app = createApp(App)

app.use(createBootstrap())

app.component('BJumbotron', BJumbotron)

// Register Markdown component
app.component('VueMarkdown', Markdown)
app.component('VueSimpleMarkdown', Markdown)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)

app.mount('#app')
