import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/mine/index'
import Detail from '@/components/detail/detail'

import Personal from '@/components/personal/index'
import Score from '@/components/personal/score'
import Account from '@/components/personal/childrens/account'
import Play from '@/components/personal/childrens/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      children: [{
            path: 'account',
            name: 'account',
            component: Account
        },
        {
            path: 'play',
            name: 'play',
            component: Play
        }
      ]
    },
    {
        path: '/score',
        name: 'score',
        component: Score,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})