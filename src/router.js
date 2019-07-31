import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Onboarding/Splash.vue'
import Splash2 from './views/Onboarding/Splash2.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
      {
          path: '/Splash2',
          name: 'Splash2',
          component: Splash2
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
