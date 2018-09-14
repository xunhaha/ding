import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import NProgress from 'muse-ui-progress'
import axios from "axios"

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.$axios = axios
NProgress.start()
NProgress.done()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
