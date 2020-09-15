import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)
Vue.component("Navbar", require('./components/Navbar.vue').default); // Navgar
Vue.component("Footer", require('./components/Footer.vue').default); // Footer

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')