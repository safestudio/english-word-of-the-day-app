import Vue from 'vue'
import Router from 'vue-router'
import Wotd from '@/components/Wotd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wotd',
      component: Wotd
    }
  ]
})
