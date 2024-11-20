import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import VueMarkdownRender from 'vue-markdown-render'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVueNext } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(VueMarkdownRender)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
