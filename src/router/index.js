import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/message'
import index from '@/components/index'
import accounts from '@/components/accounts'
import settings from '@/components/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      children:[
        { path: '/message', name: 'message', component: message },
        { path: '/accounts', name: 'accounts', component: accounts },
        { path: '/settings', name: 'settings', component: settings }
      ],
      component: index
    }
  ]
})
