import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue';
import {GLOBAL_CONFIG} from './config.js';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify, {
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  }
});

Vue.config.productionTip = false;
Vue.prototype.$appConfig = GLOBAL_CONFIG;
window.axios = axios;

if (localStorage.getItem('token')) {
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  store.dispatch('auth/loadUser');
}
console.log(store.getters);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
