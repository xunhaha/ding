import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import axios from "axios"

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
