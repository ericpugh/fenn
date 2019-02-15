import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hunt from './views/Hunt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hunt/:id',
      name: 'hunt',
      component: Hunt
    }
  ]
})
