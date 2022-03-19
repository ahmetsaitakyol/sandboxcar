import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import ListDetail from '../views/ListDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/:id',
    name: 'ListDetail',
    component: ListDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
