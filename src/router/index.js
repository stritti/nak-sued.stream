import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/anfrage',
    name: 'Request',
    component: () => import(/* webpackChunkName: "request" */ '../views/RequestView.vue')
  },
  {
    path: '/requested',
    name: 'Requested',
    component: () => import(/* webpackChunkName: "request" */ '../views/RequestedView.vue')
  },
  {
    path: '/verzeichnis',
    name: 'Directory',
    component: () => import(/* webpackChunkName: "directory" */ '../views/DirectoryView.vue'),
    props: true
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FaqView.vue')
  },
  {
    path: '/impessum',
    name: 'Imprint',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/ImprintView.vue')
  },
  {
    path: '/datenschutz',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/PrivacyView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/AboutView.vue')
  },
  {
    path: '/:url',
    component: () => import(/* webpackChunkName: "streams" */ '../views/StreamsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
