import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'
import { BPlaceholder, BPlaceholderWrapper } from 'bootstrap-vue-next'
import VueGtag from 'vue-gtag'
import Markdown from 'vue3-markdown-it'
import App from './App.vue'
import router from './router'
import BJumbotron from './components/BJumbotron.vue'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

// Verwende den Bootstrap-Plugin für globale Komponenten-Registrierung
app.use(createBootstrap())

// Registriere Placeholder-Komponenten manuell
app.component('BPlaceholder', BPlaceholder)
app.component('BPlaceholderWrapper', BPlaceholderWrapper)

// Registriere zusätzliche benutzerdefinierte Komponenten
app.component('BJumbotron', BJumbotron)

// Registriere Markdown-Komponenten
app.component('VueMarkdown', Markdown)
app.component('VueSimpleMarkdown', Markdown)

// Google Analytics
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})

// Router
app.use(router)

// App mounten
app.mount('#app')
