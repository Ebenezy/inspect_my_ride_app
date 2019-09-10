import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Onboarding/Splash.vue'
import Splash2 from './views/Onboarding/Splash2.vue'
import Login from './views/Login/Login.vue'
import Signup from './views/Signup/Signup.vue'
import AddPhoto from './views/Signup/AddPhoto.vue'
import Country from './views/Signup/Country.vue'
import ForgotPin from './views/Login/ForgotPin.vue'
import AgentLogin from './views/Login/AgentLogin.vue'
import ResetPin from './views/Login/ResetPin.vue'
import Landing from './views/Landing/Landing.vue'
import StartInspection from './views/Inspection/StartInspection.vue'
import ContinueInspection from './views/Inspection/ContinueInspection.vue'
import Inspection from './views/Inspection/Inspection.vue'
import Notes from './views/Inspection/Notes.vue'
import General from './views/Inspection/General.vue'
import Finish from './views/Inspection/Finish.vue'
import Booking from './views/Inspection/Booking.vue'
import History from './views/Inspection/History.vue'
import Settings from './views/Settings/Settings.vue'
import ChangePin from './views/Settings/ChangePin.vue'
import Subscription from './views/Settings/Subscription.vue'
import SelectPlan from './views/Settings/SelectPlan.vue'
import Premium from './views/Settings/Premium.vue'
import AddCard from './views/Settings/AddCard.vue'
import AddCardBasic from './views/Settings/AddCardBasic.vue'
import AddCardPro from './views/Settings/AddCardPro.vue'
import RestorePlan from './views/Settings/RestorePlan.vue'
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
          path: '/AddPhoto',
          name: 'AddPhoto',
          component: AddPhoto
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
          path: '/Notes',
          name: 'Notes',
          component: Notes
      },
      {
          path: '/General',
          name: 'General',
          component: General
      },
      {
          path: '/Finish',
          name: 'Finish',
          component: Finish
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
          path: '/Settings',
          name: 'Settings',
          component: Settings
      },
      {
          path: '/ChangePin',
          name: 'ChangePin',
          component: ChangePin
      },
      {
          path: '/Subscription',
          name: 'Subscription',
          component: Subscription
      },
      {
          path: '/SelectPlan',
          name: 'SelectPlan',
          component: SelectPlan
      },
      {
          path: '/Premium',
          name: 'Premium',
          component: Premium
      },
      {
          path: '/AddCard',
          name: 'AddCard',
          component: AddCard
      },
      {
          path: '/AddCardBasic',
          name: 'AddCardBasic',
          component: AddCardBasic
      },
      {
          path: '/AddCardPro',
          name: 'AddCardPro',
          component: AddCardPro
      },
      {
          path: '/RestorePlan',
          name: 'RestorePlan',
          component: RestorePlan
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
