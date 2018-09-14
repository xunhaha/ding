import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/message'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      children:[
        
      ],
      component: index
    }
  ]
})
