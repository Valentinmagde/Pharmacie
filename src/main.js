import Vue from 'vue'

import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.vue'

// Tailwind
import '@/assets/css/main.css'

// Styles: SCSS
import '@/assets/scss/main.scss'

// Styles: CSS
import '@/assets/css/style.css'

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
