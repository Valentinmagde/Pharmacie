import Vue from 'vue'

import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.vue'

// Tailwind
import '@/assets/css/main.css'

// Styles: SCSS
import '@/assets/scss/main.scss'

// Styles: CSS
import '@/assets/css/style.css'

import Vuesax from 'vuesax'

import 'material-icons/iconfont/material-icons.css';
import * as VueGoogleMaps from 'vue2-google-maps'



Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-hTpKRrz98OSNg-FzRcXsXQNezs9F9xk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
})

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

// Vue Router
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data () {
    return {
      messageStr: 'Hello'
    }
  },
  render: h => h(App),
}).$mount('#app')
