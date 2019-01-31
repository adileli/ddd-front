import Vue from 'vue'
import Vuex from 'vuex'

import global from './store/global.js'
import auth from './store/auth.js';
import projects from './store/projects.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    auth,
    projects,
  },
})
