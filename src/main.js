import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import i18n from '@/i18n/index';
import './icons' // icon
import * as filters from './filters' // global filters
import global from "@/global/global";
Vue.config.productionTip = false

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.global = global
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
