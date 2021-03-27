import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anfrage',
    name: 'Request',
    component: () => import(/* webpackChunkName: "request" */ '../views/Request.vue')
  },
  {
    path: '/requested',
    name: 'Requested',
    component: () => import(/* webpackChunkName: "request" */ '../views/Requested.vue')
  },
  {
    path: '/verzeichnis',
    name: 'Directory',
    component: () => import(/* webpackChunkName: "directory" */ '../views/Directory.vue')
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
    path: '/impessum',
    name: 'Imprint',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  },
  {
    path: '/datenschutz',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Privacy.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/About.vue')
  },
  {
    path: '/:url',
    component: () => import(/* webpackChunkName: "streams" */ '../views/Streams.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
