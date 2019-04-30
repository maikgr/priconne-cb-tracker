import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from 'vue-select'

Vue.config.productionTip = false
Vue.component('v-select2', vSelect)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
