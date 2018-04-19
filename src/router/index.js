import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Notice from '@/components/notice'
import About from '@/components/about'
import Join from '@/components/join'
import Signin from '@/components/signin'
import Signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
