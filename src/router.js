import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Onboarding/Splash.vue'
import Splash2 from './views/Onboarding/Splash2.vue'
import Login from './views/Login/Login.vue'
import Signup from './views/Signup/Signup.vue'
import Country from './views/Signup/Country.vue'
import ForgotPin from './views/Login/ForgotPin.vue'
import AgentLogin from './views/Login/AgentLogin.vue'
import ResetPin from './views/Login/ResetPin.vue'
import Landing from './views/Landing/Landing.vue'
import StartInspection from './views/Inspection/StartInspection.vue'
import ContinueInspection from './views/Inspection/ContinueInspection.vue'
import Inspection from './views/Inspection/Inspection.vue'
import Booking from './views/Inspection/Booking.vue'
import History from './views/Inspection/History.vue'
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
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Signup',
          name: 'Signup',
          component: Signup
      },
      {
          path: '/Country',
          name: 'Country',
          component: Country
      },
      {
          path: '/ForgotPin',
          name: 'ForgotPin',
          component: ForgotPin
      },
      {
          path: '/AgentLogin',
          name: 'AgentLogin',
          component: AgentLogin
      },
      {
          path: '/ResetPin',
          name: 'ResetPin',
          component: ResetPin
      },
      {
          path: '/Landing',
          name: 'Landing',
          component: Landing
      },
      {
          path: '/StartInspection',
          name: 'StartInspection',
          component: StartInspection
      },
      {
          path: '/ContinueInspection',
          name: 'ContinueInspection',
          component: ContinueInspection
      },
      {
          path: '/Inspection',
          name: 'Inspection',
          component: Inspection
      },
      {
          path: '/Booking',
          name: 'Booking',
          component: Booking
      },
      {
          path: '/History',
          name: 'History',
          component: History
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
