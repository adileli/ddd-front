import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue';

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
window.axios = axios;
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    if (store.state.auth.user_is_login) {
      next();
    } else {
      next('/login');
    }
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
