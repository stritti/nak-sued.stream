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
    path: '/hilfe',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "help" */ '../views/Documentation.vue')
  },
  {
    path: '/requested',
    name: 'Requested',
    component: () => import(/* webpackChunkName: "doc" */ '../views/Requested.vue')
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
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
