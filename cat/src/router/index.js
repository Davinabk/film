import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Film from '@/components/Film'
import Cinema from '@/components/Cinema'
import My from '@/components/My'
import Detail from '@/components/Detail'
import OnHot from '@/components/OnHot'
import WillHot from '@/components/WillHot'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/film',
      name: 'Film',
      component: Film,
      children:[
        {
          path: '/',
          component: OnHot
        },
        {
          path: '/onHot',
          name: 'OnHot',
          component: OnHot
        },
        {
          path: '/willHot',
          name: 'WillHot',
          component: WillHot
        }
      ]
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/my',
      name: 'My',
      component: My
      // children:[
      //   {
      //     path: '/',
      //     component: Login
      //   },
      //   {
      //     path: '/login',
      //     name: 'Login',
      //     component: Login
      //   },
      //   {
      //     path: '/register',
      //     name: 'Register',
      //     component:Register
      //   }
      // ]
    },
    {
      path: '/detail:id',
      name: 'Detail',
      component: Detail
    },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component:Register
      }



  ]
})
