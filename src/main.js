// Libraries.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

// Helpers.
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

// App Data.
import Global from "./plugins/global";

Vue.use(Vuetify, {
  theme: {
    primary: "#3357a3",
    secondary: "#7a92c3",
    accent: "#bb86fc"
  }
})
Vue.use(Global);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

