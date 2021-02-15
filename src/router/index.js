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
    component: () => import(/* webpackChunkName: "request" */ '../views/Request.vue')
  },
  {
    path: '/documentation',
    component: () => import(/* webpackChunkName: "doc" */ '../views/Documentation.vue')
  },
  {
    path: '/kontakt',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/impessum',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  },
  {
    path: '/privacy',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Privacy.vue')
  },
  {
    path: '/about',
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
