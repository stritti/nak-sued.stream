import { BootstrapVue3 } from 'bootstrap-vue-3'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import '@/assets/scss/custom-vars.scss'

export default {
  install: (app) => {
    app.use(BootstrapVue3)
    app.component('BIconInfoCircle', BIconInfoCircle)
  }
}
