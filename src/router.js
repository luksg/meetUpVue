import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Score from './views/Score.vue'
import Settings from './views/Settings.vue'
import Vote from './views/Vote.vue'
import { Set } from 'core-js';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
