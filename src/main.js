import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-search-select/dist/VueSearchSelect.css'

Vue.config.productionTip = false

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)

import VueCollapse from 'vue2-collapse'

Vue.use(VueCollapse);

import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
// import pollyfill from 'array-from-pollyfill';
// import BadgerAccordion from 'badger-accordion';


import Switches from 'vue-switches';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faAngleDown, faCaretDown, faPen, faCamera, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faAngleDown, faCaretDown, faPen, faCamera, faPhotoVideo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import {TheMask} from 'vue-the-mask'

new Vue({
  router,

    data: function() {
        return {

        };
    },
    components: {
        Switches,
        BadgerAccordion,
        BadgerAccordionItem,
        TheMask
        // pollyfill
    },

  render: h => h(App)
}).$mount('#app')
