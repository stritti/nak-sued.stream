import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import Markdown from 'vue3-markdown-it'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { BButton, BCard, BCardText, BCol, BContainer, BRow, BImg, BNavbar, 
  BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BAlert, 
  BSpinner, BJumbotron } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

// Register Bootstrap Vue components
app.component('BButton', BButton)
app.component('BCard', BCard)
app.component('BCardText', BCardText)
app.component('BCol', BCol)
app.component('BContainer', BContainer)
app.component('BRow', BRow)
app.component('BImg', BImg)
app.component('BNavbar', BNavbar)
app.component('BNavbarBrand', BNavbarBrand)
app.component('BNavbarToggle', BNavbarToggle)
app.component('BNavbarNav', BNavbarNav)
app.component('BNavItem', BNavItem)
app.component('BCollapse', BCollapse)
app.component('BAlert', BAlert)
app.component('BSpinner', BSpinner)
app.component('BJumbotron', BJumbotron)

// Register Markdown component
app.component('VueMarkdown', Markdown)
app.component('VueSimpleMarkdown', Markdown)
app.use(VueGtag, {
  config: { id: 'G-7XBY4YQ68R' }
})
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
